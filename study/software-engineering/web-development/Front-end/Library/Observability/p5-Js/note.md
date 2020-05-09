# Table of Contents
- [Table of Contents](#table-of-contents)
- [Study progress](#study-progress)
- [How it works](#how-it-works)
  - [Basics](#basics)
    - [Setup function](#setup-function)
    - [Draw function](#draw-function)
- [Basic operations](#basic-operations)
- [Deep dive](#deep-dive)
  - [Source code study](#source-code-study)
  - [Functional improvements](#functional-improvements)
- [Utils](#utils)
  - [Shapes](#shapes)
    - [```fill()```](#fill)
    - [Rectangle](#rectangle)
      - [```rect()```](#rect)
      - [```rectMode()```](#rectmode)
  - [Canvas](#canvas)
    - [```createCanvas()```](#createcanvas)
    - [```background()```](#background)
  - [Timer](#timer)
    - [```millis()```](#millis)
  - [Settings](#settings)
    - [```noStroke()```](#nostroke)
    - [```noFill()```](#nofill)
  - [Animations](#animations)
    - [```translate()```](#translate)

# Study progress
- [ ] Getting started --> [link](https://p5js.org/get-started/#sketch)
- [ ] Using screen reader --> [link](https://p5js.org/learn/p5-screen-reader.html)
- [ ] Keep exploring
  - [ ] ```createVector()```
  - [ ] Read the Processing transition tutorial to learn how to convert from Processing to p5.js, and the main differences between them.  -->[link](https://github.com/processing/p5.js/wiki/Processing-transition)
  - [ ] View the reference for full documentation. -->[link](https://p5js.org/reference/)
  - [ ] Check out the learn page and examples page for more. --> [Check out the learn page and examples page for more.]()
  - [ ] If you wish to use p5 with a screenreader, check out the p5 with a screenreader tutorial. --> [Using p5 with a screen reader](https://p5js.org/learn/p5-screen-reader.html)

# How it works
## Basics
### Setup function
The ```setup()``` function runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. 
### Draw function
The ```draw()``` function runs over and over again, and is used to perform a certain action repeatedly and for animation.
# Basic operations
```javascript
function setup() {
    createCanvas(500, 500)
}
// Draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels
function draw() {
    ellipse(50, 50, 80, 80)
}
```

# Deep dive
## Source code study
## Functional improvements

# Utils
## Shapes
### ```fill()```
### Rectangle
#### ```rect()```
#### ```rectMode()```

## Canvas
### ```createCanvas()```
### ```background()```

## Timer
### ```millis()```

## Settings
### ```noStroke()```
- No outlines
### ```noFill()```

## Animations
### ```translate()```