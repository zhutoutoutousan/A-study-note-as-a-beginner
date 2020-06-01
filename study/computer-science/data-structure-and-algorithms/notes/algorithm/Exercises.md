# Table of Contents
- [Table of Contents](#table-of-contents)
- [The Role of Algorithms in Computing](#the-role-of-algorithms-in-computing)
  - [Algorithms](#algorithms)
    - [1.1-1 Real-world examples of the applications of algorithms](#11-1-real-world-examples-of-the-applications-of-algorithms)
    - [1.1-2](#11-2)
    - [1.1-3](#11-3)
    - [1.1-4](#11-4)
    - [1.1-5](#11-5)
    - [Convex hull](#convex-hull)
  - [Algorithms as a technology](#algorithms-as-a-technology)
    - [1.2-1](#12-1)
    - [1.2-2](#12-2)
    - [1.2-3](#12-3)
    - [1.2-Problems 1-1 Comparison of running times](#12-problems-1-1-comparison-of-running-times)
  - [Getting started](#getting-started)
    - [2.1-1 Illustrate how INSERTION-SORT works](#21-1-illustrate-how-insertion-sort-works)
    - [2.1-2 Reverse INSERTION-SORT](#21-2-reverse-insertion-sort)
    - [2.1-3 Work on the searching algorithm](#21-3-work-on-the-searching-algorithm)
    - [2.1-4 Adding two binary integers.](#21-4-adding-two-binary-integers)
    - [2.2-1 The basic concept of Big $\Theta$ notation](#22-1-the-basic-concept-of-big-eqmathsemanticsmrowmi-mathvariantnormalθmimrowannotation-encodingapplicationx-texthetaannotationsemanticsmathθeq-notation)
    - [2.2-2 Analyse an algorithm yourself](#22-2-analyse-an-algorithm-yourself)
    - [2.2-3 **Search algorithm** analysis](#22-3-search-algorithm-analysis)
    - [2.2-4 Good best-case running time](#22-4-good-best-case-running-time)
# The Role of Algorithms in Computing
## Algorithms
### 1.1-1 Real-world examples of the applications of algorithms
Q: Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

A:
### 1.1-2
Q: Other than speed, what other measures of efficiency might one use in a real-world setting?

A:
### 1.1-3
Q: Select a data structure that you have seen previously, and discuss its strengths and limitations.

### 1.1-4 
Q: How are the shortest-path and traveling-salesman problems given above similar? How are they different?
### 1.1-5
Q: Come up with a real-world problem in which only the best solution will do.  Then come  up  with  one  in  which  a solution  that  is  “approximately”  the  best  is  good enough.
### Convex hull

## Algorithms as a technology
### 1.2-1
Q: Give an example of an application that requires algorithmic content at the applica-tion level, and discuss the function of the algorithms involved.
### 1.2-2
Q: Suppose we are comparing implementations of insertion sort and merge sort on the same machine.  For inputs of size $n$, insertion sort runs in $8n^2$ steps, while mergesort runs in $64nlgn$ steps.  For which values of $n$ does insertion sort beat mergesort?

A:  monotonicity
Consider the inequality $8n^2 = 64nlgn$, which can be deduced to $n = 8lgn$. Consider the function $f(x) = n - 8lgn$, its derivative is $f'(x) = 1 - \frac{8}{nln(10)}$. In $f'(x)$, $ln(10) \approx 2.303$, then $\frac{8}{ln(10)} \approx 3.474$

For numericall solution, please first solve the [Dynamically show intersections of two functions inside manipulate](../../../../mathematics/tools/mathematica/notes/basic-operations.md)
### 1.2-3
Q: What is the smallest value of $n$ such that an algorithm whose running time is $100n^2$ runs faster than an algorithm whose running time is $2^n$ on the same machine?  
A: Consider the inequality equation $100n^2<2^n$, we get $\frac{2^n}{n^2} > 100$, let $f(x) = \frac{2^x}{x^2}$, then 

$$
\lim_{\Delta x \rightarrow 0^+} f(x + \Delta x) - f(x) = \lim_{\Delta x \rightarrow 0^+} \frac{2^{x+\Delta x}}{x^2+2\Delta x x + {\Delta x}^2}-\frac{2^{x}}{x^2}= \lim_{\Delta x \rightarrow 0^+}\frac{x^2 2^{x+\Delta x}-2^x(x^2(x^2+2\Delta x x + {\Delta x}^2))}{x^2(x^2+2\Delta x x + {\Delta x}^2)}=\\\lim_{\Delta x \rightarrow 0^+}\frac{2^x x^2(2^x-(x+\Delta x)^2)}{x^2(x^2+2\Delta x x + {\Delta x}^2)} = \frac{2^x(2^x-x^2)}{x^2}
$$

Apparently, the function value increases since $x = 5$. When $n=5$, $f(n) = 1.28$. When $n=10$, $f(n) = 1024/10 = 102.4>100$


### 1.2-Problems 1-1 Comparison of running times
For each function $f(n)$ and  time $t$in the  following  table,  determine the largest size $n$ of a problem that can be solved in time $t$, assuming that the algorithm to solve the problem takes $f(n)$ microseconds.

## Getting started

### 2.1-1 Illustrate how INSERTION-SORT works
Q: Using the figure below as a model, illustrate the operation of INSERTION-SORT on the array $A=\langle 31,41,59,26,41,58\rangle$

A:
### 2.1-2 Reverse INSERTION-SORT
Q: Rewrite the INSERTION-SORT procedure to sort into non-increasing instead of non-decreasing order.

A:

### 2.1-3 Work on the searching algorithm
Q: Consider the **searching algorithm**:
**Input**: A sequence of $n$ numbers $A=\langle a_1,a_2,...,a_n\rangle$ and a value $\nu$.
**Ouput**: An index $i$ such that $\nu = A[i]$ or the special value $NIL$ if $\nu$ does not appear in $A$.  
Write pseudocode for **linear search**, which scans through the sequence, looking for $\nu$. Using a loop invariant, prove that your algorithm is correct. Make sure that your loop invariant fulfills the three necessary properties.

A:

### 2.1-4 Adding two binary integers.
Q: Consider the problem of adding two $n$-bit binary integers, stored in two $n$-element arrays $A$ and $B$. The sum of the two integers should be stored in binary form in an $(n+1)$-element array $C$. State the problem formally and write pseudocode for adding the two integers.

A:

### 2.2-1 The basic concept of Big $\Theta$ notation
Q: Express the function $n^3/1000-100n^2-100n+3$ in terms of $\Theta$-notation.

A: $\Theta(n^3)$

### 2.2-2 Analyse an algorithm yourself
Q: Consider sorting $n$ numbers stored in array ```A``` by first finding the smallest element of ```A``` and exchanging it with the element in ```A[1]```. Then find the second smallest element of ```A```. Write pseudocode for this algorithm, which is known as **selection sort**. What loop invariant does this algorithm maintain?  Why does it need to run for only the first $n-1$ elements, rather than for all $n$ elements? Give the best-case and worst-case running times of selection sort in $\Theta$-notation.

A:

### 2.2-3 **Search algorithm** analysis
Q: Consider linear search again(see [Exercise 2.1-3](#21-3-work-on-the-searching-algorithm)). How many elements of the input sequence need to be checked on the average, assuming that the element being searched for is equally likely to be any element in the array? How about in the worst case? What are the average-case and worst-case running times of linear search in $\Theta$-notation? Justify your answers.

### 2.2-4 Good best-case running time
How can we modify almost any algorithm to have a good best-case running time?