  //isko bolte h dstructuring 
  
  const food ={
    fastFood:"pizza, burger , chowmein",
    healthuFood:"salad, geen vegetables",
    frits:"apple,mango",

}
//to access value normally 

console.log(food.fastFood) 

//we have another method to do same thing in neat way

const {healthuFood:hfood} = food //we can change or rename as waeel using colons :

console.log(hfood);