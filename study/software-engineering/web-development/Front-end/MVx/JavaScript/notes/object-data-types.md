# Object
## Array

## Map
### What is ```Map```?
A *Map* object holds key-value pairs and remembers the original insertion order of the keys. Any value(both objects and primitive values) may be used as either a key or a value.
### Map essentials

### Basic operations
#### has
```javascript
/**
 * @param  {any} key
 * @return {boolean}
 */
myMap.has(key)
```
#### get
```javascript
/**
 * @param  {any} key
 * @return {any}
 */
myMap.get(key)
```
#### set
```javascript
/**
 * @param  {any} key
 * @param  {any} value
 * @return {object}
 */
 myMap.set(key,value) 
 ```
### Reference
[Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Date
### What is a JavaScript date?
A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time is the same as the **UNIX epoch**, which is the predominant base value for computer-recorded date and time values.

### What is UTC?

### Headsups
- The maximum ```Date``` is not of the same value as the maximum safe integer(```Number.MAX_SAFE_INTEGER``` is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of $\mp$ 100,000,000 days relative to January 1, 1970 UTC(that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard ```Date``` object.
- While the time value at the heart of a ```Date``` object is UTC, the basic methods to fetch the date and time or its components all work in the local(i.e. host system) time zone and offset.

### Usage
####  Create a ```Date()``` object
##### Syntax
Heads up, using the ```new``` operator is the only correct way to instantiate a new ```Date``` object.
```javascript
// The newly-create Date object represents the current date and time as of the time of instantiation
new Date() 

// An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC, will leap seconds ignored.
new Date(value)
new Date(dataString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
```

### Reference
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)