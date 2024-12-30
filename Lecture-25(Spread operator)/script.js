// spread operator = ...allows an iterable such as an 
//                   array or string to be epanded inot
//                   sperate elements
//                   (unpacks the elements)

// let number = [1,2,3,4,4];
// let maxium = Math.max(...number);
// let minium = Math.min(...number);

// console.log(minium); 


let username = "Deepak kumar";
// let letters = [...username];
let letters = [...username].join('-');
console.log(letters);

let fruits = ['apple','banana','mango'];
let vegetables = ['potato','tomato','onion'];

let newfruits = [...fruits];

let foods = [...fruits,...vegetables, 'rice','bread'];

console.log(foods);
console.log(fruits);
console.log(newfruits);
