// # A function is a reusable block of code that does a specific task.
//  Think of it like a recipe — you write it once, use it many times.

function viky(){                                
console.log("Vikrant More");                        //  Vikrant More
console.log("From Amravati,Maharashtra");          // From Amravati,Maharashtra
}
viky()     
// here above the viky is reference of function and            🔹 IMP
//  if we want to execute then () this is execute 

function addTwoNums(num1,num2){    // when we create the defintion of the funcn the values we pass are Parameters   
    console.log(num1 + num2);       // parameters are actually waiting for the values 
}

addTwoNums(23323,1321)  //24644  if we dont pass the argument it will return the Nan 
// when we are calling the functions then the value we pass are the arguments 
// arguments are the real values given to the parameters 

// if we write like this 

function add(a,b){
    console.log(a +b);      // because here it is console log it only prints doesnt return
}                           // return is different concept we  will see soon
add(2,3)  //5
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

   return `${username} just logged in`             // String interpolation
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

// function myfunction(){
//     let age = 22;
// }
// console.log(age);    // error because scope of the age was till the function block only 

 
function calculateCartValue(...value){   //... rest operator now it will take n arguments
    return value;
}
// console.log(calculateCartValue(230))        // 230
console.log(calculateCartValue(44,343,455,5345));       // [ 44, 343, 455, 5345 ]
// it will add those values in the array


// but if user is adding multiple no of values in the cart then we will use the 
//  🔹 Rest operator (...value)
// (...) this is also the spread operator 
// but it depends on the usecase whether to call it as spread or rest we will see further

// Suppose we did like this 

function addtocart(value1,value2,...num1){
    return num1;
}
console.log(addtocart(240,512,254,545));     // [ 254, 545 ]
// because value1 -240, value2 -512  and we returning only the num1

// Now how to pass a object values to the function

const user  = {
    name : "Viky",
    native : "Amravati",
    age :22
}

function handleUser(anyObject){
    console.log(`Username is ${anyObject.name} , native is ${anyObject.native}
         and his age is ${anyObject.age} `);   
}
//handleUser(user)     // Username is Viky , native is Amravati and his age is 22 

// but the Object we are passing must have keys name , native and age
//   if it was ages in the Object we are passing it would have given their the undefined

// we can also directly pass the object there like without creating it seperately

handleUser({            // if we are passing the object directly inside the method 
    name : "Vikrant", // no need to write the function handleuser , direct write handleuser
    age  : 22,
    native : "Pune"       // Username is Vikrant , native is Pune and his age is 22 
})
        

// How to pass the array in the function 

const newArray = [32,35,323,5334]

function getSecondVal(getArray){
    return getArray[1]; 
}

console.log(getSecondVal(newArray))   // 35
// we can also passs the array direct here also

console.log(getSecondVal([233,200,300])); // 200

// we will see the scope soon 


const More ={
    tech : "java",
    year : 4,
    place  : "Amaravati"
}

// function handleViky(object){
//    return `${object.tech} tech ,${object.year},year studying and place is ${object.place}  `
// }

//console.log(handleViky(More))     // java tech ,4,year studying and place is Amaravati  

 function CalcCartVal(num2,...num1){  // rest operator 
return num2,num1;   // IMP Point
 }      // Comma operator in evaluates both but return only the last value

 console.log(CalcCartVal(2432,232,43,423,67,565)); 
 

 const obj = {
    name : "Vikrant",
    age : 23,
    place : "Amaravti"
 }

 const {name,...details} = obj   // this is how we can destructure it using the rest operator 
 console.log(name);    //Vikrant
 console.log(details);  // { age: 23, place: 'Amaravti' }
 