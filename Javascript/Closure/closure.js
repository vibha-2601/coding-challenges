/*Closures: A function along its lexical scope forms a closure. 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

Lexical scope: Variable defined outside a function can be accessible inside of another function defined after a variable declaration but opposite is not true*/

function outer(){
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
   
}
const z = outer();
console.log(z)
z(); //1
z(); //2

// o/p = 1 2

/////////////////////////////////////////////////////

function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
const res = x();
res();// 100 

// o/p = 100 because closure is function bundles together with references to its surrounding.

/////////////////////////////////////////////////////

function x1(){
    let a = 10;
    function y1(){
        console.log(a);
    }
   a = 100;
    a = 200;
    return y1;
     
}
const res1 = x1();
res1();// 200 
 
// o/p = 200

/////////////////////////////////////////////////////

function num1() {
    var num = 1;
    function checkNum(){
        console.log(num);
    }
    num++;
    return checkNum;
}
var number = num1();
number(); //2
console.log(number);

// o/p = 2

/////////////////////////////////////////////////////

function sayHello() {
  var say = function() { console.log(hello); }
  // Local variable that ends up within the closure 
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure();//Hello, world!

// o/p = Hello, world!

////////////////////////////////////////////////////

var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}

var test = foo();

test();//45

// o/p = 45

/////////////////////////////////////////////////////

/* Reallife closure example:  If there is multiple line code and we eassaign the count value by mistake to 5. It gives the unexpected output. So what is the solution for this?  =======> solution is closure */

let count = 0;
function counter () {
 count++;
}
count = 5;
counter();
counter();
console.log(count);

// solution:

function wrapperCount () {
    let count = 0;
    function counter() {
        count++;
        console.log(count);
    }
    return counter;
}
const updateCounter = wrapperCount();
updateCounter();
updateCounter();

/////////////////////////////////////////////////////

// Reallife example: Ecommerce website (cart counter-how many items in cart)

// to hide private properties and give the public interface to user. we can use the below.

function cartCounter() {

    // _count = make it private
    let _count = 0;

    function _updateCounter(val) {
        _count += val;
    }

        //creates an object
        return {
            increment() {
                _updateCounter(1);
            },

            decrement() {
                _updateCounter(-1);
            },

            value() {
                return _count;
            },
        }
    }


const data = cartCounter();
data.increment();
data.increment();
data.decrement();
console.log(data.value());

/////////////////////////////////////////////////////
