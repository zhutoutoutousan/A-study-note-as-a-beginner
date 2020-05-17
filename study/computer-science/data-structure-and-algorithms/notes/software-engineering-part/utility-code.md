# Table of Contents
- [Table of Contents](#table-of-contents)
- [Basic comparator](#basic-comparator)
- [Reference](#reference)
# Basic comparator
All sorting methods require some recurring comparisons.
```javascript
class Comparator {
/**
 *  @param {function(a: *, b: *)} [compareFunction] - Custom function here
 */
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

/**
 * Default comparison function. 
 * @param {(string|number)} a
 * @param {(string|number)} b
 * @returns {number}
 */
    static defaultCompareFunction(a, b){
        return a === b ? 0 :
                a < b ? -1 : 1;
    }


 /**
  * Checks if variable "a" is less than "b".
  * @param {*} a
  * @param {*} b
  * @return {string} 
  */
    ComparisonState(a, b) {
        return a === b ? "e" : a < b ? "l" : "b"
    }

    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}

```
# Reference
[javascript-algorithms By trekhleb](https://github.com/trekhleb/javascript-algorithms)
