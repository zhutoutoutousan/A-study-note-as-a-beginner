# Table of Contents
- [Table of Contents](#table-of-contents)
- [Definition](#definition)
- [Insertion sort](#insertion-sort)
  - [Basics](#basics)
  - [Realization](#realization)
    - [Pseudocode](#pseudocode)
    - [JavaScript](#javascript)
  - [Real-life applications](#real-life-applications)
    - [Front-end development](#front-end-development)
    - [Back-end development](#back-end-development)
    - [Machine learning](#machine-learning)
  - [Problem set](#problem-set)
- [Merge sort](#merge-sort)
  - [Basics](#basics-1)
  - [Realization](#realization-1)
    - [Pseudocode](#pseudocode-1)
    - [JavaScript](#javascript-1)
    - [Java](#java)
    - [C++](#c)
- [Quick sort](#quick-sort)
# Definition
**Input:** A sequence of $n$ numbers $\langle a_1, a_2, ..., a_n \rangle$.

**Output:** A permutation(reordering) $\langle {a_1}', {a_2}', ..., {a_n}' \rangle$ of the input sequence such thatt ${a_1}' \leq {a_2}' \leq ... \leq {a_n}'$



# Insertion sort
## Basics
| ![How insertion sort works](../assets/insertion-sort.PNG) |
| :--: |
|* **Figure 1** How insertion works*|
## Realization
### Pseudocode
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
### JavaScript
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

// higher order function
// https://stackoverflow.com/questions/50245957/sorting-array-with-javascript-reduce-function
const ReduceSort = arr => arr.reduce((sorted, el) => {
    let index = 0;
    while(index < arr.length && el < arr[index]) index++;
    sorted.splice(index, 0, el);
    return sorted;
},[])

const jsSort = arr => arr.sort((a,b) => a-b);

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

test(insertSort, 100000, 500); // 4684ms
test(jsSort,100000,500); // 41.25ms
test(ReduceSort,100000,500)  // Failed 2300ms
```

## Real-life applications
### Front-end development
### Back-end development
### Machine learning

## Problem set


# Merge sort
## Basics
- $T_{worst}$: $\Theta(nlogn)$
- $S_{worst}$: $\Theta(n)$

The **merge sort** algorithm closely follows the divide-and-conquer paradigm. Intuitively, it operates as follows:  
- **Divide**: Divide the $n$-element sequence to be sorted into two subsequences of $n/2$ elements each  
- **Conquer**: Sort the two subsequences recursively using merge sort.
- **Combine**: Merge the two sorted subsequences to produce the sorted answer.

The key operation of the merge sort algorithm is the merging of two sorted sequences in the "combine" step.

Here, we define ```MERGE(A,p,q,r)```, where ```A``` is an array and ```p```,```q``` and ```r``` are indices into the array such that $p\leq q \leq r$. The procedure assumes that the subarrays $A[p..q]$ and $A[q+1..r]$ are in sorted order. It **merges** them to form a single sorted subarray that replaces the current subarray $A[p..r]$

|![How merge sort works](../../assets/merge-sort.PNG)|
| :--: |
|* **Figure 2** MERGE(A,9,12,16)*|

For some more intuitive explanations, check out these links:  
[Algorithms: Merge Sort](https://www.youtube.com/watch?v=KF2j-9iSf4Q)  
[Merge sort in 3 minutes](https://www.youtube.com/watch?v=4VqmGXwpLqc)  
[Understand the recursive part](https://www.youtube.com/watch?v=RZK6KVpaT3I)
## Realization
### Pseudocode
```pseudocode
mergesort(A, p, r)
    if p < r
        q = [(p + r) / 2]
        mergesort(A, p, q)
        mergesort(A, q + 1, r)
        merge(A, p, q, r)       

merge(A, p, q, r)
    n_1 = q - p + 1
    n_2 = r - q
    let L[1..n_1 + 1] and R[1..n_2 + 1] be new arrays
    for i = 1 to n_1
        L[i] = A[p + i - 1]
    for j = 1 to n_2
        R[j] = A[q + j]
    L[n_1 + 1] = \infty
    R[n_2 + 1] = \infty
    i = 1
    j = 1
    for k = p to r
        if L[i] <= R[j]
            A[k] = L[i]
            i = i + 1
        else A[k] = R[j]

```

### JavaScript 
```javascript
class MergeSort {
    constructor()
}

```

### Java
```java
public class Solution {
    public static void mergesort (int[] array) {
        mergesort(array, new int[array.length], 0, array.length - 1);
    }

    public static void mergesort(int[] array, int leftStart, int rightEnd) {
        if (leftStart >= rightEnd) {
            return;
        }
        int middle = leftStart + rightEnd / 2;
        mergesort(array, temp, leftStart, middle );
        mergesort(array, temp, middle + 1, rightEnd);
        mergeHalves(array, leftStart, rightEnd);
    }

    public static void mergeHalves ( int[] array, int [] temp,  int rightEnd) {
        int leftEnd = (rightEnd + leftStart) / 2;
        int rightStart = leftEnd = 1;
        int size = rightEnd - leftStart + 1;

        int left = leftStart;
        int right = rightStart;
        int index = leftStart;

        while (left <= leftEnd && right <= rightEnd) {
            if(array[left] <= array[right]) {
                temp[index] = array[left];
                left++;
            }
            else{
                temp[index] = array[right];
                right++;
            }
            index++;
        }


        // either left or right pointer is at the end, so only one of these lines will have an effect
        System.arraycopy(array, left, temp, index, leftEnd - left + 1);
        System.arraycopy(array, left, temp, index, rightEnd - right + 1);
        System.arraycopy(temp,leftStart, array, leftStart, size);
        }

    }
}

```

### C++
```c++
int main() {
    int arraySize = 7;
    int A[7] = {38, 27, 43, 3, 9, 82, 10};

    
    int low = 0;
    int hight = arraySize - 1;

    // call stack:
    //  mergeSort(A[], 0, 6)
    mergeSort(A, low, high);

}


// Iteration 1: 
//     Call stack: 
//          mergeSort(A[], 0, 3)
//          mergeSort(A[], 0, 6)
void mergeSort(int A[], int low, int high){
    if(low < high){
        int mid;

        mid = (low + high) / 2;

        mergeSort(A, low, mid);
        mergeSort(A, mid+1, high);
        
        merge(A, low, high, mid);
    }

    return;
}

void merge(int A[], int low, int high, int mid){
    int i, j, k, c[50];
    i = low;
    k = low;
    j = mid + 1;
    // compare if both are within bounds
    while (i <= mid && j <= high){
        if (A[i] < A[j]){
            c[k] = A[i];
            k++;
            i++;
        }
        else{
            c[k] = A[j];
            k++;
            j++;
        }
    }

    // j out of bounds
    while(i <= mid){
        c[k] = A[i]
        k++;
        i++;
    }
    // i out of bounds
    while(j <= high){
        c[k] = A[j];
        k++;
        j++;
    }
    // Sort array
    for (i = low; i < k; i++){
        A[i] = c[i];
    }
}

```

# Quick sort