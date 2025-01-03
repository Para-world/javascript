//forEach() = method used to iterate over the elements of an array
//            and apply a specified funciton (callback)
//            to each element

//            array.forEach(callback)
//            element, index, array are provided


// Example 1

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function triple(element, index, array){
    array[index] = element * 3;
}

function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}


//Exapmle 2

let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}