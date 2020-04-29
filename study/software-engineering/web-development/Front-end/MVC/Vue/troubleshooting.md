# Property of method [variable] is not defined
## Error message
```
[Vue warn]Property or method "count" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property
```
## Possible mistakes
Maybe in the html file, you referred to a variable that you desired to implement to the DOM from the Vue instance. Let's say:
```HTML
<div id="app">{{ variable }}</div>
```

While in the Vue instance, there is no variable present, which caused the error. 
```javascript
new Vue({
    el:'#app',
    store,
    data: {
        message: 'Fuck this world'
    },
    methods: {
        fuck() {
            this.$store.commit('fuck');
            console.log('fucked');
        }
    }
    // 'variable' is not present
})
```
## Solutions
One of the method that can solved this is to add
```javascript
new  Vue({
    //...
    computed: {
        count() {
            return shit;
        }
    }
})

```

## Questions
- Can you illustrate the dataflow structure of the DOM(id), vue instance, methods, computed, data, store etc.? 

## Reference