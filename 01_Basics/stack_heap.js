// Stack (Primitive),  Heap (Non-Primitive)

let myYoutubename = "sathwikreddy"

let anotherName = myYoutubename
anotherName = "sathwikgaming"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

