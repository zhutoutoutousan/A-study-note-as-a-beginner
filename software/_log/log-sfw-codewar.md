# 2021/3/29
## Codewar --> Make a fxxking CPU
Why is this piece of shit problem taking so much time?
```javascript
// https://www.codewars.com/kata/54c1bf903f0696f04600068b/train/javascript

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
      const hasMultipleVar = string => /\,/.test(string);  
      const splitMultipleVar = string => string.split(/\s*\,/);
      const isArray = suspect => Array.isArray(suspect); 
      const isNumber = suspect => suspect >= '0' && suspect <= '9'; 
      
      let instructionType;
      let instructionOperand;
      [instructionType, instructionOperand] = instructionParser(instruction);

      let counter = 0;
      let pointer = 0;
      
      if(hasMultipleVar(instructionOperand)) {
        instructionOperand = splitMultipleVar(instructionOperand);
      }
      
      switch(instructionType) {
          // Sorted by usage frequency
          case 'push':
            cpu.writeStack(parseInt(instructionOperand))
          break;
          case 'add':
            for (let i = 0; i < instructionOperand[0]; i++) {
              counter += isNumber(instructionOperand[0]) ? cpu.popStack() : parseInt(instructionOperand[0]);  
            }
            cpu.writeReg(instructionOperand[1] ? instructionOperand[1] : 'a', counter);
            counter = 0;
          break;
          case 'sub':
            let comparisonArray = [];
            for (let i = 0; i < instructionOperand; i++) {
              comparisonArray = [cpu.popStack(), ...comparisonArray];
              pointer += 1;
              if(comparisonArray[0] >= counter) {
                counter = comparisonArray[0];
                pointer = 0;
              }
            }
            for (let j = 0; j < instructionOperand; j++) {
              if(pointer !== j) {
                counter -= comparisonArray[j];
              } 
            }
            cpu.writeReg('a', counter);
          break;
          case 'mul':
            counter = 1;
            for (let i = 0; i < instructionOperand; i++) {
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
          case 'adda':
            counter += cpu.readReg('a');
            cpu.writeStack(cpu.readReg('a'));
            for (let i = 0; i < instructionOperand; i++) {
              counter += cpu.popStack()  
            }
            cpu.writeReg(instructionOperand[1] ? `${instructionOperand[1]}` : 'a', counter);
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
          case 'pop':
            if (!instructionOperand[1]) {
              cpu.popstack();
              break;
            } 
            cpu.writeReg(instructionOperand[1], cpu.popstack());
          break;
          case 'mov':
            cpu.writeReg(instructionOperand[1],
                         parseInt(isNumber(instructionOperand[0]) ? instructionOperand[0] :
                         cpu.readReg(instructionOperand[0])));
          break;
      }
      

    }
    
    return { exec }
    
}

```