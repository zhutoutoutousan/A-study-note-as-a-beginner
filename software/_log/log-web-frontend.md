# Table of Contents
- [Table of Contents](#table-of-contents)
- [Renovation plan --> 4-5 yrs](#renovation-plan----4-5-yrs)
- [Knowledge flow](#knowledge-flow)
  - [Tier-source](#tier-source)
  - [Tier-1](#tier-1)
  - [Tier-2](#tier-2)
  - [Tier-3](#tier-3)
- [Erudition](#erudition)
- [前后端沟通踩坑树](#前后端沟通踩坑树)
- [2021/8/4-](#202184-)
- [2021/8/2](#202182)
- [2021/8/4-](#202184--1)
  - [Soul](#soul)
  - [\[重点扫盲\]工作流程](#重点扫盲工作流程)
    - [BA](#ba)
    - [UI/UX](#uiux)
    - [PM](#pm)
    - [DEV](#dev)
      - [需求评审](#需求评审)
      - [技术方案](#技术方案)
      - [知识盲区](#知识盲区)
      - [排期估时](#排期估时)
      - [开发阶段](#开发阶段)
      - [DF提测阶段](#df提测阶段)
      - [需求变更](#需求变更)
      - [工作push](#工作push)
    - [TST](#tst)
    - [DevOps](#devops)
  - [需求](#需求)
    - [页面](#页面)
    - [权限](#权限)
    - [重构](#重构)
    - [视频](#视频)
  - [如何融入开发团队](#如何融入开发团队)
  - [localStorage有没有定时销毁机制? 哪个异步持久性机制可以实现定时销毁? ---> SSO](#localstorage有没有定时销毁机制-哪个异步持久性机制可以实现定时销毁-----sso)
  - [自动完成机制在数据量很大时会出现什么问题? 怎么解决？是前端还是后端还是都有?](#自动完成机制在数据量很大时会出现什么问题-怎么解决是前端还是后端还是都有)
  - [建立一个前端需求池, 并且每个需求对应一个各类实现方法, 自测用例, 沟通常见技巧, 和未来低代码的对接模式](#建立一个前端需求池-并且每个需求对应一个各类实现方法-自测用例-沟通常见技巧-和未来低代码的对接模式)
- [2021/10/10](#20211010)
  - [Jest documentation reading](#jest-documentation-reading)
- [2021/10/29](#20211029)
  - [前端开发如何调试大屏/巨屏/拼接屏?](#前端开发如何调试大屏巨屏拼接屏)
- [2021/12/6](#2021126)
  - [你run了下`npm i`, 结果`npm audit`显示一堆vulnerability, 其中有两个critical, 你该怎么做?](#你run了下npm-i-结果npm-audit显示一堆vulnerability-其中有两个critical-你该怎么做)

CONSIDER MERGING EVERYTHING ELSE INTO THIS PLACE

# Renovation plan --> 4-5 yrs
- As you clarify all of those technical ecosystems, start merging them into one

# Knowledge flow
## Tier-source
- [掘金](https://juejin.cn/)
- Wx Accounts following
## Tier-1
- Stew
  - [前端面试知识点（一）](https://juejin.cn/post/6987549240436195364)
- Axios
## Tier-2
- [V8 编译浅谈](https://juejin.cn/post/7041021350114230285)
## Tier-3
# Erudition
- Flow
  - Getting MEAN with Mongo, Express, Angular, and Node 0/?
    - [Link1](https://www.programmer-books.com/wp-content/uploads/2018/08/Getting%20MEAN%20with%20Mongo,%20Express,%20Angular,%20and%20Node.pdf)
  - 微信公众平台应用开发实战
    - [link1](https://drive.google.com/file/d/1zqFLY7wHVA0-l4wxM6dN1oEFfQwPNb1V/view?usp=sharing)
  - HTML 5 Mobile Development Cookbook
    - [link1](https://drive.google.com/file/d/1JUUBZvCNI0_rVQb1j8Xkdzoa-LfeemXU/view?usp=sharing)
    - Progress: 25
  - HTML5移动Web+Vue.js应用开发实战
    - Process 1
      - Goal: Have a general grasp of knowledge in Chinese
      - Style: Hit and run, till feeling very comfortable
- Framework
  - React
    - Learning React
      - [link](https://drive.google.com/file/d/1sxI3pyh_eHO_Hn1O8daIy06W5hLIequQ/view?usp=sharing)
    - React Deep Dive 
- You don't know JS
  - [link1](https://drive.google.com/file/d/1j4duc5npkyXlgEZigos3iuxFxKtFJf8H/view?usp=sharing)
  - Process 1
    - Approach: Osmosis
    - Progress:  22/87

- Functional programming in JavaScript 24/274

- High Performance Browser Networking
  - [link1](https://github.com/varunkashyapks/Books/blob/master/High-Performance-Browser-Networking-Ilya-Grigorik.pdf)
  - I can't address more of the importance of reading this book as a front-end engineer, this is definitely a go-to book if you wanna be a good  front-end engineer
- Web Application Architecture Principles, protocols and practices
  - [link](http://bedford-computing.co.uk/learning/wp-content/uploads/2016/07/Web-Application-Architecture-Principles-Protocols-and-Practices.pdf)
  - Another good book to have better view of how everything works together



# 前后端沟通踩坑树
- 传日期
  - Timestamp
- 沟通前准备习惯
  - 看后台接口文档


# 2021/8/4-

# 2021/8/2
- 小视频在view中播放, 不在view中不播放

# 2021/8/4-
## Soul
- [内外兼修-程序员成长之路](https://www.kancloud.cn/luofei614/programmer_talk_life/61090)
## \[重点扫盲\]工作流程
- [工作流程盘点 | 前端人的认知升级](http://article.docway.net/details?id=603371984da5fa7d6084dfd1)
### BA
### UI/UX
### PM
### DEV
#### 需求评审
- 充分理解需求单，并结合实际业务去判断是否有遗漏的点，有的话，及时让产品补上需求
- 对需求单上的每一个点都要能cover住，能以产品的角度或者开发的角度提出建设性意见更佳。面对需求，如果遇到有疑惑的点一定要及时抛出来，当面对齐；如果遇到知识盲区的点，一定要有调研，在调研结果出来之后，再一次进入需求终审。
- 需求评审阶段，是第一次能够以合理的诉求改需求的地方。这对后续的写技术方案阶段很有帮助。
#### 技术方案
- 正常的流程中，是一定要有技术方案的。对于那些紧急需求除外，比如老板给你提要两天完成，你判断要三天，那能怎么办，加班或者寻求更多的资源支持。
  - 2021/12/6: R U FXXKING KIDDING ME?
- 意义: 首先技术方案是一个需求中最有技术含量的东西，敲代码只是整个需求交付的流程中，占很小的一部分。其次，技术方案写完，还可以找产品再继续对齐一下，看方案要完成的东西符不符合产品的预期，或者通过调研后得出合理的技术方案，还能再PK一下需求，这时候还能够再次更改需求，这是对能否按期交付需求的保障。最后技术方案还能做一个沉淀，做完需求回过头来看哪里做的好不好，为下次需求做积累，而且有技术文档，能更方便的做工作交接。
#### 知识盲区
- 首先可以去问同事，如果同事刚好知道，那就可以省去调研的时间，如果不知道，那就再去调研学习相关知识，如果实在是解决不了，可以及时抛出来，向外面的部门寻求帮助。
- 其实这个阶段是知识积累的时候，遇到不懂的，事后一定要及时去填补，这是属于重要的事情。
#### 排期估时
- [如何预估迭代中测试的排期](https://www.jianshu.com/p/34bb94cde24d)
- [开发排期](https://www.kancloud.cn/luofei614/programmer_talk_life/107503)
#### 开发阶段
#### DF提测阶段
#### 需求变更
#### 工作push
### TST
### DevOps
## 需求
### 页面
### 权限
### 重构
### 视频
- 不挡脸弹幕
  - [B站的不挡脸弹幕是怎么实现的？](https://www.zhihu.com/question/282164361)
    - [body-pix](https://github.com/tensorflow/tfjs-models/tree/master/body-pix)
    - [Data URI](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

## 如何融入开发团队

## localStorage有没有定时销毁机制? 哪个异步持久性机制可以实现定时销毁? ---> SSO
#techquestionsthatmattersnow
## 自动完成机制在数据量很大时会出现什么问题? 怎么解决？是前端还是后端还是都有?
#techquestionsthatmattersnow
- [antd的自动补全select多选标签的在数据量很大的时候会出现渲染卡顿该如何解决?](https://segmentfault.com/q/1010000018045524)
- [使用 Redis 实现自动补全功能](https://segmentfault.com/a/1190000002712454)
- [记录一次MySQL两千万数据的大表优化解决过程，提供三种解决方案](https://database.51cto.com/art/201902/592522.htm)

## 建立一个前端需求池, 并且每个需求对应一个各类实现方法, 自测用例, 沟通常见技巧, 和未来低代码的对接模式
#techquestionsthatmattersnow

--> 觉得UI, frontend, backend, BA是需求池的scope, 目前就是前端+PM角度
--> Github --> frontend-requirement-pools


# 2021/10/10
## Jest documentation reading
Triggered by ant-design-three e2e test
https://jestjs.io/zh-Hans/docs/asynchronous

# 2021/10/29
## 前端开发如何调试大屏/巨屏/拼接屏?

# 2021/12/6
## 你run了下`npm i`, 结果`npm audit`显示一堆vulnerability, 其中有两个critical, 你该怎么做?

