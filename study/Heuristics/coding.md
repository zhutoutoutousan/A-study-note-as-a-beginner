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
originall.metadata.title = blablabla
```

Is it so? Is this line of thinking wrong?

## Immutable elements

# Resource
[THE NATURE OF CODE - DANIEL SHIFFMAN](https://natureofcode.com/book/introduction/)

[Dan Abramov - Just JavaScript](https://justjavascript.com/)