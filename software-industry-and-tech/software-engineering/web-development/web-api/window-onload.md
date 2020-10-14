# Usage
```javascript
// Basic syntax
target.onload = functionRef;
```
# Example
```HTML
<div id="eat"></div>
<script>
    let eat = document.getElementById('eat');
    const generateShit = () => eat.innerHTML = 'Shit';
    document.onload = generateShit;
</script>
```


# Resources
[MDN - GlobalEventHandlers.onload](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload)
[Stackoverflow bug](https://stackoverflow.com/questions/18369255/window-onload-not-working-for-very-simple-page)