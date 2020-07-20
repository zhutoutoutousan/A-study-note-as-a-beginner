# Table of Contents
- [Table of Contents](#table-of-contents)
- [Basics](#basics)
- [Underlying rules and axioms](#underlying-rules-and-axioms)
- [Properties of itself](#properties-of-itself)
- [Operations](#operations)
  - [Logical operations](#logical-operations)
    - [Equality](#equality)
  - [Interactions](#interactions)
    - [Addition](#addition)
    - [Multiplication](#multiplication)
      - [Scalar multiplication](#scalar-multiplication)
      - [Matrix Multiplication](#matrix-multiplication)
  - [Transformation](#transformation)
- [Properties of its operations](#properties-of-its-operations)
  - [Commutative](#commutative)
  - [Associative](#associative)
  - [Distributive](#distributive)
  - [Identity](#identity)
- [Deep-dive](#deep-dive)
  - [Theorems](#theorems)
- [Application](#application)
- [Book entry](#book-entry)
# Basics
- For basics, please review the [terminology](../../terminology.md) section.

# Underlying rules and axioms

# Properties of itself


# Operations
## Logical operations
### Equality
- Two matrices $\bold{A} = [a_{jk}]$ and $\bold{B} = [b_{jk}]$ are **equal**, written $\bold{A} = \bold{B}$, if and only if they have the same size and the corresponding entries are equal, that is, $a_{11}=b_{11}, a_{12}=b_{12}$, and so on. Matrices that are not equal are called **different**. Thus, matrices of different sizes are always different.
- No examples needed to explain
## Interactions
### Addition
- No furthur explanation needed for now except some exposure to the syntax.
### Multiplication
#### Scalar multiplication
- The **product** of any $m\times n$ matrix $\bold{A}=[a_{jk}]$ and any **scalar** *c*(number *c*) is written $c\bold{A}$

#### Matrix Multiplication
- Plz do some practices for a better grasp.
- Video explanations are better
  - [矩阵乘法作为组合变换的形式以理解 | 线性代数的本质，第4章](https://www.youtube.com/watch?v=XkY2DOUCWMU) - 10min
  - A written, illustrative explanation: AME - P263
- The **product** $\bold{C} = \bold{AB}$(in this order) of an $m\times n$ matrix $\bold{A}=[a_{jk}]$ times an $r\times p$ matrix $\bold{B}=[b_{jk}]$ is defined if and only if $r=n$ and is then the $m\times p$ matrix $\bold{C}=[c_{jk}]$ with entries(check out the equation below).

$$
c_{jk} = \sum_{l=1}^n a_{jl}b_{lk} + a_{j2}b_{2k} + ... a_{jn}b_{nk} \\
j = 1,...,m;k=1,...,p.
$$
## Transformation

# Properties of its operations
For the detailed syntax, just type it in the search engine
## Commutative
- Scalar multiplication
- Addition
## Associative
- Scalar multiplication
- Addition
## Distributive
- Scalar multiplication
- Addition
## Identity
- Scalar multiplication
- Addition

# Deep-dive
## Theorems

# Application

# Book entry
1. [AME](https://soaneemrana.org/onewebmedia/ADVANCED%20ENGINEERING%20MATHEMATICS%20BY%20ERWIN%20ERESZIG1.pdf)