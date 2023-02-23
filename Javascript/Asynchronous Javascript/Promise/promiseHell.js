/* What is Promise ?
======> Promise basically represents the upcoming completion or failure of an asynchronous event and its resulting value. */

console.log("Welcome");

const sub = new Promise((resolve, rejects) => {
 setTimeout(() => {
    const result = true;
    if (result) resolve("Go to the shopping");
    else rejects(new Error("Study"));
 }, 2000)
})

// console.log(sub);//it gives an object with pending and undefined after 2s gives an o/p.

sub.then((res) => {
console.log(res);//"Go to the shopping"
})
.catch((err) => {
console.log(err); // if result is false get the o/p as Error: "Study"
})
console.log("Visit again");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we use Promise to avoid callbacks. But in below by using promises it is also a pyramid like structure then what is difference in callback and promise. It is look like promise hell now. So solution for this is "Promise chaining".

console.log("Start");

const message = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${username}`);
        }, 2000)
    })
}

const message1 = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Not subscribe the ${video} channel`);
        },2000)
    })
}

const message2 = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`subscribe the ${video} channel`);
        },2000)
    })
}
message("Robert").then((res) => {
console.log(res);
message1("cooking").then((res) => {
    console.log(res);
message2("cooking").then((res) => {
        console.log(res);
    })
})
})
.catch((err) => {
    console.log(err);
})

console.log("stop");