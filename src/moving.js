
module.exports = function searchData() {
  let parsedData = require("./parse.js");


let movingData = parsedData(fileName);

//add variable for each final value we're trying to find.

let photoPaid = 0; //total photo fines paid
let photoCount = 0;
let fineAmt = 0;
let fineCount= 0;
let finePaid = 0;
let fineAvg;

movingData.forEach(function findRow(row) {
  let row11Num = new Number(row[11]);
  if (row[9] === "Photo") {
    photoPaid = photoPaid + row11Num;
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

    // console.log(fineCount);
    // console.log(row10Num);
    // console.log(fineAmt);
    // console.log(fineAvg);

  }

  console.log("The most common moving violation was " + fineCount + ".");
  console.log("The average fine issued for moving violations was $" + fineAvg + ".");
  console.log("The total income from photo citations was $" + photoPaid + ".");
  console.log("The total income for all moving violations was $" + finePaid + ".");


});

}

module.exports(fileName);
