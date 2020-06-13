# Table of Contents
- [Table of Contents](#table-of-contents)
- [Class](#class)
- [Arrow function](#arrow-function)
  - [Basic properties and heads-ups](#basic-properties-and-heads-ups)
  - [Case study](#case-study)
    - [Defined or undefined?](#defined-or-undefined)
  - [Resource](#resource)
- [Destructure assignment](#destructure-assignment)

# Class
See [class.md](./class.md)
# Arrow function
An **arrow function expression** is a syntactically compact alternative to a regular function expression.
## Basic properties and heads-ups
- An **arrow function expression** hasn't its own bindings to the ```this```, ```arguments```, ```super```, or ```new.target``` keywords.
- Arrow function expressions are ill suited as methods, and they cannot be used as constructors. --> Why?
- ```this``` and arrow functions in classes:
```javascript
class JackAss {
    constructor(jack, ass){
        this.jack = jack;
        this.ass = ass;
    }

    // arrow function is not allowed
    // const shit = (jack, ass) => {
    //     console.log(this.jack);
    //     console.log(this.ass);
    //     console.log("shit");
    // };

    speak() {
        // console.log(jack);   Error: jack is not defined
        console.log(this.jack);
        // console.log(ass);    Error: ass is not defined
        console.log(this.ass);
        console.log("speaks");
    }

    // deceive(lie) {
    //     // unexpected token ')'
    //     () => {console.log(`${this.jack} ${this.ass} claimed that ${lie}`);}();
    // }
}



// Test
let x = new JackAss("shit", "eat")
x.speak()
// shit
// eat
// speaks
```
- ```this``` in arrow functions
```javascript
let arrow = (dumb, ball, dungeon) => {
    console.log(`I am playing ${dumb} + ${ball} + and ${dungeon} for 3 years non-stop, and here's my JavaScript skills`)
    console.log(`${this} will be shown as [object, Object]?`);  // [object Window] ...
    console.log(this);  // Window object
}
```
## Case study
### Defined or undefined?
```javascript
const test = (func, num, scale) => {
    const sample = new Array(num).fill(0).map(x => 
        x + Math.floor(Math.random() * scale))
    console.log(sample)
    console.log(func)
    let results = func(sample)
    for(let i = 0; i < results.length - 1; i++){
        if([i] > results[i+1]){
            console.log('fail');
            return;
        }
    }
    console.log('succeed');
}

test(insertSort, 100, 50);
```

```javascript
 const sample = new Array(num).fill(0).map(x => x + Math.floor(Math.random() * scale))
//  returns normal
```        

```javascript
 const sample = new Array(num).fill(0).map(x =>{ x + Math.floor(Math.random() * scale)})
//  returns undefined
 const correction = new Array(num).fill(0).map(x =>{ return x + Math.floor(Math.random() * scale)})
//  Normal
```
## Resource
- [Arrow function expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

# Destructure assignment
[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[ES6 In Depth Articles](https://hacks.mozilla.org/category/es6-in-depth/)