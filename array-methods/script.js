"use strict";

// const items = [
//   { name: "Bike", price: 1000 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 300 },
//   { name: "Book", price: 10 },
//   { name: "Phone", price: 500 },
//   { name: "computer", price: 1000 },
//   { name: "keyboard", price: 30 }
// ];
// // Filter
// const filterItems = items.filter(item => {
//   return item.price <= 500;
// });
// console.log(filterItems);

// // Map

// const itemNames = items.map(item => {
//   return item.price;
// });

// console.log(itemNames);

// // Find

// const foundItem = items.find(item => {
//   return item.name === "Bike";
// });
// console.log(foundItem);

// // Foreach

// items.forEach(item => {
//   console.log(item.name);
// });

// // Some

// const expensiveItems = items.some(item => {
//   return item.price <= 1000;
// });

// console.log(expensiveItems);

// // Every

// const inExpensiveItems = items.every(item => {
//   return item.price <= 1000;
// });
// console.log(inExpensiveItems);

// // Reduce

// let total = items.reduce((current, item) => {
//   return current + item.price;
// }, 0);

// console.log(total);

// // Tasks

// // Translate border-left-width to borderLeftWidth

// function camelize(str) {
//   return str
//     .split("-")
//     .map((item, index) =>
//       index === 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join("");
// }
// console.log(camelize("-webkit-transition"));

// // Filter range
// function filterRange(arr, a, b) {
//   return arr.filter(item => {
//     return item >= a && item <= b;
//   });
// }
let arr = [5, 2, 1, -10, 8];
// console.log(filterRange(arr, 1, 5));

// // Filter range "in place"

// function filterRangeInPlace(arr, a, b) {}
// console.log(filterRangeInPlace(arr, 1, 4));

// // Sort in the reverse order
// function sortArr(arr) {
//   return arr.sort((a, b) => b - a);
// }
// console.log(sortArr(arr));

// // Copy and sort array
// let arr1 = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   return arr1.slice().sort();
// }

// let sorted = copySorted(arr1);
// console.log(sorted);
// console.log(arr1);

// Create an extendable calculator

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function(str) {
    let arr = str.split(" ");
    let a = +arr[0];
    let op = arr[1];
    let b = +arr[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("3 * 7"));
