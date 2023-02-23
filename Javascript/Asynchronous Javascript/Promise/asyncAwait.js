/* await/async ======> It best approach when we want promises execute one after other.

------- await ====> It's going to wait until promise returns us a fuldilled or rejected whatever state and then we're going to get the value and provide it to variable. We use await so function is supposed to be an asynchronous function which we can do it by adding "async" keyword.*/

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
            resolve(`Subscribe to ${video} video`);
        }, 1000)
    })
}

const result = async () => {
    try {
        const res1 = await message1("Richard");
        console.log(res1);
        const res2 = await message2("Cooking");
        console.log(res2);
        const res3 = await message3("Cooking");
        console.log(res3)
    }
    catch (error) {
        console.error("Promises failed", error);
        }
}
result();

console.log("visit again");