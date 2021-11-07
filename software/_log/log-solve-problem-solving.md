# Table of Contents
- [Table of Contents](#table-of-contents)
- [Logistics](#logistics)
- [2021/3/29](#2021329)
  - [Codewar --> Make a fxxking CPU](#codewar----make-a-fxxking-cpu)
- [2021/6/10](#2021610)
  - [Recover a secret string from random triplets](#recover-a-secret-string-from-random-triplets)
- [2021/7/17-2021/8/1](#2021717-202181)
  - [Leetcode - Merge k sorted lists - Hard](#leetcode---merge-k-sorted-lists---hard)
  - [Leetcode - Permutations](#leetcode---permutations)
- [2021/8/25-](#2021825-)
  - [Vigenère Cipher Helper](#vigenère-cipher-helper)
  - [Burrows-Wheeler-Transformation](#burrows-wheeler-transformation)
  - [Catching Car Mileage Numbers - SOLVED](#catching-car-mileage-numbers---solved)
  - [Make a spiral](#make-a-spiral)

# Logistics
- Testing platform
  - Jest
  - Mocha
- Debugging of Node.js using vscode
  - [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
    - Docmark

# 2021/3/29
## Codewar --> Make a fxxking CPU
Why is this piece of shit problem taking so much time?
2021/3/30 Why is this so tiring, I need a break every time I make some effort
```javascript
// https://www.codewars.com/kata/54c1bf903f0696f04600068b/train/javascript
// There's something wrong with your function code, check carefully
/*
a
50
b
33
c
250

stack
0
250
33
50
50
5
50
17
10
15
25
*/
function Machine(cpu) {
  
    const splitByFirstSpace = /(.+?)\s(.+)/;
  
    // @input: {string} instruction
    // @output: {Array} instructionType
    // idea: yadayada
    function instructionParser(instruction) {
      if(!/\s/.test(instruction)) return [instruction, null];
      return [instruction.match(splitByFirstSpace)[1],instruction.match(splitByFirstSpace)[2]]
    }    
  
    function exec(instruction) {
      const splitMultipleVar = string => string.split(/\s*\,/);
      const hasMultipleVar = suspect => /\[[0-9,]+[0-9]*\]/.test(suspect); 
      const isNumber = suspect => parseInt(suspect) === parseInt(suspect);
      
      let instructionType;
      let instructionOperand;
      [instructionType, instructionOperand] = instructionParser(instruction);
      
      let counter = 0;
      let pointer = 0;
      
      console.log(instructionOperand)
      const operationEntityR = hasMultipleVar(instructionOperand) ? splitMultipleVar(instructionOperand) : 
                              isNumber(instructionOperand) ? parseInt(instructionOperand) :
                              cpu.readReg('a');
      
      console.log(typeof operationEntityR);
      console.log( operationEntityR);
      
      switch(instructionType) {
          // -----------------Stack Operations-----------------
          case 'push':
            cpu.writeStack(operationEntityR);
          break;
          case 'pop':
            if (!instructionOperand[1]) {
              cpu.popstack();
              break;
            } 
            cpu.writeReg(instructionOperand[1], cpu.popstack());
          break;
          case 'pushr':
            for (let i = 97; i <= 100; i++) {
              cpu.writeStack(cpu.readReg(String.fromCharCode(i)));  
            }
          break;
          case 'pushrr':
            for (let i = 100; i <= 97; i--) {
              cpu.writeStack(cpu.readReg(String.fromCharCode(i)));  
            }
          break;
          case 'popr':
//             if (!instructionOperand[1]) {
//               cpu.popstack();
//               break;
//             } 
//             cpu.writeReg(instructionOperand[1], cpu.popstack());
          break;
          case 'mov':
            cpu.writeReg(instructionOperand[1],
                         parseInt(isNumber(instructionOperand[0]) ? instructionOperand[0] :
                         cpu.readReg(instructionOperand[0])));
          break;
          
          // -----------------Stack Operations-----------------
          case 'add':
              for (let i = 0; i < operationEntityR; i++) {
                counter += cpu.popStack();
              }
              cpu.writeReg('a', counter);
              counter = 0;  
          break;
          case 'adda':
            counter += cpu.readReg('a');
            cpu.writeStack(cpu.readReg('a'));
            for (let i = 0; i < instructionOperand; i++) {
              counter += cpu.popStack()  
            }
            cpu.writeReg(instructionOperand[1] ? `${instructionOperand[1]}` : 'a', counter);
          break;
          case 'sub':
            let comparisonArray = [];
            for (let i = 0; i < operationEntityR; i++) {
              comparisonArray = [cpu.popStack(), ...comparisonArray];
              pointer += 1;
              if(comparisonArray[0] >= counter) {
                counter = comparisonArray[0];
                pointer = 0;
              }
            }
            for (let j = 0; j < operationEntityR; j++) {
              if(pointer !== j) {
                counter -= comparisonArray[j];
              } 
            }
            cpu.writeReg('a', counter);
          break;
          case 'suba':
            let subaArray = [cpu.readReg('a')];
            cpu.writeStack(subaArray[0]);
            counter = cpu.readReg('a');
            for (let i = 0; i < instructionOperand[0]; i++) {
              subaArray = [cpu.popStack(), ...subaArray];
              pointer += 1;
              if(subaArray[0] >= counter) {
                counter = subaArray[0];
                pointer = 0;
              }
            }
            for (let j = 0; j < instructionOperand[0]; j++) {
              if(pointer !== j) {
                counter -= subaArray[j];
              } 
            }
            cpu.writeReg(instructionOperand[1] ? instructionOperand[1] : 'a', counter);
          break;
          case 'mul':
            counter = 1;
            for (let i = 0; i < operationEntityR; i++) {
              counter *= cpu.popStack()  
            }
            cpu.writeReg('a', counter);
            counter = 0;
          break;
          case 'mula':
            counter = cpu.readReg('a');
            
            cpu.writeStack(cpu.readReg('a'));
          
            for (let i = 0; i < instructionOperand; i++) {
              counter *= cpu.popStack()  
            }
            cpu.writeReg(instructionOperand[1] ? instructionOperand[1] : 'a', counter);
            counter = 0;
          break;
          case 'and':
              for (let i = 0; i < operationEntityR; i++) {
                counter &= cpu.popStack();
              }
              cpu.writeReg('a', counter);
              counter = 0;  
          break;
          case 'or':
              for (let i = 0; i < operationEntityR; i++) {
                counter |= cpu.popStack();
              }
              cpu.writeReg('a', counter);
              counter = 0;  
          break;
          case 'xor':
              for (let i = 0; i < operationEntityR; i++) {
                counter ^= cpu.popStack();
              }
              cpu.writeReg('a', counter);
              counter = 0;  
          break;
          case 'div':
            let divisionArray = [];
            for (let i = 0; i < instructionOperand; i++) {
              divisionArray = [cpu.popStack(), ...divisionArray];
              pointer += 1;
              if(divisionArray[0] >= counter) {
                counter = divisionArray[0];
                pointer = 0;
              }
            }
            for (let j = 0; j < instructionOperand; j++) {
              if(pointer !== j) {
                counter /= divisionArray[j];
              } 
            }
            cpu.writeReg('a', counter);
          break;


      }
      

    }
    
    return { exec }
    
}
```

# 2021/6/10
## Recover a secret string from random triplets
- Found a hashtable-like solution, create

# 2021/7/17-2021/8/1
## Leetcode - Merge k sorted lists - Hard
- Solved in 2021/7/24 
- Fuck, stupid leetcode requires you to set the val to be an empty string if an empty list is given, WTF
- Don't delete all of your record, extract something from it dude

## Leetcode - Permutations
- Think for your self
    - Create a tree and use memoization
    - How many permutations are there?

# 2021/8/25-
## Vigenère Cipher Helper
```javascript
// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript
function VigenèreCipher(key, abc) {
  const returnValue = function(str) {
    return str.charCodeAt(0) <= 90 && str.charCodeAt(0) >= 65 ? str.charCodeAt(0) - 'A'.charCodeAt(0) 
                                                            : str.charCodeAt(0) - 'a'.charCodeAt(0) 
  }
  const fillkey = function (key, abc) {
    let resultString = '';
    while(resultString.length <= abc.length) {
      resultString += key;
    }
    return resultString.substring(0, abc.length);
  }
  this.encode = function (str) {
    return str.split('').map((el,index) => {
      console.log( fillkey(key,str)[index].charCodeAt(0))
      console.log(((returnValue(el)  + fillkey(key,str)[index].charCodeAt(0)) % 26))
      return String.fromCharCode(((returnValue(el)  + fillkey(key,str)[index].charCodeAt(0)) % 26));
    }).join('')
  };
  this.decode = function (str) {
    return str.split('').map((el,index) => {
      return (returnValue(el) - fillkey(key,str)[index].charCodeAt(0) + 26) % 26;
    })
  };
}
```

## Burrows-Wheeler-Transformation
```javascript
// https://www.codewars.com/kata/54ce4c6804fcc440a1000ecb/train/javascript

```


## Catching Car Mileage Numbers - SOLVED
```javascript

function isInteresting(number, awesomePhrases) {
    // 0: Not interesting
    // 1: +- 2
    // 2: Interesting
      
    console.log(awesomePhrases)
      
    // interesting helper functions
    const followedByAllZeros = num =>{
      console.log(num)
      debugger
      return  Array(num.toString().length - 1).fill('0').join('') === num.toString().slice(1)
    } 
    
    const hasSameNumber = (num) => {
      for (let i = 0; i < num.toString().length; i++) {
        if(num.toString()[i] !== num.toString()[0]) return false
      }
      return true
    }
    
    const isSequential = (num) => {
        const incre = '012345678901'
        const decre = '098765432109'
        return incre.includes(num.toString()) || decre.includes(num.toString())
    }
    
    const isPalindrome = (num) => {
      const numString = num.toString()
      let left = 0;
      let right = numString.length - 1;
      while(left < right) {
        if(numString[left] !== numString[right]) return false
        left += 1
        right -= 1
      }
      return true 
    }
    
    const inAwesomePhrase = (num, arr) => {
      if(!arr) return false
      for (let i = 0; i < arr.length; i++) {
        if(num === arr[i]) return true
      } 
      return false
    }
    
    const errorCheck = num => num > 97 && num <= 1000000000
    const _isInteresting = (num, arr) => errorCheck(number) && followedByAllZeros(num) || hasSameNumber(num) || isSequential(num) || isPalindrome(num) || inAwesomePhrase(num, arr) 
    const almostInteresting = (num, arr) => errorCheck(number) && _isInteresting(num + 1, arr) || _isInteresting(num + 2, arr) || _isInteresting(num - 1, arr) || _isInteresting(num - 2, arr) 
    
    
    // driver
    if(!errorCheck(number)) return 0
    if(number === 99 || number === 98 || number === 109) return 1
    if(_isInteresting(number, awesomePhrases)) {
      return 2
    }
    else if(almostInteresting(number, awesomePhrases)){
      return 1
    }
    else {
      return 0
    }
}
```

```javascript
// TEST CODE REFERENCE: Very good to write test codes
function isInteresting(number, awesomePhrases) {
  var tests = [
    function(n) { return /^\d00+$/.test(n); },
    function(n) { return /^(\d)\1+$/.test(n); },
    function(n) { return RegExp(n).test(1234567890); },
    function(n) { return RegExp(n).test(9876543210); },
    function(n) { return n + '' == (n + '').split('').reverse().join(''); },
    function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
  ];
  
  var interesting = 0;
  tests.some(function(test) {
    if (number > 99 && test(number))
      return interesting = 2;
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
      interesting = 1;
  });
  return interesting;
}
```

## Make a spiral
- Mathematics of a spiral
  - [wiki](https://en.wikipedia.org/wiki/Spiral)
    - [Archimedean spiral](https://en.wikipedia.org/wiki/Archimedean_spiral)
    - [Angular velocity](https://en.wikipedia.org/wiki/Angular_velocity)
    - [Why do prime numbers make these spirals? | Dirichlet’s theorem](https://www.youtube.com/watch?v=EK32jo7i5LQ)

```javascript
// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

```