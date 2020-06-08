# How to use
```javascript
'use strict';
```
# What's different?
- No creating global variables
- Can't assign values to non-writable globals like ```undefined``` or ```Infinity```
- Can't assign values to non-writable properties like
- ES6
# Good practices
- Use strict by function
```javascript
function strict() {
    'use strict';
    function nested() { return 'And so am I!'}
    return "Hi! I'm a strict mode function! " + nested();
}
// Not strict
```
- asd
# Resource
[Strict mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)