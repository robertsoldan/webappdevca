const express = require('express');
const app = express();
const comments = require("./model/comments.json"); // allow the app to access the contact.json 
const locations = require("./model/locations.json");
const fs = require('fs');
const bodyParser = require("body-parser");


app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(express.static("images"));
app.use(express.static("public"));
app.use(express.static("partials"));
app.use(bodyParser.urlencoded({
   extended: true
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render("index", {
      locations
   });
});

app.get('/contact', function (req, res) {
   res.render("contact");
});


app.get('/book', function (req, res) {
   res.render("book");
});

app.get('/comments', function (req, res) {
   res.render("comments", {
      comments
   });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));