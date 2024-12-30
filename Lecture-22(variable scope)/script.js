// variable scope = where a variable is recognized/accessible 
//                  (local vs global)


let x = 10; // global variable

function1(x);

function function1 (){
    let x = 100; // local variable
    console.log(x);
}

function function2 (){
    let x = 20; // local variable
    console.log(x);
}
