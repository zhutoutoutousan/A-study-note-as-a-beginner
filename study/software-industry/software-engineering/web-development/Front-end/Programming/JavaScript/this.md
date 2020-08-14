# Table of Contents
- [Table of Contents](#table-of-contents)
- [The Scenarios of 'this'](#the-scenarios-of-this)
  - [In an IIFE](#in-an-iife)
  - [In a function expression](#in-a-function-expression)
  - [Invoked by DOM event](#invoked-by-dom-event)
    - [Arrow function](#arrow-function)
    - [Regular function expression](#regular-function-expression)
  - [In an arrow function](#in-an-arrow-function)
    - [Inside or outside the curly bracket don't matter](#inside-or-outside-the-curly-bracket-dont-matter)
    - [Reference](#reference)
- [V8, WebKit, JavaScript of ```this``` under the hood](#v8-webkit-javascript-of-this-under-the-hood)
# The Scenarios of 'this'
## In an IIFE
## In a function expression
## Invoked by DOM event
### Arrow function
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bullshit</title>
</head>
<body>
    <button id="bullshit">Bullshit</button>

</body>

<script>
const bullshitButton = document.getElementById("bullshit")
let genericEvent = () => {
    console.log(this);
}

bullshitButton.onclick = genericEvent;

</script>

</html>

```
The console returns the ```window``` object
```javascript
const bullshitButton = document.getElementById("bullshit")
let genericEvent = () => {
    console.log(this);
}

(bullshitButton.onclick = genericEvent)();

```
Still returns the ```window``` object

### Regular function expression
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bullshit</title>
</head>
<body>
    <button id="bullshit">Bullshit</button>

</body>

<script>
    // bullshit, not #bullshit
const bullshitButton = document.getElementById("bullshit")
let genericEvent = function() {
    console.log(this);
}

bullshitButton.onclick = genericEvent;

</script>

</html>
```

The console returns the ```<button>``` object.


## In an arrow function
In an arrow function, 'this' refers to the method invoker
```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET','target.txt',true);
xhr.onload = () => {
    if(this.status) {
        // todo
    }
}
```
### Inside or outside the curly bracket don't matter
``` javascript
const a = () => console.log(this);
const b = () => {
    console.log(this);
}

a(); // window
b(); // window
```

### Reference
[Understanding "this" in javascript with arrow functions](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)

[嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)

# V8, WebKit, JavaScript of ```this``` under the hood