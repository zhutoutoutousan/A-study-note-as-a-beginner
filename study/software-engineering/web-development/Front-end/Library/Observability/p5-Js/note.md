# Table of Contents
- [Table of Contents](#table-of-contents)
- [Study progress](#study-progress)
- [How it works](#how-it-works)
  - [Basics](#basics)
    - [Setup function](#setup-function)
    - [Draw function](#draw-function)
- [Basic operations](#basic-operations)
  - [Shapes](#shapes)
    - [Ellipse](#ellipse)

# Study progress
- [x] Getting started --> [link](https://p5js.org/get-started/#sketch)
- [ ] Using screen reader --> [link](https://p5js.org/learn/p5-screen-reader.html)
- [ ] Keep exploring
  - [ ] Just a nested item 

# How it works
## Basics
### Setup function
The ```setup()``` function runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. 
### Draw function
The ```draw()``` function runs over and over again, and is used to perform a certain action repeatedly and for animation.
# Basic operations
## Shapes
### Ellipse
```javascript
function setup() {
    createCanvas(500, 500)
}
// Draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels
function draw() {
    ellipse(50, 50, 80, 80)
}
```