"use strict";

// Sum numbers from the visitor
let num1 = +prompt("Provide a number", 0);
let num2 = +prompt("Provide another numver", 0);

let result = num1 + num2;
alert(result);

// Why 6.35.toFixed(1) == 6.3?

// Precision loss
alert((1.35).toFixed(20));
alert(Math.round(6.35 * 10) / 10);

// Repeat until the input is a number
function readNum() {
  let num;
  do {
    num = prompt("Enter a number", 0);
  } while (!isFinite(num));

  if (num == null || num == "") {
    return null;
  }

  return +num;
}

// alert(`Read: ${readNum()}`);

// A random number from min to max

function random(min, max) {
  let result;
  result = min + Math.random() * (max - min);
  return result;
}

alert(random(1, 5));

// A random integer from min to max
function randomInt(min, max) {
  let result;
  result = Math.floor(min + Math.random() * (max + 1 - min));
  return result;
}

alert(randomInt(2, 5));
