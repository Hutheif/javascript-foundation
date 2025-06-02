// let age = 18;

// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You're too young.");
// }

//challenge

// let username = "hutheifa";
// let password = "jsRocks";

// if (username === "hutheifa" && password === "jsRocks") {
//   console.log("Login successful");
// } else {
//   console.log("Try again");
// }

// let username = "wronguser";
// let password = "jsRocks";

// if (username === "wronguser" && password === "jsRock") {
//   console.log("Login successful");
// } else {
//   console.log("Try again");
// }

// let username = "hutheifa";
// let password = "123";

// if (username === "hutheifa" && password === "123") {
//   console.log("Login successful");
// } else {
//   console.log("Try again");
// }

// let username = "admin";
// let password = "secret";

// if (username === "admin" && password === "secret") {
//   console.log("welcome back");
// } else {
//   console.log("invalid username or password");
// }

//false value examples

// o undefined emptystrings null

// const str = "hello";

// const str2 = " world";

// const str3 = str + str2;

// console.log(str3);

// const s = "hello World !";

// console.log(s.split(""));

// const s = "hello, technology, computer, science";
// console.log(s.split(", "));

//Arrays-variables that store multiple values

// Arrays are always zero based in every language
// const fruits = ["apple", "banana", "orange", "grape"];

// fruits[5] = "avocado"; // Adding a new element at index 5

// fruits.push("mango"); // Adding a new element at the end of the array
// fruits.unshift("strawberry"); // Adding a new element at the beginning of the array
// fruits.pop();

// // console.log(Array.isArray(fruits));check if something is an array
// console.log(fruits.indexOf("banana")); // Output: 1

// console.log(fruits); // Output: ["apple", "banana", "orange", "grape", undefined, "avocado"]

// object literals
// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 30,
//   hobbies: ["reading", "gaming", "coding"],
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA",
//   },
// };

// console.log(person.firstname, person.lastname); // Output: John
// console.log(person.hobbies[2]); // Output: gaming

// console.log(person.address.city); // Output: Anytown

// destructuring creates a new variable with the same name as the property
// const {
//   firstname,
//   lastname,
//   address: { country },
// } = person;
// console.log(country); // Output: John Doe

// // add property

// person.email = "john@gmail.com";
// console.log(person.email); // Output:
