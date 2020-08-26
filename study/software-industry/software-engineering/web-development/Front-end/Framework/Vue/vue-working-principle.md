# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [What makes a good framework?](#what-makes-a-good-framework)
  - [Vue compared to other framework](#vue-compared-to-other-framework)
- [Vue working principle](#vue-working-principle)
  - [In vue](#in-vue)
# Overview
## What makes a good framework?
- Declarative
- Legible
- Easy to maintain
- Powerful
  - Feature rich
- Summarize the best of the counterparts
- Elegant?
- Don't make me think about the wrong thing.

## Vue compared to other framework
- Virtual DOM
- Reactive components that offer the View layer only
- Props and a Redux-like store similar to React
- Conditional rendering, and services, similar to Angular
- Inspired by Polymer for simplicity and performance, offering a similar developement style as HTML, styles and Js composed in tandem
- JSX is available
- Slightly better performance than React?

# Vue working principle
## In vue
Vue takes the object, walks through its properties and converts them to getters/setters
```javascript
new Vue({
  data: {
    text: 'msg'
  }
})
```