//use of this --- it refer to current context 

const userName ={
    name: "aryan",
    courseprice:999,

    welcomeMessage : function(){
        console.log(`${this.name}, hello and welcome to course`);
    }


}
userName.welcomeMessage() //yaha aryan he h 
userName.name= "ravi",
userName.welcomeMessage() //global curent contect me username ravi bana h
console.log(this); //empty object aayega  node pr but brower me dekhe toh windows aata h 

// important things for this  used inside function

function bila(){
    console.log(this);
}
bila() //bhut sari values aayengi mtlb this me kuch hota toh h 

//now same thing while define something in function
function billa2() {
    let nam ="bhanuuu";
    console.log(this.nam);
    
}
billa2() //umdefined 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // const chai=function () {
// //     let nam ="bhanuuu";
// //     console.log(this.nam);
    
// // }

// chai() //undefined abhi bhi nhi pata isko never read 

//++++++++++++++++++++++++++++++ in arrow function +++++++++++++++++++++++++++++++++++++++++++
const chai = () => {
    let nam ="bhanuuu";
    console.log(this.nam);
    
}
chai() //still undefined 

//+++++++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++++++++

//syntax ()=> {}  or const kuchBhi = ()=> {}

const sum = (value1,value2) => {
    return value1+value2;
}    
console.log(sum(5,6)) //normally sum krdega 

//+++++++++++++++++++++++++++++++++++++++ different way +++++++++++++++++++++++++++++++++++++++++
//now same thing in different way 

const threeSum = (num1,num2,num3)=> num1+num2+num3;
console.log(threeSum(1,2,3));

//+++++++++++++++++++++++++ note +++++++++++++++++++++++++

//  {} curloy bracese melihka toh return lihna padega or () iske andr nhi likhna padega 


const threeSumm = (num1,num2,num3)=> ( num1+num2+num3 ) //useful in react 
console.log(threeSumm(1,2,3));
