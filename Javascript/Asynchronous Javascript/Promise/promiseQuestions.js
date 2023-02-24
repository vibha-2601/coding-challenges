// 1) Guess the output

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// })

// promise1.then((res) => {
//     console.log(res);
// })

// console.log("end");

/* o/p ====>
start
1
end
2

js first run synchronous code then asynchronous. resolve is an asynchronous code. asynchronous code is run after synchronous is finished.
*/

///////////////////////////////////////////////////////////////////////////////////////

// 2) Guess the output

// console.log("start");

// const promise2 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })

// promise2.then((res) => {
//     console.log(res);
// })

// console.log("end");

/* o/p =======>
start
1
3
end
2
 */

////////////////////////////////////////////////////////////////////////////////////////

// 3) Guess the output

// console.log("start");

// const promise3 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// } )

// promise3.then((res) => {
//     console.log("Result:"  +res);
// })

// console.log("end");

/* o/p =======>
start
1
3
end

There is no resolve and reject inside promise so it will not got to then block.
 */
////////////////////////////////////////////////////////////////////////////////////////

// 4) Guess the output

// console.log("start");

// const fn = () =>
// new Promise((resolve, reject) => {
//     console.log(1)
//     resolve("success");
// })

// console.log("middle");

// fn().then((res) => {
//     console.log(res);
// })
// console.log("end");

/* o/p ======>
start
middle
1
end
success

fn() is called after "middle", so first "middle" then 1. */

///////////////////////////////////////////////////////////////////////////////////////

// 5) Guess the output ====== promise chaining

// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     })
// }

// let promise = job();

// promise.then(function() {
//     console.log("success 1");
// })
// .then(function() {
//     console.log("success 2");
// })
// .then(function() {
//     console.log("success 3");
// })
// .catch(function() {
//     console.log("error 1");
// })
// .then(function() {
//     console.log("success 4");
// })

 /* o/p ======>
 error 1
 success 4

 bcz it is attached to catch hence success 4 print.
  */

///////////////////////////////////////////////////////////////////////////////////////

// 6) Guess the output ====== promise chaining

// function job (state) {
// return new Promise((resolve, reject) => {
//     if(state) {
//         resolve("success");
//     }
//     else {
//         reject("error");
//     }
// })
// }

// let promisee = job(true);

// promisee
// .then(function (data) {
//     console.log(data);

//     return job(false);
// })
// .catch(function(error) {
// console.log(error);

// return "error caught";
// })
// .then(function(data) {
//     console.log(data);

//     return job(true);
// })
// .catch(function(error) {
//     console.log(error);
// })

/* o/p ======>
sucess
error
error caught 

after error caught "return job(true)" but after that there is no then block there is catch block so it is ended here.*/

////////////////////////////////////////////////////////////////////////////////////////

// 7) Guess the output ====== promise chaining

// function job (state) {
// return new Promise((resolve, reject) => {
//     if(state) {
//         resolve("success");
//     }
//     else {
//         reject("error");
//     }
// })
// }

// let promise1 = job(true);

// promise1
// .then(function (data) {
//     console.log(data);//success
//     return job(true);
// })
// .then(function (data) {                       
//     if (data !== "victory") { //data = success
//     throw "Defect"; 
// }
// return job(true);
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);// defect
//     return job(false);
// })
// .then(function(data) {
//     console.log(data); 
//     return job(true);
// })
// .catch (function (error) {
//     console.log(error); //error
//     return "error caught";
// })
// .then(function (data) {
// console.log(data); // error caught
// return new Error("test"); 
// })
// .then(function (data) {
// console.log("success", data.message);// success ,test
// })
// .catch(function (data) {
//     console.log("error", data.message);
// })

 /* o/p ======>
 success 
 Defect
 error
 error caught
 success test
  */

 //////////////////////////////////////////////////////////////////////////////////////

//  8) create a promise called first promise which will resolve to a text called first and then create another promise called second promise which will resolve our first promise that we had created earlier. 
// we do here is we will resolve our second promise and output of which we have to pass to our first promise and then print the first promise.

const firstPromise = new Promise((resolve, reject) => {
    resolve("First!!!!!");
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
})

secondPromise.then((res) => {
   return res;
})
.then((res) => console.log(res));

///////////////////////////////////////////////////////////////////////////////////////

//  9) Rewrite this example code using 'async/await' instead of '.then/catch'.

// 
// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(response.status);
//         }
//     })
// }

// loadJson("https://abc").catch((err) => console.log(err))

const loadJson = async (url) => {
let response = await fetch(url);

if (response.status === 200) {
    let json = await response.json();
    return json;
}
throw new Error(response.status);
}

loadJson("https://fakeur1.com/no-such-user.json").catch((err) => console.log(err));

////////////////////////////////////////////////////////////////////////////////////////

//  10) solve promise recursively.  create a function called promRecurse which takes promises in form of array and resolve them recursively.

const importantAction = (username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Subscribe to ${username}`);
      }, 1000)
    })
}

const likeVideo = (video) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Like the ${video} video`);
      }, 1000)
    })
}

const shareVideo = (video) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Share the ${video} video`);
      }, 1000)
    })
}

const promRecurse = (funcPromises) => {
 if (funcPromises.length === 0) return;

 const currPromise = funcPromises.shift();

 currPromise
 .then((res) => console.log(res))
 .catch((err) => console.error(err));

 promRecurse(funcPromises); // to call another two promises recursively.
}

promRecurse([
importantAction("Masterchef India"),
likeVideo("Cooking"),
shareVideo("Cooking"),
]);

///////////////////////////////////////////////////////////////////////////////////////

// 11) Promise polyfill implementation