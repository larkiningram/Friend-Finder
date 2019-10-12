// Dependencies
// =============================================================
// var express = require("express");
// var path = require("path");

var friends = require("../data/friends");

// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.get("/api/friends", function (req, res) {

//     // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//     return res.json(friends);
// });

// app.post("/api/friends", function (req, res) {

//     var newResult = req.body;

//     friends.push(newResult);
//     console.log("added");
//     res.json(newResult);

//     // A POST routes /api/friends. This will be used to handle incoming survey results. 
//     // This route will also be used to handle the compatibility logic.
// });

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {

        friends.push(req.body);
        res.json(true);
    });
  
  };