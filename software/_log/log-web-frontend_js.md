# Buffer to permanent note

# 2021/6/8
## For JavaScript functions, the arguments may be read as an object

```javascript
// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
function myRegularFunction() {
  const myArrowFunction = (...args) => {
    console.log(args);
  }

  myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b'); // logs ['c', 'd']
```

# 2021/6/9
## Understand Call, Bind, Apply methods in JavaScript --- Dynamic `this` statement
- REF
  - [[JavaScript] 函數原型最實用的 3 個方法 — call、apply、bind](https://realdennis.medium.com/javascript-%E8%81%8A%E8%81%8Acall-apply-bind%E7%9A%84%E5%B7%AE%E7%95%B0%E8%88%87%E7%9B%B8%E4%BC%BC%E4%B9%8B%E8%99%95-2f82a4b4dd66)
  

- What's the usage of `call`, `bind`, and `apply`?
  - Problems to solve
    - Easily put, if you try to declare a variable and assign a method inside of a function to it, all of those `this` keyword will be changed to the parent object(usually `window` object), making it useless.
    - Also existant when using a method declared in a function as the callback function of `addEventListener`
    - ...Please list more scenarios
  - Use of `Bind()`
    - [Understanding Call, Bind and Apply Methods in JavaScript](https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be)
- Do you have a better way?