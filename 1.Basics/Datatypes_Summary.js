//Based on how they store the data in the memory and
//how they access the data Based on this the datatypes are classified as follows

// 1. #Primitive Datatypes  - 7 types with their examples
 String = "Vikrant"
 Number 
 Boolean
 null  // its empty not 0 , not empty String
 undefined
 Symbol  // to make the variable unique
 const id  = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId)    // false
 
 //we have passed the same value but the answer is false
 // because Symbol makes them unique 
 
 BigInt // very big number or the scientific number
 const bigNumber  = 4434123414124423n 
  // after adding the n it will be consider as the Bigint 


// 2. # Non primitive - Reference 
//return type of this non primtive datatype is an object 
//just the function has  object function return type


// let us understand some basics by examples 
 Array
const heroes = ["Shaktiman","Nagraj","krish"]    // Array
console.log(heroes);

 Object
 // Anything inside the curly braces is object it might be 
 // datatypes inside can be anything like boolean, number, string, etc..
 //  can have object inside also
 
 let myObj = {
    name  : "Viky",
    marritalStatus : "Not Married",
    age : '21'
 }

 // functions can be used like the variable here 
  const myFunction = function(){
  console.log("Hello world !");
 }
  

  console.log(typeof "hello")  // string
  console.log(typeof 232)  // number
  console.log(typeof true)  // boolean
  console.log(typeof 100n)   // Bigint
  console.log(typeof undefined)  // undefined
  console.log(typeof null)    // object
  console.log(typeof Symbol())  // Symbol


  
  console.log(typeof Array)  // function 
  console.log(typeof Object)   // function 
  console.log(typeof function(){})  // function this is not the way to check just did