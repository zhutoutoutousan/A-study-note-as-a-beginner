# Table of Contents
- [Table of Contents](#table-of-contents)
- [Correct Mental model](#correct-mental-model)
  - [Start from a bug](#start-from-a-bug)
  - [Values](#values)
  - [Immutable elements](#immutable-elements)
- [Mind palace](#mind-palace)
  - [Minding Class-Object model](#minding-class-object-model)
- [Coding practice](#coding-practice)
  - [JavaScript](#javascript)
  - [The BIG PICTURE](#the-big-picture)
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
- [Small tricks](#small-tricks)
  - [Find if the parenthesis group is valid](#find-if-the-parenthesis-group-is-valid)
  - [Type emoji](#type-emoji)
- [Ethics](#ethics)
- [Tools](#tools)
  - [Code comparison](#code-comparison)
- [Resource](#resource)
  - [Conference](#conference)
  - [Blog](#blog)
  - [Course](#course)
  - [Open source projects](#open-source-projects)
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
## JavaScript
- For formatting long backtick strings, switching line in JavaScript code doesn't affect the string.
```javascript
// Just make a function 
function humanReadable(seconds) {
  return `${Math.floor(seconds / 3600) >= 10 ? 
            Math.floor(seconds / 3600) : '0'+Math.floor(seconds / 3600) }:${Math.floor(seconds % 3600 / 60) >= 10 ?
            Math.floor(seconds % 3600 / 60) : '0'+ Math.floor(seconds % 3600 / 60) }:${seconds % 3600 % 60 >= 10 ?
            seconds % 3600 % 60 : '0'+seconds % 3600 % 60}`;
}

```
## The BIG PICTURE
[国内低代码平台从业者交流](https://github.com/taowen/awesome-lowcode)
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

# Small tricks
## Find if the parenthesis group is valid
- '()()()()())(()(((()()()()()()()()'
- Prove: Any parenthesis group that is valid can be solved using one algorithm: Eliminate the '()' recursively, then the string will end up empty.

## Type emoji
Windows 10: Win  + ;

# Ethics
[Quora - Copy and paste code](https://www.quora.com/Do-good-programmers-copy-paste-codes)


# Tools
## Code comparison
- [codebeautify](https://codebeautify.org/)
- [CSS-tidy](http://csstidy.sourceforge.net/)

# Resource
## Conference
[The Art of Code Comments - Sarah Drasner | JSConf Hawaii 2020](https://www.youtube.com/watch?v=yhF7OmuIILc)
## Blog
[THE NATURE OF CODE - DANIEL SHIFFMAN](https://natureofcode.com/book/introduction/)
## Course
[Dan Abramov - Just JavaScript](https://justjavascript.com/)
## Open source projects
- [C&C](https://github.com/electronicarts/CnC_Remastered_Collection)
