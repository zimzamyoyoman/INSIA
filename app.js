var express = require("express");
var app = express();

app.set("view engine", "ejs" );

app.get("/", function(req, res) {
    res.render("landing");
});

app.use(express.static("public"));

app.listen(8080, function() {
    console.log("Server is running on PORT 8080!");
});