# Contents
- [Contents](#contents)
- [A](#a)
  - [Algorithm](#algorithm)
  - [Assertion](#assertion)
- [B](#b)
  - [Bandwidth](#bandwidth)
- [D](#d)
  - [Data structures](#data-structures)
  - [Dictionary](#dictionary)
  - [Distributed application](#distributed-application)
  - [Dynamic sets](#dynamic-sets)
- [E](#e)
  - [Efficiency](#efficiency)
  - [End systems](#end-systems)
- [F](#f)
  - [Formal verification](#formal-verification)
- [H](#h)
  - [Host](#host)
  - [Hub](#hub)
- [I](#i)
  - [Internet Protocol(IP)](#internet-protocolip)
- [M](#m)
  - [MAC address](#mac-address)
  - [Modifying operations](#modifying-operations)
- [N](#n)
  - [Network core](#network-core)
  - [NP-complete problems](#np-complete-problems)
- [P](#p)
  - [Parallelism](#parallelism)
  - [Probabilistic analysis](#probabilistic-analysis)
- [Q](#q)
  - [Queue](#queue)
- [R](#r)
  - [Randomized algorithm](#randomized-algorithm)
  - [Recursive](#recursive)
    - [Router](#router)
- [S](#s)
  - [Satellite data](#satellite-data)
  - [Socket](#socket)
  - [Socket interface](#socket-interface)
  - [Stack](#stack)
  - [State space](#state-space)
  - [Switch](#switch)
    - [Computer networking](#computer-networking)
- [T](#t)
  - [Transmission Control Protocol(TCP)](#transmission-control-protocoltcp)
- [W](#w)
  - [Worst-case running time](#worst-case-running-time)
# A
## Algorithm
- An **algorithm** is any well-defined computational procedure that takes some value, or set of values, as **input** and produces some values, or sets of values, as **output**.
- An algorithm is said to be **correct** if, for every input instance, it halts with the correct output.

## Assertion
[Assertion (software development)](https://en.wikipedia.org/wiki/Assertion_(software_development))

# B
## Bandwidth

# D
## Data structures
- A **data structure** is a way to store and organize data in order to facilitate access and modifications.

## Dictionary
- Many algorithms need only the ability to insert elements into, delete elements from, and test membership in a set. We call a **dynamic** set that supports these operations a **dictionary**.

## Distributed application
- Applications that involve multiple end systems that exchange data with one another
## Dynamic sets
- Sets are as fundamental to computer science as they are to mathematics. Whereas mathematical sets are unchanging, the sets manipulated by algorithms can grow, shrink, or otherwise change over time. We call such sets **dynamic**.

# E
## Efficiency
- \(Mathematica problem\): Let's say there are two algorithms for sorting, the first is **insertion sort**, which takes time roughly equal to $c_1 n^2$ to sort $n$ items, where $c_1$ is a constant that does not depend on $n$. The second, **merge sort**, takes time roughly equal to $c_2 n lgn$, where $lgn$ stands for ${log}_2 n$ and $c_2$ is another constant that also does not depend on $n$. For all $c_1$ and $c_2$, plot their time complexity curves with resepect to $n$.
## End systems

# F
## Formal verification
In the context of hardware and software systems, **formal verification** is the act of proving or disproving the correctness of intended algorithms underlying a system with respect to a certain formal specification or property, using formal methods of mathematics. 



# H
## Host
## Hub
- A hub doesn't filter data or has any intelligence as to where the data should be sent.
- The only thing the hub knows is when the device is connected to one of its ports, when a data packet arrives at one of the ports, it is copied to all of the other ports.
- [集线器，交换机和路由器解释 - 有什么区别？](https://www.youtube.com/watch?v=1z0ULvg_pW8)
# I
## Internet Protocol(IP)
- The TCP and IP are two of the most important protocols in the Internet
- The IP protocol specifies the format of the packets that are sent and received among routers and end systems
# M
## MAC address
## Modifying operations
- Operations on a dynamic set can be grouped into two categories: **queries**, which simply return information about the set, an 
- Typical modifying operations
  - $SEARCH(S,k)$: A query that, given a set $S$ and a key value $k$, returns a pointer $x$ to an element in $S$ such that $x.key=k$, or $NIL$ if no such element belongs to $S$.
  - $INSERT(S,x)$: A modifying operation that augments the set $S$ with the element pointed to by $x$. We usually assume that any attributes in element $x$ needed by the set implementation have already been initialized.
  - $DELETE(S,x)$: A modifying operation that, given a pointer $x$ to an element in the set $S$, removes $x$ from $S$.
    - This operation takes a pointer to an element $x$, not a key value.
  - $MINIMUM(S)$: A query on a totally ordered set $S$ that returns a pointer to the element of $S$ with the smallest key.
  - $MAXIMMUM(S)$: A query on a totally ordered set $S$ that returns a pointer to the element of $S$ with the largest key.
  - $SUCCESSOR(S,x)$: A query that, given an element $x$ whose key is from a totally ordered set $S$, returns a pointer to the next larger element in $S$, or $NIL$ if $x$ is the maximum element.
  - $PREDECESSOR(S,x)$: A query that, given an element $x$ whose key is from a totally ordered set $S$, returns a pointer to the next smaller element in $S$, or $NIL$ if $x$ is the minimum element.

- Non-typical modifying operations
  - (Exp)Operation 1: Jump off a cliff
    - [link1](www.google.com)
# N
## Network core
## NP-complete problems

# P
## Parallelism
## Probabilistic analysis

# Q
## Queue
- (Data structure)See the **queue** section.

# R
## Randomized algorithm
## Recursive
Many useful algorithms are **recursive** in structure: to solve a given problrm, they call themselves recursively one or more times to deal with closely related sub-problems.
### Router


# S
## Satellite data
- In a typical implementation of a dynamic set, each elements is represented by an object whose attributes can be examined and manipulated if we have a pointer to the object. Some kinds of dynamic  sets assume that one of the object's attributes is an identifying **key**. If the keys are all different, we can think of the dynamic set as being a set of key values. The object may contain **satellite data**, which are carried around in other object attributes but are otherwise unused by the set implementation. It may also have attributes that are manipulated by the set operations; these attributes may contain data or pointers to other objects in the set.
## Socket
## Socket interface
## Stack
- (Data structure)See the **stack** section
## State space
[State space - wiki](https://en.wikipedia.org/wiki/State_space)
## Switch
### Computer networking


# T
## Transmission Control Protocol(TCP)

# W
## Worst-case running time