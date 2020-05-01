# The Role of Algorithms in Computing
## Algorithms
### 1.1-1
Q: Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

A:
### 1.1-2
Q: Other than speed, what other measures of efficiency might one use in a real-world setting?

A:
### 1.1-3
Q: Select a data structure that you have seen previously, and discuss its strengths andlimitations.

### 1.1-4
Q: How are the shortest-path and traveling-salesman  problems given above similar?How are they different?
### 1.1-5
Q: Come up with a real-world problem in which only the best solution will do.  Thencome  up  with  one  in  which  a solution  that  is  “approximately”  the  best  is  goodenough.
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
### 1.2-Problems 1-1 Comparison of running times
For each function $f(n)$ and  time $t$in the  following  table,  determine the largest size $n$ of a problem that can be solved in time $t$, assuming that the algorithm to solve the problem takes $f(n)$ microseconds.