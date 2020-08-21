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
    - [Methods](#methods)
      - [Init](#init)
        - [```Document.createTreeWalker```](#documentcreatetreewalker)
        - [```TreeWalker.filter```](#treewalkerfilter)
        - [```TreeWalker.whatToShow```](#treewalkerwhattoshow)
      - [Navigation](#navigation)
        - [```TreeWalker.currentNode```](#treewalkercurrentnode)
        - [```TreeWalker.firstChild()```](#treewalkerfirstchild)
        - [```TreeWalker.lastChild()```](#treewalkerlastchild)
        - [```TreeWalker.nextNode()```](#treewalkernextnode)
        - [```TreeWalker.nextSibling()```](#treewalkernextsibling)
        - [```TreeWalker.parentNode()```](#treewalkerparentnode)
        - [```TreeWalker.previousNode()```](#treewalkerpreviousnode)
        - [```TreeWalker.previousSibling()```](#treewalkerprevioussibling)
    - [List of operations](#list-of-operations)
      - [Create a treewalker](#create-a-treewalker)
      - [Selection](#selection)
        - [Select elements of the same class](#select-elements-of-the-same-class)
        - [Select all the 'a' tags in the body](#select-all-the-a-tags-in-the-body)
      - [CRUD](#crud)
  - [Events](#events)
    - [MouseEvent](#mouseevent)
      - [```MouseEvent.clientX```](#mouseeventclientx)
  - [Page properties](#page-properties)
  - [```Node```-related methods](#node-related-methods)
    - [```document.querySelector()```](#documentqueryselector)
    - [```document.querySelectorAll()```](#documentqueryselectorall)
    - [```document.getElementsByClassName()```](#documentgetelementsbyclassname)
    - [```document.getElementById()```](#documentgetelementbyid)
    - [```document.createElement()```](#documentcreateelement)
  - [Tree](#tree)
    - [```document.body```](#documentbody)
  - [With other APIs](#with-other-apis)
    - [```document.createTreeWalker()```](#documentcreatetreewalker-1)
    - [```document.createNodeIterator()```](#documentcreatenodeiterator)
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
  - [Selection](#selection-1)
    - [```Node.ChildNode```](#nodechildnode)
    - [```Node.ParentNode```](#nodeparentnode)
    - [NodeFilter](#nodefilter)
      - [```Node.filter.acceptNode()```](#nodefilteracceptnode)
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
  - [Contents](#contents)
    - [```Element.innerHTML```](#elementinnerhtml)
    - [```Element.outerHTML```](#elementouterhtml)
    - [```Element.innerText```](#elementinnertext)
    - [```Element.outerText```](#elementoutertext)
  - [Style](#style)
    - [Basics](#basics)
    - [```Element.scrollHeight```](#elementscrollheight)
  - [Node navigation](#node-navigation)
    - [```Element.closest()```](#elementclosest)
    - [```Element.classList```](#elementclasslist)
      - [```Element.classList.toggle([className])```](#elementclasslisttoggleclassname)
- [Event](#event)
  - [What is event?](#what-is-event)
  - [Event capturing and bubbling](#event-capturing-and-bubbling)
    - [Target phase](#target-phase)
    - [Event phase](#event-phase)
    - [Bubble phase](#bubble-phase)
  - [Attributes](#attributes)
    - [Target](#target)
      - [closest](#closest)
  - [Event Listener](#event-listener)
    - [Syntax](#syntax)
  - [Event Loop](#event-loop)
    - [Resource](#resource)
  - [Event Target](#event-target)
  - [Troubleshoot](#troubleshoot)
    - [```Uncaught TypeError: Cannot read property 'addEventListener' of null```](#uncaught-typeerror-cannot-read-property-addeventlistener-of-null)
    - [```Uncaught TypeError: Cannot create property '[genericEvent]' on [Element]```](#uncaught-typeerror-cannot-create-property-genericevent-on-element)
- [Operations](#operations)
  - [Navigation](#navigation-1)
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
Tip:
- Consider merging the *Document* section and the *Node* section for their operations kind of intertwine one another.
## Document Tree
### Shadow DOM
[MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
### Shadow Tree
## TreeWalker
### Methods
#### Init
##### ```Document.createTreeWalker```
##### ```TreeWalker.filter```
##### ```TreeWalker.whatToShow```
#### Navigation
##### ```TreeWalker.currentNode```
##### ```TreeWalker.firstChild()```
##### ```TreeWalker.lastChild()```
##### ```TreeWalker.nextNode()```
##### ```TreeWalker.nextSibling()```
##### ```TreeWalker.parentNode()```
##### ```TreeWalker.previousNode()```
##### ```TreeWalker.previousSibling()```
### List of operations
#### Create a treewalker
```javascript

/*
document.createTreeWalker(root, whatToShow[, filter[, entityReferenceExpansion]])
- root: A root Node of this TreeWalker traversal, e.g. document.body
- whatToShow: 
  - unsigned long
  - RTFM for more
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
- filter --> NodeFilter
- entityReferenceExpansion --> Obsolete, just set to false
Explore it in the chrome console.

After initialization, further operations can be done with the Node API.
*/
let treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
)

// Push all of the page elements into an array
let nodeList = [];
let currentNode = treeWalker.currentNode;

while(currentNode) {
  nodeList.push(currentNode);
  currentNode = treeWalker.nextNode();
}
```
#### Selection
##### Select elements of the same class
```javascript
// Other codes the same 
const classNameYouWant = "classNameYouWant";
while(currentNode) {
  if(currentNode.class === classNameYouWant) {
    nodeList.push(currentNode);
  }
  currentNode = treeWalker.nextNode();
}
```

##### Select all the 'a' tags in the body
#### CRUD


## Events
### MouseEvent
#### ```MouseEvent.clientX```
## Page properties
## ```Node```-related methods
### ```document.querySelector()```
### ```document.querySelectorAll()```
### ```document.getElementsByClassName()```
### ```document.getElementById()```
### ```document.createElement()```
## Tree
### ```document.body```
```javascript
const div = document.createElement('div');
div.className = 'foo';
```
## With other APIs
### ```document.createTreeWalker()```
### ```document.createNodeIterator()```
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
#### ```Node.filter.acceptNode()```
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
## Contents
### ```Element.innerHTML```
### ```Element.outerHTML```
### ```Element.innerText```
### ```Element.outerText```
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
## Event capturing and bubbling
### Target phase
### Event phase
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
## Troubleshoot
### ```Uncaught TypeError: Cannot read property 'addEventListener' of null```
- Check if the script file is included before the page is loaded.
  - [Stack overflow](https://stackoverflow.com/questions/57191982/how-to-fix-typeerror-cannot-read-property-addeventlistener-of-null)

### ```Uncaught TypeError: Cannot create property '[genericEvent]' on [Element]```
- Maybe you used ```for(const i in SomeNodeList)``` when batch assigning events to class elements. Generally ```SomeNodeList``` has an additional ```length``` attribute. Try traverse with respect to its ```SomeNodeList.length```.

# Operations
## Navigation
### Node tree
## Selection
### Get multiple elements
#### ```Array.from```

# Resource
[DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)