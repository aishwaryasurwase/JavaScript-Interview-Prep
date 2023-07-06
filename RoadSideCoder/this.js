// this.a = 4;
// console.log(this.a); // in case of browser it will point to window

// // const getValue = function () {
// //   console.log(this.a);
// // };

// // getValue();
// const getValue = () => {
//   console.log(this.a);
// };

// getValue();
// // ---
// const name = "Aish";
// const age = 25;

// const user = {
//   name: "Aishwarya",
//   age: 24,
//   address: "Obd",
//   child: {
//     name: "Abhi",
//     age: 4,
//     getChildDetails() {
//       console.log("this ", this.name, this.age, this.address); // Abhi 4 undefined
//     },
//   },
//   getDetails() {
//     console.log("this ", this.name, this.age);
//   },
//   getInfo: () => {
//     console.log("this ", this.name, this.age);
//   },
//   userInfo() {
//     const getUserInfo = () => {
//       console.log("this getUserInfo", this.name, this.age); // this keyword value in case of arrow function cames from its parent function
//       // it will take reference of this from that function itself that is the parent of that funciton
//     };
//     getUserInfo();
//   },
// };
// user.child.getChildDetails();
// user.getInfo();
// user.userInfo();
// ---
// class User {
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }

// const aish = new User("Aish");
// const sanu = new User("Sanu");
// aish.getName();
// sanu.getName();
// ---
// const user = {
//   firstName: "Aishwarya",
//   getName() {
//     const firstName = "Yesha";
//     return this.firstName;
//   },
// };

// console.log(user.getName()); // Aishwarya
// ---

// function makeUser() {
//   return {
//     name: "Aish",
//     ref: this,
//   };
// }

// const user = makeUser();
// console.log(user.ref.name);
// function makeUser() {
//   return {
//     name: "Aish",
//     ref() {
//       return this;
//     },
//   };
// }

// const user = makeUser();
// console.log(user.ref().name);
// ---
// const user = {
//   name: "Yesha Surwase",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000);
// ---

// const user = {
//   name: "Yesha Surwase",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(function () {
//   user.logMessage();
// }, 1000);
// // --
// const user = {
//   name: "Yesha",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}`;
//   },
// };
// console.log(user.greet());
// console.log(user.farewell());
// --
// create an object calculator
// let calculator = {
//   first: 0,
//   second: 0,
//   read() {
//     this.first = +prompt("Please enter first value");
//     this.second = +prompt("Please enter second value");
//   },
//   sum() {
//     return this.first + this.second;
//   },
//   mul() {
//     return this.first * this.second;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// ---
// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback);
// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };

// object.method(callback, 2, 3);
// ---

// Implement calc
const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
  divide(num) {
    this.total /= num;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
