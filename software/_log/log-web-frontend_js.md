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

# 2021/6/11
## Understand Microtask, Macrotask, Promises, Event Loop, process, and async queue
- Reference
  - Materials that match your current level
    - [这次,十分钟把宏任务和微任务讲清楚](https://segmentfault.com/a/1190000039055443)
    - [宏任务和微任务：setTimeout和Promise执行顺序](https://juejin.cn/post/6844903919445884941)
    - [JavaScript under the hood: Microtasks and Macrotasks](https://www.linkedin.com/pulse/javascript-under-hood-microtasks-macrotasks-eliran-elnasi/)
    - [Under the hood: Event Loop, Call Stack, and Asynchronous Code in JavaScript](https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168)
    - [Event loop: microtasks and macrotasks](https://javascript.info/event-loop)
  - Something that might be out of your league
    - https://stackoverflow.com/questions/49811043/relationship-between-event-loop-libuv-and-v8-engine
    - https://symphony.is/blog/secret-life-event-loop-meetup-overview
    - https://chaudharypulkit93.medium.com/how-does-nodejs-work-beginner-to-advanced-event-loop-v8-engine-libuv-threadpool-bbe9b41b5bdd
    - https://blog.insiderattack.net/javascript-event-loop-vs-node-js-event-loop-aea2b1b85f5c
    - https://blog.avenuecode.com/understanding-the-javascript-concurrency-model
- Macro-task
  - Script
  - setTimeout, setInterval
  - requestAnimationFrame
- Micro-task
  - Promise, process.nextTick
- Event-Loop: Macro-task --> Micro-task |(The next round begins)Macro-task

# 2021/7/7
## Refreshing JavaScript
- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- ERUDITION
  - You Don't know JS

## If I were to swiftly gain back all of the important knowledge of JavaScript Modules, which entries would you say for yourself?

