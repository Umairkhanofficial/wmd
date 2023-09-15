"use strict";
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let userName = "Eric";
console.log(`Hello ${userName}, would you like to learn some TypeScript today?`);
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//person name in lowercase
let userName2 = "Eric";
let lowercase = userName2.toLowerCase();
console.log("person name in lowercase =>", lowercase);
//person name in upper case
let uppercase = userName2.toUpperCase();
console.log("person name in upper case =>", uppercase);
//person name in Title case
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Ernest Hemingway once said, “As a writer, you should not judge, you should understand.”`);
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("");
let famous_person = "Ernest Hemingway";
let message = `once said, “As a writer, you should not judge, you should understand.”`;
console.log(famous_person, message);
console.log();
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Stripping Name=> ");
let person_name = "\tAli khan\n";
console.log(person_name);
let stripingOff = person_name.trim();
console.log(stripingOff);
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("add,sub,mul,div operations result below");
console.log("add", 4 + 4);
console.log("sub", 12 - 4);
console.log("mul", 4 * 2);
console.log("div", 16 / 2);
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line
console.log("-".repeat(20));
console.log(5 + 3);
console.log("-".repeat(20));
console.log();
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let FavNum = 7;
console.log(`My favorite Number is ${FavNum} `);
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Muhammad Umair Date 9/11/2023 adding the favorite num in variable then print with message!
let FavNum1 = 7;
console.log(`My favorite Number is ${FavNum1} `);
console.log();
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
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ["UK", "Ben", "Harry"];
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log("Hello! Where are you", element);
}
console.log();
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transVehicle = ["Hounda", "Bmx", "Ferrari"];
transVehicle.forEach((vehicle) => {
    console.log(`i would love to ride the ${vehicle}`);
});
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = ["Harry", "Adam", "Brooke"];
for (let index = 0; index < guests.length; index++) {
    console.log(`Lets gather around the table MR ${guests[index]} and share a meal together`);
}
console.log();
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${guests[2]} Guest who cant Join the party`);
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log("add new Friend in list to invite");
guests.splice(2, 1, "Zamba");
//• Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < guests.length; index++) {
    console.log(`Alert new Message to all Lets gather around the table Mr ${guests[index]} and share a meal together`);
}
