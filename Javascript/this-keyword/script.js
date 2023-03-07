// 1) explain "this keyword"? (Implicit binding)
// "this" keyword is used to reference something like an object.

// Normal functions: Here "this" points to immediate parent object.

let user = {
    name: "Richard",
    age: 26,
    childObj: {
        myName: "Diana",
        getDetails() {
            console.log(this.myName, this.name);// Diana undefined
        }
    }
}
user.childObj.getDetails();

// Arrow function: In here "this" pointing to "window object". If arrow function is nested inside "normal function" then it is pointing to the "object".

let user1 = {
    name1: "Rocky",
    age: 25,
     getDetails1: () => {console.log(this.name1);
     },
    }
user1.getDetails1();//undefined

// by using the "normal function" as parent of "arrow function".
let user2 = {
    name: "Mohit",
    age: 34,
    getDetails2() {
        const nestedArrow = () => console.log(this.name);
        nestedArrow(); 
    }
}
user2.getDetails2();//Mohit


// how "this" is performen in "class" and "constructor".

class user3 {
constructor(n) {
    this.name = n;
}

getName() {
    console.log(this.name);//Taniya
}
}
const User = new user3("Taniya");
User.getName();
