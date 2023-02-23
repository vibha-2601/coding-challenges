/* callback hell: Nesting of the callback functions made our code messay. It is like a pyramid structure which is also called pyramid dome or callback hell.
There are multiple nested function inside it and it is hard to understand.*/

console.log("Hello");

const message = (username, cb) => {
  setTimeout(() => {
  cb(`Nice to meet you ${username}`);
  }, 2000)
}

const message1 = (video, cb) => {
    setTimeout(() => {
        cb(`subscribe my ${video} video`)
    }, 1000)
}

const message3 = (video, cb) => {
    setTimeout(() => {
        cb(`Like the ${video} video`)
    }, 1000)
}

message("Robert", (action) => {
 console.log(action);
message1("Cooking", (action1) => {
    console.log(action1);
    message3("Cooking", (action) => {
        console.log(action);
    })
})
 })

console.log("Visit again!!!!");