"use script";

// Is array copied?
let fruits = ["Apple", "Orange", "Pear"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert(fruits.length);

// Array operations.

let styles = ["Jazz", " Blues"];
styles.push(" Rock and Roll");
styles[Math.floor((styles.length - 1) / 2)] = " Classics";
styles.shift();
styles.unshift("Rap", " Reggage");
alert(styles);

// Calling in an array context

let arr = ["a", "b"];

arr.push(function() {
  alert(this);
});

arr[2]();

// Sum input numbers
function sumInput() {
  let numbers = [];
  let value;
  while (true) {
    value = +prompt("Num", 0);
    if (value === 0 || value === null || !isFinite(value)) {
      break;
    }
    numbers.push(value);
  }
  let sum = 0;
  for (let val of numbers) {
    sum += val;
  }
  console.log(sum);
}

sumInput();
