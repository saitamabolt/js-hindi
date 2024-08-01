//immediately invoked function expression  IIFE
// named IIFE - easy bs name laga do 
//unnamed IIFe 
//write 2 IIFE in  file - common mistake  ..... EK IIFE KHTM HONE KE BAAD (; semicolon ) 
//                                              USE KARNA PADTHA H OTHER WISE ERROR AAYEGA





(function test(){
    console.log("connected");

})();

// ()() ..................first for 


//invoke function - jo function immediately execte ho jaye but more imp 
// global scope ke pollution  se dikkat hoti h kai bar , toh  uske vaiables h 


// example arrow function use ho jayega

(  (name)=>{
    console.log(`my name is ${name} rawat`);
})('aryan')
