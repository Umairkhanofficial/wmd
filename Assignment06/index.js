"use strict";
//      ----------Excercise No 1 ------------- 
//Installed Node.js, TypeScript and VS Code on your computer.
//      ----------Excercise No 2 -------------
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let userName = "Eric";
console.log(`Hello ${userName}, would you like to learn some TypeScript today?`);
//      ----------Excercise No 3 -------------
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//person name in lowercase
let userName2 = "Eric";
let lowercase = userName2.toLowerCase();
console.log("person name in lowercase =>", lowercase);
//person name in upper case
let uppercase = userName2.toUpperCase();
console.log("person name in upper case =>", uppercase);
//person name in Title case
//      ----------Excercise No 4 -------------
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Ernest Hemingway once said, “As a writer, you should not judge, you should understand.”`);
//      ----------Excercise No 5 -------------
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("");
let famous_person = "Ernest Hemingway";
let message = `once said, “As a writer, you should not judge, you should understand.”`;
console.log(famous_person, message);
console.log();
//      ----------Excercise No 6 -------------
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Stripping Name=> ");
let person_name = "\tAli khan\n";
console.log(person_name);
let stripingOff = person_name.trim();
console.log(stripingOff);
//      ----------Excercise No 7 -------------
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("add,sub,mul,div operations result below");
console.log("add", 4 + 4);
console.log("sub", 12 - 4);
console.log("mul", 4 * 2);
console.log("div", 16 / 2);
//      ----------Excercise No 8 -------------
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line
console.log("-".repeat(20));
console.log(5 + 3);
console.log("-".repeat(20));
console.log();
//      ----------Excercise No 9 -------------
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let FavNum = 7;
console.log(`My favorite Number is ${FavNum} `);
//      ----------Excercise No 10 -------------
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Muhammad Umair Date 9/11/2023 adding the favorite num in variable then print with message!
let FavNum1 = 7;
console.log(`My favorite Number is ${FavNum1} `);
console.log();
//      ----------Excercise No 11 -------------
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
{
    let names = ["UK", "Ben", "KHAN"];
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        console.log(element);
    }
}
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//      ----------Excercise No 12 -------------
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ["UK", "Ben", "Harry"];
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log("Hello! Where are you", element);
}
console.log();
//      ----------Excercise No 13 -------------
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transVehicle = ["Hounda", "Bmx", "Ferrari"];
transVehicle.forEach((vehicle) => {
    console.log(`i would love to ride the ${vehicle}`);
});
//      ----------Excercise No 14 -------------
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = ["Harry", "Adam", "Brooke"];
for (let index = 0; index < guests.length; index++) {
    console.log(`Lets gather around the table MR ${guests[index]} and share a meal together`);
}
console.log();
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//      ----------Excercise No 15 -------------
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${guests[3]} Guest who cant Join the party`);
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log("add new Friend in list to invite");
guests.splice(2, 1, "Zamba");
//• Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < guests.length; index++) {
    console.log(`Alert new Message, Lets gather around the table Mr ${guests[index]} and share a meal together`);
}
console.log("--------------------------------");
//------------------------Excercise No 16 ------------------
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log(`Current guests ${guests}`);
console.log(`Hello Guests we found bigger table, Lets invite 3 more friends And have fun together`);
//• Add one new guest to the beginning of your array.
guests.unshift("Ali");
console.log("New Guest Added", guests);
//• Add one new guest to the middle of your array. 
guests.splice(guests.length / 2, 0, "King ");
console.log("New guest added in middle Seat", guests);
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
guests.push("Lucy");
console.log('Last guest added', guests);
for (let index = 0; index < guests.length; index++) {
    console.log(`Hello ${guests[index]} Lets gather around And have dinner tonight`);
}
console.log("----------------------------------");
//------------------------Excercise No 17 ------------------
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry i can invite only two peoples for dinner ");
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    var delGuest = guests.pop();
    console.log("Sorry", delGuest, ",Cant invite you to the dinner");
}
console.log("Remaining Guests", guests);
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach((guest) => {
    console.log(guest, ",You are still invited");
});
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
console.log("Here we have an empty list", guests);
console.log();
//        -------------Excercise No 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
const locations = ["Berlin", "Tokyo", "Egypt", "Austria"];
//• Print your array in its original order.
console.log("orignal order =>", locations);
//• Print your array in alphabetical order without modifying the actual list.
const alphaOrderList = locations.slice();
alphaOrderList.sort();
console.log("Alphabetical order without modifying actual list", alphaOrderList);
//• Show that your array is still in its original order by printing it.
console.log("Actual list still in orignal order", locations);
//• Print your array in reverse alphabetical order without changing the order of the original list.
const reverseOrder = [...locations];
//.reverse()
reverseOrder.sort((a, b) => b.localeCompare(a));
console.log("Reverse order =>", reverseOrder);
//• Show that your array is still in its original order by printing it again.
console.log("Array still in its original order", locations);
//• Reverse the order of your list. Print the array to show that its order has changed.
locations;
locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse order Real array =>", locations);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
locations;
locations.sort((a, b) => a.localeCompare(b));
console.log("Reverse order to Actual =>", locations);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Array order has been changed", locations);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort((a, b) => b.localeCompare(a));
console.log("its order has changed=>", locations);
console.log("----------------");
//       -------------- Excercise No 19----------------
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`we invited ${guests.length} people for dinner `);
console.log();
//       -------------- Excercise No 20----------------
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const person = {
    firstnane: "king",
    lastname: "khan",
    phone: "92300",
    address: "NtuFsd",
};
console.log(person);
//       -------------- Excercise No 21----------------
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
/*
const guests:string[] =["Harry","Adam","Brooke"]
console.log(`${guests[8]} Guest who cant Join the party`);*/
//       -------------- Excercise No 21----------------
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let bikecolor = "red";
console.log("is background black I predict it is false");
console.log("Result ", bikecolor === "black" || bikecolor === "Black");
console.log("is background white I predict it is true");
console.log("Result ", bikecolor === "red");
console.log("is 7>2 I predict false");
console.log(7 < 2);
console.log("is 1<2 I predict true");
console.log(1 < 2);
console.log("is 5-5===0 I predict true");
console.log(5 - 5 === 0);
console.log("9==9 i predict true");
console.log(3 * 3 == 9);
console.log("i predict is true");
console.log(2 % 2 == 0);
