
// Example 1: assume these data coming from API. Real-time example.
const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26},
]


//1) find list of full names
// o/p as ["akshay saini", "donald trump",.......]

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames);

// ===========================================

// 2) how many users have a particular age.
// o/p as { 26: 2, 75: 1, 50: 1 }

const output = users.reduce((acc, curr) => {
if (acc[curr.age]) {
 acc[curr.age] = acc[curr.age] + 1;
} else {
    acc[curr.age] = 1;
}
return acc;
}, {})

console.log(output);

//============================================

// 3) we need to find out first name of all the users whose age is < 30. 
//  o/p as ['akshay', 'deepika']

const result = users
.filter(user => user.age < 30)
.map(user => user.firstName);

console.log(result);

//============================================

// 4) we need to find out first name of all the users whose age is < 30. 
//  o/p as ['akshay', 'deepika'] but using reduce.

const result1 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(result1);

////////////////////////////////////////////////////////////////////////////////////////


// Example 2:
const companies = [
    {name: "company one", category: "Finance", start: 1981, end: 2003},
    {name: "company Two", category: "Retail", start: 1992, end: 2008},
    {name: "company Three", category: "Auto", start: 1999, end: 2007},
    {name: "company Four", category: "Retail", start: 1989, end: 2010},
    {name: "company Five", category: "Technology", start: 2009, end: 2014},
    {name: "company Six", category: "Finance", start: 1987, end: 2010},
    {name: "company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "company Nine", category: "Retail", start: 1981, end: 1989}
]

// 1) {finance: 2, Retail: 3, Auto: 2, Technology: 2}
const output1 = companies.reduce((acc, curr) => {
if (acc[curr.category]) {
    acc[curr.category] = ++acc[curr.category];
} else {
    acc[curr.category] = 1;
}
return acc;
}, {});

console.log(output1);

//============================================

// 2) starte year > 1990, list name of company.
// ["company One", "company Two", ....]
const output2 = companies.reduce((acc, curr) => {
 if (curr.start > 1990) {
    acc.push(curr.name);
 }
 return acc;
}, [])

console.log(output2);

//===========================================