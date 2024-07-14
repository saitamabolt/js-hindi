//learning user page information and about const and variable 

const accountId =79999
let accountEmail = "aryan@google.com"
var accountPass = "1212"
accountCity = "jaipur"

//accountId = 78888 //means we can not change const ones it is declared

console.log(accountId);

//to print simultaneously we can use this rather tahn using log many tiumes

console.table([accountId,accountEmail,accountPass,accountCity])

//now  try to modify let , var doees it change??
accountEmail = "aryancool@google.com"
accountPass = "1234"
accountCity = "gwalior"
let accoutState;
//when we decalre smthg wihout value then it shows undeifined
console.table([accountId,accountEmail,accountPass,accountCity,accoutState])
/*
prefer  not to  use var these days 
because  issue of block scope and functional scope
*/
