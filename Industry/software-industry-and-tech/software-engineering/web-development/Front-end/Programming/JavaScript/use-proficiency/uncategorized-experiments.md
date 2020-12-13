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

# ```toString()```
Why?
```javascript
2342342335.toString()  // Uncaught SyntaxError: Invalid or unexpected token

let a = 2342523225;
b = a.toString(); // "2342523225" 

```