//for
// for (let i = 0; i <= 10; i++) {
//   console.log(" For LoopNumber: " + i);
// }

// while
// let j = 0;
// while (j <= 10) {
//   console.log("While Loop Number: " + j);
//   j++;
// }

// const todes = [
//   {
//     id: 1,
//     text: "Take out the trash",
//     iscompleted: false,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     iscompleted: true,
//   },
//   {
//     id: 3,
//     text: "Grocery shopping",
//     iscompleted: false,
//   },
// ];

// // To get the 'text' property from the second todo:
// const { text } = todos[1];
// console.log(text); // Output: "Meeting with boss"

//loop is a block of code that runs repeatedly until a specified condition is met

//types

//while
//for
//do while

//syntax for a for
//for (initialization; condition; increment/decrement) {block of code}
for (let i = 0; i < 7; i += 1) {
  console.log(i);
}
function loopmein() {
  for (let i = 0; i < 7; i += 1) {
    console.log(i);
  }
}
loopmein(); // Call the function to execute the loop

for (let i = 0; i < 7; i += 1) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//create a function print evenin range(num1,num2)that takes a number num1 and num2 and prints even numbers from num1 to num2
