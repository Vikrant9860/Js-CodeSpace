// const obj = new Object()       // {}   just its a singleton object 
// A plain object literal is naturally a singleton
// const config = {
//   theme: "dark",
//   language: "en"
// };

// const a = config;
// const b = config;

// a === b; // true — same object in memory


   const obj = {}     // no difference internally  just this non singleton object 
   // example 
   // Using a class or constructor function
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const user1 = new User("Alice");
// const user2 = new User("Bob");

// user1 === user2; // false — different objects in memory

// console.log(obj);   // same it will give the empty object 

obj.id = "123abc";
obj.name ="Viky";
obj.isLoggedIn = false;
//console.log(obj);

const newObj = {
    name : "Viky",
    fName :{                               // can create a nested object , object inside object 
        firstName : "Purushottam",
        Lastname : {
            lname : "More"
        }
    }
}

console.log(newObj.fName.Lastname.lname);  // this is how you access it 

// optional chaining can be used here above also but not needed here will look it in project 
//   (?.) Optional chaining lets you safely access nested properties 
// without worrying about getting an error if something in the chain is null or undefined.
// const user = null;

// console.log(user?.address?.city); // ✅ undefined (no error)

const o1 = {name : "viky",surname : "More"}
const o2 = {name: "Vikrant",surname : "Patil"}

//const o = Object.assign(o1,o2)        // IMP { name: 'Vikrant', surname: 'Patil' }

const o = Object.assign({},o1,o2)  // -> { name: 'Vikrant', surname: 'Patil' }
// both have the same output but this is  used in production ready codes 


const o4 = {...o1,...o2}             // we do like this and use this more its easy
// [...] → for arrays
// {...} → for objects

console.log(o4);
 
// whenever the data is coming from the database like the array of the objects 
const users = [
     {
        name : "Viky",
        email : "morevikrant1154@gmail.com"
    },
     {
        name : "Ram",
        email : "ram323@gmail.com"
    }
]

console.log(users[1].email);     // ram323@gmail.com    this is how you acess 
console.log(typeof users );       // objects 
// Because in JavaScript, arrays are a special type of object.

console.log(obj);
console.log(Object.keys(obj));   // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(obj));  // [ '123abc', 'Viky', false ]
// we are going to use it alot 
console.log(Object.entries(obj));  
//[ [ 'id', '123abc' ], [ 'name', 'Viky' ], [ 'isLoggedIn', false ] ]
// comparatively its less used   it returns the key value pair in the array of array form


// checkout some more methods of the object by checking on the console 

// De- structuring of the objects 

const student = {
    name : "Viky",
    age : 20,
    course : "BE"
}

const {name,age,course : degree} = student
console.log(name,age);      // this is how we can destructure the object 
// we can also rename them
console.log(degree);      // BE because we renamed the course above as the degree


// 🔹 What is JSON?
//JSON stands for JavaScript Object Notation.
//It is a data format used to store and send data between systems (like between a server and a browser)
//It looks very similar to a JavaScript object, but it is actually just text.

// {
//   "name": "Viky",
//   "age": 20,
//   "isStudent": true
// }                            // its completely right in json the keys are in double quotes 

// 🔹 What is an API?

// API stands for Application Programming Interface.
// API = messenger
// JSON = message format