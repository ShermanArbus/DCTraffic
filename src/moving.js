let parsedData = require("./parse.js");

function searchData() {

let movingData = parsedData("./moving_jan_2016.csv");
// console.log(movingData[0]);

// console.log(movingData[0][9]);

movingData.forEach(function functionName(row) {
  console.log(row[9]);
  console.log(row[10]);
  console.log(row[11]);
})
}

searchData();
