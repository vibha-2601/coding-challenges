//Ques1 = How var, let, const variable declared?

var a;
var a;
// we can redeclared "var" many times in same scope.

let b;
// let b;
//gives an error because we cannot redeclared "let" variable with same scope.

const c=1;
// const c;
//gives an error because we cannot redeclared "const" variable with same scope.

///////////////////////////////////////////////////////////////////////////////////////

//Ques2 = Declaration without initalization

var a; //not give an error.

let a; //not give an error.

// const a; gives an error without intialize value to it.
const a = 20;

////////////////////////////////////////////////////////////////////////////////////////

//Ques3 = RE-intialization

var a = 12;
a = 14;
// with "var" we can do it.

let d = 20;
d = 25;
// with "let" we can do it.

const e = 5;
e = 8;
// we cannot do with "const". Error: Assignment to constant variable.

////////////////////////////////////////////////////////////////////////////////////////