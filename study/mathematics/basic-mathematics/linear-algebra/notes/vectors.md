# Contents

# Definitions and notations
## Vector
### Vector.definition
A vector is an ordered finite list of numbers.


### Vector.elements
- Elements(Entries, coefficinets, components): The values in the array.
- scalars: The numbers or values of the elements in a vector.
- Subvectors: Let's say there is a vector of some vectors concatenated together $a_{r:s} = (a_r,...,a_s)$(yields size $s-r+1$), this sort of way to denote subvectors are called *colon notation*.

### Vector.property
- Size(dimension or length): The number of elements it contains.
### Vector.instance
- real vector
- complex vector
- Zero vector: A *zero vector* is a vector with all elements equal to zero.
- Unit vector: A (standard) *unit vector* is a vector with all the elements equal to zero, except one element which is equal to one. Here, $e_i$ denotes the $i$th unit vector, and not the $i$th element of a vector $e$. Thus we can describe the $i$th unit $n$-vector $e_i$ as:

$$
        (e_i)_j = \begin{cases}
                        1 & j = i \\
                        0 & j\neq i
                  \end{cases}
$$

for $i,j = 1,...,n.$. 

### Vector.relations
- equal: Vector $a=b$, if they have the same size, and each of the corresponding entries is the same.
### Vector.methods
- Concatenation(stacking): Like duh. But, can you sort of find a way that sort of map the abnormal points or patterns?


### Vector.notations
- Agreement source: [Introduction to Applied Linear Algebra - Stephen Boyd](../pdf/introduction-to-applied-linear-algebra.pdf)
- A simple vector 

$$
\left[
\begin{matrix}
        a \\
        b \\
        c \\
        d
\end{matrix}
\right]
$$

- $n-vector$ : A vector of size $n$
- Query: a\[i\] === $a_i$
- $a$ is an $n-vector$ with real entries: $a \in {\bold{R}}^n$
- *Index range*
- Notational conventions: How to distinguish between vectors and scalars? 
- $(a_i)_j$: The $j$th entry of $a_i$, the $i$th vector in the list.
# Solved problems

# Current problems