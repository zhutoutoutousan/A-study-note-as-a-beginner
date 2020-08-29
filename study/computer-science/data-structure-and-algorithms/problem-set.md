# Table of Contents
- [Table of Contents](#table-of-contents)
- [Dynamic programming](#dynamic-programming)
  - [Longest Palindromic Substring](#longest-palindromic-substring)
    - [Problem](#problem)
    - [Solution](#solution)
      - [Expand Around Center](#expand-around-center)
    - [Implementation](#implementation)
- [Brute force](#brute-force)
- [String manipulation](#string-manipulation)
- [Memoization](#memoization)
- [Graph search](#graph-search)
  - [DFS](#dfs)
  - [BFS](#bfs)
- [Bit manipulation](#bit-manipulation)
# Dynamic programming
Recap:
- [Algorithms: Memoization and Dynamic Programming](https://www.youtube.com/watch?v=P8Xa2BitN3I)

## Longest Palindromic Substring
### Problem
Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.
### Solution
#### Expand Around Center
We define $P(i,j)$ as following:

$$
P(i,j) = \begin{cases}
true, \; if\,the\,subtring S_i...S_j\, is\, a\, palindrome \\
false, \; otherwise
\end{cases}
$$

Therefore,

$$
P(i,j)=(P(i+1, j-1) \; and \; S_i==S_j)
$$

The base cases are:

$$
P(i,i) = true 
$$

$$
P(i,i+1)=(S_i==S_{i+1})
$$

This
### Implementation
```java

```

```javascript

```
# Brute force

# String manipulation

# Memoization
Recap:
- [Algorithms: Memoization and Dynamic Programming](https://www.youtube.com/watch?v=P8Xa2BitN3I)
# Graph search
Recap:
- [Algorithms: Graph Search, DFS and BFS](https://www.youtube.com/watch?v=zaBhtODEL0w)

## DFS
## BFS
# Bit manipulation