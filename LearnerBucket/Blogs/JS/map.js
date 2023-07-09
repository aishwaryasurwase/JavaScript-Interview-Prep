// // Before ES6

// var map = {};
// // map.foo = "bar";

// // // retrieving a value
// // let value = map.foo;
// // console.log(value);

// // map[5] = "bar";
// // console.log(map[5]);
// // Object internally converts anything to string to store the values.
// // So the numeric 5 is converted to "5".Thus we cannot use numeric key.

// // The same happens when we use objects as the key.

// // var key = {};
// // var key2 = {};
// // map[key] = "Yesha";
// // console.log(map[key2]); //Yesha

// // map.foo = false;
// // // checking for the existence of "foo" or a nonzero value?
// // if (map.foo) {
// //   console.log("Inside of foo");
// // }

// // After ES6

// Maps are ordered list of key value pair where key as well as value can be of any type.
// let map = new Map();
// map.set(5, "Yesha");
// map.set("5", "Surwase");
// map.set("age", 25);
// console.log(map.size); // 3
// console.log(map.get(5)); // 'Yesha'
// console.log(map.get("5")); // 'Surwase'
// console.log(map);

// let map2 = new Map([
//   ["name", "Aish"],
//   ["age", 25],
// ]);
// console.log(map2);
// console.log(map2.size); // 2
// console.log(map2.get("name")); // Aish

// ---

// let key1 = {};
// let key2 = {};
// map.set(key1, "Yesha");
// map.set(key2, "Surwase");
// console.log(map.size); // 2
// console.log(map.get(key1)); // 'Yesha'
// console.log(map.get(key2)); // 'Surwase'
// ---

// let map = new Map();
// map.set(1, "yesha");
// map.set(2, "anil");
// map.set(3, "taha");
// map.set(4, "ankit");
// map.set(4, "ankit"); //ignores the duplicate values
// map.set("4", "aish");
// map.set("fullname", "My name is Yesha");
// map.set(undefined, 20);
// map.set(null, 40);
// let key = { a: 0, b: 1 };
// map.set(key, 25);
// let key2 = function () {};
// map.set(key2, 27);
// map.set(null, 23);
// // console.log(map.size); // 10

// console.log(map);

// console.log(map.has(key)); // true
// console.log(map.has(null)); // true
// console.log(map.has(key2)); // true
// console.log(map.has(0)); // false

// console.log(map.get(key)); // 25
// console.log(map.get(null)); // 23
// console.log(map.get(0)); // undefined

// map.delete(key);
// map.delete(null);

// console.log(map.has(key)); // false
// console.log(map.has(null)); // false

// map.forEach((value, key, ownerMap) => {
//   console.log(key + " " + value);
//   console.log(ownerMap === map);
// });

// for (const [key, val] of map) {
//   console.log(key, val);
// }

// for (let [key, value] of map.entries()) {
//   console.log(key + " = " + value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// ----

// // In weakMap every key must be object, inserting an non-object will result in error.
// let key1 = {},
//   key2 = {};
// let weakMap = new WeakMap([
//   [key1, "prashant"],
//   [key2, 23],
// ]);
// console.log(weakMap.has(key1)); // true
// console.log(weakMap.get(key1)); // "prashant"
// console.log(weakMap.has(key2)); // true
// console.log(weakMap.get(key2)); // 23

// let dad = { name: "Daddy" };
// let mom = { name: "Mommy" };

// const map = new Map();
// const weakMap = new WeakMap();

// map.set(dad, 1);
// weakMap.set(mom, 2);

// // dad = null;
// // mom = null;

// console.log(map);
// console.log(weakMap);
// const wm = weakMap.values();
// const wm = map.values();

// console.log(wm.next().value);
// As we can see we mom was garbage collected when we set its value to null while dad is still present.
// ---
// Difference between Maps and WeakMaps
// WeakSets can use objects as key unlike the Maps.
// Passing non-objects as key will result in error.
// The has(key) and delete(key) method returns false for non-object.
// They have only four methods has(key), delete(key), get(key), set(key, value).
// WeakMaps are not Iteratable.

// --
