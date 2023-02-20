/* 1) callback functions: Any function that is passed as an argument to another function is called as callback function in javascript. 

2) Higher order functions: The function which accepts a function as an argument or returns a function is called a higher order function. 

3) why we need callback functions? 
1) synchronous callbacks =======> A callback which is executed immediately is called synchronous callback.

e.g.,
let numbers = [1,2,3,4,5,6,7,8]
numbers.sort((a,b) => a - b)
numbers.map(n => n* 2)
numbers.filter(n => n%2 === 0)

2) Asynchronous callbacks ======> It is a callback that is often used to continue or resume code execution after an asynchronous operation has completed.
callbacks are used to delay the execution of function until a particular time or event has occurred.
Data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately.

4) If we use multiple callbacks then it is a callback hell. An alternative and the recommend approach now is to use Promise. 
*/

function greet(name) {
    console.log(`Hello ${name}`);
}
setTimeout(greet, 2000, "Robert")

// here greet() is callback function and setTimeout() is higher order function.