/* setInterval() =====> 1) The setInterval() function repeatedly runs the same code over and over again at regular intervals.
2) Intervals keep running a task forever so you should clear the interval when appropriate using clearInterval().



syntax:
setInterval(function, duration, param1, param2,.......)

a] function =====> is a code to execute.
b] duration ======> duration in millisecond.
3] After second parameter, you can pass zero or more values that represent any parameters you want to pass to the function when it is run.

e.g.

1] function greet() {
    console.log('Hello')
}

setTimeInterval(greet, 2000)

o/p =====> logs 'Hello' every 2seconds.

2] function greet(name) {
    console.log(`Hello ${name}`);
}

const intervalId = setInterval(greet, 2000, "Robert");
clearInterval(intervalId);
    */

function sum1 (a1, b1) {
  console.log(a1 + b1);
}
 const result1 = setInterval(sum1, 2000, 10, 20);
 clearInterval(result1);

 ///////////////////////////////////////////