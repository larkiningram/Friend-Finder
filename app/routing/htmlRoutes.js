// Dependencies
// =============================================================
// var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================

module.exports = function(app) {
    app.get("/", function (req, res) {

        // A default, catch-all route that leads to home.html which displays the home page.\
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function (req, res) {
    
        // A GET Route to /survey which should display the survey page.
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
