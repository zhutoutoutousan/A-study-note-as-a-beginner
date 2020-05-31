# Why is a good understanding of Equality in JavaScript important?

# Types of equality
- Strict equality: a === b
- Loose equality: a == b
- Same value equalityL: Object.is(a, b)

# Same value equality: ```Object.is(a, b)```
```javascript
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // false  pointing at different values
console.log(Object.is(continents, worldWonders)); // false  pointing at different values
console.log(Object.is(worldWonders, dwarves)); // true  pointing at the same value
```

# Reference
- Dan Abramov - Just JavaScript