// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending.


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

// sort companies by start year.
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// sort ages - lowest to highest
const sortAges = ages.sort((a,b) => (a-b));
console.log(sortAges);

//  sort ages by highestt to lowest
const sortAges1 = ages.sort((a,b) => (b-a));
console.log(sortAges1);