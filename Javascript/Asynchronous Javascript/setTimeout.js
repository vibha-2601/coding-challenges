// Methods to run the code asynchronously:
// 1] setTimeout()   2] setInterval()

/* setTimeout() function executes a particluar block of code once after a specified time has elapsed.

syntax: 
setTimeout(function, duration, param1, param2,....)
 
a] function =====> The first parameter is a function to run or a reference to a function defined elsewhere.

b] duration =====> The second parameter is a number representing the duration in millisecond to wait before executing the code.

c] After second parameter, you can pass zero or more values that represent any parameters you want to pass to the function when it is run.

e.g.
1] function greet() {
    console.log('Hello');
}

setTimeout(greet, 2000);

o/p =======> log to the console 'Hello' after 2seconds.

2] function greet(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greet, 2000, "Robert")

o/p ======> log to the console 'Hello Robert' after 2 seconds.

/////////////////////////////////////////////////////

clearTimeout() =======> to clear Timeout we use clearTimeout() method passing in the identifier returned by setTimeout as a parameter.

e.g.

function greet(name) {
    console.log(`Hello ${name}`)
}

const timeoutId = setTimeout(greet, 2000, "Robert");
clearTimeout(timeoutId);

o/p ======> Nothing log to the console after 2seconds.
*/

////////////////////////////////////////////

function sum(a,b) {
    console.log(a+b);
}

const set = setTimeout(sum, 5000, 10, 12);
clearTimeout(set);

////////////////////////////////////////////