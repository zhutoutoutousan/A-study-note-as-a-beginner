# Table of Contents
- [Table of Contents](#table-of-contents)
- [Summation](#summation)
  - [Convergence](#convergence)
    - [P1](#p1)
# Summation
## Convergence
### P1
Q: Prove that if a series $\sum_{k=1}^{\infty} a_k$ converges, then $\sum_{k=1}^{\infty} |a_k|$ also converges.

P: If $\lim_{n\rightarrow \infty} \sum_{k=1}^n a_k = a$, where a is a constant number.
Then, 

$$
\lim_{n\rightarrow \infty} \sum_{k=1}^n a_k = 

\lim_{n\rightarrow \infty} \sum_{x=1}^p a_x   +
\lim_{n\rightarrow \infty} \sum_{y=1}^q a_y = a \\
a_x \geq 0  \\
a_y < 0 \\
p + q = +\infty

$$

While

$$

\lim_{n\rightarrow \infty} \sum_{k=1}^n |a_k| = 

\lim_{n\rightarrow \infty} \sum_{x=1}^p a_x   -
\lim_{n\rightarrow \infty} \sum_{y=1}^q a_y \\
a_x \geq 0  \\
a_y < 0  \\
p + q = +\infty
$$
