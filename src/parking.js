let parsedData = require("./parse.js");


let parkingData = parsedData("./parking_feb_2016.csv");

// function parkingSearch() {

  function codeFrequency() {
    let rowArray = [];
    parkingData.forEach(function findRow(row) {
      rowArray.push(row[9]);
    });

    let vCodeFreq = {};
    rowArray.forEach(function findFreq(each) {
      if (vCodeFreq[each] >= 1) {
        vCodeFreq[each] = vCodeFreq[each] + 1;
      }
      else {
        vCodeFreq[each] = 1;
      }
// console.log(vCodeFreq);
  });
  console.log(vCodeFreq);

}
// console.log(parkingSearch());
codeFrequency();
