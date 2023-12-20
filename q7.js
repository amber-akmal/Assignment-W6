"use strict";
//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible
// by anyone show output accordingly.
let N = 15;
if (N % 3 === 0) {
    console.log("divisible by 3 ");
}
if (N % 5 === 0) {
    console.log("divisible by 5");
}
if (N % 5 === 0 && N % 3 === 0) {
    console.log("divisible by both");
}
else if (N % 5 !== 0 && N % 3 !== 0) {
    console.log("Not divisible");
}
