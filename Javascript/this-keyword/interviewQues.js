// // what's o/p ?
// // 1) in below the "this" points to "user object" not the "function getName() itself."
// const user = {
//     firstName: "Karan",
//     getName() {
//         const firstName = "Karan Khurana";
//         return this.firstName;
//     }
// }

// console.log(user.getName());//Karan

// ///////////////////////////////////////////////////////////////////////////////////////

// // 2) what is the result of accessing its ref? why? how to fix it?

// function makeUser1() {
//     return {
//         name: "John",
//         ref: this,
//     }
// }

// let user2 = makeUser1();

// console.log(user2.ref.name);//empty

// // In the above example, user2 = {name: "John", ref: window}.
// // by accessing user2.ref.name, when we calling "makeUser" pointing to parent object is the window object. "window object" does not have "name" hence we get nothing as o/p.

// // we fix it by using normal function.

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     }
// }
// let user3 = makeUser();

// console.log(user3.ref().name); //John

// ////////////////////////////////////////////////////////////////////////////////////////

// // 3) o/p and how fix it?
// const user4 = {
//     name: "Robert Richard",
//     logMessage() {
//         console.log(this.name);//empty
//     }
// }
// setTimeout(user4.logMessage,1000);

// // here "user4.logMessage" as a callback rather than a method. so whole function is copied in setTimeout. It has no access to "user4" object. so it has access to "window object" and it has nothing as "name".

// // fix it
// const user5 = {
//     name: "Robert Richard",
//      logMessage1() {
//         console.log(this.name);//Robert Richard
//     }
// }
// setTimeout(function() {
//      user5.logMessage1();
//     },1000)

//     ////////////////////////////////////////////////////////////////////////////////

//     // 4) o/p
//     const res = {
//         name: "Rashi",
//         greet() {
//             return `Hello, ${this.name}!`;
//         },
//         farewell: () => {
//             return `Goodbye, ${this.name}!`;
//         }
//     }

//     console.log(res.greet());//Hello, Rashi!
//     console.log(res.farewell());//Goodbye, undefined!

//     ////////////////////////////////////////////////////////////////////////////////

//     // 5) create an object calaculator

// // let calculator = {
//     //....... your code ......
// // }

// // calculator.read();
// // console.log(calculator.sum());
// // console.log(calculator.mul());

// // solution:
// let calculator = {
//     read() {
//         this.a = +prompt("a =", 0);
//         this.b = +prompt("b =", 0);
//     },
    
//     sum() {
//         return this.a + this.b;
//     },

//     multiply() {
//         return this.a * this.b;
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

///////////////////////////////////////////////////////////////////////////////////////

// 6) o/p?
var length = 4;

function callback() {
    console.log(this.length); //what the o/p=4
}

const object = {
    length: 5,
    method(fn) {
        fn();
    }
}

object.method(callback);
// here, "method(fn)" refers to the object, but while calling the function inside "method fn()" is not pointing to object. so it is pointing to "global object". hence output is 4.

//============================================

// 7) arguments is an object that is accessible inside functions that contain the values of the arguments passed to that function. "arguments.length" is a property of arguments. It calculate the arguments that passed to the function.
var length = 4;

function callback1() {
    console.log(this.length); //what the o/p=3
}

const object1 = {
    length: 5,
    method() { //arguments =[callback, 2, 3]
        arguments[0]();
    }
}

object1.method(callback1, 2, 3);
////////////////////////////////////////////////////////////////////////////////////////

// 8) implement calc.
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(calc.total);

// solution:
const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    subtract(a) {
        this.total -= a;
        return this;
    },
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(calc.total);//30

////////////////////////////////////////////////////////////////////////////////////////

