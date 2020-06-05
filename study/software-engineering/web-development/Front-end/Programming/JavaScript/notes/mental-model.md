# Why mental model?
```javascript
function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('You need to save the file before you can duplicate it');
    }
    let copy = {
        created: Date.now();
        author: original.author;
        cells: original.cells;
        metadata: original.metadata;
    };
    copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
}
```