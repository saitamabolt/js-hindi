const lang=["eng","hindi","arabic","japanese"]

// lang.forEach( function (items) {
//     console.log(items);
    
    
// })
// +++++++++++++++++++++++++++++++++++++++++ USING ARROW FUNCTION 

 const name=["ravi","suresh","mahesh","rajesh","katu"]

// name.forEach( (values) => {
//     console.log(values);
    
// })

// ++++++++++++++++++++++++++++++++++++++++++ USIGNG FUNCION REFERENCE ++++++++++++++++++++++++

// function toPrint(names){
//     console.log(names);
    
// }
// lang.forEach(toPrint) //only need to write function no need to excute by writing toPrint() like

// name.forEach((toPrint,index,Array)=>{
//     console.log(toPrint,index,Array);
    
// })

const myCoding=[
    { 
        name:"javascript",
        type:"js"

    },
    { 
        name:"java",
        type:"java"

    },
    { 
        name:"python",
        type:"py"

    }
]
myCoding.forEach( (items)=>{
    console.log(items.name)
})

// USING FOREACH  WE CAN ACCESS OBEJCT ISIDE ARRAY 