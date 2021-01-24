- Sunday
  - [Infix to Postfix Converter](https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/javascript)
    - [Lookahead and Lookbehind](https://www.regular-expressions.info/lookaround.html)
    - [Infix, Postfix and Prefix](http://www.cs.man.ac.uk/~pjj/cs212/fix.html#:~:text=Infix%2C%20Postfix%20and%20Prefix%20notations,written%20in%2Dbetween%20their%20operands.)

```javascript
function toPostfix (infix) {
  const isBracket = str => str === '(' | str === ')';
  const isOperatorChar = str => str.match(/\+|\-|\*|\/|\^/);
  let saveBracket = false;
  let currentOperator = '';
  
  for (let i = 0; i < infix.length; i++) {
    
  }
  
  
}

/(?!\()(?=[0-9])(\+|\-|\*|\/|\^|\/)(?<=[0-9])(?!\))/
```

- Monday