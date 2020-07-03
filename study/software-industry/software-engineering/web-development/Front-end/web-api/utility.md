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
  - [Events](#events)
  - [Page properties](#page-properties)
  - [```Node```-related methods](#node-related-methods)
    - [```document.querySelector()```](#documentqueryselector)
    - [```document.querySelectorAll()```](#documentqueryselectorall)
    - [```document.getElementsByClassName()```](#documentgetelementsbyclassname)
    - [```document.getElementById()```](#documentgetelementbyid)
    - [```document.createElement()```](#documentcreateelement)
- [Node](#node)
  - [Document type node](#document-type-node)
  - [Non-document type node](#non-document-type-node)
  - [Mental model](#mental-model-1)
  - [Modification(CRUD)](#modificationcrud)
    - [Logic](#logic)
      - [```Node.compareDocumentPosition(otherNode)``` - >Relations](#nodecomparedocumentpositionothernode---relations)
      - [```Node.hasChildNodes()``` - >EndDetection](#nodehaschildnodes---enddetection)
      - [```Node.isSameNode(otherNode)``` - > Same?](#nodeissamenodeothernode----same)
    - [Addition](#addition)
      - [```element.appendChild(aChild)``` - Append()](#elementappendchildachild---append)
      - [```Node.insertBefore(newNode, refNode)``` - insertBefore()](#nodeinsertbeforenewnode-refnode---insertbefore)
    - [Remove](#remove)
      - [```Node.removeChild(child)``` - Remove()](#noderemovechildchild---remove)
    - [Move](#move)
    - [Update](#update)
      - [```Node.replaceChild(newCh, oldCh)``` - replace(n, o)](#nodereplacechildnewch-oldch---replacen-o)
    - [Clone](#clone)
      - [```Node.cloneNode([deep])``` - deepClone()](#nodeclonenodedeep---deepclone)
  - [Selection](#selection)
    - [```Node.ChildNode```](#nodechildnode)
    - [```Node.ParentNode```](#nodeparentnode)
    - [NodeFilter](#nodefilter)
    - [NodeIterator](#nodeiterator)
    - [```NonDocumentTypeChildNode.nextElementSibling``` - >SelectNext](#nondocumenttypechildnodenextelementsibling---selectnext)
    - [```NonDocumentTypeChildNode.previousElementSibling``` - >SelectPrev](#nondocumenttypechildnodepreviouselementsibling---selectprev)
      - [Usage](#usage)
  - [Query](#query)
    - [NodeList](#nodelist)
      - [Usage](#usage-1)
- [Window](#window)
  - [Difference between ```window``` and ```document```](#difference-between-window-and-document)
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
  - [Selection](#selection-1)
    - [Get multiple elements](#get-multiple-elements)
      - [```Array.from```](#arrayfrom)
- [Resource](#resource-1)
# Introduction
## Prerequisites
- JavaScript - Array
# Mental model
# Document
Tip:
- Consider merging the *Document* section and the *Node* section for their operations kind of intertwine one another.
## Document Tree
### Shadow DOM
[MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
### Shadow Tree
### TreeWalker
## Events
## Page properties
## ```Node```-related methods
### ```document.querySelector()```
### ```document.querySelectorAll()```
### ```document.getElementsByClassName()```
### ```document.getElementById()```
### ```document.createElement()```
```javascript
const div = document.createElement('div');
div.className = 'foo';
```
# Node
## Document type node 
## Non-document type node
## Mental model
Exercise
- Implementation proficiency: Think of as many operations as you can concerning DOM tree operations and consider how to implement them into actual code.
- Visual aids: Try to visualize the exercise process mentioned above
## Modification(CRUD)
### Logic
#### ```Node.compareDocumentPosition(otherNode)``` - >Relations
#### ```Node.hasChildNodes()``` - >EndDetection
#### ```Node.isSameNode(otherNode)``` - > Same?
### Addition
#### ```element.appendChild(aChild)``` - Append()
#### ```Node.insertBefore(newNode, refNode)``` - insertBefore() 
### Remove
#### ```Node.removeChild(child)``` - Remove()
### Move
### Update
#### ```Node.replaceChild(newCh, oldCh)``` - replace(n, o)
### Clone
#### ```Node.cloneNode([deep])``` - deepClone()

## Selection
### ```Node.ChildNode```
### ```Node.ParentNode```
### NodeFilter
### NodeIterator
### ```NonDocumentTypeChildNode.nextElementSibling``` - >SelectNext
### ```NonDocumentTypeChildNode.previousElementSibling``` - >SelectPrev
#### Usage
- carousel slide
- accordian
## Query
### NodeList
#### Usage
- carousel slide
- accordian


# Window
## Difference between ```window``` and ```document```

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