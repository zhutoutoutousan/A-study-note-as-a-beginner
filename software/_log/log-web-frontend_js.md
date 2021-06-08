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