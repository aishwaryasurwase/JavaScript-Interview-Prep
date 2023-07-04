// //  map
// const nums = [1, 2, 3, 4, 5];
// const multiyByThree = nums.map((el, ind) => el * 3 + ind);
// console.log("Multiply by three", multiyByThree);

// // filter

// const nums = [1, 2, 3, 4, 5];
// const evenNums = nums.filter((el, ind) => el % 2 === 0);
// console.log("Even numbers - ", evenNums);

// // reduce
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((acc, el) => acc + el, 0);
// console.log("SUM ", sum);

// ---

// // Polyfill for map
// Array.prototype.myMap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     let ans = cb(this[i], i, this);
//     result.push(ans);
//   }
//   return result;
// };
// const nums = [1, 2, 3, 4, 5];
// const mulitplyByTwo = nums.myMap((el) => el * 2);
// console.log("Multiply by two", mulitplyByTwo);

// ----

// // Polyfill for filter
// Array.prototype.myFilter = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     let ans = cb(this[i], i, this);
//     if (ans) result.push(this[i]);
//   }
//   return result;
// };
// const nums = [1, 2, 3, 4, 5];
// const oddNums = nums.myFilter((el) => el % 2 === 1);
// console.log(oddNums);

// ----

// // Polyfill for reduce
// Array.prototype.myReduce = function (cb, initialVal) {
//   let acc = initialVal;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };
// const nums = [1, 2, 3, 4, 5];

// // const sum = nums.myReduce((acc, el, ind, nums) => acc + el);
// const product = nums.myReduce((acc, el, ind, nums) => acc * el, 1);
// // console.log(sum);
// console.log(product);

// ----

// Map vs forEach
// const arr = [1, 2, 3, 4, 5, 6];
// MAp will return new array.
// const addTwo = arr.map((el) => el + 2);

// Modify existing array

// const addTwo1 = arr.map((el, i, arr) => {
//   arr[i] = arr[i] + 5;
//   return el + 2;
// });
// console.log(addTwo1);
// console.log(arr);

// We can modify original array in case of for each
// const forEach1 = arr.forEach((el, i) => (el[i] = el[i] + 2));
// console.log("for each", forEach1);

// Using map we can chain other methods
// console.log(arr.map((el) => el + 2).filter((el) => el > 5));
// ---

// let students = [
//   {
//     name: "Piyush",
//     rollNumber: 31,
//     marks: 80,
//   },
//   {
//     name: "Jenny",
//     rollNumber: 15,
//     marks: 69,
//   },
//   {
//     name: "Kaushal",
//     rollNumber: 16,
//     marks: 35,
//   },
//   {
//     name: "Dilpreet",
//     rollNumber: 7,
//     marks: 55,
//   },
// ];

// Returns the name of students in capital letters
// let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }
// console.log("Captital names ", names);

// const capsNames = students.map((el) => el.name.toUpperCase());
// console.log("Capital letters names ", capsNames);

// ---

// Return only details of studends who scored more than 60
// const scoreMoreThan60 = students.filter((student) => student.marks > 60);
// console.log("Students who scored more than 60", scoreMoreThan60);

// ---
// // Return marks more than 60 and roll number greater than 15
// const details = students.filter(
//   (student) => student.marks > 60 && student.rollNumber > 15
// );
// console.log("Details ", details);
// ---
// Sum of marks of all students

// const totalMarks = students.reduce((acc, el) => acc + el.marks, 0);
// console.log("Total marks", totalMarks);
// ---
// Return only names of students who scored more than 60
// const scoreMoreThan60 = students
//   .filter((student) => student.marks > 60)
//   .map((student) => student.name);

// console.log("Students who scored more than 60 names", scoreMoreThan60);
// ---
// Return total marks for students with marks greater than 60 after
// 20 marks have been added to those who scored less than 60

// const totalMarks = students
//   .map((student) => {
//     if (student.marks < 60) {
//       student.marks += 20;
//     }
//     return student;
//   })
//   .filter((student) => student.marks > 60)
//   .reduce((acc, el) => acc + el.marks, 0);

// console.log("totalMarks", totalMarks);
