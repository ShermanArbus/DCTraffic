let fileSystem = require("fs");

function parse() {



let data = fileSystem.readFileSync("./moving_jan_2016.csv");

let stringValue = data.toString();
let cells = stringValue.split("\n");
console.log(cells);

}

parse();
