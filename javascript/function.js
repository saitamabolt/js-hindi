//function in js
// let num3;

// function sumOfNumbersnum1(num1,num2){
 
//         num3=num1+num2
//         console.log(num3);
       
// }
// sumOfNumbersnum1(3,undefined

// )
// console.log(typeof num3);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function with objects and arrays 

// function calulatePrices(numbers) {
//     console.log(numbers);

    
// }
// calulatePrices(200,300,500) //output 200 ...................rest number nhi leta 

// //for same to include every number we can doo

// function calulatePrices(...numbers) {
//     console.log(numbers); // give in form of array 
//     return numbers
//     // ...numbers yaha isko bolte h rest operator ya iska name spread operator bhi hota h



    
// }
// calulatePrices(200,300,500)

// const myArray =[200,300,500]
// function testing(anyarray){
//     console.log(`second element of array is ${myArray[1]}`);
    


// }
// testing(myArray)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myNewArray = [200,300,500]
function returnSecondValue(getarray){
    return getarray[1]
}
// returnSecondValue(myNewArray) //jab print nhi karaya toh kuch kese milega
console.log(returnSecondValue(myNewArray)); //300 
console.log(returnSecondValue([200,300,400])); //direct kar sakthe h bina variable me dalke



