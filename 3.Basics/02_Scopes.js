
 if(true){
let a = 32
 const b = 232;
 var c = 52;
// console.log("Inner : ",a);  //Inner : 32  comma can also be used 
 
 }
//  console.log(a);
//  console.log(b);        // they are block scoped 
 //console.log(c); // 52         here is the main problem with the var 


 // 🔹Remember the concept like Younger Person can ask for icecream to elder person
 // means it is allowed   means child function can access the parent functions objects

 // 🔹But elder person cant ask for icecream to the younger person
 // means the parent class or function cant acess the object from child function  

 function Firstname(){
  const name = "Vikrant"
  
    function Lastname(){
       const  surName = "More"
        console.log(name);  
    }

 //    console.log(surname);  // it will give error because its scope is ended

    Lastname();   // Vikrant 
    
 }
 Firstname();   // its running but we are not printing actually something..

 // lets take for more understanding one example of the if 

   if(true){
     const website = "Youtube"
   if(website  == "Youtube"){
     const chanel = " Vikrant"
     console.log(website + chanel)     // Youtube Vikrant
   }
    // console.log(chanel); // error not acessible here
  }
  //console.log(website); // here also not acessible because the scope ends 


  // ***************** INTERESTING *******************//

 //  🔹 What is Hoisting?
 // -> During the creation phase,
 //JavaScript moves declarations to the top of their scope before executing the code. 


  addOne();                     // we can do this here
  function addOne(num){
    return num+1;
  }
  //  here the js internally sees it like the call is below the function 
  

  myFunction(); // but here we cannot do it because its initialization is done later 
  const  myFunction = function addTw0(num){  
    // here the function expression is stored in the variable
    return num+2;
  }
 
  