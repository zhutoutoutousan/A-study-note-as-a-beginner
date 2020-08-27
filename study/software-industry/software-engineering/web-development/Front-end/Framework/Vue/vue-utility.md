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
      - [```v-for in``` followed by methods](#v-for-in-followed-by-methods)
      - [Use in Tables](#use-in-tables)
    - [```v-on``` or ```@```](#v-on-or-)
      - [Postfixes](#postfixes)
        - [```.stop```](#stop)
        - [```.prevent```](#prevent)
        - [```.once```](#once)
        - [```.native```](#native)
        - [```.passive```](#passive)
        - [```.self```](#self)
        - [```.capture```](#capture)
    - [```v-bind``` or ```:```](#v-bind-or-)
    - [```v-model```](#v-model)
      - [Basics](#basics)
      - [```v-model.trim```](#v-modeltrim)
      - [```v-model.number```](#v-modelnumber)
      - [```v-model.lazy```](#v-modellazy)
    - [```v-pre``` --> Documentation](#v-pre----documentation)
    - [```v-cloak```](#v-cloak)
    - [```v-once```](#v-once)
    - [Custom directive](#custom-directive)
    - [Resource](#resource)
- [Vue properties](#vue-properties)
  - [el](#el-1)
  - [data](#data-1)
  - [Methods](#methods)
  - [Computed](#computed)
- [Watcher](#watcher)
- [Vue-CLI](#vue-cli)
- [Vue-router](#vue-router)
- [Vuex](#vuex)
- [Vue devTools](#vue-devtools)
  - [---](#hr)
    - [```<Root>```](#root)
- [Troubleshoot](#troubleshoot)
  - [Uncaught TypeError: Vue.createApp is not a function](#uncaught-typeerror-vuecreateapp-is-not-a-function)
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
```javascript
new Vue({
  // ...,
  data() {
    return {
      key: 'value',
      func1: (input) => input * 2,
    }
  }
})

```
# Vue directive
<details open>
  <summary>Suggested regular review and update</summary>

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
  data---           |---|          |-|-|              
        |          \|/             | | |-->{{ checkedNames}}
        |----- checkedNames--------| |
        |                            |
        |_____ options[Objects*4]----|

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
- Similar to ```{{  }}```
### ```v-html```
- Great for strings that have html elements that need to be rendered.
- Don't use it for user-generated content(security issue)
- ```[data name] : `[html code]` ``` --> ```data``` object --> ```Element with v-html``` --> render html in ``` `[html code]` ```
### ```v-show```
- Is a conditional that will display information depending on meeting a requirement. This can be anything - buttons, forms, divs or components
- ```v-show``` will render ```false``` state to ```display: none```
- Good for some components that the users use a lot for it's faster
### ```v-if```
- Is a conditional that will display information depending on meeting a requirement. This can be anything - buttons, forms, divs or components, or some ```variables``` in the ```data``` object 
- ```v-if``` will render ```false``` state to empty html comment(full rendering in the ```true``` state)
- Useful when using full component/template that only shows in specific circumstances(saving load time)
### ```v-else```
- Conditional rendering
```html
<!-- 
  new Vue({
    el: "app",
    data: {
      suck: false
    }
  })

 -->
<div id="app">
  <h3>Do you suck dicks?</h3>
  <input type="radio" id="yes" value="yes" v-model="suck">
  <label for="yes">yes</label>
  <br>
  <input type="radio" id="no" value="no" v-model="suck">
  <label for="no">no</label> 
  <br>
  <div v-if="suck">
    <p v-if="suck === 'yes'" class="thumbs">&#128077;</p>
    <p v-else> Go ahead!!! :P</p>
  </div>
</div>
```
### ```v-else-if```
### ```v-for```
- Similar to ```for in```
- Loops through a set of values(e.g. item in items, num in 5)
#### ```v-for in``` followed by methods
- In the **return value of the methods**
#### Use in Tables
- You can dynamically update the table just by updating the ```columns``` and ```rows``` data.
```html
<table>
  <thead>
    <tr>
     <th v-for="key in columns">
      {{ key }}
     </th> 
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows">
      <td v-for="key in columns">
        {{ row[key] }}
      </td>
    </tr>
  </tbody>
</table>

```

```javascript
new Vue({
  el: "#app",
  data() {
    return {
      columns: ["title", "rating"],
      rows: [
        { title: `White Chicks`, rating: 82},
        { title: `Grey's Anatomy`, rating: 98}
        // ...
      ]
    }
  }
})

```

### ```v-on``` or ```@```
- Extremely useful so there's a shortcut
- Great for binding to events like click and mouseenter.
- Able to pass in a parameter for the event like ```(e)```
- Can use ternaries directly
- ```@[event]="[" --> [expression] == true ? [execusion```
#### Postfixes
##### ```.stop```
- Comparable to ```e.stopPropogation()```
##### ```.prevent```
- No longer reload the page on submission
- Like ```e.preventDefault()```
##### ```.once```
- This click event will be triggered once.(Not element being rendered once)
##### ```.native```
- Listen to native events in the DOM
##### ```.passive```
##### ```.self```
##### ```.capture```
### ```v-bind``` or ```:```
- ```:[attribute] = [Js expression]``` or ```v-bind:[attribute]=[Js expression]``` use JavaScript expression to dynamically bind to the element attribute like ```class```, ```style``` etc.
- One of the most useful directives so there's a shortcut.
- Used for:
  - class/style binding
  - creating dynamic props
- Questions: if I put ```:style= ...``` in the html, could it be come backtick string in the ```data``` object?
```html
<div id="app">
  <h3>Who is your favorite Japanese porn star?</h3>
  <textarea v-model="pornstar"></textarea>
  <br>
  <button :class="pornstar ? activeClass : ''">Let us know!</button>
</div>

```
```css
body {
  font-family: 'Bitter', serif;
}

#app {
  text-align: center;
  padding: 70px;
  max-width: 360px;
  font-size: 16px;
  margin: 0 auto;
}

button.active {
  background: orangered;
}
```


```javascript
new Vue({
  el: "#app",
  data() {
    return {
      pornstar: '',
      activeClass: 'active'
    }
  }
})
```
### ```v-model```
#### Basics
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
#### ```v-model.trim```
- Strip any leading or trailing whitespace from the bound string
#### ```v-model.number```
- changes strings to number inputs
#### ```v-model.lazy```
- won't populate the content automatically, will wait to bind until an event happens(It listens to change events instead of input)
### ```v-pre``` --> Documentation
- ```v-pre``` will print out the inner text exactly how it is, including code(good for documentation)
### ```v-cloak```
### ```v-once```
- Not quite as useful, ```v-once``` will not update once it's been rendered.
### Custom directive
### Resource
</details>

# Vue properties
## el
## data
## Methods
- ```this``` in ```method``` objects refers to the elements in the ```data``` object.
- Runs whenever an update occurs(Compared to ```computed``` property)
- Not cached
- Typically invoked from ```v-on```/```@```, but flexible
- Getter/Setter
- [RTFM](https://v1.vuejs.org/guide/events.html)
## Computed
- Computed properties are calculations that will be cached and will only update when a dependency has changed
- Highly performant but use with understanding 
- It can appear in the mustache syntax as a return value of the methods as a property in the ```computed``` object.
- Similar to ```Array.prototype.map```
- Should be used as a property, in place of data
- By default getter only, but you can define a setter
# Watcher
- Each component has a watcher instance
- The properties touched by the watcher during the render are registered as dependencies
- When the setter is triggered, it lets the watcher know, and causes the component to re-render

```javascript
new Vue({
  el: '#app',
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    // The name of the watch method must the same as the data element we want to watch
    counter() {
      console.log('The counter has changed!')
      // When 'counter' in the data object is updated, fire this method
    }
  }
});

```
# Vue-CLI

# Vue-router

# Vuex


# Vue devTools
## --- 
### ```<Root>```

# Troubleshoot
## Uncaught TypeError: Vue.createApp is not a function
```javascript
// This is vue-next syntax, use vue-next instead of older versions
const App =  {
  data() {
    return {
      dataElement1: '',
    }
  }
}
Vue.createApp(App).mount('#app')
```
# Extensive resource
- Where you can 


