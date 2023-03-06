/* 1) What is map()?
2) What is filter()?
3) What is reduce()?
4) create polyfills ?

----- polyfill for map() ---------
syntax = Array.map((num, i arr) => {})

polyfill =====>
Array.prototype.Mymap = function(cb) {
    let temp = [];
    for (let i=0; i<this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}


-------- polyfill for filter() ------------
syntax = Array.filter((num, i, arr) => {})

polyfill =======>
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for (let i=0; i<this.length; i++) {
        if(cb(this[i], i, this))
        temp.push(this[i]);
    }
    return temp;
}

------------ polyfill for reduce() ----------
syntax = Array.reduce((acc, curr, i, arr) => {}, initialValue)

polyfill ==========>
Array.prototype.myReduce = function(cb, initialValue) {
    var accumulator = initialValue;

    for (let i=0; i<this.length; i++) {
        accumulator = accumulator ? (cb(accumulator, this[i], i, this) : this[i]);
    }
    return accumulator;
}


*/
// Example 1:
// const nums = [1, 2, 3, 4];

// //  1) Multiply by 5
// const multiplyByFive = nums.map(num => num * 5);
// console.log(multiplyByFive);

// //  2) find more than 2
// const moreThanTwo = nums.filter(num => num > 2);
// console.log(moreThanTwo);

// //  3) find the sum of array
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// ////////////////////////////////////////////////////////////////////////////////////////

// // 2) Map vs forEach explain with example
// // map() => a) is used to tranform the elements of an array. 
// // b) we can chaining on map.

// // forEach() => a) is used to loop through the elements of an array.
// // b) we cannot do chaining on forEach because it doesn't return an array.

// const arr = [3, 4, 5, 6];

// const mapResult = arr.map(ar => ar + 2);


// const forEachResult = arr.forEach((ar, i) => {
//     arr[i] = ar + 3;
// })
// console.log(mapResult, forEachResult, arr);

// ///////////////////////////////////////////////////////////////////////////////////////

// // Example 2:

let students = [
    {name: "Piyush", rollNumber: 31, marks: 80},
    {name: "Jenny", rollNumber: 15, marks: 69},
    {name: "Kaushal", rollNumber: 16, marks: 35},
    {name: "Dilpreet", rollNumber: 7, marks: 55},
]

// // 1) return only names of the students in capital letters.
// const studentsName = students.map(stud => {
//     return (stud.name.toUpperCase());
// }); 

// console.log(studentsName);

// // by using forEach()
// // const s = students.forEach((stud, i) => {
// //     students[i] = stud.name.toUpperCase();
// // })
// // console.log(students);

// // ============================================

// // 2) returns only details of those students who scored more than 60.

// const score = students.filter(stud => stud.marks > 60);

// console.log(score);

// //===========================================

// // 3) more than 60 marks and rollnumber greater than 15.

// const res = students.filter(stud => (stud.marks > 60 && stud.rollNumber > 15));

// console.log(res);

// //===========================================

// // 4) sum of marks of all students

// const totalMarks = 
// students.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);

// ===========================================

// 5) returns only names of students who scored more than 60.

const res1 = students
.filter(stud => stud.marks > 60)
.map(stud => stud.name);

console.log(res1);

// ============================================

// 6) return total marks for students with marks greater than 60, after 20 marks have been added to those who scored less than 60

const output = students.map(stud => {
    if ( stud.marks < 60) {
        stud.marks += 20;
    }
    return stud;
})
.filter(stud => stud.marks > 60)
.reduce((acc,curr) => acc + curr.marks, 0);

console.log(output);

/////////////////////////////////////////////////////////////////////////////////////////