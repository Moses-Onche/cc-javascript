// let input = prompt("Type in a number:")
// input = Number(input)

// if (input % 2 === 0) {
//   console.log("This number is even")
// } else {
//   console.log("This number is odd");
// }

let num = Number(prompt("Type in a number: "));

if (num < 10) {
  console.log("Small")
} else if (num < 100) {
  console.log("Medium")
} else {
  console.log("Large")
}