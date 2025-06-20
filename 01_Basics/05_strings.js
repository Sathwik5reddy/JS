const name = "Sathwik"
const repoCount = 20

// outdated console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sathwik-Fc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh.   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sathwik.com/sathwik%20reddy"

console.log(url.replace('%20', '-'))

console.log(url.includes('sathwik'));

console.log(gameName.split('-'));
