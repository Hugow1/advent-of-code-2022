const input = require("fs").readFileSync("input.txt", "utf8").split("\n");

function getHighestValue(input) {
  let maxCal = 0;
  let calories = 0;
  let elveNumber = 0;
  let calsPerElve = [];
  let firstThreeElvesCombined = 0;
  input.forEach((line) => {
    if (line !== "") {
      calories += parseInt(line);
    } else {
      calsPerElve.push([elveNumber, calories]);
      elveNumber++;
      calories = 0;
    }
  });
  calsPerElve.sort((a, b) => b[1] - a[1]);
  firstThreeElvesCombined =
    calsPerElve[0][1] + calsPerElve[1][1] + calsPerElve[2][1];
  console.log(firstThreeElvesCombined);
}

getHighestValue(input);
