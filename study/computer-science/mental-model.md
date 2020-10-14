# Front-line memory

## Computer network topology

## Data structure and algorithms

### Paradigm

### Coding
- 10 minutes
  - Data structure
    - LinkedList
      - [entry](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js)
        - No need to code along
        - Last review stamp: LINE 130
    - Doubly Linked List
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list)
        - No need to code along
    - Queue
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue)
        - Code along
    - Stack
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack)
        - Code along
    - Hash table
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)
        - No need to code along
    - Heap
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
        - Code along
    - Priority queue
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
        - Code along
    - Tree
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)
        - Code along
  - Algorithms
    - Bit manipulation
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits)
        - Code along
    - Tree
      - Binary search
- 1 hour
- 1 day
- 1 week
- 1 month

```javascript
class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // Any node related meta information may be stored here.
    this.meta = new HashTable();

    // This comparator is used to compare binary tree nodes with each other
    this.nodeComparator = new Comparator();
  }

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
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    if (!this.parent) {
      return undefined;
    }
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right;
    }

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

    // Attach new node to the left
    this.left = node;

    // Make current node to be a parent for new left one.
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null;
    }

    // Attach new node to the right
    this.right = node;

    if (node) {
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
  if(!nodeToReplace || !replacementNode) {
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

  return true;
}

static copyNode(sourceNode, targetNode) {
  targetNode.setValue(sourceNode.value);
  targetNode.setLeft(sourceNode.left);
  targetNode.setRight(sourceNode.right);
}

traverseInOrder() {
  let traverse = [];

  // Add left node.
  if (this.left) {
    traverse = traverse.concat(this.left.traverseInOrder());
  }

  // Add root.
  traverse.push(this.value);

  // Add right node.
  if (this.right) {
    traverse = traverse.concat(this.right.traverseInOrder());
  }

  return traverse;
}

toString() {
  return this.traveseInOrder().toString();
}

}

```
AVL tree
```javascript



```


### Visualization

### Problem solving




# Resource
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)

```javascript

```