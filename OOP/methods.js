// working with array methods like forEach, filter, map, reduce, etc etc

const companies = [
    {name: "Telstar", category: "communications", start: 1981, end: 2003},
    {name: "AT&T", category: "tele-comm", start: 1940, end: 2008},
    {name: "SpaceX", category: "space travel", start: 2005, end: null},
    {name: "Company Four", category: "retail", start: 1998, end: 2009},
    {name: "Comapny Five", category: "technology", start: 1975, end: null},
    {name: "Company Six", category: "finance", start: 1988, end: 2001},
    {name: "Compnay Seven", category: "automobiles", start: 1941, end: 2002},
    {name: "Company Eight", category: "retail", start: 1999, end: 2010},
    {name: "Company Nine", category: "communications", start: 1978, end: 2001},
    {name: "Company Ten", category: "finance", start: 1948, end: 2008}
];

const ages = [33,12,20,16,5,54,21,44,61,38,36];



// let filtered = companies.filter(comp => {
//     if (comp.category == "retail") {
//         return true;
//     }
// });

//console.log(filtered);

// let eightiesComps = companies.filter(company => {
//     if (company.start >= 1980 && company.start <= 1989) {
//         return true;
//     }
// })

//console.log(eightiesComps);

// let companyQuick = companies.map(company => {
//     return `${company.name}, [${company.start} - ${company.end}]`;
// });

// console.log(companyQuick);

let mathEr = ages.map(function (x) {
    return x + 1;
});

console.log(ages);
console.log(mathEr);