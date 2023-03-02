// Hoisting is a phenomenon in js by which you can access the variables and functions even before initialize it or without put any value in it.
// "var" is hoisted.
// "let and const" hoisted but in TDZ(temporal dead zone).
// TDZ => Its the time between the declaration and the initialization of let and const variables. Also, it is term to describe the state where variables are in the scope but they are not yet declared.

function abc() {
    console.log(a);//undefined
    
    var a=10;
}
abc();

////////////////////////////////////////////////////////////////////////////////////////

function abc() {
    console.log(a,b,c);

    const c = 30;
    let b = 20;
    var a = 10;
}
abc();

// for let, const gives an error =>  Uncaught ReferenceError: Cannot access 'b' before initialization

///////////////////////////////////////////////////////////////////////////////////////

console.log(count);
console.log(count1);
var count = 2;
let count1 = 1;
////////////////////////////////////////////////////////////////////////////////////////