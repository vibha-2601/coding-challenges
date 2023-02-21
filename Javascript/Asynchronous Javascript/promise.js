/* 1) Promise: A Promise is a proxy for value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

2) What Promise?
-----Promise is a simply an object in javascript.
------A Promise always in one of the three states.
a) pending =====> which is initial state, neither fulfilled nor rejected.
b) fulfilled =====> meaning that the operation completed successfully.
c) rejected =====> meaning that operation failed.

3) Why use Promise?
---------Promises help us deal with asynchronous code in far more simpler way compared to callbacks.
--------Callback hell can be avoided with Promises.
*/

// creating promise
const promise = new Promise();

/*To change its state using resolve and reject functions

// to fulfill or reject the promise. (resolve, reject are functions)
const promise1 = new Promise((resolve, reject) => {

})

// resolve() ======> change the status from pending to fulfilled
const promise3 = new Promise((resolve, reject) => {
    // change the status from pending to fulfilled
    resolve();
})

// reject() ======> change the status from pending to rejected
const promise4 = new Promise((resolve, reject) => {
    // change the status from pending to rejected
    reject();
})
*/

// setTimeout() =======> these function called after asynchronous operation
const promise5 = new Promise((resolve, reject) => {
    // Promise completed
    // change the status from pending to fulfilled
    setTimeout(() => {
        resolve();
    }, 5000)
})

// setTimeout() =======> these function called after asynchronous operation
const promise6 = new Promise((resolve, reject) => {
    // Promise incompleted
    // change the status from pending to rejected
    setTimeout(() => {
        reject();
    }, 5000)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* How to attach callbacks using then and catch function on the promise object

How to execute callback functions based on the status change in promise?

const onFulfillment = () => {
    console.log("set the table to eat tacos");
}

const onRejection = () => {
    console.log("start cooking pasta");
}

ans====> using promise.then() => promise status "pending to fulfilled" then() is executed.
promise.catch() => promise status "pending to rejected" catch() is executed.

const promisee1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 5000)
})

const promisee2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 5000)
})

promise.then(onFullfilled); //this is callback passing another function as an argument
promise.catch(onRejection);//this is callback passing another function as an argument
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Summary for interview
1) Begin by explaining what is promise. Explain in your own words.
2) How promises are used for async operations in js.
3) Give an analogy to a real world scenario and connect it back to js.
4) Talk about three states that promise can be namely pending, fulfilled, rejectd.
5) Talked about function passed in promise constructor function.
6) Talk about resolve and reject functions and how they change state of the promise from pending to fulfilled or pending to rejected.
7) Finally, talked about onFulfillment and onRejection callback functions which let you decide what to run when a promise is fullfilled or rejected. */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1) Promises is chained.

/* 2) Promise - static methods
Promise.all() ======> Query multiple APIs and perform some actions but only after all the APIs have finished loading.

Promise.allSettled() =====> waits for all input promises to complete regardless of whether or not one of them is rejected.
*/