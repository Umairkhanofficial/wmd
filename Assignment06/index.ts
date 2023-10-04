//      ----------Excercise No 1 ------------- 
//Installed Node.js, TypeScript and VS Code on your computer.
//      ----------Excercise No 2 -------------

//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let userName:string = "Eric";
console.log(`Hello ${userName}, would you like to learn some TypeScript today?`);
//      ----------Excercise No 3 -------------

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//person name in lowercase
let userName2:string = "Eric";
let lowercase = userName2.toLowerCase();
console.log("person name in lowercase =>",lowercase);
//person name in upper case
let uppercase = userName2.toUpperCase();
console.log("person name in upper case =>",uppercase);
//person name in Title case

//      ----------Excercise No 4 -------------

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(`Ernest Hemingway once said, “As a writer, you should not judge, you should understand.”`);
//      ----------Excercise No 5 -------------

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("" );

let famous_person:string ="Ernest Hemingway";
let message:string =`once said, “As a writer, you should not judge, you should understand.”`;
console.log(famous_person,message);
console.log();
//      ----------Excercise No 6 -------------

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Stripping Name=> ");

let person_name:string ="\tAli khan\n";
console.log(person_name);
let stripingOff = person_name.trim();
console.log(stripingOff);
//      ----------Excercise No 7 -------------

//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("add,sub,mul,div operations result below");
console.log("add",4+4);
console.log("sub",12-4);
console.log("mul",4*2);
console.log("div",16/2);
//      ----------Excercise No 8 -------------
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line
console.log("-".repeat(20));
console.log(5+3);
console.log("-".repeat(20));
console.log();
//      ----------Excercise No 9 -------------

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let FavNum:number = 7;
console.log(`My favorite Number is ${FavNum} `);
//      ----------Excercise No 10 -------------

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Muhammad Umair Date 9/11/2023 adding the favorite num in variable then print with message!
let FavNum1:number = 7;
console.log(`My favorite Number is ${FavNum1} `);
console.log();
//      ----------Excercise No 11 -------------

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
{let names:string[] = ["UK","Ben","KHAN"]
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);   
}}
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//      ----------Excercise No 12 -------------
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names:string[] = ["UK","Ben","Harry"]
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log("Hello! Where are you",element);   
}
console.log();
//      ----------Excercise No 13 -------------
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transVehicle:string[]=["Hounda","Bmx","Ferrari"] 
transVehicle.forEach((vehicle) => {
    console.log(`i would love to ride the ${vehicle}`); 
})
//      ----------Excercise No 14 -------------
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests:string[] =["Harry","Adam","Brooke"]
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

guests.splice(2,1,"Zamba")

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
guests.unshift("Ali")
console.log("New Guest Added",guests);
//• Add one new guest to the middle of your array. 
guests.splice(guests.length/2,0,"King ")
console.log("New guest added in middle Seat",guests);
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
guests.push("Lucy")
console.log('Last guest added',guests);

for (let index = 0; index < guests.length; index++) {
    console.log(`Hello ${guests[index]} Lets gather around And have dinner tonight`);    
}
console.log("----------------------------------");
        //------------------------Excercise No 17 ------------------

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry i can invite only two peoples for dinner ");

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length>2) {
   var delGuest = guests.pop()
    console.log("Sorry",delGuest,",Cant invite you to the dinner");
    
}
console.log("Remaining Guests",guests);
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach((guest) => {
    console.log(guest,",You are still invited");    
});
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
console.log("Here we have an empty list",guests);
console.log();


//        -------------Excercise No 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
const locations:string[] =["Berlin","Tokyo","Egypt","Austria"]
//• Print your array in its original order.
console.log("orignal order =>",locations);

//• Print your array in alphabetical order without modifying the actual list.
const alphaOrderList:string[] = locations.slice();
alphaOrderList.sort();
console.log("Alphabetical order without modifying actual list",alphaOrderList);
//• Show that your array is still in its original order by printing it.
console.log("Actual list still in orignal order",locations);
//• Print your array in reverse alphabetical order without changing the order of the original list.
const reverseOrder:string[] = [...locations];
//.reverse()
reverseOrder.sort((a, b) => b.localeCompare(a));
console.log("Reverse order =>",reverseOrder);
 
//• Show that your array is still in its original order by printing it again.
console.log("Array still in its original order",locations);
//• Reverse the order of your list. Print the array to show that its order has changed.
locations;

locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse order Real array =>",locations);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
locations;

locations.sort((a, b) => a.localeCompare(b));
console.log("Reverse order to Actual =>",locations);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Array order has been changed",locations);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort((a, b) => b.localeCompare(a));
console.log("its order has changed=>",locations);
console.log("----------------");
//       -------------- Excercise No 19----------------
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`we invited ${guests.length} people for dinner `);
console.log();
 
