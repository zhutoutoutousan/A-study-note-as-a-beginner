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
  - [Arsenal](#arsenal)
    - [Pseudo-selector](#pseudo-selector)
    - [Animation body](#animation-body)
    - [Animation methods](#animation-methods)
    - [Reference](#reference)
  - [Goal](#goal)
    - [Maneuver](#maneuver)
    - [Special effects](#special-effects)
      - [Zoom out](#zoom-out)
  - [Tools](#tools)
    - [Cubid-bezier tool](#cubid-bezier-tool)
    - [Animation designer](#animation-designer)
      - [cssanimate](#cssanimate)
  - [Resource](#resource)
- [Shape](#shape)
  - [Circle](#circle)
    - [```border-radius```](#border-radius)
- [Decoration](#decoration)
  - [Background](#background)
    - [```background```](#background-1)
      - [```url(<image-path>)```](#urlimage-path)
    - [```background-image```](#background-image)
      - [```radial-gradient()```](#radial-gradient)
      - [```linear-gradient()```](#linear-gradient)
  - [Text](#text)
    - [Font](#font)
    - [Color](#color)
      - [Color transition](#color-transition)
        - [```background```+ ```background-clip: text``` + ```-webkit-text-fill-color```](#background-background-clip-text---webkit-text-fill-color)
- [Cross-platform support](#cross-platform-support)
  - [Browser engine](#browser-engine)
    - [WebKit](#webkit)
    - [V8](#v8)
  - [Device](#device)
    - [Media query](#media-query)
- [User](#user)
  - [Mouse](#mouse)
    - [Determine mouse-in position](#determine-mouse-in-position)
  - [Keyboard](#keyboard)

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
## Arsenal
### Pseudo-selector
- ```:hover```
- ```:focus```
- ```::after```

### Animation body
- ```@keyframe```
  - [css-tricks tutorial](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)


### Animation methods
- Animation body
  - ```animation```
  - ```animation-fill-mode```
  - ```animation-delay```
  - ```animation-iteration-count```

- Maneuver
  - ```transform```
  - ```translate```
  -  ```translate3d```
  - ```transition```
### Reference
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d)
  - 3D display
- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)


## Goal

### Maneuver

### Special effects
#### Zoom out




## Tools
### Cubid-bezier tool
It is inside the chrome DevTools, when you click on the compass icon near CSS animation rules. Very good for designing ```transition``` animation.
### Animation designer
#### cssanimate
- [Link1](https://cssanimate.com/)
- Usage
## Resource
[transition - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

# Shape
## Circle
### ```border-radius```

# Decoration
## Background
### ```background```
#### ```url(<image-path>)```
```css
.some-class {
    background: url(img/hero-image.jpg) no-repeat center;
    background-size: cover;
}
```
### ```background-image```
#### ```radial-gradient()```
- You can improve your grasp of ```radial-gradient()``` by paying attention when coming across this either in the tutorial or during the developing process
- Color transition:
  - Circular -->
  - ```<color> percentage, ...```
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient)
- [Fun ways to animate CSS gradients](https://www.youtube.com/watch?v=f3mwKLXpOLk)
  - Use of ```var()```
  - 
#### ```linear-gradient()```
- Color transition:
- Top-down

## Text
### Font
### Color
#### Color transition
##### ```background```+ ```background-clip: text``` + ```-webkit-text-fill-color```
```css
.root {
  --animation--rotation: 45deg;
  --start--color: #c97874;
  --end--color: #463042;
  --text-color: #8c5059;
}

/* I have a question here, how do the color of the background 
   and the color of the text interact with each other?
*/

.target-text {
  background: -webkit-linear-gradient(
                    var(--start--color) 10%, 
                    var(--animation--rotation), 
                    var(--end--color) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--text-color);
}

```
- See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
# Cross-platform support
## Browser engine
### WebKit
### V8
## Device
### Media query
- For basics, check [CSS-@](./css-at-rules.md)

# User
## Mouse
### Determine mouse-in position
## Keyboard