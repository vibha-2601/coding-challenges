// 1) Lexical scope

//global scope
function subscribe() {
    var name = "Robert";
    //inner scope 2
    function displayName() {
        // inner scope 1
        console.log(name);//Robert
    }
    displayName();
}

subscribe();

//============================================

// 2)
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);//Mozilla
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//===========================================
// Closure scope chain means it's going to have the access to its outer scope as well and scope of its parent.
// 3)
var username = "robert";
function makeFunc1() {
    var name = "mozilla";
    function displayName(num) {
        console.log(name, num, username);
    }
    return displayName;
}
makeFunc1()(5);

// ============================================

// 4)
let count = 0;
(function printCount(){
    if (count === 0) {
        let count = 1;
        console.log(count);//shadowing 1
    }
    // count = 0
    console.log(count);//0
})();

// ============================================
// 5) write a function to allow you to do this var addSix = createBase(6);
//   addSix(10);
//    addSix(21);

function createBase(num) {
    return function(innerNum) {
        return (innerNum + num);
    }
}
var addSix = createBase(6);
console.log(addSix(15)); //21
console.log(addSix(20)); //26

// ==========================================

//  6) Time optimization
// function find(index){
//     let a = [];
//     for (let i= 0; i < 1000000; i++){
//         a[i] = i * i;
//     }
//     console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("6");
// find(12);
// console.timeEnd(12);

function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++){
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd(50);

//============================================

// 7) block scope and setTimeout()
for (var i =0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // 3 3 3
    }, 1000);
}


// what is the solution for it. by using "let"
for (let i =0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // 0 1 2 
    }, 1000);
}

// but you want to use only "var" give an o/p as 0 1 2
 

for (let i =0; i < 3; i++) {
    function a() {
         setTimeout(function log() {
        console.log(i); // 0 1 2 
    }, 1000);
    }
    return a;
}
}
const res = b();
res();


//============================================