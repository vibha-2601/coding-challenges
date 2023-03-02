// forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// syntax: array.forEach(function(currentValue, index, arr){
//   synchronously execute
// })

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

companies.forEach(function(company) {
    console.log(company.start);
})

ages.forEach(function(age) {
    console.log(age);
})
