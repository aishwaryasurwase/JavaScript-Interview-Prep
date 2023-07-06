// ES6 Object Literals
// link - https://learnersbucket.com/tutorials/es6/object-literals/

// Ordinary: Default behaviors of objects in Javascript.
// Exotic: Behaviors that differs from the Ordinary objects in some way.
// Standard: Objects such as Array, Date. They can be ordinary or exotic.
// Built-In: Standard objects that are present in execution environment such as browser or Nodejs.
// Deconstructing variables into keys and values
// Before ES6.
// Creating an object literal in javascript.

// var name = "Aishwarya Surwase";
// var age = 24;
// var nationality = "Indian";
// var designation = "Software Engineer";

// var user = {
//   name: name,
//   age: age,
//   nationality: nationality,
//   designation: designation,
// };
// console.log(user);

// // After ES6.
// // Creating an object literal in ES6.

// var name = "Aishwarya Surwase";
// const age = 23;
// const nationality = "Indian";
// const designation = "Software Engineer";

// const user = {
//   name,
//   age,
//   nationality,
//   designation,
// };
// console.log(user);
// ---
// Declaring functions inside objects
// Before ES6.

// var name = "Aishwarya Surwase";
// var age = 23;
// var nationality = "Indian";
// var designation = "Software Engineer";

// var user = {
//   name: name,
//   age: age,
//   nationality: nationality,
//   designation: designation,
//   detail: function () {
//     return (
//       this.name +
//       " is an " +
//       this.nationality +
//       ", working as " +
//       this.designation
//     );
//   },
// };
// console.log(user.detail());

// // After ES6.

// var name = "Aishwarya Surwase";
// let age = 23;
// let nationality = "Indian";
// let designation = "Software Engineer";

// var user = {
//   name,
//   age,
//   nationality,
//   designation,
//   detail() {
//     return (
//       this.name +
//       " is an " +
//       this.nationality +
//       ", working as " +
//       this.designation
//     );
//   },
// };
// console.log(user.detail());

// We no longer need to declare function keyword,
// we can declare the function directly with above syntax.
// We can also declare the => fat arrow function.
// // ----
// const math = {
//   add: (a, b) => a + b,
//   mul: (a, b) => a * b,
//   sub: (a, b) => a - b,
//   div: (a, b) => a / b,
// };
// console.log(math.add(1, 1)); // 2
// console.log(math.mul(1, 1)); // 1
// console.log(math.sub(1, 1)); // 0
// console.log(math.div(1, 1)); // 1
// // ---

// Dynamically define properties of an Object
// Before ES6.
// To dynamically define properties of the objects in ES5 or earlier we used to first create the object and then modify it.
// var name = "name";
// var user = {};
// user[name] = "Aishwarya Surwase";
// console.log(user.name);

// After ES6.
// With ES6 we can do both the things same time. Computed property names are part of the object literal syntax.
// var name = "first";
// var suffix = "name";
// var user = {
//   [name]: "Aishwarya",
//   ["last " + suffix]: "Surwase",
// };
// console.log(user.first + " " + user["last " + suffix]);
// // ---

// Declaring duplicate properties
// Before ES6.
// In ES5 and earlier declaring duplicate property names inside object literals in strict mode would throw error.

// "use strict";
// var user = {
//   name: "Aishwarya",
//   name: "Sanu",
// };
// console.log(user.name);

//syntax error
// After ES6.
// In ES6 we can declare duplicate property names inside object literals in
//     strict as well as nonstrict mode.It will just overwrite the existing value.

// ("use strict");
// const user = {
//   name: "Aishwarya",
//   name: "Sanu",
// };

// console.log(user.name);
// // Sanu
