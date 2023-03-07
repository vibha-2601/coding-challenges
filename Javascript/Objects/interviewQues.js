//1) what's the output?

const obj = {
    a: "one",
    b: "two",
    a:"three",
    }

console.log(obj);

// o/p ====> {a: 'three', b: 'two'}
// here is two keys with same name, so other key with same name which was added later is going to be considered while printing. The first key is replaced with the last specified value in the same position.

//============================================

// 2) create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
}

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
multiplyByTwo(nums);
console.log(nums);

//=============================================

// 3) what is the o/p?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a[[object Object]]
a[c] = 456; // a[[object Object]]

console.log(a[b]);
 

//o/p =====> 456
// Here, b and c are properties of a, so they are strings. And what's the string representation of an object? "[object Object]".
//   property names are strings, but your b and c are objects. Therefore, they are stringified:b + ''; ===> "[object Object]"
// c + ''; ======>"[object Object]"
// b + '' === c + '' ==========> true


// 4) how to get the correct output of above ====> by using map()

const a1 = new Map();
const b1 = { key : "b"};
const c1 = { key: "c"};
a1.set(b1, 123);
a1.set(c1, 456);

console.log(a1.get(b1));
console.log(a1.get(c1));

//=============================================

// 5) what is JSON.stringify and JSON.parse?

const user = {
    name: "Robert",
    age: 25,
}

// how to convert into string
const result = JSON.stringify(user);
console.log(result);

// how to convert string to object
console.log(JSON.parse(result));

// ============================================


// 6) what is the use case of JSON.stringify and JSON.parse? where we use these?

// a) common use case is to storing it in our local storage.

localStorage.setItem("a", result);
console.log(JSON.parse(localStorage.getItem("a")));

// ============================================

// 7) what is the output?

console.log([..."Lydia"]);
console.log({..."Lydia"});//{0: 'L', 1: 'y', 2: 'd', 3: 'i', 4: 'a'}


// ... is a spread operator. but here it is a string "Lydia".
// o/p ======>['L', 'y', 'd', 'i', 'a']

//===========================================
//  8) what is o/p?
const user6 = {name: "Lydia", age: 21};
const admin = {admin: true, ...user6};

console.log(admin);

// o/p ======> { admin: true, name: "Lydia", age: 21}

// ============================================

// 9) o/p?
const settings = {
    username: "Richard",
    level: 19,
    health: 90,
}

const data = JSON.stringify(settings, ["level", "health"]);

console.log(data);//{"level":19,"health":90}

// o/p ======> {"level":19,"health":90}
// ["level", "health"] => bacially this will do is it's gonna only stringify "level and health" or those particular properties.

// ==========================================

// 10) o/p?

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
}

console.log(shape.diameter());//20  reference to shape object.
console.log(shape.perimeter());//NaN  reference to window object.

// o/p ======> 20 NaN

// ==========================================

// 11) what is the destructuring in objects?
// Destructuring means taking out the specific properties of an object like { name } this.

let user1 = {
    name: "Rohan",
    age: 55,
}
// destructring
const { name, age } = user1; 

console.log(name, age);
//  ============================================

// we have two name properties, then how to rename it.

let user2 = {
    name1: "Rohan",
    age: 55,
}
 const name1 = "Richard";

//destructuring = renaming the properties
const { name1:myName } = user2;
console.log(myName);

// ===========================================

// we can access property of nested the object.
let user3 = {
    name1: "Rohan",
    age: 55,
    fullName: {
        firstName: "Diana",
        lastName: "Das",
    }
}
// access the firstName property

const { fullName: { firstName} } = user3;
console.log(firstName);

////////////////////////////////////////////////////////////////////////////////////////

// 12) o/p ?

function getItems(fruitList,  favouriteFruit, ...args) {
    return [...fruitList, ...args, favouriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

// o/p ====>  ['banana', 'apple', 'orange', 'pear']

////////////////////////////////////////////////////////////////////////////////////////

// 13) object reference = o/p ?

let d = { greeting: "Hey!" };
let e;

e = d;
d.greeting = "Hello";
console.log(d.greeting);

// o/p =====> Hello, because we can provide the reference to the object. so c=d, in this we can change whatever in c it will same for d also.

// ==========================================


// 14) o/p?
console.log({a: 1} == {a:1});//false
console.log({a: 1} === {a:1});//false

// o/p =====> false false
// both of them are different objects, both have different space in memory. objects are only equal when they are referencing a particular area in the memory.

// ============================================

// 15) o/p?

let person = {name: "Lydia"};
const members = [person];
person = null;

console.log(members);//[{name: 'Lydia'}] 

// o/p =====> [{name: 'Lydia'}] 
// because we assign "person" to the "members" array. i.e. member[0] which value is {name: "Lydia"}. if we do person.name= null, then output of members is null.

//===========================================

// 16) o/p ? 
const value = { number: 10 };

const multiply = (x = {...value}) => {
    console.log((x.number *= 2));
}

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40

// ============================================

// 17) o/p ?

function change(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50,
    }

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30,
}

const personObj2 = change(personObj1);

console.log(personObj1);// {name: 'Alex', age: 25}
console.log(personObj2);// {name: 'John', age: 50}

// ============================================

// 18) what is shallow and deep copy in object?


//============================================

// 19) how to create deep copy/ clone an object ?

let user5 = {
    name: "Robert",
    age: 30,
}

// console.log(user5);


// 1 way: 
// const objClone = Object.assign({}, user5);


// 2 way:
// const objClone = JSON.parse(JSON.stringify(user5));

// 3 way: by destructuring
const objClone = {...user5};
objClone.name = "Richard";
console.log(user5, objClone);

///////////////////////////////////////////////////////////////////////////////////////
