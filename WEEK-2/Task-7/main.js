//main.js
import * as mathOps from "./mathOperations.js";
import * as stringOps from "./stringOperations.js";

// Math Operations
const resultAdd = mathOps.add(5, 3);
const resultSubtract = mathOps.subtract(10, 4);
const resultMultiply = mathOps.multiply(2, 6);
const resultDivide = mathOps.divide(8, 2);

console.log("Math Operations:");
console.log("Addition:", resultAdd);
console.log("Subtraction:", resultSubtract);
console.log("Multiplication:", resultMultiply);
console.log("Division:", resultDivide);

// String Operations
const resultConcatenate = stringOps.concatenate("Hello", "World");
const resultUpperCase = stringOps.toUpperCase("hello");
const resultLowerCase = stringOps.toLowerCase("WORLD");

console.log("\nString Operations:");
console.log("Concatenation:", resultConcatenate);
console.log("Uppercase:", resultUpperCase);
console.log("Lowercase:", resultLowerCase);