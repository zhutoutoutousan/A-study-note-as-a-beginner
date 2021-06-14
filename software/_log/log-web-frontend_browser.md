# 2021/6/12
## about-blank#blocked?

# 2021/6/13-
## Chromium V8 one bite at a time

### What an intermediate level front-end developer should know
- [How JavaScript Works: Under the Hood of the V8 Engine](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)

### Interpreter
- [Entry](https://github.com/v8/v8/blob/master/src/interpreter/)
- Interpreter
  - [Ignition interpreter](https://github.com/v8/v8/blob/master/src/interpreter/interpreter.h)
    - C++ basics
      - class
        - public
        - static
        - virtual
      - Generic
        - How do you manage hashtag define and variable
      - namespace
    - Dependencies
      - &lt;memory>
- bytecodes
  - C++ basics
    - constexpr

### How loops, async, await works in bytecode
- [Entry](https://github.com/v8/v8/tree/master/test/cctest/interpreter/bytecode_expectations)
- Golden files
  - [Testing in Go: Golden Files](https://ieftimov.com/post/testing-in-go-golden-files/)