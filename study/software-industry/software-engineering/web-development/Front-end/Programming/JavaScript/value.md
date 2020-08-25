# Table of Contents
- [Table of Contents](#table-of-contents)
- [Type](#type)
  - [Primitive data types](#primitive-data-types)
    - [Properties](#properties)
      - [Immutability](#immutability)
    - [Undefined](#undefined)
    - [Boolean](#boolean)
    - [Symbol](#symbol)
      - [Reference](#reference)
    - [BigInts](#bigints)
    - [Null](#null)
    - [Number](#number)
      - [```Number.prototype```](#numberprototype)
        - [```Number.prototype.toString()```](#numberprototypetostring)
      - [Troubleshooting](#troubleshooting)
        - [RangeError: radix must be an integer](#rangeerror-radix-must-be-an-integer)
    - [String](#string)
      - [```String.prototype```](#stringprototype)
        - [```String.prototype.substr()``` --- Position + Length](#stringprototypesubstr-----position--length)
        - [```String.prototype.indexOf()``` --- Find single substring location](#stringprototypeindexof-----find-single-substring-location)
        - [```String.prototype.match()``` --- Use RegEx to match](#stringprototypematch-----use-regex-to-match)
        - [```String.prototype.repeat()``` --- Use for repating patterns](#stringprototyperepeat-----use-for-repating-patterns)
        - [```String.prototype.charCodeAt()``` --- Use for finding UTF-16](#stringprototypecharcodeat-----use-for-finding-utf-16)
      - [Template literals](#template-literals)
      - [Conversion](#conversion)
        - [Reference](#reference-1)
  - [Object](#object)
  - [Function](#function)

# Type
## Primitive data types
### Properties
#### Immutability
Primitive values are immutable
```javascript
let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction);  // yikes
```
### Undefined
Used for unintentionally missing values
### Boolean

### Symbol
Used for hiding implementation details
#### Reference
[Symbol -MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
### BigInts
### Null
Used for intentionally missing values
### Number
#### ```Number.prototype```
##### ```Number.prototype.toString()```
#### Troubleshooting
##### RangeError: radix must be an integer
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_radix)
### String
#### ```String.prototype```
##### ```String.prototype.substr()``` --- Position + Length
- Control string --> Position + Length
##### ```String.prototype.indexOf()``` --- Find single substring location
##### ```String.prototype.match()``` --- Use RegEx to match
##### ```String.prototype.repeat()``` --- Use for repating patterns
##### ```String.prototype.charCodeAt()``` --- Use for finding UTF-16
Can be used as creating Array
```javascript
let arr = Array(5).fill(0).map(() => ' '.repeat(5));
```
#### Template literals
#### Conversion

##### Reference
[Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
## Object
Check out [Object](./object.md)
## Function
Check out [Function](./function.md)


