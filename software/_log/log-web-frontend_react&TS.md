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
- [2021/9/13-](#2021913-)
  - [A quick grasp of `react-router-dom`](#a-quick-grasp-of-react-router-dom)
- [2021/7/10-2021/9/24](#2021710-2021924)
  - [A journey to React and Material-UI: Fighting Imposter Syndrome](#a-journey-to-react-and-material-ui-fighting-imposter-syndrome)
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


# 2021/9/13-
## A quick grasp of `react-router-dom`



# 2021/7/10-2021/9/24
## A journey to React and Material-UI: Fighting Imposter Syndrome
- Before 2021-7/10
  - Played around React for a few months with demo projects
  - Previous Vue, element-ui project experience
- 2021-7-10~2021-8-1
  - 1 hr a week
  - Learning Work-related basic knowledge and training
- 2021-8-1~2021-9-1
  - Getting a project, made contact with project structure
  - Getting with the syntax, began internalization
- 2021-9-1~2021-9-24
  - Struggling phase, minimum output
  - Getting with agile, frontend backlog
  - Requirement analysis
  - Work-related stuffs
- 2021-9-24~
  - Read official doc with less mental effort
  - First productivity surge of internalization
  - Accelerated development
  - Internalized image of project structure and component design
  - Webpack rewired configuration
  - Increased confidence on more desirable changes
  - Increased confidence on trying multiple tools
  - Mock
- Now
  - Now it's the chance to maximize the first productivity and confidence surge, allocate more time on React to make it stick

- How to accelerate this process when learning a new framework next time?
  - Know your place
    - Average time for developers with Vue experience
      - Anecdotal
        - 3 days
        - A few months
        - 3-6 months
  - Strategy
    - Maybe just read through the document more
    - It is natural process
    - 菜是原罪, 每天不要浪费时间流下泪的菜水, 想办法变得less菜

```
越用会发现越多的坑。最开始可能是 createClass 和 ES6 Class 转换、组件生命周期的使用、事件处理函数的传递、设计模块间的引用关系、使用 npm 上的第三方组件等

等真正做项目了，就更多了， Webpack 的配置、与 jQuery 系组件的整合、引入 Sass 、 Redux 的各种坑（ react-redux 、对于 Immutable 的理解、设计 MiddleWare 等）， API 的设计、 react-router 的层次结构设计，异步加载，权限管理等

除非已经有现成的项目可以参考，否则我认为楼上的各位觉得几天到一周就能 “学会”，太过于乐观了（或者说站在已经“学会”的上帝视角来看是不准确的）

React 本身不难，难就难在全家桶的整合，以及如何构建项目。
```

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

