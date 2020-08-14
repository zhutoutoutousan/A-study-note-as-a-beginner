# Operators

# Execusion
## Destructuring
```javascript
let a = 5,
    b = 6,
    c;

a, b, c = "", "", a + b;
// a: 5  b: 6 c: ""


[a, b, c] = ["", "", a+b]
// a: "", b: "", c: 11
```