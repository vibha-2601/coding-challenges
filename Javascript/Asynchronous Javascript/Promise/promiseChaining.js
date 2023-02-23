/* Promise chaining: The solution for "Promise hell" is "Promise chaining".

Why we call promising chaining?
 =====> because we are chaing the promises, we are returning the promises and then we are chaining another promise one after other as we return the value for previous promise. This is called promise chaining.*/

 console.log("Hello");

 const message1 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Welcome ${username}`);
        }, 1000)
    })
 }

 const message2 = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${video} video`);
        }, 1000)
    })
 }

 const message3 = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Thanks for subscribing ${video} video`);
        }, 1000)
    })
 }

 message1("Richard")
 .then((res) => {
    console.log(res);
    return message2("cooking");
 })
 .then((res) => {
    console.log(res);
    return message3("cooking")
 })
 .then((res) => {
    console.log(res);
 })
 .catch((err) => {
    console.log(err);
 })
 
 console.log("Visit again");