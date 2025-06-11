// // function is a set of statement that performs a task or calculates a value.

// function greet(name, lastname) {
//   console.log("Hello ", name);
// }

// greet("john"); // Calling the function to execute it
// greet("Alice"); // Calling the function with an argument

// console.log("Arf");
// console.log("woof");
// console.log("meow");
// console.log("mooooooo");

// function speak() {
//   console.log("Arf");
//   console.log("woof");
//   console.log("meow");
//   console.log("mooooooo");
// }

// speak(); // Calling the function to execute it invoking the function

// function expression
// const speak = function () {
//   console.log("Arf");
//   console.log("woof");
//   console.log("meow");
//   console.log("mooooooo");
// };
// assign a variable(const) instead of a function name define before you try to use / functions at therir most basic can tie together lines of code and give you one executabe unit
// that has its own name and can be executed as many times as you want

//Function Definition:
// function calculateArea(length, width) {
//   return length * width;
// }

// Explanation:

// Function Name: calculateArea
// Parameters: length and width
// These are the inputs the function needs to perform its task.
// They act like variables inside the function.

// Function Logic:

// The function takes length and width as arguments.
// It multiplies these two values to calculate the area of a rectangle.
// The result is then returned.

// Example Usage:
// javascript
// let area = calculateArea(5, 10);
// console.log(area); // Output: 50

// Here, 5 and 10 are the arguments passed to the function.
// The function calculates 5 * 10 and returns 50.

// Key Points:
// Arguments: The actual values you pass to the function when you call it (e.g., 5 and 10).
// Parameters: The placeholders in the function definition that receive the arguments (e.g., length and width).

// This example demonstrates how functions can take inputs (arguments) and use them within the function (parameters) to perform a task and return a result.
// Send

// function addition() {
//   return 2 + 3;
// }

// console.log(addition()); // Output: 5

//1.create a function greetstudent()that returns the words "Hello Student"
//eg greetstudent() should return "Hello Student"

//2.create a function greetspecific()that takes the name of a student as input and words "Hello name" where name is the name of student
//eg greetspecific("wick") should return "Hello Wick"

//3.create a function calculateperimeter() that takes the length and width  as input and returns the perimeter
//eg calculateperimeter(10, 7) should return 34

//4.create a function calculatearea()that takes base and height of a triangle as input and returns the area of the triangle
//eg calculatearea(10, 7) should return 35

function greetstudent() {
  return "Hello Student";
}
console.log(greetstudent()); // Output: "Hello Student"

function greetspecific(name) {
  // return "Hello " + name;
  return `Hello ${name}`;
}
console.log(greetspecific("Wick")); // Output: "Hello Wick"

function calculateperimeter(length, width) {
  return 2 * (length + width);
}
console.log(calculateperimeter(10, 7)); // Output: 34

function calculatearea(base, height) {
  return 0.5 * base * height;
}
console.log(calculatearea(10, 7)); // Output: 35

let num = 5;
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(num));
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEvenOrOdd(num));

let score = 96;
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(score));
let a = 20;
let b = 36;
function getMax(a, b) {
  if (a > b) {
    return "a";
  } else {
    return "b";
  }
}
console.log(getMax(a, b));
let year = 2013;
function isLeap(year) {
  return year % 4 === 0 && year % 100 !== 0;
}
console.log(isLeap(year));
let username = "admin";
let password = "1234";

function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "access Granted";
  } else {
    return "access denied";
  }
}
console.log(login(username, password));
