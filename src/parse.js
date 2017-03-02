let fileSystem = require("fs");
let data = fileSystem.readFileSync("./simpleData/moving_jan_2016.csv");
let stringValue = data.toString();
let cells = stringValue.split(",");
console.log(cells);
