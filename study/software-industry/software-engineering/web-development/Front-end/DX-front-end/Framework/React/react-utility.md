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