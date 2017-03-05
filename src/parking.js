let parsedData = require("./parse.js");


let parkingData = parsedData("./parking_feb_2016.csv");

function codeFrequency() {
    let rowArray = [];
    parkingData.forEach(function findRow(row) {
      // rowArray.push(row[9]); *****DON'T GET RID OF THIS *******
      rowArray.push(row[12]); //<----state frequency*******
    });

    let vCodeFreq = {};
    rowArray.forEach(function findFreq(each) {
      if (vCodeFreq[each] >= 1) {
        vCodeFreq[each] = vCodeFreq[each] + 1;
      }
      else {
        vCodeFreq[each] = 1;
      }
  });
  console.log(vCodeFreq);
}

codeFrequency();
