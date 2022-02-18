# Table of Contents
- [Table of Contents](#table-of-contents)
- [Erudition](#erudition)
- [Buffer to permanent note](#buffer-to-permanent-note)
  - [Style](#style)
  - [In-depth reading](#in-depth-reading)
  - [Mental model](#mental-model)
    - [Event](#event)
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
- [2021/9/27-](#2021927-)
  - [Component design imminent](#component-design-imminent)
  - [Difference between `componentWillReceiveProps` and `getDerivedStateFromProps`](#difference-between-componentwillreceiveprops-and-getderivedstatefromprops)
  - [React+Material UI+Grid的溢出问题](#reactmaterial-uigrid的溢出问题)
- [2021/10/6-](#2021106-)
  - [Internalization Emergency](#internalization-emergency)
  - [`this.props.state.location` undefined](#thispropsstatelocation-undefined)
  - [结合函数柯里化理解`material-ui`和`react-router-dom`之中组件封装的例子](#结合函数柯里化理解material-ui和react-router-dom之中组件封装的例子)
  - [一个项目里边React哪些情况用函数式组件? 哪些情况用类组件? 需不需要分离功能/表示组件?](#一个项目里边react哪些情况用函数式组件-哪些情况用类组件-需不需要分离功能表示组件)
  - [React under the hood](#react-under-the-hood)
  - [react-router-dom中, 我想通过路由传值, 但是不想通过url的形式, 而且用户刷新之后数据不丢失](#react-router-dom中-我想通过路由传值-但是不想通过url的形式-而且用户刷新之后数据不丢失)
- [2021/10/10](#20211010)
- [2021/10/12-2021/10/20](#20211012-20211020)
  - [Life was here to take you away](#life-was-here-to-take-you-away)
- [2021/10/20](#20211020)
  - [Reboot](#reboot)
  - [The console throws errors when defining a button in `material-ui v1` tab](#the-console-throws-errors-when-defining-a-button-in-material-ui-v1-tab)
  - [`Attempted import error: ...is nort exported`](#attempted-import-error-is-nort-exported)
- [2021/11/24](#20211124)
  - [React如何给龟孙子传事件?](#react如何给龟孙子传事件)
  - [React组件传递](#react组件传递)
- [ARCHIVED](#archived)
  - [2021/7/23-](#2021723-)
    - [React source code reading](#react-source-code-reading)
    - [React build error](#react-build-error)
- [2021/11/29](#20211129)
  - [Wrestle with table components](#wrestle-with-table-components)
  - [Event Pooling](#event-pooling)
- [Appendix](#appendix)
  - [Quick Code Reference](#quick-code-reference)

#dailyreview

- Confirmed permanent structure

# Erudition
- Fullstack React: The Complete Guide to ReactJS and Friends
  - [link](https://demo.smarttrainerlms.com/uploads/0003/trainings/course/45/modules/fullstack-react-book-r30_1510302324482009603.pdf)
  - Process 1
    - Bookmark: 38
    - Style
      - Full-scale brain stimulation of React with passion
    - Goal
      - Reboot React stimulus and progress
  - Process 2
    - 
# Buffer to permanent note

## Style
- Adding `_` in non-lifecycle methods name 
  - Why?

## In-depth reading
- Material-UI next --> Drawer

## Mental model
### Event
- Event trigger
  - Parent to child
    - Class
    - Func
  - Child to Parent
  - To sibling
  - To a specific almost irrevalent component

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
  - 穴脉打通: 
    - Webpack
      - create-react-app
        - react-rewire
          - Loader
    - 项目结构
      - CSS in JS
    - Mock
    - React
      - 生命周期
      - Hook
      - Class/函数组件
      - JSX
      - 组件通信?
    - MUI
    - Official Kit
- Now
  - Now it's the chance to maximize the first productivity and confidence surge, allocate more time on React to make it stick
  - A frontend backlog with clear and in-depth insight of project progression imminent --> Google Sheet
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
    - 菜是原罪, 但每天不要浪费时间流下泪的菜水, 想办法变得less菜

```
越用会发现越多的坑。最开始可能是 createClass 和 ES6 Class 转换、组件生命周期的使用、事件处理函数的传递、设计模块间的引用关系、使用 npm 上的第三方组件等

等真正做项目了，就更多了， Webpack 的配置、与 jQuery 系组件的整合、引入 Sass 、 Redux 的各种坑（ react-redux 、对于 Immutable 的理解、设计 MiddleWare 等）， API 的设计、 react-router 的层次结构设计，异步加载，权限管理等

除非已经有现成的项目可以参考，否则我认为楼上的各位觉得几天到一周就能 “学会”，太过于乐观了（或者说站在已经“学会”的上帝视角来看是不准确的）

React 本身不难，难就难在全家桶的整合，以及如何构建项目。
```

# 2021/9/27-

## Component design imminent
- 精通react/vue组件设计
#reactinternalization

## Difference between `componentWillReceiveProps` and `getDerivedStateFromProps`

## React+Material UI+Grid的溢出问题
#devproblemsfacing
 
- 嵌套网格布局导致 UI 溢出/中断
- 使用网格间距的材料UI React会使容器溢出
- https://www.debugcn.com/article/50163145.html
- https://bleepcoder.com/cn/material-components-web/246207043/nested-grid-layouts-cause-ui-to-overflow-break

# 2021/10/6-
## Internalization Emergency
- Front-end Back-end Debugging
  - cURL
  - Postman
- **router official**
- **Redux official**
- https://www.jianshu.com/p/77467c15a0ce
- https://www.jianshu.com/p/f7bd56878401
## `this.props.state.location` undefined
https://medium.com/@harryjamesuk/react-state-with-browser-history-223117f6ac61

## 结合函数柯里化理解`material-ui`和`react-router-dom`之中组件封装的例子
```javascript
// ...
export default withStyles(styles)(withRouter(Component))
```
## 一个项目里边React哪些情况用函数式组件? 哪些情况用类组件? 需不需要分离功能/表示组件? 
- https://www.codenong.com/46648493/

## React under the hood
- [Understanding React's UI Rendering Process](https://www.youtube.com/watch?v=i793Qm6kv3U)

## react-router-dom中, 我想通过路由传值, 但是不想通过url的形式, 而且用户刷新之后数据不丢失
- Link+to:state可以不通过url形式, 但是刷新后数据丢失
  - Redux+React router?

# 2021/10/10
- Ant Design Three --> 

# 2021/10/12-2021/10/20
## Life was here to take you away
- Lots of changes went on, got cold turkey on React for a while
- This kind of gaps happen from time to time, this time it is recorded

# 2021/10/20
## Reboot
## The console throws errors when defining a button in `material-ui v1` tab
#frontenddevtimeacumen: Button in a Tab
Start Time: 2021-10-20-16-19
End Time: 2021-10-20-16-26
Duration: 7 min
Solution: Encapsulate the component in a function of the relevant 
```javascript
const ButtonInTabs = (a, b, c) => (
  <Button>...
  </Button>
)
```

## `Attempted import error: ...is nort exported`
If you use `withStyles` in mui, don't import with parenthesis


# 2021/11/24
## React如何给龟孙子传事件?
- Context --> 版本限制? --> 16.3+
- Debug Note: 类组件和函数组件混用的时候爷爷和龟孙子之间通讯会出现问题  --> 函数定义了let箭头函数就有问题勒


## React组件传递
- 子 --> 父
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 把这个人找出来干了
      - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 把这个人找出来干了
      - 干掉自己: From Zero to Hero
- 父 --> 子
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 干掉自己: From Zero to Hero
- 父 --> 孙
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 干掉自己: From Zero to Hero
- 孙 --> 父
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 干掉自己: From Zero to Hero
- 兄弟事件
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 干掉自己: From Zero to Hero
- 任意远事件
  - 函数组件 --> 函数组件
  - 类组件 --> 类组件
  - 函数组件 --> 类组件
    - 干掉自己: From Zero to Hero
  - 类组件 --> 函数组件
    - 干掉自己: From Zero to Hero


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

# 2021/11/29
## Wrestle with table components
- Internalization prerequisite
  - Low-level basics
    - HTML Table
## Event Pooling
- Why did 

# Appendix
## Quick Code Reference