
module.exports = function codeFrequency() {
  let parsedData = require("./parse.js");
  let parkingData = parsedData(fileName);

    let rowArray = [];
    parkingData.forEach(function findRow(row) {
      if (parkingData.indexOf(row) === 0 || parkingData.indexOf(row) === parkingData.length-1) {
        return;
      }
      else {
      rowArray.push(row[9]);
    }
    });

    let states = [];
    parkingData.forEach(function findRow(row) {
      if (parkingData.indexOf(row) === 0 || parkingData.indexOf(row) === parkingData.length-1) {
        return;
      }
      else {
      states.push(row[12]);
    }
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
  let freqLength = Object.keys(vCodeFreq);
  let month = "month";
  let year = "year";
  // console.log(freqLength.length);
  // console.log(vCodeFreq);
  console.log("In " + month + " " + year + ", there were " + freqLength.length +
  " different types of parking tickets issued.");

  console.log("The most common violation was " + vCodeFreq + ".");
  console.log("Drivers from " + states + " received the most parking tickets.");


}

module.exports(fileName);
