const foo = { name: "John", age: 20, nervous: false };
const bar = { name: "Matt", age: 34, nervous: true };
const baz = { name: "Sheldon", age: 28, nervous: false };



/** BAD CODE - debugging **/

console.log(foo);
console.log(bar);
console.log(baz);
 


/** GOOD CODE - debugging **/

console.log('%c My fellas', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });

/** OR - this is so useful **/

console.table([foo, bar, baz]);


// console.time

console.time('looper')

let i = 0;
while (i < 1000000) { i++ }

console.timeEnd('looper')