# 2021/3/28
## A little bit playing around on Pascal's rule

- https://en.wikipedia.org/wiki/Pascal%27s_rule

$$ 

C_{n-1}^k + C_{n-1}^{k-1} = \frac{(n-1)!}{k!(n-1-k)!} + \frac{(n-1)!}{(k-1)!(n-k)!} \\
= \frac{(n-k+k)(n-1)!}{k!(n-k)!} = \frac{n!}{k!(n-k)!} = C_n^k

$$

Another generalization in [here](https://en.wikipedia.org/wiki/Pascal%27s_rule)

So if I change it to $-d$, will it still work?