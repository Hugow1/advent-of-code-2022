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
      // ROCK vs ROCK
      score += 4;
    }
    if (match == "A Y") {
      // ROCK vs PAPER
      score += 8;
    }
    if (match == "A Z") {
      // ROCK vs SCISSORS
      score += 3;
    }
    if (match == "B X") {
      // PAPER vs ROCK
      score += 1;
    }
    if (match == "B Y") {
      // PAPER vs PAPER
      score += 5;
    }
    if (match == "B Z") {
      // PAPER vs SCISSORS
      score += 9;
    }
    if (match == "C X") {
      // SCISSORS vs ROCK
      score += 7;
    }
    if (match == "C Y") {
      // SCISSORS vs PAPER
      score += 2;
    }
    if (match == "C Z") {
      // SCISSORS vs SCISSORS
      score += 6;
    } else {
      ("No match");
    }
  });

  console.log(score);
}

calculateScore(input);
