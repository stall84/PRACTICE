/*
function sayHello() {
    return function() {
        console.log("Hi Bitch!");
    }
}

function greet(fnMessage) {
    console.log(fnMessage());
}

function derp() {
    console.log('DERP');
}
setTimeout(() => {
    sayHello();
    greet(derp);
}, 3000)

*/

let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`

const result = wrapInDiv(trim(input));