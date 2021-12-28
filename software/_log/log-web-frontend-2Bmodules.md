# Table of Contents
- [Table of Contents](#table-of-contents)
- [CRUD Encapsulation](#crud-encapsulation)
  - [Value](#value)
  - [Vue.js implementation](#vuejs-implementation)
    - [Prerequisite](#prerequisite)
    - [Usage Scope](#usage-scope)
      - [Can easily do](#can-easily-do)
      - [Can do with mild work](#can-do-with-mild-work)
      - [Can do with moderate work](#can-do-with-moderate-work)
      - [Not practical](#not-practical)
    - [File structure](#file-structure)
    - [Usage Walkthrough](#usage-walkthrough)
      - [Import Module](#import-module)
      - [Integration with component design](#integration-with-component-design)
      - [Lifecycle mangagement and its co-existence with Vue.js lifecycle](#lifecycle-mangagement-and-its-co-existence-with-vuejs-lifecycle)
    - [Deep Dive](#deep-dive)
      - [crud.js](#crudjs)
      - [CRUD.operation.vue](#crudoperationvue)
      - [Pagination.vue](#paginationvue)
      - [RR.operation.vue](#rroperationvue)
      - [UD.operation.vue](#udoperationvue)
    - [Troubleshooting](#troubleshooting)
    - [Transcend: Make a better one](#transcend-make-a-better-one)
    - [Keep-up: Carry over to Vue 3.0](#keep-up-carry-over-to-vue-30)
- [Code Generator](#code-generator)
  - [Value](#value-1)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
- [System Administration](#system-administration)
  - [Credential](#credential)
    - [SSO](#sso)
  - [Permission](#permission)
    - [Dynamic Routing](#dynamic-routing)
- [Global Configuration](#global-configuration)
- [Performance Optimization](#performance-optimization)
- [Streaming](#streaming)
  - [Video](#video)
  - [3D models](#3d-models)
- [Data Dictionary](#data-dictionary)

# CRUD Encapsulation
## Value
## Vue.js implementation
- [Crud - eladmin-web](https://github.com/moxun1639/eladmin-web/tree/master/src/components/Crud)
  - REFERENCE: **moxun1639**(author) - Crud
### Prerequisite
- Intermediate Vue Sophistication
- Intermediate 2B back-stage front-end project development sophistication
- Good command of Vue `mixin`
  - Improvement Plan
### Usage Scope
#### Can easily do
#### Can do with mild work
#### Can do with moderate work
#### Not practical
### File structure
```
File structure tree
├── src
│   ├── api
│   │   ├── data.js
│   ├── components
│   │   ├── Crud
│   │   │   ├── crud.js
│   │   │   ├── CRUD.operation.vue
│   │   │   ├── Pagination.vue
│   │   │   ├── RR.operation.vue
│   │   │   ├── UD.operation.vue
```

### Usage Walkthrough
#### Import Module
#### Integration with component design
#### Lifecycle mangagement and its co-existence with Vue.js lifecycle

### Deep Dive
#### crud.js
#### CRUD.operation.vue
#### Pagination.vue
#### RR.operation.vue
#### UD.operation.vue

### Troubleshooting
- 同一组件/界面内, 多CRUD共存
  - [official](https://github.com/elunez/eladmin-web/pull/79/commits/0c771b34dfc8cd28942ad98365e78cec1a453612)
### Transcend: Make a better one

### Keep-up: Carry over to Vue 3.0

# Code Generator
## Value
## Front-end

## Back-end

# System Administration
## Credential
### SSO
## Permission
### Dynamic Routing

# Global Configuration

# Performance Optimization

# Streaming
## Video
- WebRTC
## 3D models
- BIM
- Unity 3D embedd
- three.js embedd
- WebGL
- Wasm

# Data Dictionary