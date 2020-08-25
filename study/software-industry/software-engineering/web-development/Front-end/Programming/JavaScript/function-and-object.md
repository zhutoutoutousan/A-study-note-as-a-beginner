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
      - [Mental model](#mental-model-6)
    - [``` Array.prototype.findIndex()```](#-arrayprototypefindindex)
    - [```Function.prototype.apply()```](#functionprototypeapply)
    - [```Function.prototype.bind()```](#functionprototypebind)
      - [Mental model](#mental-model-7)
      - [Resource](#resource)
    - [```Function.prototype.call()```](#functionprototypecall)
  - [Function currying](#function-currying)
    - [Callback function and OOP](#callback-function-and-oop)
    - [Callback function and FP](#callback-function-and-fp)
  - [Function closure](#function-closure)
    - [Function scope](#function-scope)
    - [Lexical scope](#lexical-scope)
  - [IIFE](#iife)
- [Non-Object](#non-object)


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

### Mental model
### ``` Array.prototype.fill()```

#### Mental model
### ``` Array.prototype.splice()```
#### Mental model
### ``` Array.prototype.forEach()```
#### Mental model
### ``` Array.prototype.findIndex()```
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