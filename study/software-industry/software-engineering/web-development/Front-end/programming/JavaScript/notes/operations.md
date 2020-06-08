# Table of Contents
- [Table of Contents](#table-of-contents)
- [Number](#number)
  - [Convert a number to string](#convert-a-number-to-string)
  - [Absolute value](#absolute-value)
- [String](#string)
  - [Convert a string to number](#convert-a-string-to-number)
  - [Verify if a string has a pattern \[pattern\]](#verify-if-a-string-has-a-pattern-pattern)
    - [```String.prototype.includes()```](#stringprototypeincludes)
    - [Reference](#reference)
  - [Reverse a string](#reverse-a-string)
    - [Reference](#reference-1)
- [Array](#array)
  - [Create array](#create-array)
    - [Create an array of empty arrays](#create-an-array-of-empty-arrays)
    - [Create an array with generator](#create-an-array-with-generator)
    - [``` new Array(n)``` and ```Array.prototype.map```](#new-arrayn-and-arrayprototypemap)
- [DOM](#dom)
  - [Generic methods](#generic-methods)
    - [```document.querySelector()```](#documentqueryselector)
  - [Get multiple elements](#get-multiple-elements)
    - [Array.from](#arrayfrom)
# Number
## Convert a number to string

## Absolute value
```javascript
let a = -134;
console.log(Math.abs(a)) // 134
```

# String
## Convert a string to number
```javascript
let a = '134';
console.log(parseInt(a),10) // 134   10-->base number
```
## Verify if a string has a pattern \[pattern\]
### ```String.prototype.includes()```
```javascript
console.log('Fuck this shit'.includes('shit'));  // true
console.log('Fuck this shit'.includes('shitty'));  // false
```
For more see [String.prototype.includes\(\)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
### Reference
[How to check if a string contains a substring in JavaScript](https://flaviocopes.com/how-to-string-contains-substring-javascript/)

## Reverse a string
### Reference
[Three Ways to Reverse a String in JavaScript](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)

# Array
## Create array
### Create an array of empty arrays
```javascript
let num = 3;
const array = [...new Array(num)].map( _ => []); // array: [[],[],[]]
// Won't work with Array.prototype.map
```
### Create an array with generator
- Tip: use ```Array.prototype.fill()```
```javascript
const constant = _ => 5; 

const createArray = (num, callback) => Array.apply(null, Array(num).map(callback))

const test = (num, callback) => createArray(num, callback)

test(50, constant);
```


### ``` new Array(n)``` and ```Array.prototype.map```
For more check out [JavaScript “new Array(n)” and “Array.prototype.map” weirdness](https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness)

# DOM
## Generic methods
### ```document.querySelector()```
## Get multiple elements
### Array.from
