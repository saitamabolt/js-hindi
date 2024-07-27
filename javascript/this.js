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


