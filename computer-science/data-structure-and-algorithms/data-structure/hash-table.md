# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Hashmap](#hashmap)
  - [Usage](#usage)
  - [Complexity](#complexity)
    - [Search](#search)
- [Hash function](#hash-function)
  - [Goals](#goals)
  - [Collision resolution](#collision-resolution)
    - [Open addressing](#open-addressing)
      - [Linear probe](#linear-probe)
      - [Plus 3 rehash](#plus-3-rehash)
      - [Quadratic probing(failed attempts)](#quadratic-probingfailed-attempts)
      - [Double hashing](#double-hashing)
    - [Closed addressing](#closed-addressing)
- [Reference](#reference)
# Overview
# Hashmap
## Usage
- Dictionary operations: INSERT, SEARCH, DELETE(Compiler: arbitrary character --> identifiers in the language)
- Used to index large amounts of data
- Address of each key calcualted using the key itself
- Collisions resolved with open or closed addressing
- Hashing is widely used in database indexing, compilers, caching, password authentication, and more.
- Insertion, deletion and retrieval occur in constant time.
## Complexity
### Search
- Worst case: $O(n)$
- Average: $O(1)$

# Hash function
## Goals
- Minimize collisions
- Uniform distribution of hash values
- Easy to calculate
- Resolve any collisions
## Collision resolution
### Open addressing
#### Linear probe
#### Plus 3 rehash
#### Quadratic probing(failed attempts)
#### Double hashing
### Closed addressing
# Reference
[Programming your Data: Hashmap and Tree](https://www.youtube.com/watch?v=1NWQpuDTMCM)

[Data Structures: Hash Tables -Hackerrank](https://www.youtube.com/watch?v=shs0KM3wKv8)

[Hash table](https://en.wikipedia.org/wiki/Hash_table)

[Introduction to Algorithms](.../pdf/../../../../../pdf/Introduction_to_Algorithms_Third_Edition.pdf)

