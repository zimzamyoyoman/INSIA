var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.post("/requestdemo", function (req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var company = req.body.company;
    var workphone = req.body.workphone;
    var jobrole = req.body.jobrole;

    res.status(204).send();
    
});

app.post("/callback", function (req, res) {
    var name = req.body.tname;
    var number = req.body.number;

    res.status(204).send();

});

app.use(express.static("public"));

app.listen(8080, function () {
    console.log("Server is running on PORT 8080!");
});