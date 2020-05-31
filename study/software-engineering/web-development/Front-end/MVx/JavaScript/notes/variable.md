# Table of Contents
- [Table of Contents](#table-of-contents)
- [Mental modal](#mental-modal)
- [Difference between value](#difference-between-value)
- [const, let, var](#const-let-var)
  - [Scope](#scope)
    - [var scope](#var-scope)
    - [let scope](#let-scope)
    - [const scope](#const-scope)
  - [for loop](#for-loop)
    - [```const``` in for...in loops](#const-in-forin-loops)
  - [Async JavaScript](#async-javascript)
  - [Memory usage](#memory-usage)
  - [Reference](#reference)

# Mental modal
A wire that start from the ```name``` and points to the ```value```.
# Difference between value
- Variables are not values
- Variables point to values
# const, let, var
## Scope
The *scope* of a variable refers to where said variable can be accessed from & the newer ES6 declared variables have different scope than var provides.
### var scope
Var has *function scope*, which means that variable declared with var are accessible anywhere within the function they were declared in.
```javascript
const a = _ => {console.log(i); var i = 5;}
a();  // undefined
console.log(i) // Uncaught ReferenceError: i is not defined

console.log(j) // undefined
for (var j = 0; j < 2; j++) {console.log(j)} // 0 1
console.log(j);  // 2
```
### let scope
```let``` variable has *block scope*,meaning, just as it sounds, that they can only be accessed from inside of a block \{\} they were declared in.
```javascript
const a = _ => {console.log(i); let i = 5;}
a();  // undefined
console.log(i) // Uncaught ReferenceError: i is not defined

console.log(j) // Uncaught ReferenceError: i is not defined
for (let j = 0; j < 2; j++) {console.log(j)} // 0 1
console.log(j);  // Uncaught ReferenceError: i is not defined
```
### const scope
```javascript
const a = _ => {console.log(i); const i = 5;}
a();  // Uncaught ReferenceError: Cannot access 'i' before initialization
console.log(i) // Uncaught ReferenceError: i is not defined

console.log(j) // Uncaught ReferenceError: j is not defined
for (const j = 0; j < 2; j++) {console.log(j)} // 0   Uncaught TypeError: Assignment to constant variable.
console.log(j);  // Uncaught ReferenceError: j is not defined

console.log(k) // Uncaught ReferenceError: k is not defined
for (const k in [0,1,2]) {console.log(k)} // 0 1
console.log(k);  // Uncaught ReferenceError: k is not defined

```

## for loop
### ```const``` in for...in loops
**Const** is special, because variables defined with it are constants that can't be reassigned or redeclared. It is the safest option of all 3 declaration statements for this reason. It is recommended to use ```const``` to declare variables unless there is a specific reason to use the more lenient ```let``` or ```var```.

Let's look at the example
```javascript
let arr = [1,2,3,4]; 
for (const i = 0; i < arr.length; i++) {console.log(arr[i])}
// 1
// Uncaught TypeError: Assignment to constant variable

// To understand how it works, try to mutate the iterator.
// Although the iterator is multiplied by 2 each time at the end of the loop, on the next run through, the index printed is just the next sequential index in the array we looped through. At the end though, the block returns the last index multiplied by 2.
let arr0 = [1,2,3,4];
for(let i in arr0){
    console.log(i);
    i *= 2;
}
// 0 1 2 3 6

for (const i in arr0) {console.log(arr[i])} 
// 1 2 3 4
// Upon deeper inspection of these types of for loops, it seems that they create a new block scope with each iteration. That would mean that each new index is actually a new variable within a new scope & our constant is never reassigned.
```
## Async JavaScript

## Memory usage

## Reference
[var vs let vs const in JavaScript](https://tylermcginnis.com/var-let-const/)

[ES6 Variable Declaration & For Loops — Why ‘const’ works in a ‘for…in’ loop but not in a normal ‘for’ loop](https://medium.com/@mautayro/es6-variable-declaration-for-loops-why-const-works-in-a-for-in-loop-but-not-in-a-normal-a200cc5467c2)

