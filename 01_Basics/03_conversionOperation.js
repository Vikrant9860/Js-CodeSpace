 
 // 1. # TO NUMBER CONVERSION

  let score = 8989.54  // same answer
 let score2 = "Viky"    // NaN
 let score3 = true      // true => 1 / false => 0
 let score4 = null      // 0
 let score5 = undefined // NaN
 let score6 =" 3223abc  " // NaN

 let valueinNumber = Number(score4) 
  //converting to a number whatever the value is 
 //console.log( typeof valueinNumber)

 //console.log(valueinNumber)     // check if NaN  - Not an number 

 // # 2. TO BOOLEAN CONVERSION
 // ALL WILL BE CONVERTED INTO BOOLEAN
let loggedIn = 1;  // 1 => true , 2 =>false
let loggedIn2 = ""  // false
let loggedIn3 = "Viky"  //  true 
let loggedIn4 = 2344   // true
let loggedIn5 = undefined   // false
let loggedIn6 = null   // false
let loggedIn7 = "viky"  //true

let toBoolean = Boolean(loggedIn7)

//console.log(typeof toBoolean)

//console.log(toBoolean)

//# 3. TO STRING CONVERSION
//ALL ARE CONVERTED TO STRING 

let str = 322   // returns  same number but converted to string datatype
let str2 = false  // true => true  false => false
let str3 = null    // null
let str4 = undefined // undefined
let str5 = "344viky"  // same 

let toString = String(str5)

//console.log(typeof toString)
//console.log(toString)

// ****************OPERATIONS**************//

let value = 33
let negvalue = -value 

//console.log(negvalue) //-33
//console.log(2*3)  //6
//console.log(2**4) // It becomes the power of 2 ,ans => 16
//console.log(2%3) // 2
//console.log(2/3) //0.66666666666666
 
console.log(1+"3") // 13

console.log("1" + 3) // 13

console.log("1" + 2+ 2) //122
// if the string comes first all will be treated as the string

console.log(1 + 2+ "2") //32
// if the number comes first all will be treated as the number

console.log(+true) // 1
console.log(+false) // 0    it will convert but for just knowing or myy learning

let num = 34
num++
console.log(num)  // 35