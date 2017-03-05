let argv = require('process-argv')(month, year);



function trafficStats(month, year) {
  let fileNameP = "./parking_" + month + "_" + year + ".csv";
  let fileNameM = "./moving_" + month + "_" + year + ".csv";

let parse = require("./parse.js");
let moving = require("./moving.js");
let parking = require("./parking.js");


parse(fileNameP);
parse(fileNameM);
parking(fileNameP);
moving(fileNameM);

}

trafficStats();
