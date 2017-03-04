let parsedData = require("./parse.js");

function searchData() {



let parkingData = parsedData("./parking_feb_2016.csv");

let codeSearch;
let vCodeFreq = [];

parkingData.forEach(function findRow(row) {
  if (row.indexOf(row[9]) === -1) {
    console.log(row);
    vCodeFreq.push(row[9], 1);
    //this needs to be put into an array of objects - so new Object?
  } else {
  }
// console.log(vCodeFreq);


});







}
searchData();
