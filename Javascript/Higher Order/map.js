//  the map() method is used to iterate over an array and calling function on every element of the array. 

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

// create array of companies name
const nameOfCompanies = companies.map(company => company.name);
console.log(nameOfCompanies);

// create name with start and end year
const result = companies.map(company => (`${company.name}, [${company.start}, ${company.end}]`));
console.log(result);

// create squarte root of ages array
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// chaining = we can do chaining with this methods
const result1 = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(result1)