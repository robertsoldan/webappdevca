const express = require('express');
const app = express();
var comments = require("./model/comments.json"); // allow the app to access the contact.json 
var locations = require("./model/locations.json"); // accessing locations.json 
const fs = require('fs');
const bodyParser = require("body-parser");

// Making sure we have access to all the relevant folders
app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(express.static("images"));
app.use(express.static("public"));
app.use(express.static("partials"));

// Body parser 
app.use(bodyParser.urlencoded({
    extended: true
}));

// Setting the view engine to ejs
app.set('view engine', 'ejs');

// Routing, passing the json vars to the pages so they can be accessed by ejs
app.get('/', function(req, res) {
    res.render("index", {
        locations
    });
});

app.get('/contact', function(req, res) {
    res.render("contact");
});


app.get('/book', function(req, res) {
    res.render("book", {
        locations
    });
});

app.get('/comments', function(req, res) {
    maxId(comments);
    res.render("comments", {
        comments
    });
});



// maxId will return the id by checking the id of the last object in the array and then adding 1 to that. 
function maxId(arr) {
    if (arr.length === 0) {
        return 0; // If the array is empty, just return 0
    } else {
        return arr[arr.length - 1].id + 1; // Grab the id of the last object in the array and add 1 to that
    }
}

app.post('/comments', function(req, res) {

    // The object with the new information to be added to the array
    comment = {
        "id": maxId(comments),
        "location_name": req.body.location,
        "name": req.body.name,
        "email": req.body.email,
        "comment": req.body.comment
    }

    fs.readFile('./model/comments.json', 'utf8', function readfileCallback(err) { // reading and writing the file

        if (err) {
            throw (err);
        } else {
            comments.push(comment); // add the new data to the JSON file
            var json = JSON.stringify(comments, null, 4); // this line structures the JSON so it is easy on the eye
            fs.writeFile('./model/comments.json', json, 'utf8', function() {}) // Write to file 
        }

    });

    // Redirect back to the comments page
    res.redirect('/comments');
});



app.get('/commentsedit/:id', function(req, res) {
    let comment = {};
    comments.forEach(function(item, index) {
        if (item.id.toString() === req.params.id.toString()) {
            comment = item;
        }
    });
    res.render('commentsedit', { comment });
});

app.post('/commentsedit/:id', function(req, res) {
    let comment = {
        "id": req.params.id,
        "location_name": req.body.location,
        "name": req.body.name,
        "email": req.body.email,
        "comment": req.body.comment
    }

    comments.forEach(function(item, index) {
        if (item.id.toString() === req.params.id.toString()) {
            comments[index] = comment;
        }
    });

    fs.readFile('./model/comments.json', 'utf8', function readfileCallback(err) { // reading and writing the file
        if (err) {
            throw (err)
        } else {
            var json = JSON.stringify(comments, null, 4); // this line structures the JSON so it is easy on the eye
            fs.writeFile('./model/comments.json', json, 'utf8', function() {}) // Write to file 
        }
    });

    res.redirect('/comments');
});

// Deleting a comment
app.get('/commentdelete/:id', function(req, res) {
    // Loop through the comments array
    comments.forEach(function(item, index) {
        // If 
        if (item.id.toString() === req.params.id.toString()) {
            comments.splice(index, 1);
        }
    });

    fs.readFile('./model/comments.json', 'utf8', function readfileCallback(err) { // reading and writing the file
        if (err) {
            throw (err)
        } else {
            var json = JSON.stringify(comments, null, 4); // this line structures the JSON so it is easy on the eye
            fs.writeFile('./model/comments.json', json, 'utf8', function() {}) // Write to file 
        }
    });
    // Redirect to the comments page after
    res.redirect('/comments');
});


app.get('/book/:id', function(req, res) {
    let location = {};
    locations.forEach(function(item, index) {
        if (item.id.toString() === req.params.id.toString()) {
            location = item;
        }
    });
    res.render('book', { locations });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));