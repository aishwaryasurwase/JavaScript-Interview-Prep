// https://learnersbucket.com/tutorials/es6/functions-with-default-parameters/

// function increment(value, by = 1) {
//   return value + by;
// }

// console.log(increment(2, 2)); // 4
// console.log(increment(2)); // 3

// &&&&&&&&&&
// // The default value is assigned only to the undefined
// // parameters not to the other falsy values.
// &&&&&&&&&&

// function increment(value, by = 1) {
//   return value + by;
// }

// console.log(increment(2, 2));
// console.log(increment(2, undefined));
// console.log(increment(2));
// console.log(increment(2, ""));
// console.log(increment(2, null));
// // 4
// // 3
// // 3
// // 2
// // 2
// ---

// &&&&&&&&&&
// We could also set default parameters to be function, arrays and objects in javascript.
// &&&&&&&&&&

// function store(num = add(1), b = [], c = {}) {
//   b.push(num);
//   // b = [2]
//   c[num] = b; // {2: [2]}
//   return c;
// }

// function add(num) {
//   return num + 1;
// }

// console.log(store());
// ---------
// We can also set the existing parameters as the default value.
// The left parameters can be used as default parameters for its right parameters.
// function double(first, second = first) {
//   return first + second;
// }

// console.log(double(10)); // 20
// --

// Default values are evaluated at call time.
// Every time a new object is created when the function is called.
// function store(num, arr = []) {
//   arr.push(num);
//   return arr;
// }

// console.log(store(10)); // [10]
// console.log(store(11)); // [11]
// --

// function add(num) {
//   return num + 1;
// }

// function increment(value = add(1)) {
//   return value;
// }

// console.log(increment()); //2
// console.log(increment()); //2
// --
// function test(inp) {
//   console.log(arguments);
//   console.log(inp === arguments[0]);
//   inp = "different";
//   console.log(inp, arguments);
//   console.log(inp === arguments[0]);
// }

// test();
// // ---
// let calculate = (quantity, price = 10, tax = 0.15) => {
//   return quantity * price * tax;
// };

// console.log(calculate(10)); // 10*10*0.15 = 15
// console.log(calculate(10, 11)); // 10 *11*0.15 = 16.5
// console.log(calculate(10, undefined, 0.25)); // 10*10*0.25 =
