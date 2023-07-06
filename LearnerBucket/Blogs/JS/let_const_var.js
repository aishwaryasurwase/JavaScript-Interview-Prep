// https://learnersbucket.com/tutorials/es6/var-let-and-const/
// -----

// // let, const and var
// for (var i = 0; i < 10; i++) {
//   var iAmInside = "I am available outside of the loop";
// }

// console.log(iAmInside);
// console.log(i);
// // ---

// if (true) {
//   var inside = "Inside";
// }
// console.log(inside);

// --

// function myFunc() {
//   var functionScoped = "I am available inside this function";
//   console.log(functionScoped);
// }
// myFunc();
// // I am available inside this function
// console.log(functionScoped); // ReferenceError: functionScoped is not defined

// ---

// var inside; // hoisted on the top of the function. As there is no function so it is present in the global scope.
// //block scope
// if (true) {
//   inside = "Inside";
// }
// console.log(inside);
// //Inside

// ---

// function getValue(condition) {
//   if (condition) {
//     var value = "blue";
//     return value;
//   } else {
//     return value;
//   }
// }

// console.log(getValue(true)); // blue
// console.log(getValue(false)); // undefined

// ---

// function getValue(condition) {
//   if (condition) {
//     let value = "blue";
//     return value;
//   } else {
//     return value;
//   }
// }
// console.log(getValue(true));
// console.log(getValue(false));
// ---

// let x = 10;
// if (x == 10) {
//   let x = 11;
//   console.log("inside ", x); // 11
// }
// console.log("outside ", x); // 10
// ---

// --
// var c = 0;
// // let c = 0; //SyntaxError: Identifier 'c' has already been declared
// var c = 10;
// console.log(c);
// if (c == 10) {
//   let c = 11;
//   console.log(c); //11 This will work as it is declared in another scope
// }
// --
// var c = 10;
// var c = 20;
// console.log(c); // 20
// // ---
// var c = 0;
// let c = 0; //SyntaxError: Identifier 'c' has already been declared
// --
// let c = 0;
// var c = 10;
// console.log(c); // SyntaxError: Identifier 'c' has already been declared
// ---
// let c = 0;
// {
//   var c = 10; // SyntaxError: Identifier 'c' has already been declared
// }
// ---
// let c = 10;
// let c = 20; // // SyntaxError: Identifier 'c' has already been declared
// // ---
// let c = 10;
// {
//   let c = 20; // 20
// }
// ---
// const abc = "XYZ";
// let abc; //SyntaxError: Identifier 'abc' has already been declared
// ---
// const abc = "XYZ";
// var abc; // //SyntaxError: Identifier 'abc' has already been declared
// abc = "pqr"; //TypeError: Assignment to constant variable.
// ---
// const XYZ; //SyntaxError: Missing initializer in a const declaration
// --
// if (true) {
//   const a = "I am inside";
//   console.log(a); // "I am inside
// }
// console.log(a); // ReferenceError: a is not defined
// --
// const person = {
//   name: "Aishwarya",
//   age: 24,
// };

// person.age = 25;
// console.log(person); //{name:"Aishwarya", age:25}
// --

// const declarations for objects do not prevent modification of those objects.
// A const declaration prevents modification of the binding and not of the value of the binding.

// const person = {
//   name: "Aishwarya",
//   age: 24,
// };

// person = 25;
// console.log(person); //  TypeError: Assignment to constant variable.
// ---
// function do_something() {
//   console.log(bar); // undefined
//   console.log(foo); // Cannot access "foo" before its initialization
//   var bar = 1;
//   let foo = 2;
// }
// do_something();
// --
// console.log(typeof iAmNotDeclared); // undefined

// console.log(typeof iAmDeclared); // ReferenceError: Cannot access 'iAmDeclared' before initialization
// let iAmDeclared = 10;
// ---
// function test() {
//   var foo1 = 33;
//   if (true) {
//     let foo = foo + 55; // ReferenceError: Cannot access 'foo' before initialization
//   }
// }
// test();
// // Due to lexical or block scoping let foo = (foo + 55) access the foo of
// // the current block that is inside the if condition.It does not access the
// // var foo = 33; as let is blocked scope.let foo is declared but it is not
// // initialized that is why it is still in temporal dead zone.
// ---
