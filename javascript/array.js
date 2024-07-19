//array 
//javascript array are resizable 
//javascript array can inculde different data types 
//array in javascript ....shallow copy  jo cahnge hoga original array me change hoga 
//deep copy 


//different ways to declaare arrays

const myArr =[0,1,2,3]
const myHeros = ["spiderman", "batman"]
const myArr2 = new Array(1,2,3,4,5)

//array methods

myArr.push(6) //to add
myArr.pop() //to remove last element  dont give any parameter
myArr.unshift(4) //element add in start of array 

const newArr = myArr.join()
console.log(myArr) //[4,0,1,2,3]
console.log(newArr); //4,0,1,2,3

//join convert it into string and seperate wit commans
console.log(typeof myArr) //object 
console.log(typeof newArr) //string

//slice . splice
//slcie te array from range given not include last element
// splice it also slice in same way and also included last inxed and most imp it manuplulate array as the spliced part is  removed 
