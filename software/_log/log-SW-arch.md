
# Buffer to permanent note
## Front-end component design
### Button: 按钮
### Layout: 布局
### Form: 表单
### Drawer: 抽屉
- https://cloud.tencent.com/developer/article/1710272
- https://juejin.cn/post/6844904061615996942
- 个人组件源码链接
- Common requirements: 常见需求
  - Visibility control:能控制抽屉是否可见
  - 能手动配置抽屉的关闭按钮
  - 能控制抽屉的打开方向
  - 关闭抽屉时是否销毁里面的子元素(这个问题是5>  工作中频繁遇到的问题)
  - 指定 Drawer 挂载的 HTML 节点, 可以将抽屉挂载在任何元素上
  - 点击蒙层可以控制是否允许关闭抽屉
  - 能控制遮罩层的展示
  - 能自定义抽屉弹出层样式
  - 可以设置抽屉弹出层宽度
  - 能控制弹出层层级
  - 能控制抽屉弹出方向(上下左右)
  - 点击关闭按钮时能提供回调供开发者进行相关操作
- Samples
- log
  - 2021/8/23
    - 根据上述的common requirements, 采用mui 1.5.1, React 16, 你如何设计代码结构和周围页面组件的结构?
# 2021-5-26
## How would you approach the designing process of a single frontend component for any given requirements?
I was asked yet another question that I certainly not able to answer in an elegant manner. 
- [Vue优雅设计一个组件](https://juejin.cn/post/6844904050215878663)
- [react/vue 组件设计方法/原则](https://cloud.tencent.com/developer/article/1710272)

# 2021/6/11
## A keen sense of life-cycle
- [Comparison of life cycle between vue and react](https://programmersought.com/article/76314025698/)
  - How is it applied during dev or achitecture design?
# 2021/6/18-
## AWS

### Kickstart of AWS
- [AWS Basics for Beginners - Full Course](https://www.youtube.com/watch?v=ulprqHHWlng)
  - Progress: 10:30/5:27:20

### Questions
- Pricing and budget calculation for a system


# 2021/7/29
## Request for updating your knowledge of front-end architecture - A bit more organized
- [前端项目架构小结](https://juejin.cn/post/6844903475613007886)

# 2021/7/30
## If you want to block foreign users from accessing certain language materials without giving users the credential, what would you do?
- Backend
- Front-end

# 2021/8/9
## SSO design 
- Basics
  - [单点登录](https://zh.wikipedia.org/wiki/%E5%96%AE%E4%B8%80%E7%99%BB%E5%85%A5)
- Functions
- Concerns
  - Covert Redirect

## Scheduled event for web app
-  Easier for backend

## Software Localization and Globalization
- Language
  - Basics
    - https://chenhuijing.com/blog/chinese-web-typography/
    - https://www.w3.org/International/
    - https://juejin.cn/post/6844904032121815054#heading-9
  - Frameworks
    - Alibaba - Kiwi
      - [link](https://github.com/alibaba/kiwi)
- Time
- Currency

## UML diagram course
- [UML Diagrams Full Course (Unified Modeling Language)](https://www.youtube.com/watch?v=WnMQ8HlmeXc)

## About Front-end development efficiency
- Low Code platform
  - [Baidu - amis](https://baidu.github.io/amis/zh-CN/docs/concepts/schema?page=1)
  - [低代码](https://aisuda.github.io/amis-editor-demo/)
  - http://www.ayqy.net/blog/low-code-frontend/
  - https://www.infoq.cn/article/azghhkh5xxtmrdlc6ffc
  - https://github.com/taowen/awesome-lowcode
- Mindset & Efficiency
  - [谈谈「前端开发效率」](https://developer.huawei.com/consumer/cn/forum/topic/0201480384466380067)
    - Trial & Error
      - Can you answer what time in a day would you perform better?
  - [程序员如何将一天变成28小时](https://segmentfault.com/a/1190000017317109?sort=votes)
  - https://www.cnblogs.com/Zachary-Fan/p/Eliminate.html
- Questions
  - You: About to burnout
    - You: You need to be more efficient
    - You: ?

## 接到需求后, 你是怎么安排技术实现顺序的, 哪些需求是和开发设计有关的? 哪些是不需要过度思考的?

## 前端沟通经验
- ju人的肩膀
  - [UI设计师都是怎么样跟前端沟通的？](https://www.zhihu.com/question/337861437)
- 前端如何与UI沟通?
  - 基本技巧
    - 非暴力沟通
      - [Nonviolent Communication](https://classroommanagementcem.weebly.com/uploads/4/3/2/5/4325801/nvc_language_of_life_chapters_1-5.pdf)
      - https://www.cnvc.org/sites/default/files/NVCInstructionGuide_Jiva_.pdf
  - 前端方面
    - **动效, 开发时间成本库**
      - 建议采用幕布等
    - 设计稿标注、测量工具?
  - UI方面
    - 标注稿
      - 设计标注稿
      - 设计规范
        - 色值规范
        - 字体规范
      - 样式总结
      - 尺寸标定
- 前端如何与PM沟通?
- 前端如何与前端沟通?
- 前端如何与后端沟通?
- 前端如何与运维沟通?
- 前端如何与测试沟通?