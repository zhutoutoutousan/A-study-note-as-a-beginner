# 2021/3/29
## Your understandings of Event Queue?
- I was asked about this during `BD` interview, the key is not only to give the right answer, but also to explain logically why it is so.
- What it includes
  - Microtask
  - Macrotask
  - How browsers handles them
  - How Node.js environment handles them
- [js执行机制（promise,setTimeout执行顺序）](https://www.jianshu.com/p/b8234b3314c8)

```javascript
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})


// 1,7,6,8,2,4,3,5,9,11,10,12
```