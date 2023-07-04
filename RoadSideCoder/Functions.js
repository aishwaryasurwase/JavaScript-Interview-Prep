// Building block of JS

// What is function declaration
// When we declare a function with function keyword it also be called function defination, function statement
// function Square(number) {
//   return number * number;
// }

// ---

// /** What is function expression **/
// When we declare a function like this then that is function expression
// When we store function inside a variable its called function expression

// const Cube = function (number) {
//   return number * number * number;
// };

// ---
// Anonymous function - function which has no name
// this function can be assigned to variable or can be passed as a callback

// what is First class function
// In language where functions are treated like variables are called first class functions
// In these cases functions can be passed to other functions, function can be returned from functions.
// Everything that variable can do functions can do that function called first class functions

// const square = function (num) {
//   return num * num;
// };

// const displaySquare = function (fn) {
//   console.log("Square is", fn(5));
// };

// displaySquare(square);
// ----

// What is IIFE (Immediately invoked function expression)

// we can call it right away
// (function square(num) {
//   console.log(num * num);
// })(5);

// (function (x) {
//   return (function (y) {
//     console.log(x); // 1
//     console.log(y); // 2
//   })(2);
// })(1);

// ---

// Styling the console log
// console.log(
//   "%cHELLOO AISHWARYA",
//   "color: white;background-color: tomato;font-size:20px"
// );

// Ability of functions to access variables and functions that are lexically out of scope are called Closure
// Closures are created whenever a new function created, that function has access/reference to its outer scope
// // ---
// var num1 = 20,
//   num2 = 3,
//   name = "Roadside coder";

// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// function getScore() {
//   var num1 = 2,
//     num2 = 3;
//   function add() {
//     return name + " scored " + (num1 + num2); // Roadside coder scored 5
//   }
//   return add();
// }
// console.log(getScore());
// // ---
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// --

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// --

// Hoisiting
// a(); // Function called
// console.log(b); // undefined
// function a() {
//   console.log("Function called");
// }
// var b = 10;

// // ---
// var x = 21;
// var fun = function () {
//   console.log(x); // undefined
//   var x = 20;
// };
// fun();

// ---

// // Params vs arguments
// function multiply(...nums) {
//   // params
//   console.log(nums);
// }
// var arr = [5, 2];
// multiply(...arr); // value arguments
// ---

// const fn = (a, ...numbers, x, y) => { // SyntaxError: Rest parameter must be last formal parameter
//   console.log(x, y)
// }
// fn(5,6,7,8,9)

// ----
// const nums = [4, 6, 2];
// const arr = [1, ...nums, 2];
// console.log(arr);
// ---

// Callback function
// A callback function is a function passed into another function as an argument, which is
// then invoked inside the outer function to complete some kind of routine or action

// function greeting(name) {
//   console.log("Hello", name);
// }

// function processUserInput(callback) {
//   var name = "Aishwarya";
//   callback(name);
// }

// processUserInput(greeting);

// Example of callback - setTimeout, map, filter, setInterval, reduce, event listener

// --

// Arrow function

// const funct = (param) => console.log("Arrow function");
// funct();

// Arrow function vs normal fumction

// 1 Syntax
// function square(num) {
//   return num * num;
// }
// const cube = (num) => num * num * num;

// console.log(square(4));
// console.log(cube(4));
// ---

// 2 Implicit return keyword
// 3 Arguments keyword

// function display() {
//   console.log(arguments);
// }
// display(1, 5, 2, 4, 2);

// const display = () => {
//   console.log(arguments);
// };

// display(1, 3, 4);
// ---

// // this keyword
// let username = "Aishwarya ";
// let user = {
//   username: "Roadside coder",
//   rc1: () => {
//     console.log("Subscribe to -", this.username); // undefined
//   },
//   rc2() {
//     console.log("Subscribe to  -", this.username); // Roadside coder
//   },
// };

// user.rc1();
// user.rc2();
// ---

// var username = "Aishwarya ";
// let user = {
//   username: "Roadside coder",
//   rc1: () => {
//     console.log("Subscribe to -", this.username); // Aishwarya
//   },
//   rc2() {
//     console.log("Subscribe to  -", this.username); // Roadside coder
//   },
// };

// user.rc1();
// user.rc2();
