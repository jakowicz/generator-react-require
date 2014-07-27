// Dependencies
var jf         = require('jsonfile');
var express    = require("express");
var bodyParser = require('body-parser');

// Config
var filePath = "/Users/simon/sites/Yeoman-React-Bootstrap-Require/server/json/todo.json";

// Start Express app
var app      = express();

// Allow x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Allow cross origin resource sharing (CORS)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// Save a new todo
app.post("/save", function(req, res) {
    if (typeof req.body.description !== "undefined") {

        jf.readFile(filePath, function(err, obj) {
            obj.push({ "description": req.body.description });

            jf.writeFile(filePath, obj);
        });
        res.send("Put your hands in the air");

    } else {
        res.send("Bugger");
    }
});

// Read todo JSON
app.get("/read", function(req, res) {
    jf.readFile(filePath, function(err, obj) {
        res.send(obj);
    });
});

// Set listening port
app.listen(1337);