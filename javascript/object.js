// to declare object we have two ways 1. like literals, 2. like constructor

//singleton (from constructor )
//object.create another method to create object using constructor

//object literals

const JsUser = {
    name:"aryan",
    "full_name":"Aryan Rawat",
    age:19,
    location:"gwalior",
    email:"aryan@gmail.com",
    isLoggedIn:false,

}
 
//to access object two ways
//1.

console.log(JsUser.name)
console.log(JsUser["name"]);
