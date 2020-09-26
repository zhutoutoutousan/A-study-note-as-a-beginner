# Table of Contents
- [Table of Contents](#table-of-contents)
- [Unicode](#unicode)
  - [Some examples](#some-examples)
- [Reference](#reference)
# Unicode
## Some examples
```javascript
let specialChars = ['\u00A9', '\u2665', '\u2014', '\u2122', '\u2111', '\u215A', '\u2114']
let showChars = function() {
    for (let i = 0; i < specialChars.length; i++) {
        document.write(specialChars[i] + "<br>");
    }
}

// Browser devtool
showChars();
```

# Reference
[Inserting Special Characters in JavaScript Strings](https://www.youtube.com/watch?v=PRmTHiwTvts)

[Unicode Character Table](https://unicode-table.com/en/)

[JavaScript obfuscator](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx)