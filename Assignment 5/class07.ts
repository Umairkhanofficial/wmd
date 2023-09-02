
//Write a program that uses filter to remove all negative numbers from an array of numbers

let array:number [] =[1,4,5,-5,-2]
let updatedArray =array.filter((data)=>{
 if (data >  0) {
    return true;   
 }
})
console.log("remove all negative numbers from an array of numbers",updatedArray);

//Given an array of numbers [1, 2, 3, 4, 5], 
//use the map method to create a new array where each number is multiplied by 2.
let array1:number[] =[1, 2, 3, 4, 5];
let updatedArray1 = array1.map((data)=>{
    let mul:number= 2*data;
    return mul;
})
console.log("new array where each number is multiplied by 2",updatedArray1);





//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let arrayStr:string[]=["apple", "banana", "cherry", "date", "grape"];
let updatedStr = arrayStr.filter((data)=>{
    if (data.length > 5) {
        return true;
    }
})
console.log("fruits with more than 5 characters.",updatedStr);


//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let array2:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updatedArray2 = array2.filter((data)=>{
    if (data % 2 ===0) {
        return true;
    }
    
})
let sqr =updatedArray2.map((data)=>{
    return data*data;

   })
console.log("square of even num",sqr);

//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let tempArray:number[]=[0, 10, 20, 30, 40];
let tempToCel= tempArray.map((data)=>{
    return  (data * 9/5) + 32
})
console.log("temprature conversion Fahrenheit to celcius",tempToCel);

//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let array3:number[]=[3, 6, 9, 12, 15, 18];
let oddArray = array3.filter((data)=>{
    if (data % 2 != 0) {
        return true;
    }
})
let doubleArray=oddArray.map((data)=>{
    return data *2;
})
console.log("odd array",doubleArray);
/*Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!". */
let array4:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
array4.forEach((data)=>{
    console.log(data ,"!");
    
})