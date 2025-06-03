const accountId = 144553
let accountEmail = "sathwik2001@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 //not allowed


accountEmail = "sr22@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])