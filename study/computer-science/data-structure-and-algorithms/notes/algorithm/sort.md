# Definition
**Input:** A sequence of $n$ numbers $\langle a_1, a_2, ..., a_n \rangle$.
**Output:** A permutation(reordering) $\langle {a_1}', {a_2}', ..., {a_n}' \rangle$ of the input sequence such taht ${a_1}' \leq {a_2}' \leq ... \leq {a_n}'$

## Insertion sort
### Ideas
| ![How insertion sort works](../../assets/insertion-sort.PNG) |
| :--: |
|* **Figure 1** How insertion works*|
How to insert centered caption in a page?
### Realization
#### Pseudocode
```
// The key correspond to the index number of the highlighted black blocks, and i traverse over all the grey blocks in Figure 1
for j = 2 to A.length
    key = A[j]
    // Insert A[j] into the sorted sequence A[1..j - 1]
    i  = j - 1
    while i > 0 and A[i] > key
        A[i+1] = A[i]
        i = i - 1
    A[i+1] = key
```
#### JavaScript
```javascript
// for loop
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


const test = (func, num, scale) => {
    const sample = new Array(num).fill(0).map(x => 
        x + Math.floor(Math.random() * scale));    
    console.log(sample)
    console.log(func)
    let results = func(sample)
    console.log(results);
    for(let i = 0; i < results.length - 1; i++){
        if(results[i] > results[i+1]){
            console.log('fail');
            return;
        }
    }
    console.log('succeed');
}

test(insertSort, 100, 50);

// higher order function
const insertSortH = (arr) => {

}
```

## Terminology
- **keys**: The number that we wish to sort