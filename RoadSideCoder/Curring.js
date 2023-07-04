// Currying

// Currying is a function which takes one argument at a time and return new
// function expecting next argument. It is conversion of functions from callable as this f(a, b)
// into callable as this  f(a)(b)

// Curried functions are constructed by chaining closu

// function f(a, b) {
//   console.log("F", a, b);
// }

// f(1, 2);

// function f1(a1) {
//   return function (b1) {
//     console.log("F1, ", a1, b1);
//   };
// }

// f1(1)(2);
// ---

// Why should we use currying?

// Avoid passing same variable again and again
// To create Higher order function
// To make function pure and less error prone

// ---
// Implement sum function

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1));
// ----

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     else return a;
//   };
// }
// console.log(sum(2)(6)(1)());
// ---

// function sum(...a) {
//   a = a.reduce((acc, el) => acc + el);
//   return function (...b) {
//     if (b.length > 0) {
//       b = b.reduce((acc, el) => acc + el);
//       return sum(a + b);
//     } else return a;
//   };
// }
// console.log(sum(2)(6)(1)(2)());
// console.log(sum(2, 6, 2)(1, 0, 4)(2)());
// ---

// function evaluate(fn) {
//   switch (fn) {
//     case "sum":
//       return function (a) {
//         return function (b) {
//           return a + b;
//         };
//       };
//     case "multiply":
//       return function (a) {
//         return function (b) {
//           return a * b;
//         };
//       };
//     case "divide":
//       return function (a) {
//         return function (b) {
//           return a / b;
//         };
//       };
//     case "substract":
//       return function (a) {
//         return function (b) {
//           return a - b;
//         };
//       };
//   }
// }
// ---

// function evaluate(fn) {
//   let op;
//   if (fn === "sum") {
//     op = "+";
//   } else if (fn === "multiply") {
//     op = "*";
//   } else if (fn === "divide") {
//     op = "/";
//   } else if (fn === "substract") {
//     op = "-";
//   }
//   return function (a) {
//     return function (b) {
//       return eval(`${a}${op}${b}`);
//     };
//   };
// }
// function evaluate(fn) {
//   return function (a) {
//     return function (b) {
//       if (fn === "sum") return a + b;
//       else if (fn === "multiply") return a * b;
//       else if (fn === "divide") return a / b;
//       else if (fn === "substract") return a - b;
//       else return "Invalid operation";
//     };
//   };
// }
// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));
// console.log(evaluate("substrac")(4)(2));
// ---
// Currying vs Partial application
// Curring - No of nested functions curried functions has depends on no of arguments its received
// Partial application
// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5, 6));
// console.log(sum(10)(5, 6));
// This function expect three arguments and receive two functions - Partial application
// Transform a function into another function with small no of arguments

// ---
// Real world scenario while developing currying - Manipulate dom
// convert f(1,2,3) to f(1)(2)(3)
// function curry(func) {
//   return function curriedFunc(...param) {
//     if (param.length >= func.length) {
//       return func(...param);
//     } else {
//       return function (...next) {
//         return curriedFunc(...param, ...next);
//       };
//     }
//   };
// }

// let sum = (a, b, c) => a + b + c;
// let totalSum = curry(sum);
// // console.log(totalSum(1, 2, 3, 4));
// console.log(totalSum(1)(2)(3));
// ---