//       -------------- Excercise No 20----------------
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const person = {
    firstnane:"king",
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
let bikecolor:string="red";
console.log("is background black I predict it is false")
console.log("Result ", bikecolor==="black"||bikecolor==="Black")
console.log("is background white I predict it is true")
console.log("Result ", bikecolor==="red")

console.log("is 7>2 I predict false")
console.log(7<2)
console.log("is 1<2 I predict true")
console.log(1<2)
console.log("is 5-5===0 I predict true")
console.log(5-5===0)
console.log("9==9 i predict true");
console.log(3*3==9);
console.log("i predict is true");
console.log(2%2==0);

/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
const str: string = "white";
const str1:string = "red";
const notEqual:boolean = str==str1;
console.log("white and red equal? ",notEqual);

const equal:boolean = str!==str1;
console.log(equal);
//test using lower case
var inputStr:string = "Iphone Apple";
var lower = inputStr.toLowerCase();
var isEqual = inputStr===lower;
console.log("lower case is eql to input",isEqual);

//numercial tests
// Numerical tests
const num1: number = 5;
const num2: number = 10;
const isEqualNum: boolean = num1 === num2; // False
const isNotEqualNum: boolean = num1 !== num2; // True
const isGreaterThan: boolean = num1 > num2; // False
const isLessThan: boolean = num1 < num2; // True
const isGreaterOrEqual: boolean = num1 >= num2; // False
const isLessOrEqual: boolean = num1 <= num2; // True

console.log("Equality test (numbers):", isEqualNum);
console.log("Inequality test (numbers):", isNotEqualNum);
console.log("Greater than test:", isGreaterThan);
console.log("Less than test:", isLessThan);
console.log("Greater than or equal test:", isGreaterOrEqual);
console.log("Less than or equal test:", isLessOrEqual);
//and or 
const x: boolean = true;
const y: boolean = false;
const andResult: boolean = x && y; // False (both conditions must be true)
const orResult: boolean = x || y; // True (at least one condition must be true)

console.log("And operator test:", andResult);
console.log("Or operator test:", orResult);

// Test whether an item is in an array
const fruits: string[] = ["apple", "banana", "cherry", "date"];
const isInArray: boolean = fruits.includes("banana"); // True

console.log("Item in array test:", isInArray);

// Test whether an item is not in an array
const isNotInArray: boolean = !fruits.includes("grape"); // True

console.log("Item not in array test:", isNotInArray);
//          --------------Excercise No 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alienColor:string = "green";
if (alienColor == "green") {
    console.log("player just earn 5 points");
    
}
let alienColorPass:string = "red";
if (alienColorPass === "green") {
    console.log("player just earn 5 points");
}
console.log("-----------------------");

//         -------------Excercise No 26-------------
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
let alienColor1:string = "green";
if (alienColor1==="green") {
    console.log("player earned 5 points");
} else {
    console.log("player earned 10 points");
}

let alienColorNotGreen:string = "red";
if (alienColorNotGreen==="green") {
    console.log("player earned 5 points");
} else {
    console.log("player earned 10 points");
}
console.log("-------------");

/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien*/
const colorGreen:string ="green";
if (colorGreen === "green") {
    console.log("player earned 5 points");
}else if (colorGreen === "yellow") {
    console.log("player earned 10 points");
}else if (colorGreen === "red") {
    console.log("player earned 15 points");
}else{
    console.log("unknown color");   
}
console.log();

const coloryellow:string ="yellow";
if (coloryellow === "green") {
    console.log("player earned 5 points");
}else if (coloryellow === "yellow") {
    console.log("player earned 10 points");
}else if (coloryellow === "red") {
    console.log("player earned 15 points");
}else{
    console.log("unknown color");   
}
console.log();

const colorred:string ="red";
if (colorred === "green") {
    console.log("player earned 5 points");
}else if (colorred === "yellow") {
    console.log("player earned 10 points");
}else if (colorred === "red") {
    console.log("player earned 15 points");
}else{
    console.log("unknown color");   
}
console.log();

/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
let personAge:number=65;
if (personAge < 2) {
    console.log("person is baby");
}else if (personAge >= 2 && personAge < 4 ) {
    console.log("person is a toddler");
}else if (personAge >= 4 && personAge < 13) {
    console.log("person is a kid");   
}else if (personAge >= 13 && personAge < 20) {
    console.log("person is a teen");
}else if (personAge >= 20 && personAge < 65) {
    console.log("person is adult");
}else if (personAge >= 65) {
    console.log("person is an elder");
}
//       ----------Excercise No 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Create an array of your favorite fruits
const favorite_fruits: string[] = ["apple", "banana", "strawberry"];
// Check if specific fruits are in the array
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
} else {
    console.log("Kiwi is not one of your favorite fruits.");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
} else {
    console.log("Oranges are not one of your favorite fruits.");
}
//30
console.log("\n ex 30 \n");
const userNames:string[]=["Talha","admin","Iftikhar","Babar"]
userNames.forEach((names=>{
    if (names=="admin"){console.log(`Hello ${names}, would you like to see a status report?`)}
    else {console.log(`Hello ${names}, thank you for logging in again.`);
    }   
}))

