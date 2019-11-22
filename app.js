const express = require('express');
const app = express();
const contact = require("./model/contact.json"); // allow the app to access the contact.json 
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
   res.render("index");
});

app.get('/contacts', function (req, res) {
   res.render("contacts", {
      contact
   });
});



app.get('/add', function (req, res) {
   res.render("add");
});

app.get('/products', function (req, res) {
   res.render("products");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));