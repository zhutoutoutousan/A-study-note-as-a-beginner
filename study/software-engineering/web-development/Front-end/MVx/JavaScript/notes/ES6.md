# Arrow function
## Defined or undefined?
```javascript
const test = (func, num, scale) => {
    const sample = new Array(num).fill(0).map(x => 
        x + Math.floor(Math.random() * scale))
    console.log(sample)
    console.log(func)
    let results = func(sample)
    for(let i = 0; i < results.length - 1; i++){
        if([i] > results[i+1]){
            console.log('fail');
            return;
        }
    }
    console.log('succeed');
}

test(insertSort, 100, 50);
```
In these code, I've discovered that:
```javascript
 const sample = new Array(num).fill(0).map(x => x + Math.floor(Math.random() * scale))
//  returns normal
```        

```javascript
 const sample = new Array(num).fill(0).map(x =>{ x + Math.floor(Math.random() * scale)})
//  returns undefined
```