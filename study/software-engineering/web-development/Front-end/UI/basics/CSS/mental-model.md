# Table of Contents
- [Table of Contents](#table-of-contents)
- [What CSS does](#what-css-does)
- [CSS box model](#css-box-model)
  - [Block boxes](#block-boxes)
    - [Mental model](#mental-model)
    - [Behaviour check-up](#behaviour-check-up)
  - [Inline boxes](#inline-boxes)
    - [Mental model](#mental-model-1)
    - [Behaviour check-up](#behaviour-check-up-1)
  - [Box display](#box-display)
    - [None](#none)
  - [Box position](#box-position)
    - [Absolute](#absolute)
    - [Relative](#relative)
    - [Sticky](#sticky)
    - [Resource](#resource)
- [Tree inheritance](#tree-inheritance)
- [Animation](#animation)
- [Mental model code connection](#mental-model-code-connection)
- [Resource](#resource-1)
# What CSS does
| ![What CSS does](./assets/what-css-does.PNG) |
|:--:|
| *What CSS does* |
# CSS box model
| ![Box model](./assets/box-model.PNG) |
|:--:|
| *Box model* |


## Block boxes
### Mental model
Think of this as a solid, arrogant, sturdy SOABox, which **stands out once present(Break onto a new line)**, and eat up all the spaces which contains it. However, you can **control its temper by whistling to its ear(The width and height properties are respected)**. But **when it loses its temper, its outer fatty layer can not be penetrated.**        

!: Relations with position property(relative VS absolute)
  - Do ```relative``` components and ```absolute``` components share different space?
### Behaviour check-up
- The box will break onto a new line
- The box will extend in the line director to fill the space available in its container. In most cases this means the box will become as wide as the container, filling up 100% of the space available
- The width and height properties are respected
- Padding, margin and border will cause other elements to be pushed away from the box
## Inline boxes
### Mental model
### Behaviour check-up
- 
## Box display
### None
Attention: The box still takes up space sometimes, adjust opacity for temporary relief.

## Box position
### Absolute
### Relative
### Sticky

### Resource
[css-tricks position](https://css-tricks.com/almanac/properties/p/position/)

# Tree inheritance

# Animation
# Mental model code connection

# Resource
[MDN - The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)


