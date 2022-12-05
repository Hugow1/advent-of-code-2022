const input = require("fs").readFileSync("input.txt", "utf8").split("\n");

// A = ROCK
// B = PAPER
// C = SCISSORS
// X = ROCK 1
// Y = PAPER 2
// Z = SCISSORS 3
// Lose = 0
// Draw = 3
// Win = 6

function calculateScore(input) {
  let score = 0;

  input.forEach((match) => {
    if (match == "A X") {
      // ROCK vs LOOSE
      score += 3;
    }
    if (match == "A Y") {
      // ROCK vs DRAW
      score += 4;
    }
    if (match == "A Z") {
      // ROCK vs WIN
      score += 8;
    }
    if (match == "B X") {
      // PAPER vs LOOSE
      score += 1;
    }
    if (match == "B Y") {
      // PAPER vs DRAW
      score += 5;
    }
    if (match == "B Z") {
      // PAPER vs WIN
      score += 9;
    }
    if (match == "C X") {
      // SCISSORS vs LOOSE
      score += 2;
    }
    if (match == "C Y") {
      // SCISSORS vs DRAW
      score += 6;
    }
    if (match == "C Z") {
      // SCISSORS vs WIN
      score += 7;
    } else {
      ("No match");
    }
  });

  console.log(score);
}

calculateScore(input);
