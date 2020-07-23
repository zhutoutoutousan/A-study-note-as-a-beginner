# Table of Contents
- [Table of Contents](#table-of-contents)
- [Vanilla JS vs Vue](#vanilla-js-vs-vue)
- [RTFM](#rtfm)
  - [RTFM Scenarios](#rtfm-scenarios)
  - [RTFM entry](#rtfm-entry)
- [Vue instance](#vue-instance)
  - [Simplest example](#simplest-example)
  - [Objects](#objects)
    - [el](#el)
    - [Data](#data)
- [Vue directive](#vue-directive)
  - [Reactive elements](#reactive-elements)
  - [Replace repetitive elements](#replace-repetitive-elements)
    - [```v-for```+ data + ```:id```+```:value```](#v-for-data--idvalue)
  - [All directives](#all-directives)
    - [```v-text```](#v-text)
    - [```v-html```](#v-html)
    - [```v-show```](#v-show)
    - [```v-if```](#v-if)
    - [```v-else```](#v-else)
    - [```v-else-if```](#v-else-if)
    - [```v-for```](#v-for)
    - [```v-on```](#v-on)
    - [```v-bind```](#v-bind)
    - [```v-model```](#v-model)
    - [```v-pre```](#v-pre)
    - [```v-cloak```](#v-cloak)
    - [```v-once```](#v-once)
    - [Custom directive](#custom-directive)
    - [Resource](#resource)
- [Vue devTools](#vue-devtools)
  - [---](#hr)
    - [```<Root>```](#root)
- [Extensive resource](#extensive-resource)
# Vanilla JS vs Vue

# RTFM
## RTFM Scenarios
- How to use Vue in your projects
## RTFM entry
[Vue - guide](https://vuejs.org/v2/guide/)

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
- Different utilities may require different combos of directives.

## Reactive elements
## Replace repetitive elements
### ```v-for```+ data + ```:id```+```:value```
- Replace the repetitive usage of html elements using the same dataset
```html
<div id="app">
    <span v-for="option in options">
        <input type="checkbox"
        :id = "option.value"
        :value = "option.value"
        v-model = "checkedNames">
            <label for="option.value">
            {{ option.value }} 
            </label>
    </span>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
</div>
```
```javascript
/*
div#app ------------------>   span v-for[option]--label
  /|\          HTML                 /|\             |   
   | el                              |      v-model | 
   |                                 |              | 
   |                                 |   user-input | 
   |       -----------               |              | 
   |                              |--|--|           |
   |            Vue     |---------|  |  |-----------|    
   |                    |            |              
  el                    |            |              
   &                    |            |              
  data---           |---|            |              
        |          \|/             |-|----->{{ checkedNames}}
        |----- checkedNames--------| |
        |                            |
        |_____ options[Objects*4]----|


TODO: Finish this graph later
- :id?
- :value?
*/
new Vue({
    el: '#app',
    data: {
        checkedNames: [],
        options: [
            { value: 'John' },
            { value: 'Paul' },
            { value: 'George' },
            { value: 'Ringo' }
        ]
    }
})
```

## All directives
### ```v-text```
### ```v-html```
### ```v-show```
### ```v-if```
### ```v-else```
### ```v-else-if```
### ```v-for```
- Similar to ```for in```
- Loops through a set of values(e.g. item in items, num in 5)
### ```v-on```
### ```v-bind```
### ```v-model```
Creates a relationship between the data in the instance/component and a form input, so you can dynamically update values

```html
<!-- The textarea can be dynamically changed by the user and  -->

<!-- 

    User-input -> form-input --
                              |
                              |
                             \|/
 registered div  {{data}}<- v-model(data)

 -->

<div id="app">
    <h3>Type here:</h3>
    <textarea v-model="message" class="message" rows="5" maxlength="72" />
    <br>
    <p class="booktext">{{ message }} </p>
</div>
```
```javascript
Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        message: []
    }
})

// Click to update changes
```


### ```v-pre```
### ```v-cloak```
### ```v-once```
### Custom directive
### Resource


# Vue devTools
## --- 
### ```<Root>```
# Extensive resource
- Where you can 


