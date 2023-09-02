// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum:number= 0;
for (let index = 1; index <= 5; index++) {
    sum = sum + 2*index;
    
};
console.log("Print of sum",sum);
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array:number[] =[1,2,3,4,5,6,7,8];
for (let index = 0; index < array.length; index++) {
    if (array[index]% 2===0) {
        console.log("Array of Even Numbers ",array[index]);
        
    }
};

//Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array1:number[]=[4,2,3,4,5,6,8];
for (let i = 0; i < array1.length; i++) {

    if (array1[i] % 2==0) {
    array1.splice(i,1)
    i--;
    }
};
console.log(array1);
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
    

function areaCircle(rad:number) {
    let pi:number = 3.14;
    let area:number = pi *(rad*rad);
    let floor:number = Math.floor(area);
    return  floor;
}

let areaOfCircle:number =areaCircle(4);
console.log("Area of Circle",areaOfCircle);
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let array2:number[]=[10,20,30,40,50,70,80,90];
for (let i = 0; i < array2.length; i++) {
    if (array2[i]< 50) {
        array2.splice(i,1)
    i--;
    }   

}
console.log("After removing below fifty",array2);

//Write a program that uses a function to find the largest element in an array of numbers.
let largest:number =0;
function lar(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        
    }
    console.log("largest num",largest);
    
}
let arr:number[]=[33,44,5,66,77,88,99];
lar(arr);

