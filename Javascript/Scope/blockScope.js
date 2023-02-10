/* scope: It is bascially determines accessibility and visibility of variables.

1) Block scope: It is introduced in 2015 with the instroduction of let and const keywords. The variables declared inside the pair of curly braces cannot accessed from outside the block. */

if(true) {
    const myName = "David";
}
console.log(myName);

/* OUTPUT: Uncaught ReferenceError: myName is not defined. bECAUSE IT IS NOT INSIDE THE CURLY BRACES*/

if(true) {
    const myName = "David";
    console.log(myName);
}
/* OUTPUT: David */