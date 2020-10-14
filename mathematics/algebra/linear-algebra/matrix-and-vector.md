# Table of Contents
- [Table of Contents](#table-of-contents)
- [Portal for resuming](#portal-for-resuming)
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
  - [Mutation](#mutation)
    - [Transposition](#transposition)
  - [Transformation](#transformation)
    - [Linear transformation](#linear-transformation)
    - [Nonlinear transformation](#nonlinear-transformation)
- [Properties of its operations](#properties-of-its-operations)
  - [Commutative law](#commutative-law)
  - [Associative law](#associative-law)
  - [Distributive law](#distributive-law)
  - [Identity law](#identity-law)
- [Deep-dive](#deep-dive)
  - [Theorems](#theorems)
- [Application](#application)
- [Book entry](#book-entry)

# Portal for resuming
Search for '!!!continue' to start where you left off
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
- It's more efficient to do the practice with priority to visualization over pedantic syntax.
- Video explanations are better
  - [矩阵乘法作为组合变换的形式以理解 | 线性代数的本质，第4章](https://www.youtube.com/watch?v=XkY2DOUCWMU) - 10min
  - A written, illustrative explanation: **AME - P263**(Also good for increasing familiarity with the syntax)
- The **product** $\bold{C} = \bold{AB}$(in this order) of an $m\times n$ matrix $\bold{A}=[a_{jk}]$ times an $r\times p$ matrix $\bold{B}=[b_{jk}]$ is defined if and only if $r=n$ and is then the $m\times p$ matrix $\bold{C}=[c_{jk}]$ with entries(check out the equation below).

$$
c_{jk} = \sum_{l=1}^n a_{jl}b_{lk} + a_{j2}b_{2k} + ... a_{jn}b_{nk}
$$

$$
j = 1,...,m;k=1,...,p
$$

## Mutation
### Transposition
- We obtain the transpose of a matrix by writing its rows as columns(or equivalently its columns as rows). If $\bold{A}$ is the given matrix, then we denote its transpose by $\bold{A}^T$
- The transpose of an $m \times n$ matrix $\bold{A} = [a_{jk}]$ is the $n\times m$ matrix !!!continue --- AME P267

## Transformation
### Linear transformation
### Nonlinear transformation


# Properties of its operations
For the detailed syntax, just type it in the search engine
## Commutative law
- Scalar multiplication
- Addition
- **NOT** Matrix Multiplication
## Associative law
- Scalar multiplication
- Addition
- Matrix Multiplication
## Distributive law
- Scalar multiplication
- Addition
- Matrix Multiplication
## Identity law
- Scalar multiplication
- Addition
- Matrix Multiplication

# Deep-dive
## Theorems

# Application

# Book entry
1. [AME](https://soaneemrana.org/onewebmedia/ADVANCED%20ENGINEERING%20MATHEMATICS%20BY%20ERWIN%20ERESZIG1.pdf)