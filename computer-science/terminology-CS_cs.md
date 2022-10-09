# Table of Contents
- [Table of Contents](#table-of-contents)
- [C](#c)
  - [Call stack](#call-stack)
  - [Concurrency](#concurrency)
  - [Context switch](#context-switch)
- [F](#f)
  - [File](#file)
- [M](#m)
  - [Memory](#memory)
  - [Multiprocessor system](#multiprocessor-system)
- [P](#p)
  - [Parallelism](#parallelism)
  - [Pipelining](#pipelining)
  - [Process](#process)
  - [Processor](#processor)
- [T](#t)
  - [Thread](#thread)
- [U](#u)
  - [Uniprocessor system](#uniprocessor-system)
- [V](#v)
  - [Virtual address space](#virtual-address-space)
  - [Virtual machine](#virtual-machine)
  - [Virtual memory](#virtual-memory)

# C
## Call stack
## Concurrency
## Context switch
- A context switch is a procedure that a computer's CPU follows to change from one task(or process) to another while ensuring that the tasks do not conflict.
# F
## File
- A *file* is a sequence of bytes, nothing more and nothing less.
- Examples: I/O device(disks, keyboards, displays and even networks)
- Sub concept
  - Unit I/O

# M
## Memory
- Sub-concepts
  - Main memory
    - Stores processors read and interpret binary instructions
  - Memory hierarchy(Top-down)
    - CPU register
    - Cache
    - DRAM main memory
    - Disk storage
## Multiprocessor system
# P
## Parallelism
- Sub-concepts
  - Instruction-level parallelism
    - At a much lower level of abstraction, modern processors can execute multiple instructions at one time.
  - SIMD
    - SIMD: Single-instruction, multiple-data
      - At the lowest level, many modern processors have special hardware that allows a single instruction to cause mulitiple operations to be performed in parallel.
## Pipelining
## Process
- A *process* is the operating system's  abstraction for a running program.

## Processor
- Facts and numbers
  - Context switch agility
    - A conventional processor requires around 20,000 clock cycles to shift between different threads.
    - A hyperthreaded processor decides which of its thread to execute on a cycle-by-cycle basis.
- Visualization
  - [P57 - Categorizing different processor configurations](http://guanzhou.pub/files/Computer%20System_EN.pdf)
  - [P58 - Intel Core i7 organization](http://guanzhou.pub/files/Computer%20System_EN.pdf)
- Sub-concepts
  - Superscalar processors
# T
## Thread
- *Although we normally think of a process as having a single control flow, in modern
systems a process can actually consist of multiple execution units, called threads,
each running in the context of the process and sharing the same code and global
data. Threads are an increasingly important programming model because of the
requirement for concurrency in network servers, because it is easier to share data
between multiple threads than between multiple processes, and because threads
are typically more efficient than processes.*
- Sub-concepts
  - Simultaneous multi-threading
    - Also: Hyperthreading
    - A technique that allows a single CPU to execute multiple flows of control.
# U
## Uniprocessor system
# V
## Virtual address space
- ...Each process has the same uniform view of memory, which is known as its *virtual address space*

## Virtual machine
## Virtual memory
- *Virtual memory* is an abstraction that provides each process with the illusion that it has exclusive use of the main memory.
- Visualization
  - [P53](http://guanzhou.pub/files/Computer%20System_EN.pdf)
- Address content(Bottom-up)
  - Heap
  - Shared Libraries
  - Stack
  - Kernel virtual memory