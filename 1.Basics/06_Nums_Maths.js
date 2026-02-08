 const num = 34
 //console.log(num)            // here it will print the num but 
                          // we want to give explicitely the number then we use following 
 let nums= new Number(100)
//console.log(nums)        // [Number : 100]

// so we can use the methods for number here 
 
//console.log(nums.toString().length)  // 3
//console.log(nums.toString(2))  // converts to the binary
//console.log(typeof nums)  // object because it return the new string it does not modify it

//if we did like this 

nums = nums.toString()
//console.log(typeof nums)   // now it will give the string output because we assigned it now

const balance = new Number(500)

//console.log(balance.toFixed(2))   // 500.00  we fixed here the precision by 2 after point 
//control digits after the points
// return a string not a number 

const newNum = new Number(232.4673)

// console.log(newNum.toPrecision(4))  // 232.5
// console.log(newNum.toPrecision(2))  // 2.3e+2
// return a string not a number
// control total significant digits  means total meaningful digits -not just after the decimal

const hundreds = 100000000;
//console.log(hundreds.toLocaleString('en-In'))    // 10,00,00,000
  // it directly add commas to number accrn to the indian system
  
  //    we can also use the methods like
//   Number.MAX_VALUE
//   Number.MIN_VALUE
//   Number.MAX_SAFE_INTEGER
//   Number.MIN_SAFE_INTEGER

 const Str = "12.32pdsd";
// console.log(Number.parseInt(Str))  // converts number to string 12

// console.log(Number.parseFloat(Str))  // 12.32
// console.log(Number.isInteger(Str))  // false check its integer or not



// +++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++//

console.log(Math);
// Math itself is an object 

// console.log(Math.abs(-1))  -->  1
// console.log(Math.round(22323.323))  -> 22323
// console.log(Math.floor(32.3)) -> 32
// console.log(Math.ceil(32.3)) -> 33
// console.log(Math.max(3,42,43445,1));  -> 43445
// console.log(Math.min(32,2331,24,34,2.332)); -> 2.332

console.log(Math.random()); // Value will always lie betn 0 and 1 and value can be 0 also
// like value come 0.323 or 0.332322 so we multiplied by 10
console.log(Math.random() *10 ); 
// but if value like 0.0322  came then mult by 10 will not work therfore we add one there
console.log((Math.random() * 10) +1) 
// but this get value with the precision therefore we use floor to ger min round value 
console.log(Math.floor((Math.random() *10)+1))   // we get one value 
// this gives value betn the 1 and 10

// but if we want values betn max and min and they are given then we do like below

let max = 20
let min = 30
console.log(Math.floor((Math.random() * (max- min + 1 )) + min ))  

// so what we did here we want value betn 10 and 20 REMEMBER THE FORMULA (max - min +1) for range 
// but we want values min 20 and more therefore we have added the min there 