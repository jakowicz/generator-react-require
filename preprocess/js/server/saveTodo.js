var jf         = require('jsonfile');
var express    = require("express");
var bodyParser = require('body-parser');

var filePath = "/Users/simon/sites/Yeoman-React-Bootstrap-Require/www/js/server/json/todo.json";
var app      = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function(req, res) {
    
    if (typeof req.body.description !== "undefined") {

        jf.readFile(filePath, function(err, obj) {
            obj.push({ "description": req.body.description });

            jf.writeFile(filePath, obj, function(err) {
                console.log(err);
            });
        });
        res.send("Put your hands in the air");

    } else {
        res.send("Bugger");
    }
});

app.get("/json", function(req, res) {

    jf.readFile(filePath, function(err, obj) {
        var returnData = obj;
    });

    return returnData;
});


app.listen(1337);