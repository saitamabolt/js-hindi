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

