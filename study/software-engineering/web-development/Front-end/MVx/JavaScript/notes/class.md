# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [What are JavaScript classes?](#what-are-javascript-classes)
  - [```Class``` before ECAMScript 2015](#class-before-ecamscript-2015)
- [Basic structure of a class](#basic-structure-of-a-class)
  - [Syntax](#syntax)
  - [Constructor](#constructor)
    - [Syntax](#syntax-1)
    - [```super()``` in constructors](#super-in-constructors)
    - [Resources](#resources)
  - [Getter](#getter)
  - [Setter](#setter)
  - [Methods](#methods)
    - [Prototype methods](#prototype-methods)
    - [Static methods](#static-methods)
  - [Data](#data)
- [How to define a class](#how-to-define-a-class)
  - [Class expressions](#class-expressions)
  - [Class declarations](#class-declarations)
- [Class, object, function and prototype chain explained](#class-object-function-and-prototype-chain-explained)
- [Class inner working principle deep dive](#class-inner-working-principle-deep-dive)
- [Using classes in real applications](#using-classes-in-real-applications)
- [The relation between application state management and JavaScript classes](#the-relation-between-application-state-management-and-javascript-classes)
  - [Class](#class)
  - [Vuex](#vuex)
  - [Redux](#redux)
  - [Head-to-head](#head-to-head)
- [Tricks](#tricks)
- [Resource](#resource)
# Introduction
## What are JavaScript classes?
JavaScript classes were introduced in ECMAScript 2015. They are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax *does not* introduce a new object-oritented inheritance model to JavaScript
## ```Class``` before ECAMScript 2015

# Basic structure of a class
## Syntax
A basic JavaScript looks like this
```javascript
class ThisIsAClass {
    constructor(input1, input2[,...]){
        this.input1 = input1;
        this.input2 = input2;
        // ...
    }

    // some methods
}
```
## Constructor
### Syntax
```javascript
constructor([arguments]) {...}
```

### ```super()``` in constructors
### Resources
[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
## Getter
## Setter
## Methods
### Prototype methods
### Static methods
## Data

# How to define a class
## Class expressions
## Class declarations

# Class, object, function and prototype chain explained

# Class inner working principle deep dive
[Object-oriented JavaScript: A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

# Using classes in real applications

# The relation between application state management and JavaScript classes
## Class
## Vuex
## Redux
## Head-to-head

# Tricks

# Resource
[Class - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)