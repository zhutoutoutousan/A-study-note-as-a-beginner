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
```