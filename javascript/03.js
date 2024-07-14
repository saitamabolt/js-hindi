//typecasting or numberconversion

let score = 35 //we know it is number 100% sure 

//but if it came from anywshere so we are not sure 

console.log(typeof score); //clearly its type is number 


score ="33"
console.log(typeof score) // type is string

let InNumber =Number(score) //conversion string --> number 

console.log(typeof  InNumber ) //type number

//but what if we try to change string into number , or null , undefined 

 score="33abc"
let another =Number(score)
console.log(typeof another) // number bol rha h isko but ismea sath me abc bhi h fir bhi number he bolega
console.log(another) //value NAN (not a value)

//goes for if we try to convert
//null to number --> 
score=null
let sigma =Number(score)
console.log(typeof sigma)
console.log( sigma)  //value 0

score=undefined
let beta =Number(score)
console.log( beta) // Nan

score=true
let alpha =Number(score)
console.log( alpha)  //value 1 




