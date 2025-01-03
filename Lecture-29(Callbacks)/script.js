// callback = a function that is passed as an argument to another function

//             used to handle asynchronous operations:
//             1.Reading a file
//             2. Making a network request
//             3. Handling user input
//             4. Handling events in a GUI application
//             5. Handling errors in a program
//             6. interacting with databases

//              Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed.


// Why Use Callbacks?
// JavaScript is asynchronous,
//  meaning it doesn't wait for operations (like fetching data) to complete before moving to the next task.
//   Callbacks help you handle these operations effectively.

hello(sirname);


function hello(callback){
    console.log("Hello");
    callback();
}

function sirname(){
    console.log("Sirname");
}

function name(){
    console.log("Name");
}

function world(){
    console.log("World");
}






sum(display, 10, 20);

function sum(callback, a, b){
    let result = a + b;
    callback(result);
}

function display(result){
    console.log(result);
}


//Another example

function display(result){
    document.getElementById("myh1").textContent = result;
}



//Synchrnous Callbacks

function saynamsta(name){
    console.log(`Namaste ${name}`);
}

function user(callback){
    const username = "ParaLengend";
    callback(username);  //call the passed function
}

user(saynamsta);



//Asynchronous Callbacks


// How to Use Callbacks
// Write the main function that performs the operation.
// Pass another function as an argument (the callback).
// Call the callback once the main operation is complete.

