/* let, const are "block scope variables". These varaiables cannot accessible outside the block {}. */




{
    let a = 30;
    const b = 40;
    console.log(a); // 30
    console.log(b); // 40
}
console.log(a); //error: a not defined.
console.log(b); //error: b not defined.