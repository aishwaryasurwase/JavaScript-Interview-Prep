// // Synchronous and Asynchronous

// // Synchronous
// console.log("START");
// console.log("HELLO Aishwarya");
// console.log("END");

// // Asynchronous

// console.log("START");
// setTimeout(() => {
//   console.log("WELCOME AISHWARYA");
// }, 1000);
// console.log("END");

// ---

// console.log("START");
// function importantAction(username) {
//   setTimeout(() => {
//     return "Hello, " + username;
//   }, 1000);
// }
// const message = importantAction("Yesha");
// console.log(message);
// console.log("STOP");
// ---
// const cb = (value) => {
//   console.log(value);
// };
// console.log("START");
// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb("Hello, " + username);
//   }, 1000);
// }
// const message = importantAction("Yesha", cb);

// console.log("STOP");
// // ---

// console.log("START");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb("Hello, " + username);
//   }, 1000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 1000);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Share the ${video} video`);
//   }, 1000);
// }

// importantAction("Yesha", (message) => {
//   console.log("importantAction -  ", message);
//   likeTheVideo("React", (message1) => {
//     console.log("likeTheVideo inside - ", message1);
//     shareTheVideo("JAVASCRIPT ", (message2) => {
//       console.log("shareTheVideo ", message2);
//     });
//   });
// });

// // likeTheVideo("React", (message1) => {
// //   console.log("likeTheVideo outside - ", message1);
// // });

// console.log("STOP");
// ---

// console.log("START");
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 1000);
// });
// p.then((res) => {
//   console.log("RESOLVE", res);
// }).catch((err) => {
//   console.log("REJECT", err);
// });

// console.log("END");

// ----

// console.log("START");

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve("Hello, " + username);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return reject(`Like the ${video} video`);
//     }, 1000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// importantAction("Yesha")
//   .then((message) => {
//     console.log("importantAction -  ", message);
//     return likeTheVideo("React");
//   })
//   .then((message1) => {
//     console.log("likeTheVideo inside - ", message1);
//     return shareTheVideo("JAVASCRIPT ");
//   })
//   .then((message2) => {
//     console.log("shareTheVideo ", message2);
//   })
//   .catch((err) => {
//     console.log("ERROR ", err);
//   });

// console.log("STOP");
// ----
