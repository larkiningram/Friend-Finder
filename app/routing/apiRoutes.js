var friends = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    friends.push(req.body);
    var ideal;
    var defaultScores = new Uint8Array(5);
    var differences = [];

    function compatibility() {

      function Comaparison(user, friend, difference) {
        this.user = user;
        this.friend = friend;
        this.difference = difference;
      };

      for (i in friends) {
        var you = parseInt(friends.length) - 1;
        var friend1 = friends[you];
        var friend2 = friends[i];
        var totalDifference = 0;

        for (j in defaultScores) {
          var dif = Math.abs(friend1.scores[j] - friend2.scores[j]);
          totalDifference += dif;
        }

        if (friend1.name !== friend2.name) {
          var comp = new Comaparison(friend1.name, friend2.name, totalDifference);
          differences.push(comp);
        }
      };

      differences.sort(function (a, b) {
        var keyA = a.difference,
          keyB = b.difference;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      ideal = differences[0];
      // display(ideal)
      // console.log(ideal);
      return ideal;
    };
    compatibility();
    var bff = ideal;
    console.log(bff)
    res.json(bff);
  });

};


