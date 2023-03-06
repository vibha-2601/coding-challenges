// 1) Function scope - o/p based questions

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000)
// }

// o/p => 0 1 2 3 4 bcz let has block scope so every time loop is runs it creates another block scope for the function. 

// =============================================

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000)
// }

// o/p => 5 5 5 5 5 , bcz var does not have block scope

//////////////////////////////////////////////////////////////////////////////////////////

// 2) Function Hoisting

function functionName() {
    console.log("workattech");
}

functionName();

// o/p =====> workattech

functionName();

//============================================

function functionName() {
    console.log("workattech");
}

// o/p =======> workattech

//=============================================

var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
}

fun();

// o/p ======> undefined 
// when the variable is in the local scope we cannot go to global scope we will always refer to current scope.

//////////////////////////////////////////////////////////////////////////////////////////

// 3) params vs arguments
// when we call the function and value pass inside it is called "arguments".
// when we receive those values inside of our functions this is called "params".

function square(num) { //parameter
    return num*num;
}
square(5);//arguments

//////////////////////////////////////////////////////////////////////////////////////////

// 4) spread vs rest operator = o/p based questions

// The JavaScript "spread operator (...)" allows us to quickly copy all or part of an existing array or object into another array or object. spread will be last one.

// The "rest parameter" syntax allows a function to accept an indefinite number of arguments as an array.
/* syntax: function f(a, b, ...theArgs) {
    ----------
 } */

// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// }

// fn(5,6,3,7);

// o/p ======> Uncaught SyntaxError: Rest parameter must be last formal parameter.

//////////////////////////////////////////////////////////////////////////////////////////

// 5) what is callback function? Explain with example.

//  Any function that is passed as an argument to another function is called as callback function in javascript.
// examples=> map, filter, reduce, setTimeout() 


//////////////////////////////////////////////////////////////////////////////////////////

// 6) Arrow functions?

// syntax ====== const a = (num => num + 2);

//////////////////////////////////////////////////////////////////////////////////////////

// 7) difference between arrow function vs regular function?
/*
1) syntax =
arrow----- const square = (num => num * num);

regular ------ function square(num) {
    return num * num;
}

2) implicit return keyword
arrow ------- one line code we written as const square = (num => num * num);

regular ----- function square(num) {
    return num * num;
}

3)arguments
arrow ------ const fn = () => console.log(arguments);
fn(1,2,3,4,5);

regular ----- function square() {
    console.log(arguments);
}
square(1,2,3,4,5);

4) "this" keyword

in arrow function "this" points to global object.

in regular "this" the current name of object. in below example "user".

let user = {
    username: "Robert",
    rc1: () => {
        console.log(`subscribe to ${this.username}`);
    },

    rc2() {
        console.log(`subscribe to ${this.username}`);
    
    }
}
 user1.rc1();//subscribe to undefined
 user.rc2();//subscribe to Robert
*/

let user = {
    username: "Robert",
    rc1: () => {
        console.log(`subscribe to ${this.username}`);
    },

    rc2() {
        console.log(`subscribe to ${this.username}`);
    
    }
}
 user.rc1();//subscribe to undefined
 user.rc2();//subscribe to Robert

 ////////////////////////////////////////////////////////////////////////////////////////