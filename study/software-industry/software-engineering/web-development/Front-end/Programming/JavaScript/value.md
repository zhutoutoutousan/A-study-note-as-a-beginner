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
      - [Template literals](#template-literals)
      - [Conversion](#conversion)
        - [String2VariableName](#string2variablename)
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
#### Template literals
#### Conversion
##### String2VariableName
- [Convert string to variable name in JavaScript](https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript)
##### Reference
[Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
## Object
Check out [Object](./object.md)
## Function
Check out [Function](./function.md)


