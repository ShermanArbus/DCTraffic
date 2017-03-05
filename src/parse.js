
module.exports = function parse(fileName) {

let fileSystem = require("fs");
let data = fileSystem.readFileSync(fileName);

let stringValue = data.toString();
let rows = stringValue.split("\n");
let cellGroups = [];

for (i = 0; i < rows.length; i++) {
  cellGroups.push(rows[i].split(","));
}
return cellGroups;
};

module.exports(fileName);
