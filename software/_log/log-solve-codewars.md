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