//1)  what is js objects?
// In JavaScript, almost "everything" is an object. AN objet is unordered collection of key-value pairs. Each key-value pair is called property.The key value can be string. value property can be any value.e.g., a string, a number, an array, and even a function

// ============================================

// 2) how to create object?
// using curly braces {}.

const user = {
    name: "Robert",
    age: 26,
    "like this video": true,
}

//=============================================


// 3) how to access values inside an objects.
console.log(user.name);
console.log(user.age);

//============================================


// 4) how to modify the name property?
user.name = "Richard";
console.log(user);

//============================================


// 5) how to delete age property?
delete user.age;
console.log(user);

//=============================================


// 6) how to access value 'true' and delete it from object?
console.log(user["like this video"]);

delete(user["like this video"]);
console.log(user);

//=============================================



// 7) how to add const property="firstName", const name = "Diana".
const property = "firstName";
const name = "Diana";

const user1 = {
    [property]: name,
     }
     
     console.log(user1);

//============================================


// 8) what is o/p ====> based on delete keyword.
const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func);

// o/p = 5
// "a" is a local variable. "delete" keyword is only used when we want to delete properties from "object" not a "local variable".

//=============================================


// 9) we want loop through each keys and values and print the values or even the name of the keys?

const user2 = {
    name: "Cooking class",
    age: 25,
    isTotallyAwesome: true,
}

// o/p be like => only key =======> name, age, isTotallyAwesome and only values ======> "Cooking class", 25, true.

// answer is using "for in" loop. syntax =====> for((any name) in (object name))
            
for (key in user2) {
    console.log(user2[key]);
}

//////////////////////////////////////////////////////////////////////////////////////////
