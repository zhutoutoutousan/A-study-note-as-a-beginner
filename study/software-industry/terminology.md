# Table of Contents
- [Table of Contents](#table-of-contents)
- [Alphabetical](#alphabetical)
  - [A](#a)
    - [Abstraction](#abstraction)
  - [C](#c)
    - [Computed](#computed)
    - [Closure](#closure)
    - [Cluster](#cluster)
    - [Code bundler](#code-bundler)
    - [Communication links](#communication-links)
  - [D](#d)
    - [Devious](#devious)
    - [Discord](#discord)
  - [E](#e)
    - [Execusion context 执行上下文](#execusion-context-执行上下文)
  - [G](#g)
    - [Gtk APP](#gtk-app)
  - [I](#i)
    - [IEEE 802](#ieee-802)
    - [IIFE](#iife)
    - [Internet Engineering Task Force(IETF)](#internet-engineering-task-forceietf)
    - [Inheritance](#inheritance)
    - [Internet Service Providers(ISPs)](#internet-service-providersisps)
    - [Internet standards](#internet-standards)
  - [M](#m)
    - [Methods](#methods)
    - [MVC](#mvc)
  - [N](#n)
    - [Non-Basic-Multilingual-Plane character](#non-basic-multilingual-plane-character)
  - [O](#o)
    - [Object-oriented inheritance model](#object-oriented-inheritance-model)
    - [Object-oriented programming](#object-oriented-programming)
  - [P](#p)
    - [PaaS](#paas)
    - [Packet switch](#packet-switch)
    - [Promise](#promise)
  - [R](#r)
    - [React element](#react-element)
    - [React.js](#reactjs)
    - [React component class/type](#react-component-classtype)
    - [Replica set](#replica-set)
    - [Requests for comments(RFCs)](#requests-for-commentsrfcs)
    - [Routing](#routing)
  - [S](#s)
    - [Scope](#scope)
    - [Service](#service)
    - [Software architecture](#software-architecture)
    - [Software design pattern](#software-design-pattern)
  - [T](#t)
    - [TDZ](#tdz)
    - [Traditional Gtk](#traditional-gtk)
    - [Transmission rate](#transmission-rate)
  - [U](#u)
    - [Unified Modeling Language(UML)](#unified-modeling-languageuml)
    - [URI](#uri)
    - [User interface(UI)](#user-interfaceui)
  - [V](#v)
    - [VoIP](#voip)
    - [Vue](#vue)
  - [W](#w)
    - [Watcher](#watcher)
- [Translation EN-CH](#translation-en-ch)
  - [A](#a-1)
  - [C](#c-1)
  - [S](#s-1)
  - [T](#t-1)
- [中英对照词汇 CH-EN](#中英对照词汇-ch-en)
  - [前端开发](#前端开发)
  - [计算机科学](#计算机科学)
  - [嵌入式系统](#嵌入式系统)
# Alphabetical
## A
### Abstraction
- (Object-oriented programming)Creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for programming purposes.

## C
### Computed
- (Vue.js)
### Closure
### Cluster
A group of servers that stores your data
### Code bundler
### Communication links

## D
### Devious
- (adj)showing a skillful use of underhanded tactics to achieve goals
### Discord
- Discord is a proprietary freeware instant messaging and VoIP application and digital distribution platform designed for creating communities ranging from gamers to education and businesses.
## E
### Execusion context 执行上下文
- (ECMAScript)**Execution context** is a concept in the language spec that---in Layman's terms---roughly equates to the 'environment' a function executes in, i.e., variable scope(and the *scope chain*, variables)
  - [What is the 'Execution Context' in JavaScript exactly?](https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly#:~:text=Execution%20context%20is%20a%20concept,value%20of%20the%20this%20object.)
  - [ECMA-262-3 in detail. Chapter 1. Execution Contexts.](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)
## G
### Gtk APP

## I
### IEEE 802
### IIFE
- IIFE:Immediately Invoked Function Expression
  - An immediately invoked function expression is a JavaScript programming language idiom which produces a lexical scope using JavaScript's function scoping.
### Internet Engineering Task Force(IETF)
### Inheritance
### Internet Service Providers(ISPs)
- E.g. local cable or telephone companies, corporate ISPs, university ISPs. Some ISPs can provide WiFi access in airports, hotels, coffee shops, and other public places, and cellular data ISPs, providing mobile access to our smartphones and other public places.
- Each ISP is in itself a network of packet switched and communication links.
### Internet standards
## M
### Methods
- (Vue.js) Methods in Vue.js are bound to the Vue instance, they are incredibly useful for  functions you would like to access in directives
- You can use arrow functions within the method, but the method cannot be an arrow function
### MVC
- **Model-view-controller** is a *software design pattern* commonly used for developing *user interfaces* that divides the related program logic into three interconnected elements.
- [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
  - Check the anatomy graph
- Definitions:
  - **Model**: The central components of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application
    - Vue.js:
    - React.js:
  - **View**: Any representation of information such as a chart, diagram or table.
    - Vue.js:
    - React.js:
  - **Controller**: Accepts input and converts it to commands for the model or view
    - Vue.js:
    - React.js:
  - **Service**: Between the controller and the model sometimes goes a layer which is called a service. It fetches data from the model and lets the controller use the fetched data.   
## N
### Non-Basic-Multilingual-Plane character
## O
### Object-oriented inheritance model
### Object-oriented programming
## P
### PaaS
- PaaS: Platform as a service
- **Platform as a service(PaaS)** or **application platform as a service(aPaaS)** or platform-based service is a category of *cloud computing services* that provides a *platform* allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
- [Wiki](https://en.wikipedia.org/wiki/Platform_as_a_service)
- Examples
  - Heroku
### Packet switch
### Promise
- (Web API)A **promise** is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a *promise* to supply the value at some point in the future.
- A **promise** is in one of these states:
  - *pending*: initial state, neither fulfilled nor rejected.
  - *fulfilled*: meaning that the operation completed
## R
### React element
- ```render``` returns a **React element**
### React.js
- React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
- It lets you compose UIs from small and isolated pieces of code called "Components"
### React component class/type
```javascript
class ThisIsAComponentClass extends React.Component {
  render() {
    return (
      // JSX
    );
  }
}

```
### Replica set
A cluster where each server stores the same data
### Requests for comments(RFCs)
### Routing
**Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). [\[express.js\]](https://expressjs.com/en/starter/basic-routing.html)
## S
### Scope
### Service
The term **Web service(WS)** is either:
- a service offered by an electronic device to another electronic device, communicating with each other via the World Wide Web,or
- a server running on a computer device, listening for requests at a particular port over a network, serving web documents(HTML, JSON, XML, images), and creating web application services, which serve in solving specific domain problems over the Web(WWW, Internet, HTTP).  See more at [wikipaedia](https://en.wikipedia.org/wiki/Web_service)

### Software architecture
- **Software architecture** refers to the fundamental structures of a *software system* and the discipline of creating such structures and systems.
- [Software architecture - Wiki](https://en.wikipedia.org/wiki/Software_architecture)

### Software design pattern
## T
### TDZ
### Traditional Gtk
- Traditional Gtk App means, it cannot be Firefox, Libreoffice, which only use Gtk as a UI style
### Transmission rate
## U 
### Unified Modeling Language(UML)

### URI
### User interface(UI)

## V
### VoIP
- Voice over Internet Protocol, also called IP telephony, is a method and group of technologies for the delivery of voice communications and multimedia sessions over Internet Protocol networks, such as the Internet.
### Vue
- Vue is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

## W
### Watcher
- (Vue.js)

# Translation EN-CH
## A
- Accordion - 折叠面板
## C
- Closure - 闭包
## S
- Scope - 作用域
## T
- TDZ - 暂时死区
- Template engine - 模板引擎

# 中英对照词汇 CH-EN
- 不用，直接与英文合并
## 前端开发
-  注入 - Injection
-  轮播图 - carousel
-  内联元素 - inline element
-  块级元素 - block element
## 计算机科学
## 嵌入式系统
