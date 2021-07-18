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

# 2021/7/17-
## Leetcode - Merge k sorted lists - Hard
- Self attempt: Create three pointers, each progression, choose out the minimum, if exists, push the minimum to the list, the rest append later; If no exist, append all unorderedly - 2 minutes
- Python implementation(U r going 2 do data right?)
  - Detour into Python Data structure - Quick Recap
    - https://docs.python.org/3/tutorial/datastructures.html
      - Adjusting brain signal firing structure 2 min
        - Extracting pass data
        - Integrating language learning experience
        - Building mind tree concerning contents structure
        - Specifying tree depth and boundries
        - Done
        - Inserting purpose reinforcement: Quicker extraction for frequent use
          - Behaviour changed: Focused --- Resistant of external changes
      - Intake
        - Creating rotational-stack model to a list(Counter-clock wise) 4 pop * 2 Reinforced
      - Fatigue threshold
        - Level 1: Pass, 4 better long-term effects
        - Level 2: Stopped, 
      - !TRANSFERRED TO OVERALL! 
        - Idea: Taking the table of contents as tree input, which contains the relations, you input your goal, it recommends your learning order with respect to your memory and skills decay
        - Back in to the track * 1
  - Training - Using Geeksforgeeks
    - https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/
    - Fatigue threshold
      - Level 1: Triggered by OOP python
      - Level 2: Refactoring python array into list
        - Rest 4 5 min
```python
# https://leetcode.com/problems/merge-k-sorted-lists/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Takes two lists sorted in increasing order
    # and merge their nodes together to make one
    # big sorted list. Below function takes
    # O(Log n) extra space for recursive calls,
    # but it can be easily modified to work with
    # same time and O(1) extra space.
    def SortedMerge(a:ListNode, b:ListNode):
        
        result = None
        
        # Base cases
        if (a == None):
            return(b)
        elif (b == None):
            return(a)
        if (a.val <= b.val):
            result = a
            result.next = SortedMerge(a.next, b)
        else:
            result = b
            result.next = SortedMerge(a, b.next)
            
        return result
    
    
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        last = len(lists) - 1
        
        # Repeat until only one list is left
        while (last != 0):
            i = 0
            j = last
            
            # (i, j) forms a pair
            while (i < j):
                
                # Merge List i with List j and store
                # merged list in List i
                lists[i] = self.SortedMerge(lists[i], lists[j])
                
                # Consider next pair
                i += 1
                j -= 1
                
                # If all pairs are merged, update last
                if (i >= j):
                    last = j
        return lists[0]
                
```

```
https://blog.csdn.net/weixin_42716620/article/details/82888572
https://stackoverflow.com/questions/14086830/python-calling-method-in-class
https://stackoverflow.com/questions/54709025/understanding-positional-arguments-in-python

TypeError: SortedMerge() takes 2 positional arguments but 3 were given
    lists[i] = self.SortedMerge(lists[i], lists[j])
Line 45 in mergeKLists (Solution.py)
    ret = Solution().mergeKLists(param_1)
Line 74 in _driver (Solution.py)
    _driver()
Line 85 in <module> (Solution.py)
```