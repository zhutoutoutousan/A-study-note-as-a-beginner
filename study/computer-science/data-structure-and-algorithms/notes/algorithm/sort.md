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
const insertSort = (arr) => {
    for(let j = 1; j < arr.length; j++){
        
    }
}
```

## Terminology
- **keys**: The number that we wish to sort