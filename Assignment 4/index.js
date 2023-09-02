"use strict";
//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function array(arr, i, v) {
    arr.splice(index, 0, val);
    //console.log(arr);
    return arr;
}
let arr = [2, 3, 46, 78];
let index = 0;
let val = 5;
let modifiedArr = array(arr, index, val);
console.log(modifiedArr);
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let shoppingCart = ["pen", "pencil", "book"];
//Function Adding item to cart
function add(item) {
    shoppingCart.splice(shoppingCart.length, 0, item);
    console.log("item added", shoppingCart);
}
let item = "eraser";
add(item);
// Removing item from cart
function remove(prodcutNo) {
    shoppingCart.splice(prodcutNo, 1);
    console.log("After Deleting the product", shoppingCart);
}
remove(2);
//update quantity
function update(updateIndex, update) {
    shoppingCart.splice(updateIndex, 1, update);
    console.log("Cart updated", shoppingCart);
}
update(1, "sun");
/*- Write a program that uses a while loop to print the first 25 integers.
- Write a program that uses a while loop to print the first 10 even numbers.
- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.*/ 
