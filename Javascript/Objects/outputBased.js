function sayHi() {
  console.log(name);//undefined
  console.log(age);//reference error
  var name = 'Lydia';
  let age = 21;
}

sayHi();

///////////////////////////////////////////
////////////////////////////////////////////

+true; //1
!'Lydia';// false

// The unary plus tries to convert an operand to a number. true is 1, and false is 0.
// The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

////////////////////////////////////////////////////////////////////////////////////////

const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// ans A: 

////////////////////////////////////////////////////////////////////////////////////////

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);//true "==" only check value
console.log(a === b);//false
console.log(b === c);//false "===" check value and data type

////////////////////////////////////////////////////////////////////////////////////////