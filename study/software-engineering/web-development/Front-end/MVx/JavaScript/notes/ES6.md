# Table of Contents
- [Table of Contents](#table-of-contents)
- [Class](#class)
- [Arrow function](#arrow-function)
  - [Defined or undefined?](#defined-or-undefined)
- [Destructure assignment](#destructure-assignment)

# Class
See [class.md](./class.md)
# Arrow function
## Defined or undefined?
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

# Destructure assignment
[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[ES6 In Depth Articles](https://hacks.mozilla.org/category/es6-in-depth/)