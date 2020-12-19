# Table of Contents
- [Table of Contents](#table-of-contents)
- [Object](#object)
  - [General topics](#general-topics)
    - [Everything is an object?](#everything-is-an-object)
    - [Property](#property)
      - [Writable or non-writable?](#writable-or-non-writable)
  - [```Object```](#object-1)
    - [```Object.__proto__```](#object__proto__)
    - [```Object.defineProperty```](#objectdefineproperty)
    - [```Object.hasOwnProperty```](#objecthasownproperty)
    - [```Object.isPrototypeOf```](#objectisprototypeof)
    - [```Object.propertyIsEnumerable```](#objectpropertyisenumerable)
    - [```Object.get __proto__```](#objectget-__proto__)
    - [```Object.set __proto__```](#objectset-__proto__)
    - [```Object.keys()```](#objectkeys)
  - [Array](#array)
    - [```Array```](#array-1)
      - [```Array.from()```](#arrayfrom)
        - [Mental model](#mental-model)
        - [Behaviour check](#behaviour-check)
      - [```Array.of()```](#arrayof)
        - [Mental model](#mental-model-1)
        - [Behaviour check](#behaviour-check-1)
        - [Resources](#resources)
  - [window](#window)
  - [document](#document)
  - [Map](#map)
    - [What is ```Map```?](#what-is-map)
    - [Map essentials](#map-essentials)
    - [Basic operations](#basic-operations)
      - [has](#has)
      - [get](#get)
      - [set](#set)
    - [Reference](#reference)
  - [Date](#date)
    - [What is a JavaScript date?](#what-is-a-javascript-date)
    - [What is UTC?](#what-is-utc)
    - [Headsups](#headsups)
    - [Usage](#usage)
      - [Create a ```Date()``` object](#create-a-date-object)
        - [Syntax](#syntax)
    - [Reference](#reference-1)
- [Function](#function)
  - [```this```](#this)
  - [Function.name](#functionname)
  - [Higher order function](#higher-order-function)
    - [```Array.prototype.map()```](#arrayprototypemap)
      - [Usage](#usage-1)
      - [Resources](#resources-1)
    - [```Array.prototype.filter()```](#arrayprototypefilter)
      - [Mental model](#mental-model-2)
    - [Syntax](#syntax-1)
    - [```Array.prototype.reduce```](#arrayprototypereduce)
      - [Mental model](#mental-model-3)
    - [``` Array.prototype.fill()```](#-arrayprototypefill)
      - [Mental model](#mental-model-4)
    - [``` Array.prototype.splice()```](#-arrayprototypesplice)
      - [Mental model](#mental-model-5)
    - [``` Array.prototype.forEach()```](#-arrayprototypeforeach)
      - [```forEach``` parallel execution](#foreach-parallel-execution)
      - [Mental model](#mental-model-6)
    - [``` Array.prototype.findIndex()```](#-arrayprototypefindindex)
    - [``` Array.prototype.concat()```](#-arrayprototypeconcat)
    - [``` Array.prototype.join()```](#-arrayprototypejoin)
    - [``` Array.prototype.reverse()```](#-arrayprototypereverse)
    - [```Function.prototype.apply()```](#functionprototypeapply)
    - [```Function.prototype.bind()```](#functionprototypebind)
      - [Mental model](#mental-model-7)
      - [Resource](#resource)
    - [```Function.prototype.call()```](#functionprototypecall)
  - [Methods](#methods)
    - [User defined Methods](#user-defined-methods)
  - [Function currying](#function-currying)
    - [Callback function and OOP](#callback-function-and-oop)
    - [Callback function and FP](#callback-function-and-fp)
  - [Function closure](#function-closure)
    - [Function scope](#function-scope)
    - [Lexical scope](#lexical-scope)
  - [IIFE](#iife)
- [Non-Object](#non-object)
- [Questions](#questions)


# Object
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
## General topics
### Everything is an object?
No, check Dan abramov's Just JavaScript course for more. (Wrapper object)
### Property
#### Writable or non-writable?

## ```Object```
### ```Object.__proto__```
### ```Object.defineProperty```
### ```Object.hasOwnProperty```
### ```Object.isPrototypeOf```
### ```Object.propertyIsEnumerable```
### ```Object.get __proto__```
### ```Object.set __proto__```
### ```Object.keys()```
## Array
### ```Array```
#### ```Array.from()```
##### Mental model
- The first argument is an array or an interable object
- Second is like ```Array.prototype.map``` callback
- third argument is used as ```this``` in the callback function
  - [ ] If a callback function is an arrow function, will it still work? Do some experiements
##### Behaviour check
#### ```Array.of()```
##### Mental model
##### Behaviour check
 
##### Resources
For more see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

## window

## document

## Map
### What is ```Map```?
A *Map* object holds key-value pairs and remembers the original insertion order of the keys. Any value(both objects and primitive values) may be used as either a key or a value.
### Map essentials

### Basic operations
#### has
```javascript
/**
 * @param  {any} key
 * @return {boolean}
 */
myMap.has(key)
```
#### get
```javascript
/**
 * @param  {any} key
 * @return {any}
 */
myMap.get(key)
```
#### set
```javascript
/**
 * @param  {any} key
 * @param  {any} value
 * @return {object}
 */
 myMap.set(key,value) 
 ```
### Reference
[Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Date
### What is a JavaScript date?
A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time is the same as the **UNIX epoch**, which is the predominant base value for computer-recorded date and time values.

### What is UTC?

### Headsups
- The maximum ```Date``` is not of the same value as the maximum safe integer(```Number.MAX_SAFE_INTEGER``` is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of $\mp$ 100,000,000 days relative to January 1, 1970 UTC(that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard ```Date``` object.
- While the time value at the heart of a ```Date``` object is UTC, the basic methods to fetch the date and time or its components all work in the local(i.e. host system) time zone and offset.

### Usage
####  Create a ```Date()``` object
##### Syntax
Heads up, using the ```new``` operator is the only correct way to instantiate a new ```Date``` object.
```javascript
// The newly-create Date object represents the current date and time as of the time of instantiation
new Date() 

// An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC, will leap seconds ignored.
new Date(value)
new Date(dataString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
```



### Reference
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

# Function
- Every function gets ```this``` property automatically

## ```this```
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
## Function.name
## Higher order function
### ```Array.prototype.map()```
- If the callback function has no input arguments, then the return value will replace the array element directly
#### Usage
``` javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]){
    // return element for new_array
}[, thisArg])
```
#### Resources
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### ```Array.prototype.filter()```

#### Mental model
### Syntax
```javascript
let newArray = arr.filter(callback(element[, index [, array]]), thisArg)
```
### ```Array.prototype.reduce```
- You should always use ```initialValue``` in the callback function, otherwise the first element will be directly passed as the initial value.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
#### Mental model
### ``` Array.prototype.fill()```

#### Mental model
### ``` Array.prototype.splice()```
#### Mental model
### ``` Array.prototype.forEach()```
- ```forEach()``` does not mutate the array on whic hit is called, however, *callback* may do so. 
  - Is it operating using the ```array``` argument?
- ```forEach()``` is executed in parallel manner, consider the code segment below

#### ```forEach``` parallel execution
```javascript
// ---------------------------------------------------
// Desired effect: Output every 1 second. Don't change the square method.
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
// forEach is called in parallel manner
// The Web API call stack got three pushes executively, waiting for 1s then execute the console.log command.
  list.forEach(async x => {
    const res = await square(x)
    console.log(res)
  })
}
test()  
// ---------------------------------------------------

// Fix: Series
async function test() {
  // for loop is executed in serial manner.
  for (let i = 0; i < list.length; i++ ) {
    let x = list[i]
    const res = await square(x)
    console.log(res)
  }
}
```

#### Mental model
### ``` Array.prototype.findIndex()```
### ``` Array.prototype.concat()```
### ``` Array.prototype.join()```
### ``` Array.prototype.reverse()```
### ```Function.prototype.apply()```
- [Javascript call() & apply() vs bind()?](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
### ```Function.prototype.bind()```

#### Mental model
#### Resource
- [Bind Explained in JavaScript](https://www.youtube.com/watch?v=g2WcckBB_q0)

### ```Function.prototype.call()```
- [Javascript: call(), apply() and bind()](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)
```javascript
/*
 --------------
 |            |
 |            |
 |            |
 |            |
 |            |
 |            |
 |            |
 |____________|





*/
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);

```
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## Methods
### User defined Methods
- [Add method to string class](https://stackoverflow.com/questions/8392035/add-method-to-string-class)
```javascript
String.prototype.camelCase=function(str){
  console.log(str);
  console.log(this);
  return str.split(' ').reduce((accumulator, currentValue) => {
    return accumulator + `${currentValue[0].toUpperCase()}${currentValue.splice(1)}`
  }, '');
}

"asa as fa s adfas".camelCase();

// undefined
// String {"asa as fa s adfas"}
```
## Function currying
### Callback function and OOP
### Callback function and FP

## Function closure
### Function scope

```javascript
const a = (function(){
    const
})();
```

### Lexical scope

## IIFE

# Non-Object


# Questions
- If I pass an object to a class using `call()` to determine its `this` value, ... Read only?
  - [Source of question](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
    - Using call to invoke a function and specifying the context for 'this'