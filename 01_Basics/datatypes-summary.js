// Primitive Data Types
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234567898765434432n


// Non-Primitive (or) Reference Data Types

// Arrays, Objects, Funtions

//Array
const heros = ["shaktiman", "naagraj", "doga"]

//object
let myObj = {
    name: "sathwik",
    age: 23,
    city: "hyderabd"
}

//Function
const myFunction = function() {
    console.log("Hello World");   
}

console.log(typeof myFunction);


