var friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5
        ]
    },
    {
        "name": "Jared",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            5,
            4,
            2,
            5
        ]
    },
    {
        "name": "Mischa",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            2,
            5,
            1
        ]
    },
    {
        "name": "Kelly",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            2,
            4,
            5
        ]
    }
];

var defaultScores = new Uint8Array(5);

var differences = [];
var ideal;
function compatibility() {
    function Comaparison(user, friend, difference) {
        this.user = user;
        this.friend = friend;
        this.difference = difference;
    };

    for (i in friends) {

        var friend1 = friends[0];
        // var friend1 = friends[(friends.length - 1)];
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

    }


    differences.sort(function (a, b) {
        var keyA = a.difference,
            keyB = b.difference;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    ideal = differences[0]
    console.log("your match is:", ideal.friend);
}

compatibility()

module.exports = friends;