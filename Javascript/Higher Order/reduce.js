// The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator. 

// Example:

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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//  sum of all ages
const agesSum = ages.reduce((total,age) => total + age, 0);
console.log(agesSum);

//  total years of all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);
console.log(totalYears);

////////////////////////////////////////////////////////////////////////////////////////

// Example 2:
const arr = [5, 1, 3, 2, 6];

// find sum of arr
const totalSum = arr.reduce((total, sum) => total + sum, 0);
console.log(totalSum);

// find max no
const maxNum = arr.reduce((max, curr) => {
     if (curr > max){
      max = curr;
    }
    return max;
}, 0);
console.log(maxNum);

// find min no
const minNum = arr.reduce((min, curr) => {
    if (curr < min) {
        min = curr;
    }
    return min;
})
console.log(minNum);

////////////////////////////////////////////////////////////////////////////////////////
