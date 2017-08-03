var express = require("express");
var pug = require("pug");
var path = require("path");
var config = require("./config.json");

var app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
    var entreeNumber = Math.floor(Math.random() * config.entrees.length);
    var drinkNumber = Math.floor(Math.random() * config.drinks.length);
    var sideNumber = Math.floor(Math.random() * config.sides.length);
    res.render("index", { config: config, entreeNumber: entreeNumber, drinkNumber: drinkNumber, sideNumber: sideNumber });
});
app.get("/directions", function (req, res) {
    res.render("directions", { config: config });
});
app.get("/menu/:page", function (req, res, next) {
    if (!isValidMenuPage(req.params.page)) {
        next();
    }

    res.render(req.params.page, {
        title: capitalizeFirstLetter(req.params.page),
        config: config,
        menu_items: config[req.params.page]
    });
});

app.use(function (req, res, next) {
    res.status(404).send('404, not found');
});

app.listen(3000);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function isValidMenuPage(page) {
    var pages = ["entrees", "sides", "drinks"];

    for(let i = 0; i < pages.length; ++i) {
        if (page == pages[i]) return true;
    }
    return false;
}