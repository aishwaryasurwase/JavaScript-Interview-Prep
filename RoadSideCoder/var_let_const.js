// Scope - certain region of program where a defined variable exists and
// can be recognized and beyond that it cannot be recognized
// var is functional scope and let, const is blocked scope

// {
//   var a = 10;
// }
// console.log(a);
// --

// {
//   let a = 10;
// }
// console.log(a); // ReferenceError: a is not defined

// Shadowing
// While shadowing variable it should not cross boundary of variable

// function test() {
//   let a = "Hello";
//   if (true) {
//     let a = "Bye";
//     console.log(a); // Bye
//   }
//   console.log(a); // Hello
// }

// test();
// ----
// function test() {
//   let a = "Hello";
//   if (true) {
//     var a = "Bye";
//     console.log(a); // Bye
//   }
//   console.log(a); // Hello
// }

// test();
// // SyntaxError: Identifier 'a' has already been declared
// ---
// function test() {
//   var a = "Hello";
//   let b = "Bye";
//   if (true) {
//     let a = "Hi";
//     var b = "Goodbye";
//     console.log(a);
//     console.log(b);
//   }
// }

// test();

// //SyntaxError: Identifier 'b' has already been declared
// ---
// Declaration

// var a = 10;
// var a = 100;
// console.log(a); // 100
// ----
// let a = 10;
// let a = 1000;
// console.log(a); // SyntaxError: Identifier 'a' has already been declared
// ---
// let a = 10;
// {
//   let a = 100;
//   console.log(a);
// }
// console.log(a);

// ----
// const a = 10;
// const a = 1000;
// console.log(a); // SyntaxError: Identifier 'a' has already been declared
// ---

// let a = 10;
// a = 1000;
// console.log(a); // 1000

// ---

// const a = 10;
// a = 1000;
// console.log(a); // TypeError: Assignment to constant variable.
// ----

// const a;
// console.log(a) // SyntaxError: Missing initializer in const declaration

// ---

// Declaration without initialization

// var a;
// console.log(a);
// ---

// let b;
// console.log(b);
// ---

// const c;
// console.log(c); // SyntaxError: Missing initializer in const declaration
// ----

// Re-initialisation

// var a = 10;
// a = 100;
// console.log(a); // 100

// --

// let a = 10;
// a = 100;
// console.log(a); // 100

// ---

// const a = 10;
// a = 100; // TypeError: Assignment to constant variable.
// ----

// Hoisting

// Execution context
// It has 2 phases
// 1) Creation phase
// 2) Execution phase

// 1) Creation phase
// 3 things happes - it create global window object
// all variable and functions declared
// variables are initiliazed with undefined and in case of function whole function will store

