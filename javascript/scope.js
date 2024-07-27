let a=200
const b= 400
var c= 500

if(true){
    let a=299
    const b= 399
    var c= 499 

    
}
    // console.log("a:",a); //200 from outside
    // console.log("b:",b); //400 from outside
    // console.log("c:",c); // becoz of var 499 from latest updated


    // function one(){
    //     const name = "Aryan"

    //     function two(){
    //       let website : "youtube";
    //         console.log(name);
    //     }
    //     console.log(marks);
    //     console.log(website);
    //     two()


    // }
    // one()

let num;
function addone(value)   {
    num =  value+1;
    return  num

}
console.log("addone:",addone(3));

function addTwo(num){
    return num+2;

}
console.log("addTwo:",addTwo(3));

function addAll(value){
    num = value+1;
   
         const another = function another(num){
            num = num+2;
            return num;
    
        }

    }

    

console.log(addAll(3));


// writing style of functio n

function simple(value){
    return value;

}

simple(3)

// another way

const addTwo = function(value){
    return value+2;
}

addTwo(3)

//  normal function declare karne se pehele sccess ho jayega 
// but second method se kare toh declartion se pehel nhi chlata