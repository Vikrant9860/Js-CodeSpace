
const accountId= 242243432;
let accountName  = "Vikrant";
let accountCity = "Pune";
accountHolder = "More"; // can but dont do it always use let or const 

 let accountState ;     // js consider it as the undefined 

console.log(accountId);

// value in the const cant be changed once created we cant modify it 
//accountId = 2     not allowed 
accountName = "More";
accountCity = "Amaravati";
console.table([accountId,accountName,accountCity, accountState]);


//Suppose for understanding

// let c = 24
//  c = 3522;
// let  c = 355; // it will give me error beacuse b is already declared
// cannot be declared inside its scope 