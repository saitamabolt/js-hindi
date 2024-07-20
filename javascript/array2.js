const marHero =["spiderman", "thor","ironman"]
const deHero = ["superman","flash","batman"]

// //to join 
// console.log(marHero[deHero]); //undefined
// // first push

// marHero.push(deHero) //dc hero are pushed in marvel hero
// console.log(marHero) // but it added as single element 
// console.log(marHero[3][1]);

// // different method to add or join
// //concatinate
//concat return new array without modifying original
// const allNewHero=marHero.concat(deHero)
// console.log(allNewHero); 
// console.log(typeof allNewHero);  //object

//spread .... better than concat as wemore can added

const all_new_heroes = [...marHero,...deHero]
console.log(all_new_heroes);
console.log(typeof all_new_heroes); //object
console.log(all_new_heroes[5])


const another_array =[1,2,3,[4,5,6],7,[2,3,[4,5,6,[7,8]]]] //can convert it into aingle array
console.log(another_array.flat(Infinity)); //return new single array

 
console.log(Array.isArray("aryan")); //flase
console.log(Array.from("aryan")); //create array 
console.log(Array.from({name:"Aryan"})); //intereseting case 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //use of to convert different elemnet , val into array


