
module.exports = function parse(fileName) {

let fileSystem = require("fs");
let data = fileSystem.readFileSync(fileName);

let stringValue = data.toString();
let rows = stringValue.split("\n");
// console.log(rows);
let cellGroups = [];

for (i = 0; i < rows.length; i++) {
  cellGroups.push(rows[i].split(","));
};
// console.log(cellGroups);
return cellGroups;
};

module.exports(fileName);
