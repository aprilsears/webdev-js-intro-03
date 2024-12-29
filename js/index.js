// Prevent us from attempting to use variables
// that are not declared
"use strict"
console.log(1 + 1);         // Output: 2
console.log(1 - 1);          // Output: 0
console.log(1 + "1");        // Output: 11
                             //Explanation: The + operator with a number (1) and a string("1") performs concatenation resulting in "11" a string.

console.log(3 - 4 * 5)       // Output: -17
console.log((3 - 4) * 5);    // Output: -5
                             //Explanation: Multiplication has a higher precidence than subtraction. (3 - 4 * 5) would look like 3 -(4*5)

console.log(6 / 5);          // Output: 1.2
console.log(6 % 5);          // Output: 1
                             // Modulus returns the remainder. This operator is extremely useful.
                             
console.log(1 == 1);         // Output: true
console.log(1 == "1");       // Output: true
console.log(1 === "1");      // Output: false
console.log(1 || 2);         // Output: 1
console.log(2 || 1);         // Output: 2
console.log(1 && 2);         // Output: false
console.log(1 && 1);         // Output: true

// Arithmetic operators
console.log(5 + 2); // 7
console.log(10 - 3); // 7
console.log(4 * 6); // 24
console.log(20 / 5); // 4
console.log(17 % 5); // 2

// Comparison operators
console.log(5 > 3); // true
console.log(10 < 2); // false
console.log(8 == 8); // true
console.log(6 != 6); // false
console.log(2 >= 1); // true
console.log(7 <= 7); // true

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// String concatenation
console.log("Hello " + "World"); // "Hello World"