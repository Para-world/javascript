//rest parameters = (...rest) allow a function work with an vaiable
//                  number of arguments by bundling then into an array

//                  spread = expands an array into spereate elements
//                   rest = condenses spereate elements into an array

// Example of rest parameters

function fridge(...items){
    console.log(items);
}

function getfood(...items){
    return items;
}
const food1 = 'pizza';
const food2 = 'burger';
const food3 = 'salad';
const food4 = 'ice cream';
fridge(food1, food2, food3, food4);


const items = getfood(food1, food2, food3, food4);
console.log(items);

function sum(...nums){
    let result = 0;
    for(let num of nums){
        result += num;
    }
    return result;
}

const total = sum(10, 20, 30, 40, 50);
console.log(`your total is ${total}`);


function getaverage(...nums){
    let result = 0;
    for(let num of nums){
        result += num;
    }
    return result / nums.length;
}

const average = getaverage(10, 20, 30, 40, 50);
console.log(`your average is ${average}`);

function combinestring(...strings){
    return strings.join(" ");
}

const fullname = combinestring ("Mr.", "singh", "rawat", "chauhan");
console.log(fullname);

