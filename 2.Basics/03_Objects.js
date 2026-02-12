// There are two ways to create the object 

//1.   like constructor
Object.create  //here the the object is singleton 

// 2.Object literals 

 // Object is the collection of key value pair 
 // we can write anything in the object as Number,string,array,Object,boolean 

 const mySym = Symbol("Key1")

const  jsUser = {
    name : "Vikrant",   // behind the screen its considered as "name" string but we dont write here it consider itself 
    age : 21,
    [mySym] : "Key1",
    location : "Pune",
    email :"Vikrant@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"],
    adress : {
        place : "Amravati",
        country : "India"
    }
}

// How to acess the Object 

console.log(jsUser.name);  //Vikrant  but mostly <- is used 
console.log(jsUser["name"])  // Vikrant        
console.log(jsUser["adress"]);     // { place: 'Amravati', country: 'India' }
console.log(typeof jsUser.name);  // String


// If interviewer asked create an Symbol and use it as key  in the object 
// we have intialized above 
// const mySym = Symbol("Key1")       // this is how we create an Symbol , its a datatype
// if we added in object like
// mySym : "Key1"   it will not give an error but if you checked its type
// console.log(typeof jsUser.mySym);  //  string   but we want to use it as Symbol then
// add in the object like thi syntax
// [mySym] : "Key1"

console.log(jsUser[mySym]);  // Key1
console.log(typeof mySym);     // symbol       now dont use the brakcet here 

// How to override the object   means simply change the values
jsUser.name = "Viky"         // changed directly 

// How to lock the object son that no chnages should be made to it 
//Object.freeze(jsUser)
jsUser.name = "Vikrant"     // it will not give you an error but 
                         // values in the object will not change


// we added a function as a property to the object:
//Now our object has a method called greeting.

jsUser.greeting = function(){
    console.log("Hii Viky");  
}

// now we wnat to  reference the name in the object  i.e String interpolation
jsUser.greeting2 = function(){
console.log(`Hii jsUser , ${this.name}`);  // when we want to reference the same object use this  
} 

//we  are NOT calling the function.
// we are just printing the function itself. that why output is like this 
console.log(jsUser.greeting);   // [Function (anonymous)]

// Now you are calling the function because of ().
console.log(jsUser.greeting());  // Hii Viky   
// its returning the  undefined if we dont want then remove the console.log   // undefined

console.log(jsUser.greeting2());






