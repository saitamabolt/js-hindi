// to declare object we have two ways 1. like literals, 2. like constructor

//singleton (from constructor )
//object.create another method to create object using constructor

//object literals

const myname = Symbol("key1")  ;

const JsUser = {
    name:"aryan",
    "full_name":"Aryan Rawat", // ye wala accese hojayega . dot se and [] bracket se
    "full namee": "saloni rawat", // iska koi chance nhi h dot se access hoga only [ ] with bracket
    age:19,
    location:"gwalior",
    email:"aryan@gmail.com",
    isLoggedIn:false,
    // myname : "key1", //ye symbol ki tarah nhi string ki tarah hoga 
    [myname]:"key1"

}
 
//to access object two ways
//1. using(.)


console.log(JsUser.name),

//2 using ("[ bracket]")

console.log(JsUser["name"]);

//their is no way we can access full name with this --> " . " sign we have to use bracket only
console.log(JsUser.full_name);
console.log(JsUser["full namee"] );// remember this case


 //key ko symbol ki tarah use karo toh sidha sidha nhi hota 
 //we have to write in bracket to use as symbol 
 //example


 console.log( JsUser.myname); //yaha ye symbol ki tarah nhi string ki tarah liya gaya h type of se check kar lo 
// to take as symbol we have to use 
console.log(  JsUser[myname]); //ye symbol ki tarah use ho rah


JsUser.email= "pple.com"
// Object.freeze(JsUser) //to fix value not to changed byanyone 
JsUser.email = "chat@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
console.log(JsUser.greeting); // output function (anonymous)
console.log(JsUser.greeting()) // hello js user

JsUser.greetingTwo = function(){
    console.log(`hello Js user,${this.name }, age- ${this.age}`);
}
console.log(JsUser.greetingTwo());







 