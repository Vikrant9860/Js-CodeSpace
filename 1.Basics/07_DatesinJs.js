 //DATES 
// here we are creating the object of the date 
let date = new Date()
console.log(typeof date);   // object 

console.log(date);   // not understandable 
console.log(date.toString())   // Sun Feb 08 2026 18:35:03 GMT+0530 (India Standard Time)
console.log(date.toDateString())  // Sun Feb 08 2026
console.log(date.toTimeString())  //18:35:56 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()) //  8/2/2026
console.log(date.toISOString());    // 2026-02-08T13:07:15.803Z
console.log(date.toJSON());  //  same as from the ISOString
console.log(date.toLocaleString());  //   8/2/2026, 6:40:27 pm  *  (GOOD AS MY OPINION)
console.log(date.toUTCString()); // Sun, 08 Feb 2026 13:11:34 GMT
console.log(date.toLocaleTimeString());  // 6:42:29 pm     only gives the time


 //  # how to declare a specific date ways are Below
 // the month in js starts from the 0

 let today  = new Date(2026,1,8)
 //console.log(today.toLocaleString()); //  8/2/2026, 12:00:00 am
 // time not specified here so the js sets it to the midnight 

 let today1 = new Date(2026,1,8,17,20)   
// console.log(today1.toLocaleString());  // 8/2/2026, 5:20:00 pm


let today2 = new Date("2026-02-08")   // YY-MM_DD
console.log(today2.toLocaleString());  //8/2/2026, 5:30:00 am

let today3 = new Date("02-08-2026")  // MM-DD-YY
console.log(today3.toLocaleString()); // 2/8/2026, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);           //  1770559451711 miliSeconds

console.log(today3.getTime()); // it also gives some 1770489000000  miliseconds


//  * converted it into Seconds by dividing it by the 1000 it give in points so floor used 
console.log(Math.floor(Date.now()/1000))   // 1770559688


  
let myTimeStamp1 = Date.now()
console.log(myTimeStamp1)



 // Revise the date here also
 //  Vikrant More ... 