// Nested Function Scope: The variable has access to the inner scope as well as outer scope.

// Lexical scoping: which describes how js resolves variable names when functions are nested when  we have nested functions js variable lookup starts with the innermost function where we are trying to access the variable and move outwards until it reaches the global scope.

let a = 10;
const outer = () => {
    let b = 20;
    const inner = () => {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();

/* OUTPUT: IN ABOVE EXAMPLE WE DECLARED VARIABLE "a" IN GLOBAL SCOPE AND VARIABLE "b" IN FUNCTION SCOPE AND VARIABLE "c" IN FUNCTION INSIDE THE OUTER FUNCTION. 
 LET'S UNDERSTAND O/P BY JS ENGINE POINT OF VIEW.
 JS FIRST CHECK IF "a" IS DEFINED IN "INNER FUNCTION SCOPE". IT IS NOT THEN IT GOES ONE LEVEL UP AND CHECK IN "OUTER FUNCTION SCOPE", IT'S NOT THERE THEN IT GOES ONE LEVEL UP AND GOES TO "GLOBAL SCOPE". IT IS PRESENT IN GLOBAL SCOPE AND PRINT 10 AS O/P IN CONSOLE.  */