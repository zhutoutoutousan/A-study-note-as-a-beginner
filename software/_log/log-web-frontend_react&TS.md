# Table of Contents
- [Table of Contents](#table-of-contents)
- [Buffer to permanent note](#buffer-to-permanent-note)
  - [Timing resource](#timing-resource)
  - [Style](#style)
- [2021/6/9-2021/6-15 | 2021/7/7-](#202169-20216-15--202177-)
  - [Accelerated learning of React using `ant-design-pro`](#accelerated-learning-of-react-using-ant-design-pro)
    - [Become comfortable with using mockjs for mock-backend](#become-comfortable-with-using-mockjs-for-mock-backend)
    - [Describe the project architecture](#describe-the-project-architecture)
      - [Page layout & File structure & Configuration](#page-layout--file-structure--configuration)
      - [Networking and API calls(Frontend)](#networking-and-api-callsfrontend)
      - [Front-end life-cycle(as detailed as possible)](#front-end-life-cycleas-detailed-as-possible)
      - [Back-end(No nitty gritties required)](#back-endno-nitty-gritties-required)
      - [Git collaboration](#git-collaboration)
      - [Deployment(Docker, workflow required)](#deploymentdocker-workflow-required)
    - [Dependencies](#dependencies)
    - [Some peripheral work](#some-peripheral-work)
    - [Endpoint definition](#endpoint-definition)
- [2021/6/12-2021/7/10-](#2021612-2021710-)
  - [Difference between type and interface in TypeScript](#difference-between-type-and-interface-in-typescript)
  - [TypeScript Utility Types reading](#typescript-utility-types-reading)
- [2021/6/14](#2021614)
  - [Difference between useEffect, useState, useMemo](#difference-between-useeffect-usestate-usememo)
  - [Explain to me what React.FC is](#explain-to-me-what-reactfc-is)
- [2021/6/16](#2021616)
  - [How would you describe a bulletproof react component?](#how-would-you-describe-a-bulletproof-react-component)
- [2021/6/20](#2021620)
  - [Starting React Admin from scratch](#starting-react-admin-from-scratch)
- [2021/7/7](#202177)
  - [React 18 New features](#react-18-new-features)
- [2021/7/25-](#2021725-)
  - [React source code - Bottom-up](#react-source-code---bottom-up)
  - [React ecosystem - On-the-fly bottom up](#react-ecosystem---on-the-fly-bottom-up)
  - [New questions](#new-questions)
- [2021/8/23-2021-9/1](#2021823-2021-91)
  - [In which scenario did `ComponentDidUpdate()` trigger](#in-which-scenario-did-componentdidupdate-trigger)
- [ARCHIVED](#archived)
  - [2021/7/23-](#2021723-)
    - [React source code reading](#react-source-code-reading)
    - [React build error](#react-build-error)

#dailyreview

# Buffer to permanent note
## Timing resource
```csv
_reqid ,_req, _pid,_sub,  _time, _desc
1, 
```
## Style
- Adding `_` in non-lifecycle methods name 
  - Why?

# 2021/6/9-2021/6-15 | 2021/7/7-
## Accelerated learning of React using `ant-design-pro`
### Become comfortable with using mockjs for mock-backend
- MirageJS + React
  - [MirageJS - Easily make a mock API for React](https://www.youtube.com/watch?v=Xw3K6Kk5Npw)
  - Studying repo
    - [Repo](https://github.com/miragejs/tutorial/blob/master/src/index.js)
  - Reading MirageJS documentation
    - [doc](https://miragejs.com/tutorial/intro/)
### Describe the project architecture
#### Page layout & File structure & Configuration
- Webpack configuration
  - [Webpack configuration](https://webpack.js.org/blog/2020-12-08-roadmap-2021/)
- Source structure(src)
  - **Folders**
    - components
    - e2e
    - layouts
    - locales
    - models
    - pages
    - services
    - utils
  - global.less
  - global.tsx
  - manifest.json
  - service-worker.js
  - typeings.d.ts

#### Networking and API calls(Frontend)
#### Front-end life-cycle(as detailed as possible)
#### Back-end(No nitty gritties required)
- Mockjs configuration
#### Git collaboration
- workflow
  - .github
#### Deployment(Docker, workflow required)


### Dependencies
- React(!important!)
- Testing
  - Carlo
    - [Puppeteer](https://pptr.dev/)

### Some peripheral work
- UmiJS

### Endpoint definition
- Add a few interesting layout and make some interesting api calls
- Guided view would be good
  - [api entry](https://randomuser.me/api)
  - [Beginner React.js Coding Interview (ft. Clément Mihailescu)](https://www.youtube.com/watch?v=gnkrDse9QKc)

# 2021/6/12-2021/7/10-
## Difference between type and interface in TypeScript

## TypeScript Utility Types reading

# 2021/6/14
## Difference between useEffect, useState, useMemo
- Please extract information from it
  - [Junior Vs Senior Code - How To Write Better Code As A Web Developer - React](https://www.youtube.com/watch?v=0yzoAbrjV6k&t=797s)
  - [ntermediate React.js Coding Interview (ft. Clément Mihailescu)](https://www.youtube.com/watch?v=6s0OVdoo4Q4&t=15s)
  - [Beginner React.js Coding Interview (ft. Clément Mihailescu)](https://www.youtube.com/watch?v=gnkrDse9QKc&t=753s)
## Explain to me what React.FC is

# 2021/6/16
## How would you describe a bulletproof react component?

# 2021/6/20
## Starting React Admin from scratch
- [React Admin Dashboard Tutorial | React Admin Panel Design Course for Beginners](https://www.youtube.com/watch?v=aTPkos3LKi8)

# 2021/7/7
## React 18 New features


# 2021/7/25-
## React source code - Bottom-up
- https://www.bilibili.com/video/BV1Jv411C7UV?from=search&seid=5828538160773570383
  - Bookmark: 5-0
## React ecosystem - On-the-fly bottom up
https://github.com/ReactTraining

## New questions
```javascript
// 作用域
const style = (theme) => {
  class1: {
    /*{...}*/
  }
}
```

# 2021/8/23-2021-9/1

## In which scenario did `ComponentDidUpdate()` trigger













# ARCHIVED
## 2021/7/23-
### React source code reading
- https://github.com/numbbbbb/read-react-source-code/blob/master/02-how-render-works.md
### React build error
```
 OH NOES!  react.production.min.js (umd_prod)

-- PLUGIN_ERROR (scripts/rollup/plugins/closure-plugin) --
Error: java -jar E:\GitHub\repo-study\react\node_modules\google-closure-compiler-jcompiler.jar --compilation_level=SIMPLE --language_in=ECMASCRIPT_2015 --language_oCMASCRIPT5_STRICT --env=CUSTOM --warning_level=QUIET --apply_input_source_maps=fal-use_types_for_optimization=false --process_common_js_modules=false --rewrite_polys=false --inject_libraries=false --assume_function_wrapper=false --renaming=true -C:\Users\Owen\AppData\Local\Temp\tmp-11004FvRMSW2dDzAO

java.lang.UnsupportedClassVersionError: com/google/javascript/jscomp/CommandLineRu : Unsupported major.minor version 52.0
        at java.lang.ClassLoader.defineClass1(Native Method)
        at java.lang.ClassLoader.defineClass(Unknown Source)
        at java.security.SecureClassLoader.defineClass(Unknown Source)
        at java.net.URLClassLoader.defineClass(Unknown Source)
        at java.net.URLClassLoader.access$100(Unknown Source)
        at java.net.URLClassLoader$1.run(Unknown Source)
        at java.net.URLClassLoader$1.run(Unknown Source)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(Unknown Source)
        at java.lang.ClassLoader.loadClass(Unknown Source)
        at sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)
        at java.lang.ClassLoader.loadClass(Unknown Source)
        at sun.launcher.LauncherHelper.checkAndLoadMain(Unknown Source)
Exception in thread "main"


    at Process.ChildProcess._handlecripts\rollup\plugins\closure-plugin.js:16:16      at Process.ChildProcess._handle.onexit (internal/child_process.js:288:5)
error Command failed with exit code 1.
```

