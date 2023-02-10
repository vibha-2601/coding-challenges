//  Function Scope: The variables declared inside the function cannot accessed from outside of an function.

// const testFn = () => {
//     const myName = "Robert";
// }
// console.log(myName);
// testFn();

// OUTPUT: functionScope.js:6 Uncaught ReferenceError: myName is not defined. BECAUSE IT IS DECLARED OUTSIDE OF FUNCTION.

//////////////////////////////////////////////////

const testFn = () => {
    const myName = "Robert";
    console.log(myName);
}
testFn();

// OUTPUT: Robert