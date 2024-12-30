// array = a variable like structure that can hold
//         more than one value at a time




// let fruits = ["apple","orange", "banana","guava"];

// fruits[0] = "mango";
// fruits.push("grapes");

// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");


let fruits = ["apple","orange", "banana","guava"];
// for(let i = 0; i < fruits.length; i++){
// for(let i = fruits.length-1; i >= 0; i--){
//     console.log(fruits[i]);
// }

fruits.sort();
fruits.reverse();
fruits.sort().reverse();
fruits.splice(1,2);
fruits.splice(1,2,"mango","grapes"); //splice is used to add or remove elements from an array
fruits.slice(1,3); //slice is used to copy elements from an array

for(let fruit of fruits){      //for of loop is used to iterate over the values of an array
    console.log(fruit);
}






