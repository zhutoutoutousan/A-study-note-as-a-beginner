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
              - [ ] Comprehension chasm
                - [ ] ```setRight```, if nested, it just detach and replace all
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

    // Check if current node has grand-parent
    if (!this.parent.parent) {
      return undefined;
    }

    // Check if grand-parent has two children.
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    // So for now we know that current node has grand-parent and this
    // grand-parent has two children. Let's find out who is the uncle.
    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      // Right one is an uncle
      return this.parent.parent.right;
    }

    // Left one is an uncle
    return this.parent.parent.left;
  }

  setValue(value) {
    this.value = value;

    return this;
  }

  setLeft(node) {
    // Reset parent for left node since it is going to be detached.
    if (this.left) {
      this.left.parent = null;
    }

    // Attach new node to the left.
    this.left = node;

    // Make current node to be a parent for new left one.
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if(this.right) {
      this.right.parent = null;
    }

    // Attach new node to the right.
    this.right = node;

    // Make current node to be a parent for new right one.
    if(node) {
      this.right.parent = this;
    }

    return this;
  }

  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  traverseInOrder() {
    let traverse = [];

    if(this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
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