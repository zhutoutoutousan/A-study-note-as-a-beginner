# Table of Contents
- [Table of Contents](#table-of-contents)
- [Postitioning](#postitioning)
  - [Individualistic positioning](#individualistic-positioning)
  - [Centering](#centering)
    - [Related projects](#related-projects)
    - [Tutorials](#tutorials)
    - [Horizontal](#horizontal)
      - [```inline``` or ```inline-*``` elements(text or links)](#inline-or-inline--elementstext-or-links)
      - [Block level element](#block-level-element)
      - [Multiple block level elements](#multiple-block-level-elements)
    - [Vertical](#vertical)
      - [```inline``` or ```inline-*``` elements](#inline-or-inline--elements)
        - [single line](#single-line)
        - [multiple line](#multiple-line)
      - [block-level elements](#block-level-elements)
        - [Known height or height unknown?](#known-height-or-height-unknown)
        - [Mind if Elements stretches the height of the container?](#mind-if-elements-stretches-the-height-of-the-container)
        - [Use of flexbox](#use-of-flexbox)
    - [Horizontal and vertical](#horizontal-and-vertical)
      - [Element width and height fixed?](#element-width-and-height-fixed)
      - [Element width and height known?](#element-width-and-height-known)
      - [Use of flexbox](#use-of-flexbox-1)
      - [Use of grid](#use-of-grid)
    - [Combos to use](#combos-to-use)
    - [Related CSS rules](#related-css-rules)
- [Animation](#animation)
  - [Maneuver](#maneuver)
    - [Inheritance](#inheritance)
    - [Methods](#methods)
      - [```Transform```](#transform)
    - [Different types of transformations](#different-types-of-transformations)
      - [Translate](#translate)
    - [Reference](#reference)
  - [Transition](#transition)
  - [Tools](#tools)
    - [Cubid-bezier tool](#cubid-bezier-tool)
  - [Resource](#resource)
- [Shape](#shape)
  - [Circle](#circle)
    - [```border-radius```](#border-radius)
- [Decoration](#decoration)
  - [Background](#background)
- [Cross-platform support](#cross-platform-support)
  - [Media query](#media-query)

# Postitioning
## Individualistic positioning
- [Absolutely positioned element going off screen when filled](https://stackoverflow.com/questions/12850531/absolutely-positioned-element-going-off-screen-when-filled)
## Centering
### Related projects
- Hero image
### Tutorials
- Centering is hard
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [【基础】这15种CSS居中的方式，你都用过哪几种？](https://segmentfault.com/a/1190000013966650)
- [Centering with CSS](https://www.youtube.com/watch?v=hIG-fZ2042k)
- [5 ways to vertically center with CSS](https://www.youtube.com/watch?v=qJVVZYTYA9U)
### Horizontal
#### ```inline``` or ```inline-*``` elements(text or links)
Use ```text-align```. Works for ```inline```,```inline-block```,```inline-table```,```inline-flex```, etc.
```css
.center-children {
  text-align: center;
}
```
#### Block level element
Set the width value, then set ```margin-horizontal``` to ```auto```
```css
.center-me {
  width: var(--set-value);
  margin: 0 auto;
}
```
#### Multiple block level elements
### Vertical
#### ```inline``` or ```inline-*``` elements
##### single line
##### multiple line
#### block-level elements
##### Known height or height unknown?
##### Mind if Elements stretches the height of the container?
##### Use of flexbox
### Horizontal and vertical
#### Element width and height fixed?
Use of negative margins equal to half of that width and height, then position it at 50%/50% will center it with great cross browser support.
- Nope it doesn't work * 1
- Maybe the ```body``` and ```html``` need to set: ```height: 100%```
```css
:root {
--set-width: 300px;
--set-height: 100px;
--set-padding: 20px;
}

.parent {
  position: relative;
}

.child {
  width: var(--set-width);
  height: var(--set-height);
  padding: var(--set-padding);

  position: absolute;
  top: 50%;
  left: 50%;
  
  /* Set margin accordingly, clockwise */
  margin: cal(-1 * (var(--set-height) + 2 * var(--set-padding)))
          0
          0
          cal(-1 * (var(--set-width) + 2 * var(--set-padding)));
}

```
#### Element width and height known?
#### Use of flexbox
#### Use of grid

### Combos to use
### Related CSS rules

# Animation
## Maneuver
### Inheritance

### Methods
#### ```Transform```


### Different types of transformations
#### Translate
### Reference
[transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
[translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)

## Transition
Recommended using a whole video to learn this.

## Tools
### Cubid-bezier tool
It is inside the chrome DevTools, when you click on the compass icon near CSS animation rules. Very good for designing ```transition``` animation.

## Resource
[transition - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

# Shape
## Circle
### ```border-radius```

# Decoration
## Background


# Cross-platform support
## Media query
- For basics, check [CSS-@](./css-at-rules.md)