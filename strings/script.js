"use strict";

// Uppercase the first character

function ucFirst(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

alert(ucFirst("stranger things"));

// Check for spam

function checkSpam(str) {
  let spam =
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
  // let spam2 = str.toLowerCase().includes("xxx");
  if (spam) {
    return true;
  } else return false;
}
alert(checkSpam("buy xxx now"));
alert(checkSpam("free"));
alert(checkSpam("innocent viagra"));

// Truncate the text
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + "...";
  } else return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));

// Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue("$120") === 120);
