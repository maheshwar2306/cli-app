var r = require("readline-sync");
let score = 0;
let question = [
  {
    q: "where is college located?",
    a: "tirupati",
  }
  , {
    q: "lover's spot in college?",
    a: "footpath",
  },
  {
    q: "which branch is the winner of circket tournament?",
    a: "ece",
  }
]
function greeting() {
  var name = r.question("whats your name?");
  greet = "welcome " + name;
  console.log(greet)
}
function game() {
  for (var i = 0; i < question.length; i++) {
    var currentQuestion = question[i]
    var sol = r.question(currentQuestion.q);
    if (sol == currentQuestion.a) {
      score = score + 1;
      console.log("correct");
    }
    else {
      console.log("wrong");
      console.log("correct answer is :" + currentQuestion.a);
    }
    console.log("------------------------------------")
  }
}
greeting();
game();
console.log("final score:" + score);