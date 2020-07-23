# Table of Contents
# Vanilla JS vs Vue

# Using Vue
## CDN
```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

# Vue instance
## Simplest example
```html
<div id="NAME">
    {{text}} This is the input text
</div>
```

```javascript
new Vue({
    el: '#NAME',
    data: {
        text: 'Input text'
    }
});
```
## Objects
### el
### Data

# Vue directive
- This section is better categorized by the types of utility
## ```v-text```
## ```v-html```
## ```v-show```
## ```v-if```
## ```v-else```
## ```v-else-if```
## ```v-for```
- Similar to ```for in```
- Loops through a set of values
## ```v-on```
## ```v-bind```
## ```v-model```
- Creates a relationship between the data in the instance/component and a form input, so you can dynamically update values
## ```v-pre```
## ```v-cloak```
## ```v-once```
## Custom directive
## Resource
# Vue devTools
## --- 
### ```<Root>```
# Extensive resource
- Where you can 


