# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [What are JavaScript classes?](#what-are-javascript-classes)
  - [```Class``` before ECAMScript 2015](#class-before-ecamscript-2015)
- [Basic structure of a class](#basic-structure-of-a-class)
  - [Syntax](#syntax)
  - [Constructor](#constructor)
    - [Syntax](#syntax-1)
    - [Default](#default)
    - [```super()```](#super)
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


### Default
For base classes: 
```javascript
constructor() {}
```
For derived classes:
```javascript
constructor(...args) {
  super(...args);
}
```




### ```super()```
- Usage: when used in a constructor, the ```super``` keyword appeards alone and must be used before the ```this``` keyword is used. The ```super``` keyword can also be used to call functions on a parent object.
- Must: In ES6, derived classes have to call ```super()``` if they have a constructor.
- For now, just take it as that it takes the place of 
```javascript
this.a = a
this.b = b
this.blablabla = blablabla

// Example 
class foo {
  constructor(a, b, c){
    this.a = a
    this.b = b
    this.c = c
  }
  d(){
    console.log(this.a)
  }
}
class bar extends foo{
  constructor(a,b,c,d){
    super(a,b,c)
    this.d = d
  }
  e(){
    console.log(`${this.b} and ${this.d}`);
  }
}
```
### Resources
[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
## Getter
## Setter
## Methods
### Prototype methods
### Static methods
The **static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself.
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