"use strict";
console.log("uk");
//celcius to Farenheit
var temp = 36;
var cel_to_fah = (temp * 9 / 5) + 32;
console.log(`Celcius to Fahrenheit =${cel_to_fah}`);
//Fahrenheit to Celcius
var fah_to_cel = (temp - 32) * 5 / 9;
console.log(`Fahrenheit to Celcius =${fah_to_cel}`);
console.log("\n");
//percentage calculater
var obtainMarks = 833;
var fulMarks = 1050;
var marksPercentage = (obtainMarks / fulMarks) * 100;
console.log(`Obtained Marks = ${obtainMarks}`);
console.log(`Total Marks =${fulMarks}`);
console.log(`Percentage =${marksPercentage}`);
// weeks into days
let days = 30;
let weeks = Math.floor(days / 7);
let remainingDays = days % 7;
console.log(`${weeks}weeks ${remainingDays}days`);
