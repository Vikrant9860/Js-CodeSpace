//String can be represent in the single quote or double it does'nt make any difference in the js 

const name1 =  "Vikrant"
const surName = "More"
console.log(name1 + surName);
//console.log(surName[0]) can do for checking the letter at that index 

// This is very old method in the modern method we dont use it  we use 

// * String Interpolation  
// Here we use the backticks ``
 
console.log(`My full name is ${name1} ${surName}` )   // Very Imp

//This method gives us lot of functions and index no's of the string

// Another type to intialize te string 

const name = new String('Vikrant More')
//when you intialize string by this way in the browser we get following things 

// Methods of strings

// console.log(name[0])
// console.log(name.toUpperCase());
// console.log(name.length);
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('k'))
// console.log(name.includes("More"))  --> true
// console.log(name.split(" ")) --> ['Vikrant','More']
// console.log(name.replace("Vikrant", "Viky")) --> Viky More
// console.log(name.startsWith("Vikrant")) --> true
// console.log(name.endsWith("More"))  true

// console.log(name.slice(0,5))   --> starting from 0 but less than 5 
// In slice if you gave the negative value it will work here 
//if start > end slice returns an empty string 
   const viky  = new String('     Vikrant         ')
// const anotherName = viky.slice(-9,5)
// console.log(anotherName)

 //const newName = viky.substring(2,4)  // till 3 index 4 is not included 
 //console.log(newName);        
 // substring does not support the negative values 
// if start > end it automatically reverse the start and end values  

//console.log(viky);

//console.log(viky.trim())

// to return a new string with whitespace trimmed from just the one end ,

//console.log(viky.trimStart())
//console.log(viky.trimEnd())


const fruit = "Apple"

console.log(`name of the fruit is ${fruit}`)

// ADD SOME REMAINING METHOD BY RUNNING IT ON THE BROWSER CONSOLE 
  






