 
 // ********        ARRAYS  ***************// 
 

 // Js Arrays are resizable and can contaim mix of the different datatypes 
 // JavaScript array-copy operations create shallow copies.
 //  (All standard built-in copy operations with any JavaScript objects
 //  create shallow copies, rather than deep copies).

/* SHALLOW COPIES - A shallow copy of an object is a copy whose properties share
  the same references (point to the same underlying values) 
 As a result, when you change either the source or the copy,
  you may also cause the other object to change too. 
 That behavior contrasts with the behavior of a  " DEEP COPY ", 
 in which the source and copy are completely independent. */

 const arr  = [2,3,4,5,true,"Vikrant"]
 const arr1 = ["Vikrant","Viky"]
  
 const myArr  = [1,2,3,4,5,6]
 console.log(myArr[2]);   // 3          indexing of array starts from the 0

 const myArr2 = new Array(1,3,5,7,9)    // use the round bracket here
 

 // METHODS OF ARRAY

myArr.push(7)         // it will push the elment in the array at the last position 
myArr.push(8)  // [ 1, 2, 3, 4, 5, 6, 7, 8]
myArr.pop(8)   // simply last element in the array will be removed 
myArr.pop(7)   // [ 1, 2, 3, 4, 5, 6] here the 7 is the element not the index
 

 myArr.unshift(9) // 9 will be at the starting of the array but this method is not optimized 
 myArr.shift(9)   // it will remove the first element in the array 

 console.log(myArr.includes(9));   // false this method gives the boolean result 
 console.log(myArr.indexOf(9))   // -1 because the 9 is not present in the array -> gives index of el 
 
 const newArr = myArr.join()   //Adds all the elements of an array into a string, separated by the specified separator string.
 // converts the array into the string // by default it seperates the value by comma if not specified
 console.log(newArr);  // 1,2,3,4,5,6    
 console.log(typeof newArr);   // string

 //  But join() lets you choose the separator.
 // toString() always uses comma.

 // Slice  
  
 console.log("A" , myArr);      // A [ 1, 2, 3, 4, 5, 6 ]
 console.log(myArr.slice(1,3))   // [ 2, 3 ]          last index is not included 
 console.log("B", myArr) // B [ 1, 2, 3, 4, 5, 6 ]   not change in org array after slice

 // Splice

 console.log(myArr.splice(1,3));  // [ 2, 3, 4 ]      last element is included here
 console.log("C" , myArr);  //    C [ 1, 5, 6 ]

 // After the Splice operation the Original Array changed but not after Slice 
  // thats the main difference    *Imp
 
 



 
  
 

 