//--------------Excercise NO 31------------- 
console.log("\n excercise 31 \n");

userNames.length=0;
if(userNames.length===0)
{
    console.log("We need to find some users!");
    
}

//--------------Excercise NO 32-------------
/*console.log("\n  \n");
const currentUsers: string[] = ["uk","Arif","Ilyas"]
const newUsers: string[] = ["UK", "ARIF", "babar", "Moin"];*/

//33 ordinal number 
 console.log("\n ex 33 \n"); 
 const numArr:number[]=[1,2,3,4,5,6,7,8,9]; 
 const ordinalArr=numArr.map((num)=>{ 
     if(num===1){ 
         return num+"st" 
     } 
     else if (num===2) 
     { return num+"nd"} 
     else if (num===3) 
     {return num+"rd"} 
     else{return num+"th"} 
 }) 
 ordinalArr.forEach((num)=>{ 
     console.log(num); 
  
 } 
 )
//---------34 pizzas ----------
 console.log("\n exercise 34 \n"); 
 const favPizzas:string[]=["special pizza", "Chiken fajita", "Mamamia Classic kabab"] 
 for (const pizza of favPizzas) 
 { 
     console.log(pizza); 
  
 } 
  
 for (const pizza of favPizzas) 
 { 
     console.log(`I like ${pizza} pizza`); 
  
 } 
 console.log(`I like ${favPizzas.length} kinds of pizzas . These all are my favourites`); 
 console.log("I really like pizzas");

//35 Animals 
 console.log("\n ex 35 \n"); 
  
 const animals:string[]=["Dog","Car","Goat"] 
 for (let i=1;i<animals.length;i++) 
 { 
     console.log(animals[i]); 
  
 } 
  
 for (const animal of animals) 
 { 
     console.log(`A ${animal} would make a great pet`); 
  
 } 
 console.log("Any of these animals would make a great pet!");
 //36 shirt function
console.log("\n ex 36 \n");

function make_shirt(size:string,message:string){
    console.log(`The size of shirt is ${size} and "${message}" is printed on it`);
    
}
make_shirt("M","I love code")
//-------38 describe city 
 console.log("\n ex 38 \n"); 
  
 function describe_city(city:string,country:string="pakistan") { 
     console.log(`${city} is in ${country}`); 
 } 
 describe_city("Faisalabad") 
 describe_city("karachi","pak") 
 describe_city("London","England")
//39 city country pair 
 console.log("\n ex 39 \n"); 
 function city_country(city:string,country:string) 
     { 
         return `"${city},${country}"` 
     } 
 console.log(city_country("Faisalabad","Pakistan")); 
 console.log(city_country("Lahore","Pakistan")); 
 console.log(city_country("Ohio","USA"));
//40  --------Album 
 console.log("\n ex 40 \n"); 
 function make_album(_name:string,_title:string,_track?:number){  
     let album:{name:string;title:string;track?:number}={ 
         name:_name, 
         title:_title, 
         track:_track 
     } 
  
 return album 
 } 
 let album1=make_album("Music","New Album") 
 console.log(album1); 
 console.log(make_album("New music 2","New Album 2")); 
 console.log(make_album("New music 3","New Album 3")); 
 console.log(make_album("New music 4","New Album 4",9));
//41 Magicians: prints the name of each magician in the array. 
 console.log("\n ex 41 \n"); 
 const magicianNames:string[]=["Talha","Altaf","Dilawar","Bhatti"] 
 function show_magicians(arr:string[]) 
     { 
         for (const magician of arr) 
         { 
             console.log("magician is ",magician); 
  
         } 
     } 
     show_magicians(magicianNames)

     //43 without changing magician names 
     console.log("\n ex 43 \n"); 
     const magicianNamesOrignal:string[]=["Talha","Altaf","Dilawar","Bhatti"] 
     const greatNames :string[]=[] 
     console.log("Orignal names "+ magicianNamesOrignal); 
  
     function makeGreat_WithoutChanging(arr:string[]){ 
         for (const magician of arr) 
         { 
            greatNames.push("The great "+magician)  
         } 
         return greatNames 
     } 
     console.log( 
     makeGreat_WithoutChanging(magicianNamesOrignal)) 
     console.log("Still orignal "+ greatNames );

    //44 car 
     console.log("\n ex 44 \n"); 
  
     function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]) { 
         const car = { 
             manufacturer:manufacturer, 
             modelName:modelName 
         }; 
         for (const option of options) { 
             Object.assign(car, option); 
         } 
         return car; 
     } 
     const car1 = createCar("Honda", "City", { color: "Silver", year: 2022 }); 
     console.log(car1);