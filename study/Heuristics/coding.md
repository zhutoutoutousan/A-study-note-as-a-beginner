# Table of Contents
- [Table of Contents](#table-of-contents)
- [Correct Mental model](#correct-mental-model)
  - [Start from a bug](#start-from-a-bug)
  - [Values](#values)
  - [Immutable elements](#immutable-elements)
- [Mind palace](#mind-palace)
  - [Minding Class-Object model](#minding-class-object-model)
- [Coding practice](#coding-practice)
  - [Troubleshooting](#troubleshooting)
    - [Typo](#typo)
  - [Code style & Naming convention](#code-style--naming-convention)
    - [CSS](#css)
      - [BEM](#bem)
        - [Double underscore](#double-underscore)
        - [Double dash](#double-dash)
        - [Examples](#examples)
    - [Python](#python)
      - [Underscore](#underscore)
  - [Trade-off scenario](#trade-off-scenario)
- [Resource](#resource)
# Correct Mental model
## Start from a bug
```javascript
function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('You need to save the file before you can duplicate it');
    }
    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata,
    };
    copy.metadata.title = 'Copy of' + original.metadata.title;
    return copy;
}
```
This function does three things:
- This function duplicateds a spreadsheet
- It throws an error if the original spreadsheet isn't saved.
- It prepends "Copy of" to the new spreadsheet's title

But, the ```copy.metadata``` yields ```original.metadata```, so the code:
```javascript
copy.metadata.title = blablabla
```
Actually yields:
```javascript
original.metadata.title = blablabla
```

Is it so? Is this line of thinking wrong?

## Values

## Immutable elements

# Mind palace
## Minding Class-Object model 

# Coding practice
## Troubleshooting
### Typo
- Mistaken underscore?
## Code style & Naming convention
### CSS
#### BEM
##### Double underscore
Double underscore denotes it's in the block.
##### Double dash
Double dash denotes modifications to the block
##### Examples
For more check:
- [Why I use the BEM naming convention for my CSS](https://www.youtube.com/watch?v=SLjHSVwXYq4)
### Python
#### Underscore

## Trade-off scenario


# Resource
[THE NATURE OF CODE - DANIEL SHIFFMAN](https://natureofcode.com/book/introduction/)

[Dan Abramov - Just JavaScript](https://justjavascript.com/)