// https://learnersbucket.com/tutorials/es6/sets/
// Sets

// Sets are the unique collections of values of any types,
// Which also includes NaN and undefined.
// var set = {};
// var key = {};
// set[25] = "prashant";
// set[key] = 5;
// console.log(set);
// console.log(set["25"]); // prashant
// console.log(set[key]); // 5
// ---

// let set = new Set();
// set.add(25);
// set.add("25");

// let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
// let set3 = new Set("Yesha");

// console.log(set); // {25, "25"}
// console.log(set.size); // 2

// console.log(set2.size); // 8
// console.log(set3.size); // 5 ["Y", 'e', "s", "h", "a"]
// console.log(set2.keys());
// console.log(set2.values());
// ---

// let set = new Set();
// let key = {};
// let key2 = {};
// set.add(key);
// set.add(key2);

// console.log(set); // { {}, {}}
// console.log(set.size); // 2
// // ----
// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(4); //ignores the duplicate values
// set.add("4");
// set.add("My name is Yesha surwase");
// set.add(undefined);
// set.add({ a: 0, b: 1 });
// set.add(null);
// // console.log(set.size); // 9
// // ---

// // console.log(set.has(5)); // false
// // console.log(set.has(4)); // true

// console.log(set.size); // 9

// set.delete(null); // Remove null
// console.log(set.size); // 8

// set.clear(); // Remove all items
// console.log(set.size); // 0
// ---
// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.forEach((e) => console.log(e));
// for (let el of set) {
//   console.log(el);
// }
// ----
// &&&&&&&&&
// let set = new Set();
// set.add(1);
// set.add("yesha");
// set.add({ a: 1, b: 2, c: 3, d: 4 });

// for (let item of set.keys()) {
//   console.log(item);
// }
// // 1
// // yesha
// // {a: 1, b: 2, c: 3, d: 4}

// for (let item of set.values()) {
//   console.log(item);
// }
// // 1
// // yesha
// // {a: 1, b: 2, c: 3, d: 4}

// for (let [key, value] of set.entries()) {
//   console.log(key, value);
// }
// ---
// &&&&&&&&&
// let set = new Set();
// set.add(1);
// set.add("Yesha");
// set.add({ a: 1, b: 2, c: 3, d: 4 });

// // using `.next()`
// const iterator = set.values();
// console.log(iterator.next().value);
// // 1

// // console.log(iterator.next().value);
// // // Yesha

// // console.log(iterator.next().value);
// // // {a: 1, b: 2, c: 3, d: 4}
// ---
// &&&&&&&&&
// A WeakSet is same as the Set except it can only store objects.
// let user = { name: "Yesha", age: 25 };
// let user1 = { name: "Aish", age: 23 };
// let user2 = { name: "Sanu", age: 26 };
// let users = new WeakSet();
// users.add(user);

// users.add(user1);
// users.add(user2);

// console.log(users);
// users = null;
// console.log("After null", users);

// WeakSets can only store objects unlike the Sets.
// The add() method throws error when non-oject item is passed to the WeakSet.
// The has() and delete() method returns false for non-object.
// WeakSets are not Iteratable.
// They do not have size and foreach as well.

// ---
// users.add(0); // TypeError: Invalid value used in weak set
// --
// console.log(users.has(1));
// console.log(users.delete(1));
// // ---
// console.log(users.has(user));
// ---
// console.log(users.size); // undefined
// &&&&&&&&&
