# 2021/3/24
## Probablistic data structure
- [An introduction to Redis data types and abstractions](https://redis.io/topics/data-types-intro)
  - [HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog)
  - [Introduction to Probabilistic Data Structures](https://dzone.com/articles/introduction-probabilistic-0)
    - [Bloom Filters by Example](https://llimllib.github.io/bloomfilter-tutorial/)

# 2021/3/26
## Understanding Quicksort
- The basic ideas are setting pivot(highest as default) and make sure the insert position satisfies the following condition:
  - All of the left side elements are less than the insert position of the original pivot, symmetrical for the right part
- Mark as sorted, then call recursively
- **More training**: How do you mentally prove it would work for all edge cases? Make it clearer 