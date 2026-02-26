// # A function is a reusable block of code that does a specific task.
//  Think of it like a recipe — you write it once, use it many times.

function viky(){
console.log("Vikrant More");
console.log("From Amravati,Maharashtra");
}

viky()
// here above the viky is reference of function and            🔹 IMP
//  if we want to execute then () this is execute 

function addTwoNums(num1,num2){    // when we create the defintion of the funcn the values we pass are Parameters   
    console.log(num1 + num2);
}

addTwoNums(23323,1321)  //24644  if we dont pass the argument it will return the Nan 
// when we are calling the functions then the value we pass are the arguments 

// if we write like this 

function add(a,b){
    console.log(a +b);      // because here it is console log it only prints doesnt return
}                           // return is different concept we  will see soon
const ans = add(5,3)
console.log("answer is : " , ans); // answer is :  undefined

function addition(num1, num2){
    // let result = (num1 + num2);
    // return result;
    // console.log("Viky");  // its unreachable code function wil not do any work after return
    
    return num1+num2     // Can do directly like this 
}   

const result = addition(3,5)
console.log("Result is :" , result);   // Result is : 9



function userLoginMessage(username = "Viky"){        // = "Viky" default value 
 
    if(username === undefined){  // if(!username){          can also write like this 

        console.log("Please enter the username");

        return                 // so that it will not execute the below things 
    }

   return `${username} just logged in`
}
// userLoginMessage("Vikrant")           🔹 nothing will print
console.log(userLoginMessage("Viky"));   // Viky just logged in

console.log(userLoginMessage());         // undefined just logged in
// if we want to user to enter the username then we are using the if command
// after using the if  below will be the result if the username is not entered
// Please enter the username  
// undefined

 // we can also give the default value in thee functions parameter 
 // function userLoginMessage(username = "Viky"){
 // if user entered the username default username will be override and if not then Viky will printed

function myfunction(){
    let age = 22;
}
console.log(age);    // error because scope of the age was till the function block only 

 