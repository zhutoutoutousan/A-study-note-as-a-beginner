# Loop
## for...in, for, for...of

## const or let?
### Performance
#### InsertSort
```javascript
const insertSort = (arr) => {
    for(let j = 1; j < arr.length; j++){
        let i = j - 1;
        let key = arr[j];
        while(i >= 0 && arr[i] > key){
            arr[i+1] = arr[i];
            i--;
        } 
        arr[i+1] = key;
    }
    return arr;
}

const insertSortC = (arr) => {
    for(const j in arr){
        let i = j - 1;
        let key = arr[j];
        while(i >= 0 && arr[i] > key){
            arr[i+1] = arr[i];
            i--;
        } 
        arr[i+1] = key;
    }
    return arr;
} 

const test = (func, num, scale) => {
    const sample = new Array(num).fill(0).map(x => 
        x + Math.floor(Math.random() * scale));    
    console.log(sample)
    console.log(func)
    console.time(`${func.name}`)
    let results = func(sample)
    console.timeEnd(`${func.name}`)
    console.log(results);
    for(let i = 0; i < results.length - 1; i++){
        if(results[i] > results[i+1]){
            console.log(`fail in ${func.name}`);
            return;
        }
    }

    console.log(`succeed in ${func.name}`);
}

test(insertSort, 400000, 1000); // 75002.88916015625ms
test(insertSortC, 400000, 1000); // 75935.93896484375ms

```

For more, check out [for…of loop. Should I use const or let?](https://stackoverflow.com/questions/58483101/for-of-loop-should-i-use-const-or-let)

## loops vs reduce
For more, check out [Reduce Vs For-Loop](https://codeburst.io/reduce-vs-for-loop-3c1a84e63872)

[Javascript performance test - for vs for each vs (map, reduce, filter, find).](https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7)