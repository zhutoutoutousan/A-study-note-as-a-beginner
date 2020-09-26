# Table of Contents
- [Table of Contents](#table-of-contents)
- [OOP series](#oop-series)
  - [How to curry](#how-to-curry)
- [Query series](#query-series)
  - [See if contains](#see-if-contains)
    - [Array](#array)
      - [```Array.prototype.includes()```](#arrayprototypeincludes)
  - [Count the occurences/frequency](#count-the-occurencesfrequency)
  - [Getting data type](#getting-data-type)
  - [Testing equality](#testing-equality)
    - [Types of equality](#types-of-equality)
    - [Same value equality: ```Object.is(a, b)```](#same-value-equality-objectisa-b)
- [Copy series](#copy-series)
  - [Copying arrays](#copying-arrays)
    - [Shallow copy](#shallow-copy)
    - [Deep copy](#deep-copy)
      - [```Array.from```](#arrayfrom)
- [Replace/Remove series](#replaceremove-series)
  - [Replace strings](#replace-strings)
  - [Remove part of string elements](#remove-part-of-string-elements)
- [Append series](#append-series)
- [Remove series](#remove-series)
  - [Remove Array](#remove-array)
    - [Array element](#array-element)
- [Mathematic series](#mathematic-series)
  - [Prime numbers](#prime-numbers)
    - [Check if a number is a prime](#check-if-a-number-is-a-prime)
    - [Generate prime numbers](#generate-prime-numbers)
- [Work with series](#work-with-series)
  - [Work with data structure](#work-with-data-structure)
    - [Convert array to linked list](#convert-array-to-linked-list)
  - [Work with **immutable** objects](#work-with-immutable-objects)
  - [Work with numbers](#work-with-numbers)
    - [Convert float to an int](#convert-float-to-an-int)
    - [Work with big numbers](#work-with-big-numbers)
    - [Absolute value](#absolute-value)
  - [Work with strings](#work-with-strings)
    - [Reverse a string](#reverse-a-string)
    - [Search in strings](#search-in-strings)
      - [Verify if a string has a pattern \[pattern\]](#verify-if-a-string-has-a-pattern-pattern)
        - [```String.prototype.includes()```](#stringprototypeincludes)
  - [Work with Arrays](#work-with-arrays)
    - [Array equal?](#array-equal)
    - [Push into multidimensional array](#push-into-multidimensional-array)
    - [Cut an array given certain index](#cut-an-array-given-certain-index)
      - [```Array.prototype.splice()```](#arrayprototypesplice)
    - [Find min/max elements/indexes in arrays](#find-minmax-elementsindexes-in-arrays)
    - [Sort the Array](#sort-the-array)
  - [Work with Objects](#work-with-objects)
  - [Work with functions](#work-with-functions)
  - [Work with JSON](#work-with-json)
  - [Work with localStorage](#work-with-localstorage)
  - [Work with sessionStorage](#work-with-sessionstorage)
  - [Work with networking parts](#work-with-networking-parts)
    - [Extract domain name from URL](#extract-domain-name-from-url)
  - [Work with colors](#work-with-colors)
    - [decimal to rgb](#decimal-to-rgb)
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
  - [String to Variable Name](#string-to-variable-name)
  - [Array to String](#array-to-string)
    - [```Array.prototype.join()```](#arrayprototypejoin)
- [Problem solving questions and mathematics](#problem-solving-questions-and-mathematics)




# OOP series
## How to curry

# Query series
## See if contains
### Array
#### ```Array.prototype.includes()```
## Count the occurences/frequency
- [Stack-overflow](https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements)
```javascript
/**
 * @param {Array} arr
 * @param {Array | Number | Object | String} query
 * @return
 */
const countOccurences = (arr, query) => {
  switch(typeof(query)) {
    case "Object":
    
  }
}
```

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

# Replace/Remove series
## Replace strings
## Remove part of string elements
- [Why string.replace() not working for string which contains parentheses?](https://stackoverflow.com/questions/50619137/why-string-replace-not-working-for-string-which-contains-parentheses/50619227)

# Append series

# Remove series
## Remove Array
### Array element
- [9 Ways to Remove Elements From A JavaScript Array - Plus How to Safely Clear JavaScript Arrays](https://love2dev.com/blog/javascript-remove-from-array/#:~:text=You%20can%20remove%20elements%20from,way%20to%20remove%20unwanted%20elements.)

**```splice```**
```javascript
const removeElementByIndex = (arr, index) => {
    return arr.splice(index, 1);
}

let a = [2,3,2,1,2,5]
console.log(removeElementByIndex(a, 3))
```

# Mathematic series
## Prime numbers
### Check if a number is a prime
- [JavaScript Program to Check Prime Number - Programiz](https://www.programiz.com/javascript/examples/prime-number)
- Determine the maximum possible divisor $d$ of a positive integer $n$
```javascript


// |---------------------------|
// |-------------|  <-- This is maximum divisor

// |--------|
// |----| <-- Maximum
// |-------| 
// |----| <-- Maximum

function primeFactors(n){
    let processingNumber = n;
    let testingFactor = 2;
    let testingFactorCount = 0;  
    let outputString = '';
    
    const isDivisorOf = (a, b) => a % b === 0;
  
    while (processingNumber !== 1 && processingNumber > n) {
      while (processingNumber % testingFactor === 0) {
        if(processingNumber / testingFactor % testingFactor === 0) {
          testingFactorCount++;
          processingNumber /= testingFactor;
        }
        else {
          processingNumber /= testingFactor;
          outputString += `(${testingFactor}**${testingFactorCount})`;
          testingFactor++;
        }
      }  
    }
    return outputString;
}

// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
// ISSUE: Page irresponsive after 
//  isPrime(98764321261)
const isPrime = (num) => {
  if(num === 1)return "Neither";
  for (let i = 2; i <= Math.ceil(num / 2); i++) {
console.log(`CHECK: divisor?${i}`)
    if (num % i === 0) {
console.log(`RESULT: The divisor is ${i}`);
      return false;
      }
  }
  return true;
}

```

### Generate prime numbers
- [Need to generate prime numbers in JavaScript](https://stackoverflow.com/questions/21966000/need-to-generate-prime-numbers-in-javascript)

# Work with series
## Work with data structure
### Convert array to linked list
- [Implementing a Linked List in JavaScript](https://medium.com/javascript-in-plain-english/implementing-a-linked-list-in-javascript-3f71c83487b5)
```javascript
// This code is wrong, fix it
    const createListNodeFromArray = (arr) => {
        let resultList = new ListNode(0, null);
        let currentNode = resultList;
        for (let i = 0; i < arr.length; i++) {
            if(!currentNode.val || !currentNode.next){
                currentNode.val = arr[i];
            }
            else {
                currentNode.next = new ListNode(arr[i],null);
                currentNode = currentNode.next;
            }
        }
        return resultList;
    }
```

## Work with **immutable** objects
## Work with numbers
### Convert float to an int
- Don't use the ```Math``` Object.
- [Fastest way to cast a float to an int in javascript? - Stack Overflow](https://stackoverflow.com/questions/34077449/fastest-way-to-cast-a-float-to-an-int-in-javascript/34077505)
```javascript
let a = 123124.1251221
~~a; //123124
```
### Work with big numbers
- [Alexander Reardon: Let's go big (Big numbers in JavaScript) | JSConf EU 2017](https://www.youtube.com/watch?v=9SHOfZI_SsM)
  - [big number demo - github](https://github.com/alexreardon/big-number-demos)
- [How to avoid scientific notation for large numbers in JavaScript?](https://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript)
- [StackOverflow -  Javascript display really big numbers rather than displaying xe+n](https://stackoverflow.com/questions/16066793/javascript-display-really-big-numbers-rather-than-displaying-xen)
- [Working with large integers in JavaScript](https://2ality.com/2012/07/large-integers.html)
```javascript
/*
EXPERIMENT: The biggest number digits for JavaScript to display without distorting its value
-> 999999999999999999999
1e+21
-> 999999999999999
999999999999999
-> 9999999999999994
9999999999999994
-> 9999999999999995
9999999999999996
-> 9999999999999996
9999999999999996
-> 9999999999999997
9999999999999996
-> 9999999999999998
9999999999999998
-> 9999999999999999
10000000000000000

It would be safe to say that, if you want to chunk to substrings with the length up to 15 

Maybe you can chop the number string to bits that will not be displayed as scientific exponentials. Then use carry to 
*/
const chopNumber = (numString) => {

}
const operateBigNumbers(bigNum1, bigNum2, ops) {
    
}

```

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
### Array equal?
- [Checking if two arrays are equal](https://gomakethings.com/checking-if-two-arrays-are-equal/#:~:text=The%20simplest%20and%20fastest%20way,a%20comparison%20operator%20(%20%3D%3D%3D%20).&text=This%20approach%20is%20great%20for,items%20is%20equal%20to%20another.)
### Push into multidimensional array
### Cut an array given certain index
#### ```Array.prototype.splice()```
```javascript
let a = [];

for (let i = 0;  i < 25; i++) {
a.push(i*Math.sin(i))   // a: [0,1,2,3,...24]
}

a.splice(5);  // [5,6,7,...,24]

a  // [0,1,2,3,4]
```
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

  // var max = arr[0];
  // var maxIndex = 0;
  let max = arr[0];
  let maxIndex = 0;
  // is 'i' still visible here?
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  
  return maxIndex;
}

// One-liner
// Performs twice as many comparisons as necessary and will throw a ```RangeError``` on large arrays. --> Why?
const findMaxIndex = arr => arr.indexOf(Math.max(...arr));
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
## Work with networking parts
### Extract domain name from URL
- [how to get domain name from URL](https://stackoverflow.com/questions/569137/how-to-get-domain-name-from-url)
- [Regular expression to extract domain from URL](https://www.golangprograms.com/regular-expression-to-extract-domain-from-url.html)
- [Codewar](https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript)

```javascript
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\.\n]+)/
```

## Work with colors
### decimal to rgb
```javascript
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}



function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}


```
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
## String to Variable Name
- [Convert string to variable name in JavaScript](https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript)

## Array to String
### ```Array.prototype.join()```

# Problem solving questions and mathematics
- Given an array of integers, find the one that appears an odd number of times.
  - [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript)
  - Is there a correlation between the value(could sum or other operations) and the number of time it appears?
  - Given the set $a[n]$, each has the map describing the value and its times of appearance: $b[\{value\} x: \{times\} t]$, then the sum of the set can be described as: $\sum x_n \cdot t_n$.
  - If 