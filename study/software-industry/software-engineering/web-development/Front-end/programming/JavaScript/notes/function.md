# Table of Contents
- [Table of Contents](#table-of-contents)
- [Function.name](#functionname)
- [Higher order function](#higher-order-function)
  - [Array](#array)
    - [```Array.prototype.map()```](#arrayprototypemap)
      - [Syntax](#syntax)
      - [Resources](#resources)
    - [```Array.prototype.filter()```](#arrayprototypefilter)
      - [Mental model](#mental-model)
    - [Syntax](#syntax-1)
    - [```Array.prototype.reduce```](#arrayprototypereduce)
      - [Mental model](#mental-model-1)
    - [``` Array.prototype.fill()```](#arrayprototypefill)
      - [Mental model](#mental-model-2)
    - [``` Array.prototype.splice()```](#arrayprototypesplice)
      - [Mental model](#mental-model-3)
    - [``` Array.prototype.forEach()```](#arrayprototypeforeach)
      - [Mental model](#mental-model-4)
    - [``` Array.prototype.findIndex()```](#arrayprototypefindindex)
      - [Mental model](#mental-model-5)
  - [Function](#function)
    - [```Function.prototype.apply()```](#functionprototypeapply)
    - [```Function.prototype.bind()```](#functionprototypebind)
      - [Mental model](#mental-model-6)
      - [Resource](#resource)
    - [```Function.prototype.call()```](#functionprototypecall)
      - [Mental model](#mental-model-7)
- [Function currying](#function-currying)
# Function.name
# Higher order function
## Array
### ```Array.prototype.map()```
#### Syntax
``` javascript
let new_array = arr.map(function callback( currentValue[, index[, array]]){
    // return element for new_array
}[, thisArg])
```
#### Resources
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### ```Array.prototype.filter()```

#### Mental model
### Syntax
```javascript
let newArray = arr.filter(callback(element[, index [, array]]), thisArg)
```
### ```Array.prototype.reduce```

#### Mental model
### ``` Array.prototype.fill()```

#### Mental model
### ``` Array.prototype.splice()```
#### Mental model
### ``` Array.prototype.forEach()```
#### Mental model
### ``` Array.prototype.findIndex()```


#### Mental model

## Function
### ```Function.prototype.apply()```
### ```Function.prototype.bind()```

#### Mental model
#### Resource
[Bind Explained in JavaScript](https://www.youtube.com/watch?v=g2WcckBB_q0)

### ```Function.prototype.call()```
#### Mental model

# Function currying