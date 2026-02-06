//Based on how they store the data in the memory and
//how they access the data Based on this the datatypes are classified as follows

// 1. #Primitive Datatypes  - 7 types with their examples

 String
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
  console.log(typeof function(){})  // function object 
// function this is not the way to check just assign a function first then check its 


//*******************x**************//

// * Stack - All the primitive type of the datatype are in the Stack
// In the stack whenever you will take something you will get copy of it 
  
 let myNumber = 9756544432
 let newNumber = myNumber    // beacause its getting the copy of the Mynumber 
 newNumber = 9860444344             // not the actual number .. 

 console.log(newNumber); // 9860444344
 console.log(myNumber);  // 9756544432
 

// * Heap - All the non-primitive type of the datatype goes in the Heap
// In the heap you get the actual reference  

let userOne = {
   userName : "Vikrant",
   adress : "Amravati"
}

let userTwo = {
    userName : "Viky",
    adress : "pune"

}

userOne = userTwo

console.log(userOne);    // userTwo
console.log(userTwo);   // userTwo

//beacause its have referece in the heap memory which changed it that why 
// both the outputs are same