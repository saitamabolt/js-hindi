//dates and time 

//type of date is  object 

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2024,0,17)
let myCreatedDate = new Date(2024,0,17,5,3)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now()) //value comes in mili seconds
console.log(Math.floor(Date.now()/1000)) //by diving date come in second , but it comes with decimal value so used floor to get value or else can use round 


//if we want to extract ay thing from date we can 
let newDAte = new Date()
console.log(newDAte.getDay()); //gives you number not sunday , mond , value in 1,2 3...
console.log(newDAte.getMonth()+1); //gives in ans in  number 
// start from 0 ...months 

//we can customize to loacal string as it take parameter as objects
newDAte.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})