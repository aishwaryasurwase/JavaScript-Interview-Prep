// {
//   var a = 10;
// }
// console.log(a);
// --

// {
//   let a = 10;
// }
// console.log(a); // ReferenceError: a is not defined

// --
// {
//   const a = 10;
// }
// console.log(a); // ReferenceError: a is not defined
// // --

// {
//   const a = 10;
//   a = 20;
//   console.log(a); // TypeError: Assignment to constant variable.
// }
// // --

// function a() {
//   var b = 10;
// }
// a();
// console.log(b); // ReferenceError: b is not defined

// ---
// function a() {
//   console.log(b); // undefined
//   var b = 10;
// }
// a();
// // ----

// function a() {
//   console.log(b); // ReferenceError: cannot accesss 'b' before initialization
//   let b = 10;
// }
// a();
// ---

// ways to define functions
// value of "this" is determined the way function is invoked
// function a() {}
// const a = function () {};
// (function () {})();
// const a = {
//     b: function(){} // method
// }
// a();
// ---

// function a() {
//   console.log(this); // window - global object
// }
// a();
// ---

// function a() {
//   this.b = 1;
//   console.log(this); // window - global object
// }
// a();
// console.log(b);
// --

// function a() {
//   "use strict";
//   console.log(this); // undefined
// }
// a();

// --
// Constructor invokation

// function A() {
//   console.log(this); // {}
// }
// let a = new A();
// let b = new A();
// console.log(a === b);

// ----

// function A() {
//   "use strict"
//   console.log(this); // {}
// }
// let a = new A();
// let b = new A();
// console.log(a === b); // false
// ---

// const a = {
//   abc: function () {
//     // refers to parent object
//     console.log(this); // a
//   },
// };

// a.abc();
// --

// const a = {
//   abc: function () {
//     console.log(this); // window
//   },
// };

// const b = a.abc;
// b();
// // --

// const a = {
//   abc: function () {
//     function inner() {
//       console.log(this); // window
//     }
//     inner(); // invoked as a normal function so that its refer to window
//   },
// };

// a.abc();
// // --
// const a = {
//   abc: function () {
//     const inner = () => {
//       // in arrow function does not have this keyword so that it refers to nearest parent
//       console.log(this); // a
//     };
//     inner(); //
//   },
// };

// a.abc();
// ---

// const a = {
//   abc: function () {
//     function inner() {
//       // in arrow function does not have this keyword so that it refers to nearest parent
//       console.log(this); // a
//     }
//     inner.call(this); //
//   },
// };

// a.abc();
// ---

// const a = {
//   abc: function () {
//     const inner = () => {
//       // in arrow function does not have this keyword so that it refers to nearest parent
//       console.log(this); // a
//     };
//     inner(); //
//   },
// };

// a.abc();
// ---

// const a = {
//   abc: function () {
//     function inner(x) {
//       // in arrow function does not have this keyword so that it refers to nearest parent
//       console.log(this, "X: ", x); // a
//     }
//     inner.apply(this, [10]); //
//   },
// };

// a.abc();

// ----

// const a = {
//   abc: function () {
//     function inner(x) {
//       // in arrow function does not have this keyword so that it refers to nearest parent
//       console.log(this, "X: ", x); // a
//     }
//     const c = inner.bind(this); //
//     c("Aishwarya"); //
//     c("Surwase"); //
//   },
// };

// a.abc();
// // ---
// function outer() {
//   let a = 10;
//   return function inner() {
//     console.log(a);
//     a += 10;
//   };
// }

// let o = outer();
// o();
// o();
// o();
// o();
// ---

// function outer() {
//   let a = [];
//   return function inner(val) {
//     if (a.length === 4) return a.reduce((acc, el) => acc + el, 0);
//     else {
//       a.push(val);
//       return inner;
//     }
//   };
// }

// let child = outer();
// const result = child(1)(2)(3)(4)();
// console.log("Currying ", result);
// ----
// function a(x, y = 10) {
//   console.log(x, y);
// }
// a(10);
// function a(x, y = x) {
//   console.log(x, y);
// }
// a(10);
// function a(x, y = x) {
//   console.log(x, y);
// }
// a();
// ----

// const arr = [1, 2, 3];
// const [first, , third] = arr;
// console.log("First ", first, third);
// ---
// const arr = [1, 2, 3];
// const [first, ...rest] = arr;
// console.log("First ", first, rest);
// // ---
// const arr = [1, 2, 3];
// const obj = { ...arr };
// console.log("object", obj);
// // ---

// const arr = [1, 2, 3];
// Array.prototype.find = function (val) {
//   return this.includes(val);
// };
// console.log(arr.find(30));

// ---
// const a = { b: "AISH" };

// console.log(a.b && "SURWASE"); // SURWASE
// console.log(a.c && "SURWASE"); // undefined

// console.log(a.b || "SURWASE"); // AISH
// console.log(a.c || "SURWASE"); // SURWASE
// --

// const a = { b: null };
// console.log(a.b ?? "SURWASE"); // SURWASE
// console.log(a.c ?? "SURWASE"); // SURWASE
// // ----

// const a = { b: false };
// console.log(a.b && "SURWASE"); // false
// console.log(a.c && "SURWASE"); // undefined
// ---

// const test = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// // test(1000).then(
// //   (data) => {
// //     console.log("RESOLVED", data);
// //   },
// //   (err) => {
// //     console.log("ERROR", err);
// //   }
// // );
// // test(1000)
// //   .then((data) => {
// //     console.log("RESOLVED", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR", err);
// //   });

// async function func() {
//   try {
//     const promise = await test(1000);
//     console.log("PROMISE", promise);
//     console.log("HELOO AISHWARYA"); // after await response
//   } catch (err) {
//     console.log("ERROR", err);
//   }
// }

// func();
// ---

// const test = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// console.log("HELLO AISHWARYA");
// test(1000)
//   .then((data) => {
//     console.log("RESOLVED", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("BYE AISHWARYA");
// ---

// // Await always return promise
// const test = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// async function func() {
//   try {
//     const promise = await test(1000);
//     return promise;
//   } catch (err) {
//     console.log("ERROR", err);
//   }
// }

// console.log(func());
// func()
//   .then((val) => console.log("VAL", val))
//   .catch((err) => console.log("ERR", err));
