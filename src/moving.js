let parsedData = require("./parse.js");

function searchData() {

let movingData = parsedData("./moving_jan_2016.csv");

//add variable for each final value we're trying to find.

let finePaid = 0; //total photo fines paid
let photoCount = 0;
let fineAmt = 0;
let fineCount= 0;
let fineAvg;

movingData.forEach(function findRow(row) {
  let row11Num = new Number(row[11]);
  if (row[9] === "Photo") {
    finePaid = finePaid + row11Num;
    photoCount++;
    // console.log(finePaid);
    // console.log(photoCount);
  }
});

movingData.forEach(function findRow(row) {
  let row10Num = new Number(row[10]);
  if (row10Num >= 0) {
    fineCount++;
    fineAmt = fineAmt + row10Num;
    fineAvg = fineAmt/fineCount;

    console.log(fineCount);
    console.log(row10Num);
    console.log(fineAmt);
    console.log(fineAvg);

  }

});

}

searchData();
