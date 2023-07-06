// Template Strings
// https://learnersbucket.com/tutorials/es6/template-literals/

// Template Literals are strings literals which allow embedded expressions.
// Multiline strings
// Basic string formatting: Use varaibles as sub parts of the string.
// HTML escaping: Safely insert string into a HTML by transforming it.

// let a = `line will break after this
//     line broke before backslah
//     broke again`;
// console.log(a);
// --

// let b = 4;
// let a = `Two plus Two is ${b}`;
// console.log(a); // Twp plus Two is 4
// ---

// let b = 4;
// let a = `Two plus Two is ${b + b}`;
// console.log(a); // Twp plus Two is 4
// --

// let firstName = "Aishwarya";
// let lastName = "Surwase";
// console.log(`Hello! ${`My name is ${firstName} ${lastName}`}`);
// console.log(`Hello! My name is ${firstName} ${lastName}`);
// //Hello! My name is Aishwarya Surwase
// --
// let a = 5;
// console.log(`a is greater than 5 ${a > 5 ? true : false}`);
// //a is greater than 5?. false
// --
// let a = () => 5;
// console.log(`a is greater than 5?. ${a() > 5 ? true : false}`);
// //a is greater than 5?. false
// --

// let a = (i) => i > 5;
// let b = 6;
// console.log(`a is greater than 5?. ${a(b)}`);
// //a is greater than 5?. true
// ---

// The first argument of a tag function contains an array of string values.
// The remaining arguments are related to the expressions.
// The function name can be anything that we want.

// let a = 5;
// function square(strings, value1) {
//   let str = strings[0]; //Square of
//   let str2 = strings[1]; // is
//   let num = value1; //${a} = 5;
//   return `${str} ${num} ${str2} ${num * num}`;
// }

// let output = square`Square of ${a} is`;
// console.log(output);
// //Square of  5  is 25
