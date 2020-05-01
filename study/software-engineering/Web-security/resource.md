# Prototype pollution
## Code with questions
```javascript
const isobject = (obj) => typeof(obj) === "object" ;

let a = { "a" : 1, "b" : 2};
let b = { "b" : 3, "d" : 4};
let c = merge(a, b); // { "a" : 1, "b" : 3, "d": 4}

/**
 * This function dives into the deepest layer where * the base is some primitives other than the       * object, starting from there, assign the          * attribute to a. Suspicious code, not sure it's   * gonna work as it should be 
 * 
 * @constructor
 * @param {object} a - Mergee object
 * @param {object} b - Merger object
 */
function merge(a,b) {
    for(let attr in b) {
        if(isobject(a[attr]) && isobject(b[attr])) {
            merge(a[attr], b[attr]);
        }
        else{
            a[attr] = b[attr];
        }
    }

    return a;
}

```

## Reference 
[Olivier Arteau -- Prototype pollution attacks in NodeJS applications](https://www.youtube.com/watch?v=LUsiFV3dsK8) --> 6:01