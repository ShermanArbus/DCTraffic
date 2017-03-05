let parse = require("./parse.js");
let moving = require("./moving.js");
let parking = require("./parking.js");

let fileName;
let month;
let year;
let ticketTypeCount;
let vCodeFreq;
let state;
let fineAvg;
let photoPaid;
let finesPaid;





console.log("In " + month + " " + year + ", there were " + ticketTypeCount +
" different types of parking tickets issued.");
console.log("The most common violation was " + vCodeFreq + ".");
console.log("Drivers from " + state + " received the most parking tickets.");
console.log("The most common moving violation was " + ".");
console.log("The average fine issued for moving violations was $" + fineAvg + ".");
console.log("The total income from photo citations was $" + photoPaid + ".");
console.log("The total income for all moving violations was $" + finesPaid + ".");





// For any given year and month of parking data, provide the following analysis:
//
// // How many different types of parking tickets were issued?
// // What was the most common violation type for a parking ticket?
// // What state license plate gets the most tickets?
// For any given year and month of moving violation data, provide the following:
//
// // What was the most common violation type for a moving violation?
// // What is the average fine amount?
// What was the total income from photo citations (tickettype = "Photo")?
// What was the total income from all moving violations?
