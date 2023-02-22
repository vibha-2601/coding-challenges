console.log("Welcome");//welcome

const importantAction = (username, cb) => {
    setTimeout(() => {
      cb (`Subscribe to ${username}`);
    }, 2000)
}

const message = importantAction("Robert", (message) => {
console.log(message);//   after 2s Subscriber to Robert
});

console.log("Nice to meet you");//   Nice to meet you

// o/p =>    Welcome 
        //   Nice to meet you
        //   after 2s Subscriber to Robert