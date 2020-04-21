# Usage
```javascript
// Basic syntax
target.onload = functionRef;
```
# Example
```HTML
<div id="eat"></div>
<script>
const eat = document.getElementById('eat');
const generateShit = () => eat.innerHTML = 'Shit';
document.onload = generateShit;
</script>
```


# Resources
[MDN - GlobalEventHandlers.onload](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload)