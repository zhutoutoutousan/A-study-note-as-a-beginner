# Table of Contents
# Dynamic programming
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
