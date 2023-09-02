//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function array(arr:number[],i:number,v:number){
     
        arr.splice(index,0,val)
        //console.log(arr);
        return arr   
}

let arr:number[]=[2,3,46,78]
let index:number=0;
let val:number=5;
let modifiedArr:number[] = array(arr,index,val);
console.log(modifiedArr);


// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let shoppingCart:string[]=["pen","pencil","book"];
//Function Adding item to cart
function add(item:string) {
        shoppingCart.splice(shoppingCart.length,0,item)
        console.log("item added",shoppingCart)
}
let item:string="eraser";
add(item);
// Removing item from cart
 
function remove(prodcutNo:number){
    shoppingCart.splice(prodcutNo,1)
    console.log("After Deleting the product",shoppingCart);
    
}
remove(2);

//update quantity
function update(updateIndex:number,update:string){
    shoppingCart.splice(updateIndex,1,update);
    console.log("Cart updated",shoppingCart);
}

update(1,"sun")

// Write a program that uses a while loop to print the first 10 even numbers.
let j:number=1;
while (j<=10)
{
    console.log(j*2);
    j++
}
console.log("new program start");
 console.log("");

 //- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 let num:number=5;
 let factorial:number=1;
 let fac = (num:number)=>{
    if (num>0)
    {
        let i:number=1;
        while(i<=num)
        {
            factorial=factorial*i
            i++;
        }
        console.log(`Factorial of ${num} is ${factorial}`);
        

    }
    else 
    {console.log("Number is negative or zero");
    }
 }
 fac(num)

 console.log("new program start");

 //Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let array4 : number[]=[-1,-2,1,2,3,4,-5,6,7,-8]
console.log("Orignal Array ", array4);

for (let i=0 ; i<=array4.length; i++)
{
if (array4[i]<0){
array4.splice(i,1)
i--
}
else {i++}
}
console.log("After removing negative numbers ", array4);



 //Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let array5:number[]=[1,2,3,4,5,-5]
 function sumOfall(arr:number[])
{
    let sum:number=0
    let i :number=0;
    while (i<arr.length) {
        sum=sum+arr[i];
        i++
    }
    return sum;
}
console.log("Array = " , array5);
console.log("Sum of all elements in array ",sumOfall(array5));

 


 // Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let cTemp:number[]=[0,10,20,30]
let fahrenheitTemp:number[]=[];
let k:number=0;
while (k<cTemp.length)
{
fahrenheitTemp.push((cTemp[k] * 9/5) + 32);
k++
}
console.log("temperatures in celcius ", cTemp);

console.log("Temperatures in fahrenheit ", fahrenheitTemp);


 