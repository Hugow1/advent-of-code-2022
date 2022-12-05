const input = require("fs").readFileSync("input.txt", "utf8").split("\n");

function getHighestValue(input) {
  let maxCal = 0;
  let calories = 0;
  input.forEach((line) => {
    if (line !== "") {
      calories += parseInt(line);
    } else {
      if (calories > maxCal) {
        maxCal = calories;
      }
      calories = 0;
    }
  });
  console.log(maxCal);
}

getHighestValue(input);
