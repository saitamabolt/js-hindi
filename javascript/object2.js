const tinderUser =new Object()
console.log(tinderUser); //empty object -->{} , singleton object

const tinderuser = {}
console.log(tinderuser); //  same as above , empty object-->{} , but its not singletion object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const snapUser = new Object()
snapUser.id="123ABC"
snapUser.name="rahul"
snapUser.isLoggedIn =false

console.log( snapUser);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object ke anfar object 

const regularUser={
    email : "rawataryan203.com",
    fullName:{
        Fname:"aryan",
        Lname:"rawat",
    }
}
console.log(  regularUser.fullName.Fname);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"b"}

const obj3 ={...obj1,...obj2} //spread 
console.log(  obj3);

//another way to combine two object
// result will be same  anf type same i/e object
// empty {} de dete h just target and source 

const obj4 = Object.assign({},obj1,obj2)
console.log(  obj4);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//values come from data base then 
// in form of array

const users = [
    {
        id:1,
        email:"hp@google.com"

    },
    {
        id:2,
        email:"hp@google.com"

    },
    {
        id:3,
        email:"hp@google.com"

    },
    

]
users[1].id //to extract value from the data base 

console.log(users[1].id);

console.log(snapUser);
console.log(Object.keys(snapUser)); //in form of arrays
console.log(Object.values(snapUser));
console.log(Object.entries(snapUser))




