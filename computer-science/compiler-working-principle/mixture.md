# Motivation
- Understand how compilation system work
  - Optimizing program performance
    - To what extent(Programmer)
      - Is a `switch` statement always more efficient than a sequence of `if-else` statements? 
      - How much overhead is incurred by a function call?
      - Is a `while` loop more efficient than a `for` loop?
      - Are pointer references more efficient than array indexes?
      - Why does our loop run so much faster if we sum into a local variable instead of an argument that is passed by reference?
      - How can a function run faster when we simply rearrange the parentheses in an arithmetic expression?
  - Understanding link-time errors
    - What does it mean when the linker reports that it cannot resolve a reference?
    - What is the difference between a static variable and a global variable?
    - What happens if you define two global variables in different C files with the same name?
    - What is the difference between a static library on the command line?
    - What is the difference between a static library and a dynamic library?
    - Why does it matter what order we list libraries on the command line?
    - Why do some linker-related errors not appear until run time?
  - Avoiding security holes
    - Buffer overflow vulnerability


# OutlineA
- Context
  - Different forms of language translators
  - A high level overview  of the structure of a typical compiler
  - The trends in programming languages and machine architecture that are shaping compilers.
  - Observations on the relationship between compiler design and computer-science theory
  - An outline of the applications of compiler technology