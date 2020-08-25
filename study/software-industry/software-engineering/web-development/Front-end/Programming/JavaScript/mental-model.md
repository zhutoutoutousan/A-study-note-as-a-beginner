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


# Visualization resource
- [JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
- [JavaScript Visualized: Promises & Async/Await](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- [JS - inheritance](https://github.com/rus0000/jsinheritance)