let parsedData = require("./parse.js");

function searchData() {



let parkingData = parsedData("./parking_feb_2016.csv");

let vCodes;

parkingData.forEach(function findRow(row) {
  console.log(row[9], row[10]);
  console.log(row[12]);


});







}
searchData();
