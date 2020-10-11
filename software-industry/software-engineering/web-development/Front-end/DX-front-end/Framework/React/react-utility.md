# Table of Contents
- [Table of Contents](#table-of-contents)
- [RTFM](#rtfm)
  - [RTFM resource](#rtfm-resource)
- [Tools, Rules, team-play](#tools-rules-team-play)
- [Component](#component)
  - [Micellaneous](#micellaneous)
  - [Function components](#function-components)
  - [Class components](#class-components)
  - [Reusable components](#reusable-components)
- [JSX](#jsx)
  - [Basics](#basics)
  - [Caveat](#caveat)
  - [Rendering process](#rendering-process)
  - [Curly brace](#curly-brace)
  - [Injection attack prevention](#injection-attack-prevention)
- [Props](#props)
- [Hook](#hook)
  - [Introduction](#introduction)
  - [One-way data flow](#one-way-data-flow)
  - [Cross-component hook communication](#cross-component-hook-communication)
  - [Effect hook](#effect-hook)
- [DevTools](#devtools)
  - [Technique](#technique)
- [Router](#router)
- [Troubleshoot](#troubleshoot)
  - [Technique](#technique-1)
  - [Uncaught SyntaxError: Unexpected token '<'](#uncaught-syntaxerror-unexpected-token-)
  - [Uncaught Invariant Violation: Target container is not a DOM element.](#uncaught-invariant-violation-target-container-is-not-a-dom-element)
  - [Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.](#uncaught-error-element-type-is-invalid-expected-a-string-for-built-in-components-or-a-classfunction-for-composite-components-but-got-undefined-you-likely-forgot-to-export-your-component-from-the-file-its-defined-in-or-you-might-have-mixed-up-default-and-named-imports)
  - [Warning: Each child in a list should have a unique "key" prop.](#warning-each-child-in-a-list-should-have-a-unique-key-prop)
  - [Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.](#warning-failed-prop-type-you-provided-a-value-prop-to-a-form-field-without-an-onchange-handler-this-will-render-a-read-only-field-if-the-field-should-be-mutable-use-defaultvalue-otherwise-set-either-onchange-or-readonly)
  - [Uncaught ReferenceError: regeneratorRuntime is not defined](#uncaught-referenceerror-regeneratorruntime-is-not-defined)
- [Unknown pattern for future review](#unknown-pattern-for-future-review)
  - [API return](#api-return)
  - [API cache](#api-cache)
# RTFM
## RTFM resource
[React Top-Level API](https://reactjs.org/docs/react-api.html#createelement)


# Tools, Rules, team-play
- Use Emmit shortcut in JSX
  - Change *js* file to jsx
  - Ctrl+Shift+P: configure language | Ctrl+K M --> JavaScript React
    - PROBLEM:  For every file I need to do this action, is there a better way?
  - [Stack Overflow - Configure Emmet for JSX in VSCode ](https://stackoverflow.com/questions/56311467/configure-emmet-for-jsx-in-vscode)
- Eslint
  - eslint-plugin-react-hooks
  - more --> See below
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```
- Tool dependencies
```json
{
  "name": "adopt-me",
  "version": "1.0.0",
  "description": "asdf",
  "main": "app.js",
  "scripts": {
    "dev": "parcel src/index.html",
    "format": "prettier \"src/**/*.{js,html,css}\" --write",
    "lint": "eslint \"src/**/*.{js, jsx} \" --quiet",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^7.9.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.21.2",
    "eslint-plugin-react-hooks": "^4.1.2",
    "parcel-bundler": "^1.12.4",
    "prettier": "^2.1.2"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}


```
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

## Caveat
- Use ```className``` instead of ```class``` in JSX(reserved word)
  - Enabling **Emmet** when writing code will reduce the possibility of producing errors
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


// Pet.js
import React from "react";

export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h1", {}, animal),
  //     React.createElement("h1", {}, breed),
  // ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}



// App.js
import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "something-important"}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //         name: "Luna",
  //         animal: "Dog",
  //         breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //         name: "Pepper",
  //         animal: "Bird",
  //         breed: "Cocktail",
  //     }),
  //     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  //     ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));


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
# Hook
## Introduction
```javascript

import React, { useState } from "react";

const SearchParams = () => {

// This is a hook
// All hooks begin with 'use' ==> Can use something else, but some convention advisible 
    // Hooks never go inside for loops or any statement
// useState ==> initial value
// location: element [id=location]???   <== Sync with user input  <== User input
// setLocation ==> hook event
  const [location, setLocation] = useState("Seattle, WA"); 

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            value={location}
            id="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} // Hooked here
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;


```

## One-way data flow
```javascript
import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {pets.length === 0 ? (
                            <h1>No PPets Found</h1>
                            ) : (
                                pets.map( pet => (
                                    <Pet
                                        animal={pet.type}
                                        key={pet.id}
                                        name={pet.name}
                                        breed={pet.breeds.primary}
                                        media={pet.photos}
                                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                                        id={pet.id}
                                    />
                                 )
                                )
                            )}
        </div>
    );
    }

```



## Cross-component hook communication
```javascript
// App.js ==> Sub1.js || Sub2.js

// Sub1.js
import React, { useState } from "react";
import Sub2.js from './Sub2.js';

const sub1 = () => {
  // hook
  const [hookContainer, hookSetter] = useState(initialHookContainerValue);
  const [componentHookContainer, componentHookSetter] = useComponent(initialComponentHookContainerValue);

  return (
    // JSX
    <useComponent />
  )

}


// Sub2.js
import React, { useState } from "react";

const useComponent = (para1, defaultState, para2) => {
  // Parent state passed by 'defaultState'
  const [state, setState] = useState(defaultState);
  const Component = () => (
    // JSX
  )
  return [state,Component, setState];
}

export default useComponent;

```

## Effect hook
- JSX rendered first before anything happens in `UseEffect`
- Useful for UX: Give the user something to enjoy when waiting for something
- [RTFM](https://reactjs.org/docs/hooks-effect.html)
- [Learn useEffect In 13 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=0ZJgIjIuY7U)



# DevTools
- Chrome Extension

## Technique
- Dollar sign

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

## Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.


## Uncaught ReferenceError: regeneratorRuntime is not defined
- [Parcel, how to fix the `regeneratorRuntime is not defined` error](https://flaviocopes.com/parcel-regeneratorruntime-not-defined/)

# Unknown pattern for future review
## API return 

```javascript

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    console.log(animal);
    console.log(pet.breeds(animal).then((a) => console.log(a) ));

// pet is an API that returns an promise that if accepted, returns an Object that contains 'breeds' array of ANIMAL OBJECTS, what does `{breeds : apiBreeds}` do under the hood?
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      console.log(breeds);
      console.log(apiBreeds);
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, error => console.error(error));
  }, [animal, setBreed, setBreeds]);
 
```

## API cache
`.cache`