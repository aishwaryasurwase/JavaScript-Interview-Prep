// Closures
// function that reference variables in outer scope from its inner scope
// Closure is combination of functions bundled together with reference to its surrounding state
// Closure gives access to its outer functions scope from its inner scope
// Closure are created everytime when function is created, at function creation time
// Use - to have private variables

// Lexical scoping
// Scope refers to current context of your code it can either globally or locally
// defined
// variable defined outside a function can be accessible inside of another function
// defined after variable declaration but oppposite is not true variable defined in function
// will not be accessible outside

// var username = "Aishwarya";
// function local() {
//   console.log(username);
//   let surname = "Surwase";
// }
// console.log("Outside of local scope ", surname); // ReferenceError: surname is not defined
// local();

// console.log("Closures");

// ----

// function subscribe() {
//   var name = "Aishwarya";
//   function displayName() {
//     console.log("Name is", name);
//   }
//   displayName();
// }
// subscribe();
// ---

// function makeFunc() {
//   var name = "Chrome";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();
// ---
// Closure scope chain

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));
// ---
// let count = 0;
// (function printCount() {
//   if (count == 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();
// ---

// let count = 0;
// (function printCount() {
//   if (count == 0) {
//     var count = 1;
//     console.log(count);
//   }
//   console.log("outside", count); // undefined
// })();

// // ---
// const createBase = (base) => {
//   return function (num) {
//     console.log(base + num);
//   };
// };
// var addSix = createBase(6);
// addSix(10);
// addSix(21);
// addSix(27);
// ---
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(50);
// console.timeEnd("12");
// --

// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }
//   return function (ind) {
//     console.log(a[ind]);
//   };
// }
// console.time("6");
// find()(6);
// console.timeEnd("6");
// console.time("12");
// find()(50);
// console.timeEnd("12");
// --

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 0);
//   })(i);
// }

// for (var i = 0; i < 5; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 0);
//   }
//   inner(i);
// }

// --

// function Counter() {
//   let _count = 0; // Private variable
//   function increment() {
//     console.log("Count", _count);
//     return _count++;
//   }
//   function decrement() {
//     console.log("Count", _count);
//     return _count--;
//   }
//   function retrive() {
//     return "Count : ", _count;
//   }
//   return {
//     increment,
//     decrement,
//     retrive,
//   };
// }

// const Counter1 = new Counter();
// Counter1.increment();
// Counter1.increment();
// Counter1.increment();
// Counter1.increment();
// Counter1.decrement();
// Counter1.increment();
// console.log("Count", Counter1.count); // undefined
// console.log("Count", Counter1.retrive()); // 4

// // ---
// What is module patterns

// var Module = (function () {
//   function privateMethod() {
//     console.log("private method");
//   }
//   return {
//     publicMethod: function () {
//       console.log("public method");
//     },
//   };
// })();

// Module.publicMethod();
// Module.privateMethod();

// We can return public function and inside public
// function we can call private function but we can't access private function, variables
// outside. Private functions not returned, makes them inaccessible outside of the module namespace
// ---
// function likeTheVideo() {
//   let view,
//     called = false;
//   return function () {
//     view = "Roadside coder";
//     if (!called) console.log("Subscribe to", view);
//     called = true;
//   };
// }
// let o = likeTheVideo();
// o();
// o();
// o();
// --
// function once(fn, context) {
//   let called;
//   return function () {
//     if (called) {
//       return;
//     }
//     called = fn.apply(context || this, arguments);
//     return called;
//   };
// }

// const print = (a, b) => {
//   console.log("Print function called", a, b);
//   return "Called";
// };

// const o = once(print);
// o(1, 2);
// o(2, 3);
// o();
// o();
// o();
// ----
// function memoize() {
//   console.log("Memoize");
// }

// memoize();
// ---
// function memoize(fn, context) {
//   let cache = {};
//   return function (...args) {
//     let argStr = JSON.stringify(args);
//     if (!cache[argStr]) {
//       cache[argStr] = fn.call(context || this, ...args);
//     }
//     return cache[argStr];
//   };
// }
// const clumsyProduct = (num1, num2) => {
//   for (let i = 0; i < 1000000; i++) {}
//   return num1 * num2;
// };
// let memoized = memoize(clumsyProduct);
// console.time("First call");
// console.log(memoized(9678, 7689));
// console.timeEnd("First call");

// console.time("second call");
// console.log(memoized(9678, 6660));
// console.timeEnd("second call");

// console.time("second call");
// console.log(memoized(9678, 6660));
// console.timeEnd("second call");

// console.time("third call");
// console.log(memoized(9678, 7689));
// console.timeEnd("third call");
// -----
