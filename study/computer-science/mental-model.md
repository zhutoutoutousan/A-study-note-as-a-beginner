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
    - Doubly Linked List
      - [entry](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list)
        - Code along
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
- 1 hour
- 1 day
- 1 week
- 1 month



### Visualization

### Problem solving




# Resource
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)


```javascript
class DoublyLinkedListNode {
    constructor( value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

class DoublyLinkedList {
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null

        this.compare = new Comparator(comparatorFunction);
    }

    prepend(value) {
        // Make new node to be a head
        const newNode = new DoublyLinkedListNode(value, this.head);

        // If there is a head, then it won't be head anymore.
        // Therefore, make its previous preference to be new node(new head);
        // Then mark the new node as head.
        if (this.head) {
            this.head.previous = newNode;
        }

        // If there is no tail yet let's make new node a tail.
        if(!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value) {
        if(!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        
    }
}

```