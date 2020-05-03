# How to tell if an algorithm is correct?
## Loop invariant
### Why loop invariant?
Check out [wiki](https://en.wikipedia.org/wiki/Loop_invariant)


### What loop invariants looks like
```
avg(A[1...n]){
    tmp = 0
    for(i = 1 to n)
        tmp = tmp + A[i] // Holds here, after this line runs
    return tmp/n
}
```
Always, every time through the loop: $tmp = \sum_{j=1}^i A[j]$
Already seen that it holds 1st time through: i == 1, tmp == A\[1\]

- **Initialization:** ${tmp}_{i=1} = (\sum_{i=1}^{i=1} A[j]) = A[1]$
- **Maintenance:** Given: it holds on the $i$th iteration: $tmp = \sum_{j=1}^i A[j]$, prove it holds on the $i+1$st: ${tmp}' = \sum_{j=1}^{i'} A'[j]$. Proof: ${tmp}' = tmp + \sum_{j=1}^i A[j] + A[i+1] = \sum_{j=1}^{i'} A'[j]$
- **Termination:** ${tmp}_{i=n} = \sum_{i=1}^{i=n} A[j]$, returns $tmp/m = \sum_{j=1}^{j=n} A[j]/n$

[Program Proofs and Loop Invariants](https://www.youtube.com/watch?v=3YP6NP1_tF0)

[Hoare logic](https://en.wikipedia.org/wiki/Hoare_logic)

### How loop invariant?
A loop invariant is a set of data---though the position may be altered---the integrity of which remains unchanged.

We use loop invariants to help understanding why an algorithm is correct. We must show three things about a loop invariant:
- **Initialization:** It is true prior to the first iteration of the loop.
- **Maintenance:** If it is true before an iteration of the loop, it remains true before the next iteration.
- **Termination:** When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct.

When the first two properties hold, the loop invariant is true prior to every iteration of the loop. Note the similarity to mathematical induction, where to prove that a property holds, you prove a base case and an inductive step. 

The third property is perhaps the most important one. Typically, we use the loop invariant along with the condition that caused the loop to terminate. The termination property differs from how we usually use mathematical induction, in which we apply the inductive step infinitely.

### Cases
#### Insertion sort
**Input:** A sequence of $n$ numbers $\langle a_1, a_2, ..., a_n \rangle$.

**Output:** A permutation(reordering) $\langle {a_1}', {a_2}', ..., {a_n}' \rangle$ of the input sequence such taht ${a_1}' \leq {a_2}' \leq ... \leq {a_n}'$

| ![How insertion sort works](../../assets/insertion-sort.PNG) |
| :--: |
| **Figure 1** Insertion sort|

```
// The key correspond to the index number of the highlighted black blocks, and i traverse over all the grey blocks in Figure 1
for j = 2 to A.length
    key = A[j]
    // Insert A[j] into the sorted sequence A[1..j - 1]
    i  = j - 1
    while i > 0 and A[i] > key
        A[i+1] = A[i]
        i = i - 1
    A[i+1] = key
```
Proof check out *Introduction to algorithms* Page 19

# Algorithm analysis
## Random-access machine
### Property
- In the RAM model, instructions are executed one after another, with no concurrent operations.
- The RAM model contains instructions commonly found in real computers: arithmetic(such as add, subtract, multiply, divide, remainder, floor, ceiling), data movement(load, store, copy), and control(conditional and unconditional branch, subroutine call and return).Each such instruction takes a constant amount of time.
- Ignoring memory hiearchy

For more, check out [this](https://en.wikipedia.org/wiki/Random-access_machine)