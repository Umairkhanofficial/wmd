console.log("uk");
//celcius to Farenheit
let temp:number = 36;
let cel_to_fah:number = (temp*9/5)+32;
console.log(`Celcius to Fahrenheit =${cel_to_fah}`);
//Fahrenheit to Celcius
let fah_to_cel:number = (temp-32)*5/9;
console.log(`Fahrenheit to Celcius =${fah_to_cel}`);
console.log("\n");

//percentage calculater
let obtainMarks:number = 833;
let fulMarks:number = 1050;
let marksPercentage = (obtainMarks/fulMarks)* 100;
console.log(`Obtained Marks = ${obtainMarks}`);
console.log(`Total Marks =${fulMarks}`);
console.log(`Percentage =${marksPercentage}`);

// weeks into days
let days:number = 30;
let weeks:number = Math.floor(days/7);
let remainingDays:number = days % 7; 
console.log(`${weeks} weeks ${remainingDays} days`);

//calculate discount
