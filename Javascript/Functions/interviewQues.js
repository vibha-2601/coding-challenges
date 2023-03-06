// 1) What is function declaration?

function square (num){
    return num * num;
}
console.log(square(3));

// we can also called as function defination and function statement.

// ============================================

// 2) What is function expression?

// we can store the function inside of a variable is called function expression.  

const cube = function (num) {
    return num * num * num;
}
console.log(cube(2));

// ============================================


// 3) what is anonymous function?

// the function without name is called anonymous function. It is assigned to variable or can be passed as callback.

// function (num) {
//     return num * num * num;
// }
// console.log(cube(2));

// ===========================================

// 4) what are first class functions?

// in a language where a functions can be treated like a variable their functions are called as first class functions.
//     in this cases functions can passed to another functions can be used, manipulated and returned from those functions and basically everything that a variable can do, so this is why we call functions as first class function in js.

const squaree = (num) => {
    return num * num;
}

const displaySquare = (fn) => {
    console.log(`The square is ${fn}`);
}
displaySquare(squaree(5));

// =============================================


// 5) what is IIFE?

// Immediately Invoked Function Expression.

(function add(num) {
    console.log(num + 2);
})(5);


// =============================================

// 6) Function scope

// global scope
var num1 = 20;
num2 = 3;
name = "Robert";

function multiply() {
    return num1 * num2;
}

console.log(multiply());// 60

// nested function example
function getScore() {
    var num1 = 2;
    num2 = 3;

    function add() {
        return `${name} scored ${(num1 + num2)}`;
    }
    return add();
}
console.log(getScore());// Robert scored 5


// =============================================
