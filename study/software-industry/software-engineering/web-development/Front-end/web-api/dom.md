# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
- [Mental model](#mental-model)
- [Document](#document)
  - [Document Tree](#document-tree)
    - [Shadow DOM](#shadow-dom)
    - [Shadow Tree](#shadow-tree)
    - [TreeWalker](#treewalker)
  - [Selection](#selection)
    - [```document.querySelector()```](#documentqueryselector)
    - [```document.querySelectorAll()```](#documentqueryselectorall)
    - [```document.getElementsByClassName()```](#documentgetelementsbyclassname)
    - [```document.getElementById()```](#documentgetelementbyid)
  - [Modify](#modify)
    - [```document.createElement()```](#documentcreateelement)
- [Window](#window)
- [Node](#node)
  - [Mental model](#mental-model-1)
  - [Modification(CRUD)](#modificationcrud)
  - [Selection](#selection-1)
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
- [DOMTimeStamp](#domtimestamp)
- [Element](#element)
  - [HTML](#html)
    - [```Element.innerHTML```](#elementinnerhtml)
    - [```Element.outerHTML```](#elementouterhtml)
  - [Style](#style)
    - [Basics](#basics)
    - [```Element.scrollHeight```](#elementscrollheight)
  - [Node navigation](#node-navigation)
    - [```Element.closest()```](#elementclosest)
    - [```Element.classList```](#elementclasslist)
      - [```Element.classList.toggle([className])```](#elementclasslisttoggleclassname)
- [Event](#event)
  - [What is event?](#what-is-event)
  - [Four phases of an event](#four-phases-of-an-event)
    - [Bubble phase](#bubble-phase)
  - [Attributes](#attributes)
    - [Target](#target)
      - [closest](#closest)
  - [Event Listener](#event-listener)
    - [Syntax](#syntax)
    - [Troubleshoot](#troubleshoot)
      - [```Uncaught TypeError: Cannot read property 'addEventListener' of null```](#uncaught-typeerror-cannot-read-property-addeventlistener-of-null)
  - [Event Loop](#event-loop)
    - [Resource](#resource)
  - [Event Target](#event-target)
- [Operations](#operations)
  - [Navigation](#navigation)
    - [Node tree](#node-tree)
  - [Selection](#selection-2)
    - [Get multiple elements](#get-multiple-elements)
      - [```Array.from```](#arrayfrom)
- [Resource](#resource-1)
# Introduction
## Prerequisites
- JavaScript - Array
# Mental model
# Document
## Document Tree
### Shadow DOM
[MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
### Shadow Tree
### TreeWalker
## Selection
### ```document.querySelector()```
### ```document.querySelectorAll()```
### ```document.getElementsByClassName()```
### ```document.getElementById()```
## Modify
### ```document.createElement()```
```javascript
const div = document.createElement('div');
div.className = 'foo';
```
# Window
# Node
## Mental model
Exercise
- Implementation proficiency: Think of as many operations as you can concerning DOM tree operations and consider how to implement them into actual code.
## Modification(CRUD)
## Selection
### ChildNode
### ParentNode
### NodeFilter
## NodeIterator
## NodeList
## NonDocumentTypeChildNode
### ```NonDocumentTypeChildNode.nextElementSibling```
#### Usage
- carousel slide
- accordian
### ```NonDocumentTypeChildNode.previousElementSibling```
#### Usage
- carousel slide
- accordian

# DOMTimeStamp
# Element
## HTML
### ```Element.innerHTML```
### ```Element.outerHTML```
## Style
### Basics
- Naming tradition: CSS(pascal case) --> JavaScript(Camel case)
### ```Element.scrollHeight```
## Node navigation
### ```Element.closest()``` 
### ```Element.classList```
#### ```Element.classList.toggle([className])```

For more see [Element.classList - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
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
### Troubleshoot
#### ```Uncaught TypeError: Cannot read property 'addEventListener' of null```
- Check if the script file is included before the page is loaded.
  - [Stack overflow](https://stackoverflow.com/questions/57191982/how-to-fix-typeerror-cannot-read-property-addeventlistener-of-null)
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