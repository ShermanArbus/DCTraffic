let fileSystem = require("fs");

module.exports = function parse() {



let data = fileSystem.readFileSync("./moving_jan_2016.csv");

let stringValue = data.toString();
let rows = stringValue.split("\n");
// console.log(rows);
let cellGroups = [];

for (i = 0; i < rows.length; i++) {
  cellGroups.push(rows[i].split(","));
};
// console.log(cellGroups);

};

module.exports();
