const marvelHeroes = ["Spiderman","Thor","IronMan"]
const dcHeroes = ["Batman","SuperMan","flash"]

// Array in js can take any type of the data thats why it took Array as a data inside the Array
// marvelHeroes.push(dcHeroes)
console.log(marvelHeroes);  // [ 'Spiderman', 'Thor', 'IronMan', [ 'Batman', 'SuperMan', 'flash' ] ]

//if we want to acess the element in the array then the 3rd element is the Array itself 
// if we want to acess the element in that array then
//console.log(marvelHeroes[3][1]);   // SuperMan
// But we should not do the merge by this way 

marvelHeroes.concat(dcHeroes)   // Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
//console.log(marvelHeroes);       // its  not right because its not doing that properly 
// so we should make a array to store the values 

const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes); // [ 'Spiderman', 'Thor', 'IronMan', 'Batman', 'SuperMan', 'flash' ]

// Best way is Below  
// this is the most common way to do this task

const newHeroes = [...marvelHeroes,...dcHeroes]      // should be three dots 
console.log(newHeroes); // [ 'Spiderman', 'Thor', 'IronMan', 'Batman', 'SuperMan', 'flash' ]

const mixNums = [1,2,3,4,[[5,6,7],8,9]]
// Now we want to make it all in the one array not like this mixed up

const mixPrintN = mixNums.flat(3)   // have to give the depth in the bracket to open it 
// we can also give the Infinity here in the bracket // but prefer to give how much in ex
console.log(mixPrintN); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


console.log(Array.isArray("Vikrant"))  // false  checking its array or not

console.log(Array.from("Vikrant"))  // makes the new  array from the input given
//  like this ['V', 'i', 'k','r', 'a', 'n','t'] 


console.log(Array.from({name : "Vikrant"}));   // []     INTERESTING 
// beacause  here we have to mention we have to make the Array from key or value 


const o1 = 1622
const o2  = 98989
const o3 = 5656
 // if we have to make the Array of this then

 const newArr = Array.of(o1,o2,o3)       //[ 1622, 98989, 5656 ]
 console.log(newArr);
  
console.log(Array.from("123"));   //  make the array of String chars
// [ '1', '2', '3' ]

console.log(Array.of(5));  // [5]

console.log(Array(5));    // [ <5 empty items> ]       beacause Array contain nothing 

console.log(Array.isArray([]));         // true 


 const boys = ["viky","ram","Saurabh","rishi"]
 const girls =["pooja","shravani","Kajal"]

// const friends = boys.concat(girls)
// console.log(friends);

const friends = [...boys,...girls]
console.log(friends);



