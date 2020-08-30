# Table of Contents
- [Table of Contents](#table-of-contents)
- [Alphabetical](#alphabetical)
  - [A](#a)
    - [Algebraic geometry](#algebraic-geometry)
  - [B](#b)
    - [Birch Conjecture](#birch-conjecture)
  - [C](#c)
    - [Calabi-Yao manifold](#calabi-yao-manifold)
    - [Congruence](#congruence)
    - [Conjecture](#conjecture)
    - [Continued fractions](#continued-fractions)
    - [Currying](#currying)
  - [D](#d)
    - [Diagonal Matrix](#diagonal-matrix)
    - [Differentiation](#differentiation)
    - [Differential calculus](#differential-calculus)
    - [Differential equation](#differential-equation)
    - [Differential geometry](#differential-geometry)
    - [Diophantine Equation](#diophantine-equation)
    - [Divisible](#divisible)
    - [Divisor](#divisor)
  - [E](#e)
    - [Elliptic curve](#elliptic-curve)
    - [Euclid's Algorithm](#euclids-algorithm)
  - [G](#g)
    - [Geometric Sequence](#geometric-sequence)
  - [H](#h)
    - [Homothetic transformation](#homothetic-transformation)
  - [I](#i)
    - [Integer](#integer)
    - [Integral calculus](#integral-calculus)
    - [Inversion formulas](#inversion-formulas)
  - [K](#k)
    - [Kummer's theory](#kummers-theory)
  - [M](#m)
    - [Map](#map)
    - [Matrix](#matrix)
    - [Modeling](#modeling)
  - [N](#n)
    - [Non-negative integer](#non-negative-integer)
  - [L](#l)
    - [Linear algebra](#linear-algebra)
    - [Linear system](#linear-system)
    - [Linear transformation](#linear-transformation)
  - [P](#p)
    - [Permutation](#permutation)
    - [Point reflection](#point-reflection)
    - [Positive energy theorem](#positive-energy-theorem)
    - [Positive integer](#positive-integer)
  - [Q](#q)
    - [Quadratic residues](#quadratic-residues)
  - [R](#r)
    - [Radix complement](#radix-complement)
    - [Rational integer](#rational-integer)
    - [Recursive tree](#recursive-tree)
  - [S](#s)
    - [Skew-Symmetric Matrix](#skew-symmetric-matrix)
    - [Swinnerton-Dyer Conjecture](#swinnerton-dyer-conjecture)
    - [Symmetric Matrix](#symmetric-matrix)
  - [T](#t)
    - [The Chinese Remainder Theorem](#the-chinese-remainder-theorem)
    - [The Fermat problem](#the-fermat-problem)
    - [The zeta function](#the-zeta-function)
    - [Theorem](#theorem)
    - [Transposition](#transposition)
    - [Triangular Matrix](#triangular-matrix)
    - [Two's component](#twos-component)
  - [V](#v)
    - [Vector](#vector)
- [EN-GE-CH](#en-ge-ch)
  - [M](#m-1)
    - [Mapping - ? - 映射](#mapping------映射)
- [Book entry](#book-entry)
# Alphabetical
## A
### Algebraic geometry
## B
### Birch Conjecture
## C
### Calabi-Yao manifold
### Congruence
- 相似三角形
### Conjecture
### Continued fractions
### Currying
- **Currying** is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
- Currying a function $f$ that takes three arguments creates three functions: $x=f(a,b,c)$ becomes: $x=g(a)(b)(c)$ or $h=g(a), \,\,\, i=h(b), \,\,\, x=i(c)$
- [Wiki](https://en.wikipedia.org/wiki/Currying)
## D
### Diagonal Matrix
### Differentiation
### Differential calculus
### Differential equation
### Differential geometry
### Diophantine Equation
### Divisible
- An *integer* $a$ is said to be *divisible* by another integer $b$, not $0$, if there is a third integer $c$ such that $a=bc$, if $a$ and $b$ are positive, $c$ is necessarily positive
### Divisor
- If an integer $a$ is said to be divisible by another integer $b$, then we can say $a$ is divisible by $b$, or $b$ is a *divisor* of $a$, by $b|a$.
- Thus $1|a$, $a|a$,and $b|0$ for every $b$ but $0$. 
## E
### Elliptic curve
### Euclid's Algorithm
## G
### Geometric Sequence
- [Geometric Sequences and Sums](https://www.mathsisfun.com/algebra/sequences-sums-geometric.html)
## H
### Homothetic transformation
## I
### Integer
- Comparable to *Rational integer*
### Integral calculus
### Inversion formulas
## K
### Kummer's theory
## M
### Map
- **定义**: 设$X,Y$是两个非空集合，如果存在一个法则$f$，使得对$X$中每个元素$x$，按法则$f$，在$Y$中有唯一确定的元素$y$与之对应，那么称$f$为从$X$到$Y$的**映射**，记作: $f:X\rightarrow Y$，其中$y$称为元素$x$（在映射$f$下）的**像**，并记作$f(x)$，即：$y=f(x)$,而元素$x$称为元素$y$（在映射$y$下）的一个**原像**；集合$X$称为映射$f$的定义域，记作$D_f$，即$D_f=X$; X中的所有元素的像所组成的集合称为映射$f$的值域，记作$R_f$或$f(X)$，即: $R_f=f(X)=\{f(x)|x\in X\}$
  - 构成一个映射必须具备以下三要素
    - 集合$X$,即定义域$D_f=X$
    - 集合$Y$,即值域的范围:$R_f\subset Y$
    - 对应法则$f$,使对每个$x\in X$，有唯一确定的$y=f(x)$与之对应
  - 对每个$x\in X$,元素$x$的像y是唯一的；而对每个$y\in R_f$,元素$y$的原像不一定是唯一的；映射$f$的值域$R_f$是$Y$的一个子集，即$R_f\subset Y$,不一定$R_f=Y$
  - Dude, isn't this a bit pedantic? And a bit of mouthful?

### Matrix
- **Matrices** are rectangular arrays of numbers or functions, and **vectors** are the main tools of linear algebra. It is important for it let us express large amount of data and functions in an organized and concise form.
- Matrices are single objects, denoted by single letters and calculated directly
- Matrices are very popular for expressing scientific and mathematical ideas.

- Matrices are denoted by capital boldface letters $\bold{A},\bold{B}, \bold{C},...$, or by writing the general entry in brackets; thus $\bold{A} = [a_{jk}]$, and so on. A matrix with *m* rows and *n* columns can be denoted by $\bold{m}\bold{\times}\bold{n}$ **matrix**. The size of the matrix is $m\times n$. You can also say 'some matrices are of sizes $a\times b, c\times d...$'.
- A **matrix** is a rectangular array of numbers or functions enclosed in brackets. The numbers(or functions) are called **entries** or, less commonly, *elements* of the matrix.
- Some descriptors like **rows** and **columns**, **indices**, **main diagonal**.
- Some particular matrices like **square matrices**, **vectors**(Matrices having just a single row or column), **row vector**, **column vector**, **zero vector**. 
- Some examples of matrixes

$$
\begin{bmatrix}
0.3 & 1 & -5 \\
0 & -0.2 & 16 
\end{bmatrix},
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\ 
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

$$
\begin{bmatrix}
e^{-x} & 2x^2 \\
e^{6x} & 4x
\end{bmatrix},
\begin{bmatrix}
a_1 & a_2 & a_3 
\end{bmatrix}
\begin{bmatrix}
4 \\
\frac{1}{2}
\end{bmatrix}
$$

- Matrices are handy for storing and processing data in applications. 
### Modeling
- If we want to solve an engineering problem(usually of a physical nature), we first have to formulate the problem as a mathematical expression in terms of variables, functions, and equations. Such an expression is known as a mathematical model of the given problem. The process of setting up a model, solving it mathematically, and interpreting the result in physical or other terms is called *mathematical modeling* or, briefly, **modeling**.
- The four stages of using mathematical modeling to solve a real problem?

## N
### Non-negative integer
- 0,1,2,3...

## L
### Linear algebra
- Linear algebra is a fairly extensive subject that covers vectors and matrices, determinants, systems of linear equations, vector spaces and linear transformations, eigenvalue problems, and other topics.
- It can be applied to engineering, physics, geometry, computer science, economics, and other areas. It also helps us have a deeper understanding of mathematics itself.
### Linear system
- Some concepts like **unknowns** e.g. $x_1,x_2$ in the following examples. Some **coefficient matrix**, called $\bold{A}$ by listing the coefficients of the **unknowns** in the position in which they appear in the linear equations. As shown in $\tilde{A}$ equation, by augmenting $\bold{A}$ with the right sides of the linear system and call it the augmented matrix of the system.


$$
\bold{A} = \begin{bmatrix}
4 & 6 & 9\\
6 & 0 & -2\\
5 & -8 & 1
\end{bmatrix},

\tilde{A} = \begin{bmatrix}
4 & 6 & 9 & 6\\
6 & 0 & -2 & 20\\
5 & -8 & 1 & 10
\end{bmatrix}
$$

- Some examples of linear systems
  - $$
    \begin{matrix}
      4x_1 + 6x_2 + 9x_3 = 6 \\
      6x_1  - 2x_3 = 20 \\
      5x_1 - 8x_2 + x_3 = 10
    \end{matrix}
    $$

### Linear transformation
## P
### Permutation
### Point reflection
### Positive energy theorem
- [wiki](https://en.wikipedia.org/wiki/Positive_energy_theorem)
### Positive integer
- 1,2,3...

## Q
### Quadratic residues

## R
### Radix complement
### Rational integer
- ...-3,-2,-1,0,1,2,3...
### Recursive tree
## S
### Skew-Symmetric Matrix
- **Skew-symmetric** matrices are square matrices whose transpose equals **minus** the matrix.
- Let's say $\bold{A}$ is a skew-symmetric Matrice.
- ${\bold{A}}^\top= -\bold{A}$(thus $a_{kj}=-a_{jk}$, hence $a_{jj}=0$)
- Example

$$
\begin{bmatrix}
0 & 1 & -3\\
-1 & 0 & -2\\
3 & 2 & 0
\end{bmatrix}
$$
### Swinnerton-Dyer Conjecture

### Symmetric Matrix
- **Symmetric** matrices are square matrices whose transpose equals the matrix itself.
- Let's say $\bold{A}$ is a symmetric Matrice.
- ${\bold{A}}^\top= \bold{A}$(thus $a_{kj}=a_{jk}$)
- Example

$$
\begin{bmatrix}
20 & 120 & 200\\
120 & 10 & 150\\
200 & 150 & 30
\end{bmatrix}
$$

## T
### The Chinese Remainder Theorem
### The Fermat problem
### The zeta function
### Theorem
### Transposition
- The transpose of an $m\times n$ matrix $\bold{A} = [a_{jk}]$ is the $n\times m$ matrix ${\bold{A}}^\top$(read *A tranpose*) that has the first *row* of $\bold{A}$ as its first column, the second *row* of $\bold{A}$ as its second *column*, and so on. Thus the transpose of $\bold{A} = [a_{jk}]$ is ${\bold{A}}^\top=[a_{kj}]$.
- Example

$$
{\bold{A}}^\top = [a_{kj}] = \begin{bmatrix}
a_{11} & a_{21} & ... & a_{m1}\\
a_{12} & a_{22} & ... & a_{m2}\\
. & . & ... & a_{m1}\\
a_{1n} & a_{2n} & ... & a_{mn}
\end{bmatrix}
$$

- ${({\bold{A}}^\top)}^\top = \bold{A}$
- ${(\bold{A}+\bold{B})}^\top={\bold{A}}^\top + {\bold{B}}^\top$
- ${(c\bold{A})}^\top = c{\bold{A}}^\top$
- ${(\bold{A}\bold{B})}^\top={\bold{B}}^\top {\bold{A}}^\top$
### Triangular Matrix
### Two's component
## V
### Vector
- A **vector** is a matrix with only one row or column. Its **entries** are called the **components** of the vector.
- A **vector** is denoted by **lowercase** boldface letters **a**, **b**,... or by its general component in brackets, **a** = [$a_j$], and so on.
- For more, check [**Matrix**](#matrice) section.


# EN-GE-CH
## M
### Mapping - ? - 映射



# Book entry

