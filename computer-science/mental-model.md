# Table of Contents
- [Table of Contents](#table-of-contents)
- [Front-line memory](#front-line-memory)
  - [CS landscape](#cs-landscape)
  - [Computer network topology](#computer-network-topology)
  - [Computer system](#computer-system)
  - [Data structure and algorithms](#data-structure-and-algorithms)
- [Resource](#resource)
- [Training ground](#training-ground)

# Front-line memory

## CS landscape

## Computer network topology

## Computer system

## Data structure and algorithms

- Judging factor
  - Primitive
    - Coding along
    - Basic ideas
    - Vague memory
  - Intermediate
    - Code-mentalModel connection
  - Advanced
    - Experience more to unlock

- Paradigm 1
  - Stage 1
    - REP 1
      - Problem solving technique
        - Divide and conquer
        - Recursion
        - Sliding window
        - Two pointer
          - [Two Pointers Technique - Geeksforgeeks](https://www.geeksforgeeks.org/two-pointers-technique/)
          - [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
      - Data structure
        - Doubly Linked List
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list)
            - No need to code along
        - Queue
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
            - Code along
        - Stack
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
            - Code along
        - Heap
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
            - Code along
        - Priority queue
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
            - Code along
        - Tree
          - Binary tree
            - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
              - Code along
              - Pair with
                - HashTable
                - LinkedList
        - Graph
      - Algorithms
        - Bit manipulation
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits)
            - Code along
        - Tree
          - Binary search
        - Sort
          - Insertion sort
          - Bubble sort
          - Heap sort
          - Quick sort
          - Merge sort
        - Graph
          - BFS
          - DFS
          - Dijkstra
          - A*
    - REP 2
      - Data structure
        - Hash table
          - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
            - No need to code along
            - Pair with LinkedList
      - LinkedList
        - [entry](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js)
          - No need to code along
          - Last review stamp: LINE 130
    - REP 3
    - REP 4
    - REP 5
  - Stage 2
  - Stage 3
- Paradigm 2
- Paradigm 3
- REVIEW AND RESET



# Resource
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)

# Training ground

```javascript
// Use Comparator
// Use HashTable

// tree
class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  // Any node related meta information may be stored here.
  this.meta = new HashTable();

  // This comparator is used to compare binary tree nodes with each other
  this.nodeComparator = new Comparator();

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    // Check if current node has parent;
    if (!this.parent) {
      return undefined;
    }
  }
}

```


```javascript
// graph
class Graph {
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }
}
```