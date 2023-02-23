/*Promise combinator = "Promise chaining is also lanely process" so we have super easy process which is "Promise combinator".

------ Promise combinators helps us to execute more than one promise at one time and then return the result accordingly.
 
------ Four typpes of promise combinator:
1) promise.all =========> It helps us to do is, so let's say if we have provided multiple promises to promises.all it's gonna run all of the promises in parallel and in the end's it will return array with all of the fullfilled promises. If one of the promise is fail then it's gonna fail complete promise.all. 

2) promise.race =========> It's syntax like promise.all. but it returns the first promise that gets fulfilled or rejected

3) promise.allsettled ======> It's syntax like promise.all. It works exactly like promise.all but even if any one of the promises fail it's gonna return all of the promises that are failed as well as fullfilled.

4) promise.any =======> It's exactly like promise.race but it only return first fullfilled promise and ignores all the rejected. If all promises failed it gives an error.
*/

console.log("Start");

const message1 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${username}`);
        }, 1000)
    })
} 

const message2 = (hobby) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${hobby} is my favourite hobby`);
        }, 1000)
    })
} 

const message3 = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Subscribe to ${video} video`);
        }, 1000)
    })
} 

Promise.any([message1("Richard"),
message2("Cooking"),
message3("Cooking"),
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error("Error: Promise failed", err);
})

console.log("Stop");
