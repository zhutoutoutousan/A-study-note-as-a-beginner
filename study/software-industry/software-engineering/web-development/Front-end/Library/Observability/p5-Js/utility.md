# Table of Contents
- [Table of Contents](#table-of-contents)
- [Study progress](#study-progress)
- [How it works](#how-it-works)
  - [Basics](#basics)
    - [Setup function](#setup-function)
    - [Draw function](#draw-function)
- [Basic operations](#basic-operations)
- [Tools](#tools)
  - [VScode](#vscode)
- [Functions](#functions)
  - [Globals](#globals)
    - [```width```](#width)
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
    - [Strokes](#strokes)
    - [```noFill()```](#nofill)
  - [Image](#image)
    - [Post an image](#post-an-image)
    - [```imageMode()```](#imagemode)
  - [Interactions](#interactions)
    - [Reactions](#reactions)
      - [```redraw()```](#redraw)
    - [Mouse](#mouse)
      - [```mousePressed()```](#mousepressed)
  - [Animations](#animations)
    - [```translate()```](#translate)
  - [DOM operation](#dom-operation)
    - [```createDiv()```](#creatediv)
    - [```createButton()```](#createbutton)
    - [Events](#events)
- [Deep dive](#deep-dive)
  - [History](#history)
    - [Processing](#processing)
  - [Source code study](#source-code-study)
    - [Core](#core)
  - [Functional improvements](#functional-improvements)

# Study progress
- [x] Getting started --> [link](https://p5js.org/get-started/#sketch)
- [ ] p5.js tutorial - The coding train --> [link](https://www.youtube.com/watch?v=8j0UDiN7my4)
  - [ ] 1.1
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

# Tools
## VScode
- live-p5

# Functions

## Globals
### ```width```

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
### Strokes
- ```noStroke()``` --> No stroke
- ```strokeWeight([number])``` --> Control stroke width
- ```stroke([color])``` --> Set strokes 
- No outlines
### ```noFill()```

## Image
### Post an image
```javascript
// The default mode is imageMode(CORNER), which interprets the second and 
// the third parameters of image() as the upper-left corner of the image.
// If two additional parameters are specified, they are used to set the 
// image's width and height.
let img;
let xoffset, yoffset, xsize, ysize;
function preload() {
  img = loadImage('assets/picture.jpg');
}
function setup() {
  imageMode(CORNER);
  image(img, xoffset, yoffset, xsize, ysize);
}
```
### ```imageMode()```
- ```imageMode(CORNERS)``` interprets the second and third parameters of ```image()``` as the location of one corner, and the fourth and fifth parameters as the opposite corner.
- ```imageMode(CENTER)``` interprets the second and third parameters of ```image()``` as the image's center point. If two additional parameters are specified, they are used to set the image's width and height.

## Interactions
### Reactions
#### ```redraw()```
### Mouse
#### ```mousePressed()```

## Animations
### ```translate()```

## DOM operation
### ```createDiv()```
### ```createButton()```
### Events

# Deep dive
## History
### Processing
## Source code study
### Core
The main ```p5``` class can be found in *./src/core/main.js*
## Functional improvements
