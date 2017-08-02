var express = require("express");
var pug = require("pug");
var path = require("path");
var config = require("./config.json");

var app = express();


app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/public")));


app.get("/", function(req, res)
{
    var entreeNumber = Math.floor(Math.random() * config.entree.length);
    var drinkNumber = Math.floor(Math.random() * config.nav.length);
    var sideNumber = Math.floor(Math.random() * config.nav.length);
    res.render("index",{config: config, entreeNumber: entreeNumber, drinkNumber: drinkNumber, sideNumber: sideNumber});
});

app.get("/directions", function (req, res) {
    res.render("directions", {config: config});
});

app.get("/menu/:page", function (req, res) {
    res.render(req.params.page,
    {title: req.params.page,
    config: config});
    
});


app.listen(3000);
