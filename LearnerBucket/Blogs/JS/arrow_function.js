// Javascript Fat Arrow Function
// https://learnersbucket.com/tutorials/es6/fat-arrow-function/

// &&&&&&&&

// No this, arguments, super or new.target bindings of its own.
// We cannot use them as Constructors.
// They do not have prototype property.
// yield keyword cannot be used(Until in special cases).
// Unique named parameters.

// &&&&&&&&

// let names = ["Aishwarya", "Sanu", "Surwase", "Javascript"];

// var abc = names.map(function (e) {
//   return "Hello " + e;
// });
// console.log(abc);

// var xyz = names.map((e) => "Hello " + e);
// console.log(xyz);
// ---

// Implicitly return

// // With arrow functions we can skip the explicit return and return the value like this.
// let names = ["Aishwarya", "Sanu", "Surwase", "Javascript"];
// let xyz = names.map((e) => `Hello ${e}`);
// console.log(xyz);
// //["Hello Aishwarya","Hello Sanu","Hello Surwase","Hello Javascript"]

// const abc = (e) => `Hello ${e}`;
// console.log(abc("Aishwarya"));
// //Hello Aishwarya

// // If there is only one parameter then we can omit the() parentheses.
// // Also we don’t need { } braces when returning implicitly.
// ---
// Function with no parameters should follow the following syntax
// const abc = () => `Hello Aishwarya`;
// console.log(abc());
// //Hello Aishwarya
// ---
// &&&&&&&&

// With implicit return we can return object literals like this.
// We need to wrap the object literals inside() parentheses.

// const quantity = "100";
// const names = ["Steel", "Gold", "Copper"];

// // const cost = names.map((name, i) => {
// //   return { name, quantity, price: quantity * i };
// // });

// const cost = names.map((name, i) => ({ name, quantity, price: quantity * i }));

// console.log(cost);
//0: {name: "Steel", quantity: "100", price: 0}
//1: {name: "Gold", quantity: "100", price: 100}
//2: {name: "Copper", quantity: "100", price: 200}

// &&&&&&&&
// ----
// Rest Parameters
// const quantity = "100";
// const names = ["Steel", "Gold", "Copper"];

// const cost = (quantity, ...names) => {
//   console.log(quantity); // 100
//   console.log(names); // [["Steel", "Gold", "Copper"], ["Steel", "Gold", "Copper"]];
// };
// cost(quantity, names, names);
// --

// // Default Parameters
// const quantity = 100;

// const cost = (quantity, price = 1) => {
//   console.log(quantity * price);
// };

// cost(quantity); // 100
// cost(quantity, 20); // 2000
// ----
// Destructuring;
// let f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
// console.log(f()); // 6
// ---

// var increment = {
//   default: 1,
//   start: function () {
//     console.log("outside ", this.default);
//     setInterval(function () {
//       console.log(this.default++);
//     }, 1000);
//   },
// };

// increment.start();
// --

// var increment = {
//   default: 1,
//   start: function () {
//     console.log("outside ", this.default);
//     setInterval(function () {
//       console.log(this, this.default++);
//     }, 1000);
//   },
// };

// increment.start();

// var counter = {
//   default: 1,
//   increment: function () {
//     console.log("outside ", this.default);
//     function byOne() {
//       console.log(this, this.default++);
//     }
//     byOne();
//   },
// };
// counter.increment();
// ---

// var counter = {
//   default: 1,
//   increment: function () {
//     console.log("outside ", this.default);
//     byOne = () => {
//       console.log(this, this.default++);
//     };
//     byOne();
//   },
// };
// counter.increment();
// --

// The this inside the setInterval is referencing to its context and there is no
// default parameter and we are trying to
// increment the undefined value so it is returning NaN.
// When you use an arrow function, the this keyword is inherited from the parent scope

// var increment = {
//   default: 1,
//   start: function () {
//     console.log("outside ", this.default);
//     setInterval(() => {
//       console.log(this.default++);
//     }, 1000);
//   },
// };

// increment.start();
// ----
///&&&&&&&&&&&&&&
// var increment = {
//   base: 1,
//   add: function (a) {
//     //  a =  10
//     let f = (v) => v + this.base;
//     return f(a);
//   },
//   addAgain: function (a) {
//     // a = 12, v = 12
//     let f = (v) => v + this.base;
//     return f.call({ base: 10 }, a); // 12+1
//   },
// };
// console.log(increment.add(10)); // 11
// console.log(increment.addAgain(12));

// Also, since the this value is determined by the containing
// function in which the arrow function is defined, you cannot
// change the value of this using call(), apply(), or bind().We can just pass parameters.
///&&&&&&&&&&&&&&

///&&&&&&&&&&&&&&

// No constructors.

// const abc = () => `Hello Aishwarya`;
// let x = new abc(); // TypeError : abc is not a constructor

// ---

// No arguments binding.

// const abc = () => {
//   console.log(arguments);
// };
// console.log(abc(1, 2, 3));

// function abc1() {
//   console.log(arguments);
// }
// console.log(abc1(1, 2, 3));

// ---

// let args = ["Aishwarya", "Surwase"];
// const abc = (...args) => args[0];
// console.log(abc());

// ---
// // No prototype property.
// let args = ["Aishwarya", "Surwase"];
// const abc = (...args) => args[0];
// console.log(abc.prototype);

// function abc1() {}

// console.log(abc1.prototype);
// ---
// Unique parameters.
// function abc(a, a, a) {
//   console.log(a);
// }
// abc(12, 10, 23);
// //23

// const abc1 = (a, a, a) => {
//   console.log(a);
// };
// abc1(12, 10, 23);
//SyntaxError: Duplicate parameter name not allowed in this context

// We cannot use arrow functions as a generators.
// Because yield keyword may not be used inside arrow function.
// Except when permitted within functions further nested with it.

///&&&&&&&&&&&&&&

// When to avoid using arrow functions in javascript
// If we want to access the this of the current function then it is better to avoid the arrow functions.

// let button = document.getElementById("clickme");
// button.addEventListener("click", () => {
//   // error: *this* refers to the `Window` Object
//   this.classList.toggle("on");
// });

// const person = {
//   age: 10,
//   getOld: () => {
//     // error: *this* refers to the `Window` Object
//     this.age += 20;
//   },
// };

// ---

// Also if you want to access all the arguments of the function then
// it better to avoid arrow functions as arguments are missing or use rest operators.

// let a = () => {
//   let count = 1;
//   let am = Array.from(arguments);
//   console.log("am", am);
//   am.forEach((e) => {
//     count *= e;
//   });
//   return count;
// };
// console.log(a()); // ReferenceError: arguments is not defined

// ---

// function a() {
//   let count = 1;
//   console.log("arguments", arguments);
//   let am = Array.from(arguments);
//   console.log("am", am);
//   am.forEach((e) => {
//     count *= e;
//   });
//   return count;
// }
// console.log(a(1, 2, 3)); // ReferenceError: arguments is not defined

// ---

// let abc = [1, 2, 3, 4, 5, 6, 7];
// let a = (...arguments) => {
//   let count = 1;
//   let am = Array.from(arguments);
//   am.forEach((e) => {
//     count *= e;
//   });
//   return count;
// };
// console.log(a(...abc));
// //5040
