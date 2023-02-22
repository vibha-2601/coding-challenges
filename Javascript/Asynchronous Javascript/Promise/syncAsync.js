/* Promises are used to handle async operations in js. 

1) Difference between synchronous vs asynchronous code
==========>
/synchronous = code is executed line by line.

/asynchronous = synchronous code is executed first then async. setTimeout() is used to simulate an asynchrnous process.
*/

// Example of synchronous
console.log("Hello");
console.log("Robert");
console.log("Good to see you");

// Example of asynchronous
console.log("Start");// start

const importantAction = (username) => {
    setTimeout(() => {
      return `Subscribe to ${username}`;
    }, 2000)
  }
const message = importantAction("Richard");
console.log(message);//undefined

console.log("Stop");//stop

// o/p => start undefined stop
// we get undefined because setTimeout act as asynchronous, so it will not log into console. so we get undefined. We get output by using callback.
