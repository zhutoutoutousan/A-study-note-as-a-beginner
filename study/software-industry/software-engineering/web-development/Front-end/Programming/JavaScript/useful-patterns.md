# Table of Contents
- [Table of Contents](#table-of-contents)
- [OOP series](#oop-series)
  - [How to curry](#how-to-curry)
- [Query series](#query-series)
  - [Getting data type](#getting-data-type)
  - [Testing equality](#testing-equality)
    - [Types of equality](#types-of-equality)
    - [Same value equality: ```Object.is(a, b)```](#same-value-equality-objectisa-b)
- [Copy series](#copy-series)
  - [Copying arrays](#copying-arrays)
    - [Shallow copy](#shallow-copy)
    - [Deep copy](#deep-copy)
      - [```Array.from```](#arrayfrom)
- [Replace series](#replace-series)
  - [Replace strings](#replace-strings)
- [Work with series](#work-with-series)
  - [Work with **immutable** objects](#work-with-immutable-objects)
  - [Work with numbers](#work-with-numbers)
    - [Absolute value](#absolute-value)
  - [Work with strings](#work-with-strings)
    - [Reverse a string](#reverse-a-string)
    - [Search in strings](#search-in-strings)
      - [Verify if a string has a pattern \[pattern\]](#verify-if-a-string-has-a-pattern-pattern)
        - [```String.prototype.includes()```](#stringprototypeincludes)
  - [Work with Arrays](#work-with-arrays)
    - [Find min/max elements/indexes in arrays](#find-minmax-elementsindexes-in-arrays)
    - [Sort the Array](#sort-the-array)
  - [Work with Objects](#work-with-objects)
  - [Work with functions](#work-with-functions)
  - [Work with JSON](#work-with-json)
  - [Work with localStorage](#work-with-localstorage)
  - [Work with sessionStorage](#work-with-sessionstorage)
- [Generate series](#generate-series)
  - [Generate string](#generate-string)
    - [Generate Alphabet](#generate-alphabet)
  - [Generate arrays](#generate-arrays)
    - [Create an array of empty arrays](#create-an-array-of-empty-arrays)
    - [Create an array with generator](#create-an-array-with-generator)
    - [``` new Array(n)``` and ```Array.prototype.map```](#-new-arrayn-and-arrayprototypemap)
- [Transform series](#transform-series)
  - [String to RegExp](#string-to-regexp)
  - [RegExp to String](#regexp-to-string)
  - [String to number](#string-to-number)

# OOP series
## How to curry

# Query series
## Getting data type
## Testing equality
### Types of equality
- Strict equality: a === b
- Loose equality: a == b
- Same value equalityL: Object.is(a, b)
### Same value equality: ```Object.is(a, b)```
```javascript
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // false  pointing at different values
console.log(Object.is(continents, worldWonders)); // false  pointing at different values
console.log(Object.is(worldWonders, dwarves)); // true  pointing at the same value
```

# Copy series
## Copying arrays
### Shallow copy
### Deep copy
#### ```Array.from```

# Replace series
## Replace strings


# Work with series
## Work with **immutable** objects
## Work with numbers
### Absolute value
```javascript
let a = -134;
console.log(Math.abs(a)) // 134
```
## Work with strings
### Reverse a string
- [Three Ways to Reverse a String in JavaScript](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)

### Search in strings
#### Verify if a string has a pattern \[pattern\]
##### ```String.prototype.includes()```
```javascript
console.log('Fuck this shit'.includes('shit'));  // true
console.log('Fuck this shit'.includes('shitty'));  // false
```
- [String.prototype.includes\(\)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

- [How to check if a string contains a substring in JavaScript](https://flaviocopes.com/how-to-string-contains-substring-javascript/)
## Work with Arrays
### Find min/max elements/indexes in arrays
- **General**
  - [The Fastest Way to Find Minimum and Maximum Values in an Array in JavaScript](https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621)
  - [Return index of greatest value in an array](https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464)

```javascript
// For reliability and compatibility
// What's the difference between 'var' and 'let' concerning compatibility and reliability? 
function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var
}
```

- **Array of strings**
  - [Find the min/max element of an Array in JavaScript](https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript)
- **Array of numbers**
- **Array of objects**
  - [Finding the max value of an attribute in an array of objects](https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects)
### Sort the Array
## Work with Objects
## Work with functions
## Work with JSON
## Work with localStorage
## Work with sessionStorage
# Generate series
## Generate string
### Generate Alphabet

- [Generating the alphabet in JavaScript](https://codegolf.stackexchange.com/questions/71613/generating-the-alphabet-in-javascript)

```String.fromCharCode```
- ```[...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97)```

## Generate arrays
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


# Transform series
## String to RegExp
- [generating a regular expression from a string](https://stackoverflow.com/questions/16034337/generating-a-regular-expression-from-a-string)
  - ```String s = Pattern.quote(orig)```
    - String has all the *metacharacters* escaped
## RegExp to String
## String to number
```javascript
let a = '134';
console.log(parseInt(a),10) // 134   10-->base number
```
