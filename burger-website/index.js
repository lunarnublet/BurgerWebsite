var express = require("express");
var pug = require("pug");
var path = require("path");

var app = express();


app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/public")));


app.get("/", function(req, res)
{
    res.render("index");
});

app.get("/menu/:page", function (req, res) {
    res.render(req.params.page,
        {title: req.params.page})
    
})


app.listen(3000);
