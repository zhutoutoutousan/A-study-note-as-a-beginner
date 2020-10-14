# How to test JavaScript code performance?
## ```Date``` object
```javascript
let startTime = new Date();
// Insert the code that needs to be tested
let endTime = new Date();

let runTime = endTime - startTime;
console.log(runtime);
```

## ```console.time```
```javascript
console.time("Shitty code test");
let arr = [];
for(let i = 0; i < 100000; i++){
    arr.push(i);
}
console.timeEnd("Shitty code test");
```

## jsperf

For more, check out [Performance Testing in JavaScript (in Browser)](https://medium.com/@melwinalm/performance-testing-in-javascript-in-browser-5a4caeb4c480)