// Global scope: scope outside any block or function scope. A global scoped variable is accessible both inside a block or as well as function.
// Globally declared variable will not overwrite block or function scoped variables.

// global
const myNum = 10;
const myName = "Kareena";

// block
if (true) {
     const myName = "Robert";
    console.log(myName); //robert
    console.log(myNum);  //10
}

// function
const testFn = () => {
     const myName = "David";
    console.log(myName); //David
    console.log(myNum);  //10
}
testFn();
console.log(myName); //kareena