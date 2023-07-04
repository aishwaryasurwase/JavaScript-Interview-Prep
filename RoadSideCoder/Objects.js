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
// const user = { name: "Aishwarya", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);
// console.log((1 === 1) === 1);
// ---

// const settings = {
//   username: "Aishwarya",
//   level: 19,
//   health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);
// ---

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN
// // ---
// let user = {
//   name: "Aishwarya",
//   age: 24,
//   fullName: {
//     firstName: "Aishwarya",
//     lastName: "Surwase",
//   },
// };

// const {
//   fullName: { lastName },
// } = user;
// console.log("LastName", lastName);
// // ---

// function getItems(fruitsList, ...args, favoriteFruit) {
//   // SyntaxError: Rest parameter must be last formal parameter
//   return [...fruitsList, ...args, favoriteFruit];
// }
// console.log(getItems(["Banana", "Apple"], "Pear", "Orange"));
// ---
// let c = {
//   greeting: "Hey!!",
// };
// let d;
// d = c;
// c.greeting = "Hellooo";
// console.log(d); // {greeting: "Hellooo"}
// // ---
// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false
// ---
// let person = {
//   name: "Aish",
// };
// const members = person;
// // const members = [person];
// person = null; // We are modifying complete variable not property inside it
// console.log(person);
// console.log(members);
// --

// let person = {
//   name: "Aish",
// };
// const members = [person];
// // const members = [person];
// person.name = null;
// console.log(person);
// console.log(members);
// --
// let a = { b: 2 };
// let c = a;
// a = null;
// console.log(c);
// ---

// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply(); // 20
// multiply(); // 20
// multiply(value); // 20
// multiply(value); // 40

// --
// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   };
//   return person;
// }

// const person1 = {
//   name: "Alex",
//   age: 30,
// };
// const person2 = changeAgeAndReference(person1);
// console.log(person1); //  {
// //   name: "Alex",
// //   age: 25,
// // };
// console.log(person2); // {
// //     name: "John",
// //     age: 50,
// //   }
// --
// Shallow copy and deep copy

// Shallow copy - When we copy an object to another object but that particular object
// the other object has still got the reference to at least some of the properties of the original object
// When object hold the reference to another object this is called shallow copy, but we complete clone a object i
// into other object without any reference that is called deep copy, so we dont have any
// references to original object

// // Deep copy
// const user = {
//   name: "Aishwarya",
//   age: 24,
//   fullName: {
//     firstName: " Aish",
//     lastName: "Surwase",
//   },
// };
// // const cloneObj = Object.assign({}, user);
// // const cloneObj = JSON.parse(JSON.stringify(user));
// const cloneObj = { ...user };
// cloneObj.fullName.firstName = "Sanu";

// console.log("User", user);
// console.log("Clone obj", cloneObj);
