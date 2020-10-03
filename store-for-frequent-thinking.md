# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Heuristics](#heuristics)
- [Software engineering](#software-engineering)
  - [When "prettier.requireConfig" is true and no config exists extension should not try to load Prettier](#when-prettierrequireconfig-is-true-and-no-config-exists-extension-should-not-try-to-load-prettier)
- [Mathematics, DS & As](#mathematics-ds--as)
  - [Pyramid path](#pyramid-path)
    - [Binomial Expansion](#binomial-expansion)
    - [Trim down to easier version first](#trim-down-to-easier-version-first)
    - [Approach anyway](#approach-anyway)
  - [Matrix determinent](#matrix-determinent)
  - [The mathematical properties of Sudoku solutions](#the-mathematical-properties-of-sudoku-solutions)
- [JavaScript](#javascript)
  - [Battle ship](#battle-ship)
  - [Figure out what currying is about](#figure-out-what-currying-is-about)
  - [RegExp negative lookahead doesn't match?](#regexp-negative-lookahead-doesnt-match)
  - [LinkedList Loop](#linkedlist-loop)
  - [Sliding window technique](#sliding-window-technique)
  - [JavaScript mutable objects](#javascript-mutable-objects)
- [Pick up where you left off](#pick-up-where-you-left-off)
  - [Add binary](#add-binary)
- [Alltagsleben](#alltagsleben)
- [CSS](#css)
  - [Logo design](#logo-design)
# Overview
- This note is analogous to RAM in computer systems
  - Your short-term memory(Cache) is not enough
- This note is created at the top-level of the cute little system of yours delicated to:
  - Record the current mental challenges upon which is possible to reap the most benifits pondering whenever you are pinching a loaf in the bathroom, showering or masturbating.
  - Some problems has some context that requires some reviewing for itself to be clear in your mind when you reached the state that you can think about it when in diffuse mode. 
- After the problem or challenge has been completed and doesn't require any more thinking when working out, commuting and so on, migrate it to the corresponding space(Hard disc)
- This note also stores some exercises that, at that very moment, you don't have the taste for it but want to do it some time later

# Heuristics
- First checkpoint: Once you understand the nature of a problem and is ready to construct the mental model without furthur clues.
  - That you can construct and polish the mental model.
  - Once the mental model recollected during the leisure time is mature, you can immediately get back to the problem, this note serves as a quick state recovery tool.

# Software engineering
## When "prettier.requireConfig" is true and no config exists extension should not try to load Prettier
- [When "prettier.requireConfig" is true and no config exists extension should not try to load Prettier](https://github.com/prettier/prettier-vscode/issues/1161)
# Mathematics, DS & As
## Pyramid path
- [Project Euler Maximum path sum I](https://projecteuler.net/problem=18)
- [Pyramid Slide down](https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript)
### Binomial Expansion
- [codewar - binomial expansion](https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/train/javascript)
### Trim down to easier version first
- [Binary Tree Maximum Path Sum - leetcode](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
  - Basic training
    - [ ] Javascript-algorithm --> binary-tree --> CS mental-model 
  - Trim down to easier version first
    - Search all binary tree problems in leetCode
    - Easy
      - [Same Tree](https://leetcode.com/problems/same-tree/)
      - Trim down to easier version first
        - javascript-algorithm --> binary-tree
### Approach anyway
- Tree + dijkstra/ path searching + backtrack?
  - MENTAL ELEMENT NEEDED:
    - BACKTRACK
      - You do have a ```tic-tac-toe``` game in the React.js beginner tutorial, why don't you mix it with this exercise?
        - Process(React.js)
          - [ ] Restore 'savegame' of react.js study
    - GRAPH SEARCHING ALGORITHM
      - Code along with [javascript-algorithm](https://github.com/trekhleb/javascript-algorithms) 
        - [ ] Graph searching algorithms
          - [ ] Understanding
          - [ ] Mental-model
            - [ ] Write it down if you had some
          - [ ] Code(OOP)
        - [ ] Tree data structure in JavaScript
      - Consider strengthening memory using spaced repetition if needed
- Binary search + index match
  - Start as soon as you completed the session above


## Matrix determinent
- [Codewar - matrix determinent](https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript)
  - I want to combine this training with mathematic reading, but I don't want to right now, mabye later

## The mathematical properties of Sudoku solutions
- [Mathematics of Sudoku](https://en.wikipedia.org/wiki/Mathematics_of_Sudoku#Constraints_of_clue_geometry)
- [Codewar - Validate Sudoku with size `NxN`](https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript)
- A harder version
  - [sudoku solution - codewar](https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript)
    - [Get familiar with backtracking first - WIKI](https://en.wikipedia.org/wiki/Backtracking)
# JavaScript
## Battle ship
- [Battleship field validator](https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript)
- I already figured out what the game is about, too shame just to let it slip
## Figure out what currying is about
- Currying is the technique of translating the evaluation of a function that takes multiple arguments(or a tuple of arguments) into evaluating a sequence of functions, each with a single argument
- [Method Chaining & Currying javascript](https://medium.com/@anilchaudhary453/method-chaining-currying-javascript-b6fc3324592c#:~:text=currying%20is%20the%20technique%20of,each%20with%20a%20single%20argument.)
  - [The arguments object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
  - [JavaScript ES6: Spread Operator and Rest Parameters](https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281#:~:text=The%20spread%20operator%20allows%20us,access%20them%20in%20an%20array.)
  - [Stack Overflow - How to get a slice from “arguments”](https://stackoverflow.com/questions/9510094/how-to-get-a-slice-from-arguments)
- [A Chain adding function - Codewar](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript)
- Maybe adding step through to watch the process
  - How to use devtool to step through codes in the console?

## RegExp negative lookahead doesn't match?
- [Leetcode Problem](https://leetcode.com/problems/string-to-integer-atoi/)
```javascript
const judge = /(?![A-Z]|[a-z])(-?[0-9]+)/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const maxNumber = 2 ** 31 - 1;
  const minNumber = - (2 ** 31);
  const judge = /(?![A-Z]|[a-z])\s?+(-?[0-9]+)/;
  const found = str.match(judge)[0];
  const resultNumber = parseInt(found);
  return resultNumber > maxNumber ? maxNumber :
         resultNumber < minNumber ? minNumber :
         resultNumber;
};
```

## LinkedList Loop

- [Linkedlist loop](https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript)
    - Maybe create two traverse process racing with each other, one for traversing the whole list, one for query if there is a loop entry
      - Better if you create the handling function for each scenarios


## Sliding window technique
- [Window Sliding Technique - Geeksforgeeks](https://www.geeksforgeeks.org/window-sliding-technique/#:~:text=This%20technique%20shows%20how%20a,to%20reduce%20the%20time%20complexity.&text=Given%20an%20array%20of%20integers,consecutive%20elements%20in%20the%20array.)

## JavaScript mutable objects

# Pick up where you left off
## Add binary
```javascript
// https://leetcode.com/problems/add-binary/submissions/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//  xxxx ==> 1221112121121 ==> carry
    let convertNum = parseInt(a) + parseInt(b);
    let convertArr = convertNum.toString().split('');
    for (let i = convertArr.length - 1; i >= 0; i--) {
        if(convertArr[i] === '2') {
            convertArr[i] = '0';
            console.log(convertArr)
            if(i === 0) {
                convertArr = ['1', ...convertArr];
            }
            else {
                convertArr[i - 1] = `${parseInt(parseInt(convertArr[i -1])+1)}`;
            }
        }
    }
    return convertArr.join('');
};


// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
// [4,7,11,256, 123,456,999,1233]    
    
    for(let i = 0; i < n; i++) {
        
    }
};


// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

```




# Alltagsleben
- Perhaps you should include a plan that takes both workout and intellectual activities into account instead of just the workout.



# CSS
## Logo design
- [Your piece of shit code](https://codepen.io/zhutoutoutousan/pen/VwaojaG)
- [Why is this jackass's code working?](https://codepen.io/HugoGiraudel/pen/Gpcrf)
  - Trim down to easier questions
    - Deeper, rigorous understandings of `:after` and `:before`
    -  [ ] Exhaustive information gathering of `:after` and `:before`