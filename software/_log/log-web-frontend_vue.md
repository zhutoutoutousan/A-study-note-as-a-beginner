# Table of Contents
- [Table of Contents](#table-of-contents)
- [Buffer to permanent note](#buffer-to-permanent-note)
- [Draft Vue Note](#draft-vue-note)
- [Vue Sourcecode Reading](#vue-sourcecode-reading)
  - [Basics](#basics)
- [Resource](#resource)
- [前端踩坑树](#前端踩坑树)
- [Dev log](#dev-log)
  - [2021/3/17](#2021317)
    - [Uncaught (in promise) RangeError: Maximum call stack size exceeded](#uncaught-in-promise-rangeerror-maximum-call-stack-size-exceeded)
- [2021/5/30](#2021530)
  - [Vue source code study - AST part](#vue-source-code-study---ast-part)
- [2021/6/9](#202169)
  - [Understand Vue reactiveness](#understand-vue-reactiveness)
- [2021/7/21](#2021721)
  - [Reading therapy](#reading-therapy)
- [2021/10/31-](#20211031-)
  - [Three + Vue3 + --> trois.js](#three--vue3-----troisjs)

# Buffer to permanent note
#dailyreview

- Initiate structured Vue proficiency development plan
  - 踩坑树可以用来用结构地记录经验


# Draft Vue Note
- 目录
- Vue基础Entries
  - Element-ui表单组件基础
- Vue组件库Entries
- Vue业务组件设计Entries
- Vue开发项目流程控制
- Vue踩坑树
- Vue源码阅读和分析


# Vue Sourcecode Reading
## Basics
- [如何阅读源码？](https://segmentfault.com/a/1190000022477187)
- [阅读源码的三种境界](https://juejin.cn/post/6844903603690291207)
- [如何阅读一份源代码？（2020年版）](https://www.codedump.info/post/20200605-how-to-read-code-v2020/)


# Resource
- [GitHub Repositories](https://github.com/orgs/vuejs/repositories)

# 前端踩坑树
- 业务
  - 业务逻辑不清导致组件化设计失败
- Web3D
  - three.js
- 模板引擎
  - SASS
- Vue
  - Vue常用第三方组件
    - treeselect
      - 熟练度
        - [vue-treeselect](https://vue-treeselect.js.org/)
  - 组件化
    - 复用相同的UI框架的组件，渲染出来的样式/显示不同
      - [vue项目中遇到复用相同的UI框架的组件，但想要渲染出来的样式不同的解决方案](https://blog.csdn.net/meoncih_/article/details/107649348)
- UI框架
  - _General
    - 多个UI框架之间发生冲突
  - Element-UI
    - el-dialog
      - 操作
        - 清空
          - 最佳实践
            - [el-dialog关闭后清除校验以及重置数据](https://blog.csdn.net/yangqii/article/details/116761394)
          - 清空不生效问题
            - [el-form表单重置resetForm()不生效问题](https://python.iitter.com/other/90830.html)
            - [ElementUI嵌套Form的Dialog如何重置Form](https://segmentfault.com/a/1190000019733787)
            - [element-ui 表单清空 resetFields 方法清空表单中的坑](https://blog.csdn.net/weixin_41991501/article/details/81975821?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&utm_relevant_index=5)
            - 清空后无法输入问题
              - [前端踩坑（八）（element-ui）使用点击重置后无法输入、输入没有显示](https://blog.csdn.net/TUTsmile/article/details/103598504)
    - el-date-picker
      - 调接口显示
        - 回显不显示问题
          - `$forceInput`不work
            - Vue DevTool中的v-model值显示Invalid Date
              - [vue el-date-picker 直接赋值不生效、数据绑定无效](https://www.jianshu.com/p/96c822d14d30)
              - [vue使用element中的input组件实现传多个值和input回显强制刷新](https://blog.csdn.net/weixin_39277183/article/details/106875427)
      - 有`value-format`前提想仍想用epoch传入值
    - treeselect
      - 调接口显示
        - 回显不显示问题
          - `TypeError: instance.internalValue.slice(...).map is not a function`
          - `TypeError: instance.internalValue.some is not a function`
            - [Error in getter for watcher "internalValue": "TypeError: this.forest.selectedNodeIds.filter is not a function](https://issueexplorer.com/issue/riophae/vue-treeselect/441)
          - `[Vue-Treeselect Warning] Are you meant to dynamically load options? You need to use "loadOptions" prop.`
          - `Invalid prop: type check failed for prop "loadOptions". Expected Function, got Array`
    - el-tab
      - activeNum默认为2问题
    - el-form
      - 校验rule出错问题
      - 表单resetfield无效问题
      - @el-select
        - 自动完成
          - 全部调取
          - 接口分页懒加载
            - 不熟悉, 心理负担大
        - 调接口后不自动选中
          - 接口返回数据为对象
            - [element-ui的el-select怎么根据后台返回的value显示对应的label值呢？](https://segmentfault.com/q/1010000012277355)
        - 返回为数字, 实际需要字符串
          - [element-ui的el-select怎么根据后台返回的value显示对应的label值呢？](https://segmentfault.com/q/1010000012277355)
      - @el-input
        - v-model改变后数值不更新
          - [el-input 修改v-model的值，DOM不更新](https://segmentfault.com/q/1010000020135996)
    - el-calendar
    - el-table
      - table宽度不响应 --> :min-width
      - Element el-table-column宽度设置百分比无效
        - http://www.noobyard.com/article/p-obgbrdla-kr.html
  - Material-UI
- AJAX框架
  - axios
      - axios的request封装有时候react的this.props传不进去
# Dev log
## 2021/3/17
### Uncaught (in promise) RangeError: Maximum call stack size exceeded
- https://dwatow.github.io/2018/09-21-vuejs/vue-router-infinitely-route/


# 2021/5/30
## Vue source code study - AST part
- Resource
  - Compiler working principle --> See `software` section
  - Vue3.0 source code
- Suggestion
  - Not helpful at this stage

# 2021/6/9
## Understand Vue reactiveness
- [Vue(2.x 和 3.0) 双向绑定原理及实现（Object.defineProperty 和 Proxy）以及常见错误区分](https://juejin.cn/post/6844904149239201800#heading-5)

# 2021/7/21
## Reading therapy
- https://github.com/cuixiaorui/tetris-vue3

# 2021/10/31-
## Three + Vue3 + --> trois.js
- Vue3 doc
  - Doc sweep mark
- Vue3 source code
  - Source code mark
