let parsedData = require("./parse.js");

function searchData() {

let movingData = parsedData("./moving_jan_2016.csv");
// console.log(movingData[0]);

// console.log(movingData[0][9]);
//add variable for each final value we're trying to find.
//
let finePaid = 0;
let typeCount = 0;
movingData.forEach(function findRow(row) {
  //index 0 is title, last index is undefined  due to empty line at end of csv file.
  // console.log(row[9]);
  // console.log(row[10]);
  // console.log(row[11]);
  // console.log(row[17]);
  let rowNum = new Number(row[11]);
  console.log(rowNum);
  if (row[9] === "Photo") {

    finePaid = finePaid + rowNum;
    typeCount++;
    console.log(finePaid);
    console.log(typeCount);
  }
});
}

searchData();
