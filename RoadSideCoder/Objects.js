// Objects
// An object is a collection of properties, and a property is an associated between a key and a value.
// A property value can be a function, in which case the property is known as a method.
// const user = {
//   name: "Aishwarya",
//   age: 24,
// };

// console.log(user.name);
// --
// const func = (function (a) {
//   delete a; // a is local variable delete keyword only work when we want to delete property from object
//   return a;
// })(5);
// console.log(func); // 5
// --

// const user = {
//   name: "Aishwarya",
//   age: 24,
// };
// const func = (function (user) {
//   delete user.age;
//   return user;
// })(user);

// console.log(func); // {name: "Aishwarya"}
// // ---
// const property = "username";
// const name = "Aishwarya";
// const user = {
//   [property]: name,
//   age: 24,
// };
// console.log(user); // {name: "Aishwarya", age: 24}
// // ---
// const user = {
//   name: "Aishwarya",
//   age: 24,
//   city: "Osmanabad",
// };

// for (let key in user) {
//   console.log("Key", key, user[key]);
// }
// ---
// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(obj); // {a: "three", b: "two"}
// ---
// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };
// for (let key in nums) {
//   if (typeof nums[key] === "number") {
//     nums[key] = nums[key] * 2;
//   }
// }

// console.log("Nums ", nums);
// ---
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]); // 456
// console.log(a); // { '[object Object]': 456 }
// -----
// console.log([..."Aishwarya"]);
// ---
const user = { name: "Aishwarya", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
console.log((1 === 1) === 1);
