# Table of Contents
- [Table of Contents](#table-of-contents)
- [RTFM](#rtfm)
  - [RTFM resource](#rtfm-resource)
- [Component](#component)
  - [Micellaneous](#micellaneous)
  - [Function components](#function-components)
  - [Class components](#class-components)
  - [Reusable components](#reusable-components)
- [JSX](#jsx)
  - [Basics](#basics)
  - [Rendering process](#rendering-process)
  - [Curly brace](#curly-brace)
  - [Injection attack prevention](#injection-attack-prevention)
- [Props](#props)
- [Router](#router)
- [Troubleshoot](#troubleshoot)
  - [Technique](#technique)
  - [Uncaught SyntaxError: Unexpected token '<'](#uncaught-syntaxerror-unexpected-token-)
  - [Uncaught Invariant Violation: Target container is not a DOM element.](#uncaught-invariant-violation-target-container-is-not-a-dom-element)
  - [Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.](#uncaught-error-element-type-is-invalid-expected-a-string-for-built-in-components-or-a-classfunction-for-composite-components-but-got-undefined-you-likely-forgot-to-export-your-component-from-the-file-its-defined-in-or-you-might-have-mixed-up-default-and-named-imports)
  - [Warning: Each child in a list should have a unique "key" prop.](#warning-each-child-in-a-list-should-have-a-unique-key-prop)
# RTFM
## RTFM resource
[React Top-Level API](https://reactjs.org/docs/react-api.html#createelement)

# Component
## Micellaneous
- React is all about making components. And then taking those components and making more components out of those.
- There are two types of components, function components and class components.

## Function components
```javascript
// Example
// param 1: 
// param 2: attributes given to the opponent e.g. { id: "something-important" } ==> <div id="something=important>...
// param 3: children : e.g. [
//                             reactElement,
//                             moreElements           
//                            ]
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Fuck me!");
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```
## Class components
```javascript
class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

// Usage: <ShoppingList name="Mark">

```

## Reusable components
# JSX
## Basics
- JSX ia an expression
## Rendering process
- The ```<div />``` syntax is transformed at build time to ```React.createElement('div')```

```javascript
  return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
   );
                    __
                   |  |
                  _|  |_
                  \    /
                   \  /
                    \/ 

return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

```

## Curly brace
Put any valid JavaScript Expression in side


## Injection attack prevention
# Props
```javascript
// --------------------------- Pure react ---------------------------
// Destructuring
const Pet = ({ name, animal, breed  }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h1", {}, animal),
        React.createElement("h1", {}, breed),
        
    ]);
}

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h1", {}, props.animal),
        React.createElement("h1", {}, props.breed),
        
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
            React.createElement(Pet, { name: "Pepper",  animal: "Bird",  breed: "Cocktail" }),
            React.createElement(Pet, { name: "Doink",  animal: "Cat",  breed: "Mixed" })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

// --------------------------- Pure react ---------------------------
```
# Router

# Troubleshoot
## Technique
- See if the JavaScript is loading
```javascript
//     throw new Error('lol')
const App = () => {
    // ...
    throw new Error('lol')
}
```


## Uncaught SyntaxError: Unexpected token '<'
- [ReactJS: “Uncaught SyntaxError: Unexpected token <” - Stackoverflow](https://stackoverflow.com/questions/28100644/reactjs-uncaught-syntaxerror-unexpected-token)

```html
...
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
...
...
<script type="text/babel"></script>
...
```


## Uncaught Invariant Violation: Target container is not a DOM element.

## Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```javascript
// App.js
import React from 'react'
import { Pet } from './Pet'
const App = () => {
    // ...
}

// component.js    should be 

export const Pet = () => {
    // ...
}

//------------------------------------------------------------------------

// App.js
import React from 'react'
// If you set to { Pet }, react will return error, why?
import Pet  from './Pet'
const App = () => {
    // ...
}

// component.js    should be 

export default function Pet{
    // ...
}



```

## Warning: Each child in a list should have a unique "key" prop.
- [Stack Overflow - Understanding unique keys for array children in React.js](https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js)