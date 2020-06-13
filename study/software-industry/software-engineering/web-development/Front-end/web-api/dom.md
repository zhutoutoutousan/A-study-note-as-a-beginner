# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
- [Mental model](#mental-model)
- [Document](#document)
  - [Selection](#selection)
    - [```document.querySelector()```](#documentqueryselector)
    - [```document.querySelectorAll()```](#documentqueryselectorall)
    - [```document.getElementsByClassName()```](#documentgetelementsbyclassname)
    - [```document.getElementById()```](#documentgetelementbyid)
- [Window](#window)
- [Node](#node)
  - [ChildNode](#childnode)
  - [ParentNode](#parentnode)
  - [NodeFilter](#nodefilter)
  - [NodeIterator](#nodeiterator)
  - [NodeList](#nodelist)
  - [NonDocumentTypeChildNode](#nondocumenttypechildnode)
    - [```NonDocumentTypeChildNode.nextElementSibling```](#nondocumenttypechildnodenextelementsibling)
      - [Usage](#usage)
    - [```NonDocumentTypeChildNode.previousElementSibling```](#nondocumenttypechildnodepreviouselementsibling)
      - [Usage](#usage-1)
- [TreeWalker](#treewalker)
- [DOMTimeStamp](#domtimestamp)
- [Element](#element)
  - [Style](#style)
    - [Basics](#basics)
    - [```Element.scrollHeight```](#elementscrollheight)
  - [Node navigation](#node-navigation)
    - [```Element.closest()```](#elementclosest)
- [Event](#event)
  - [What is event?](#what-is-event)
  - [Four phases of an event](#four-phases-of-an-event)
    - [Bubble phase](#bubble-phase)
  - [Attributes](#attributes)
    - [Target](#target)
      - [closest](#closest)
  - [Event Listener](#event-listener)
    - [Syntax](#syntax)
  - [Event Loop](#event-loop)
    - [Resource](#resource)
  - [Event Target](#event-target)
- [Operations](#operations)
  - [Navigation](#navigation)
    - [Node tree](#node-tree)
  - [Selection](#selection-1)
    - [Get multiple elements](#get-multiple-elements)
      - [```Array.from```](#arrayfrom)
- [Resource](#resource-1)
# Introduction
## Prerequisites
- JavaScript - Array
# Mental model
# Document
## Selection
### ```document.querySelector()```
### ```document.querySelectorAll()```
### ```document.getElementsByClassName()```
### ```document.getElementById()```
# Window
# Node
## ChildNode
## ParentNode
## NodeFilter
## NodeIterator
## NodeList
## NonDocumentTypeChildNode
### ```NonDocumentTypeChildNode.nextElementSibling```
#### Usage
- carousel slide
### ```NonDocumentTypeChildNode.previousElementSibling```
#### Usage
- carousel slide
# TreeWalker
# DOMTimeStamp
# Element
## Style
### Basics
- Naming tradition: CSS(pascal case) --> JavaScript(Camel case)
### ```Element.scrollHeight```
## Node navigation
### ```Element.closest()``` 

# Event
## What is event?
```javascript
const someEvent = event => {
  console.log(event)
}
```
## Four phases of an event
### Bubble phase
## Attributes
### Target
#### closest
See ```Element.cloest()```
## Event Listener
### Syntax
```javascript
const someEvent = event => {
  // some operations
  return;
}

let someElement = document.querySelector('.someClass');
someElement.addEventListener(someEvent);
```
## Event Loop
### Resource 
[What is Event loop? - Jsconf](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
## Event Target

# Operations
## Navigation
### Node tree
## Selection
### Get multiple elements
#### ```Array.from```

# Resource
[DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)