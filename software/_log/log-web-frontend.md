# Table of Contents
- [Table of Contents](#table-of-contents)
- [Fundamentals](#fundamentals)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
    - [What about the system resource use of using `RegEx`? - 2021/3/29](#what-about-the-system-resource-use-of-using-regex---2021329)
    - [Your understanding of `Array.prototype.sort`? - 2021/4/3](#your-understanding-of-arrayprototypesort---202143)
  - [Browser](#browser)
    - [Your understandings of Event Queue? - 2021/3/29](#your-understandings-of-event-queue---2021329)
- [Toolings and frameworks](#toolings-and-frameworks)
  - [Vue](#vue)
    - [Vite deployment](#vite-deployment)
      - [`[vite] Internal server error: URI malformed` when loading - 2021/3/15](#vite-internal-server-error-uri-malformed-when-loading---2021315)
    - [Architecture](#architecture)
      - [Understanding of Vue Lifecycle and its integration with complex website projects - 2021/4/23](#understanding-of-vue-lifecycle-and-its-integration-with-complex-website-projects---2021423)
      - [How do you manage SHIT LOADS OF API calls in Vue lifecycle? - 2021/4/25](#how-do-you-manage-shit-loads-of-api-calls-in-vue-lifecycle---2021425)
      - [Could you explain to me how to use `v-model`  in big vue projects?](#could-you-explain-to-me-how-to-use-v-model--in-big-vue-projects)
      - [Something that I had observed about `scoped`](#something-that-i-had-observed-about-scoped)
    - [Component Design --- Suggest putting them on codepen.io](#component-design-----suggest-putting-them-on-codepenio)
      - [Timeline](#timeline)
      - [Drawer](#drawer)
      - [Autocomplete](#autocomplete)
      - [Lazy load](#lazy-load)
      - [Pagination](#pagination)
    - [Troubleshoot](#troubleshoot)
      - [Property or method xxx is not defined on the instance but ... - 2021/4/22](#property-or-method-xxx-is-not-defined-on-the-instance-but----2021422)
      - [Why does `Could not read property *** of undefined` keep occuring? - 2021/4/24](#why-does-could-not-read-property--of-undefined-keep-occuring---2021424)
      - [Why shouldn't you use inline style in big Vue projects? - 2021/4/24](#why-shouldnt-you-use-inline-style-in-big-vue-projects---2021424)
    - [Performance](#performance)
      - [How to increase `XHR content download time`? - 2021/3/15](#how-to-increase-xhr-content-download-time---2021315)
# Fundamentals
## HTML
## CSS
## JavaScript

### What about the system resource use of using `RegEx`? - 2021/3/29
- [Some fancy paper on this topic I just spent 2 seconds copying and pasting](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050917X00094/1-s2.0-S187705091731270X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJIMEYCIQClWCo3s7GzIWxfhADWUmy8kGYTNnkYmpCgXpbVfVg8KgIhAPOyAqrxDzfed59EAlOqOqx6ju%2BKzmKipG3PSRhVGn%2BlKrQDCFYQAxoMMDU5MDAzNTQ2ODY1IgzdsfFhRNP%2BXT%2FYooEqkQN7rTD7LuuysDEHaQc1HtTP460nwH1EywgPBNQuV4L5EoZz7SgzEE04DHQu6ZGcM6TutCf%2BIrHo1EqH7oVyKcQKvRcOhrJud7tPmfAEwG%2FNnMc3q5OQokg5Gu7tjuBi63Cub6%2BWzohLens9qTgw%2FgiDTYuNLLWBST9%2F96ZHJN9Os8KhfLgjKjU%2Bj8XV7HkwKm%2F5OpQkTNO5QoEQQOG79u42fkvcU2VtCj1vBAmR1EJnsdelvQE1peq3j8o5IfJi0kDRMlqQwayQQs8y%2F8cPTnJpovSyoH5ix4YHjJOo6UNBKVnDR2RG015gQUJ8QhxgujKtbnXZZOiwRKE%2Fj2Gze2wmc%2FDpx%2F%2BqSVEWVyeB%2FK1KPL9AZrR3pVipIgPGmrUIToQxRbmnuweDKkhAsQcSFfhMsNFcFuJlVsVcbpgcZQ5HBEceSxeGSj3n%2FGU4OIPlF7TxixY4E%2F5TN5rMq%2FvA2QkAFHym58PMX%2BVW1nddTVEGLZuoaNC%2BvcHSYmKDUeCWdL67qcT2r9uPjahOCLIkbKx%2FzDCrtYWDBjrqAU3doIfi7SQyWJhkZ8fIMSHgNweGaAfplTxiuf38CUpjLLxjmxqsVFyEztyoLzSNLHz0TISzoZRdXpvtrPjoHkUdRl1ZPDm1HCatSoFSSTV7alWagIBOD%2FMP1s3CFEefBnkMpeiuaS2c6J2YxbQuSYlsdEbRtYp%2FEcCzFHPNaQwJHJjGIRlJVYfmCNBqibvb4xjPwEU6gzlTn1ZMBdaU6xKfeP43Ms3V8GFNoUuBDG9fSld493j%2Fj94aOpkFzDg533016ZR16FYUb5kI6JkVSR6gM6RH7JAaP%2B98RjtEg4ygVZqf5OIHtlPejg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210329T055340Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAQ3PHCVTYVJD75X7Q%2F20210329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f397c2c05e849951a4b80bbbc9c7d5b6bd7e5fe908194877317683a946d67a08&hash=f7b6780e7b544fa3e8208ab85f4b01036f618f79342bebbb60fa45309b84b71e&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S187705091731270X&tid=spdf-238e4114-5d7f-40ca-8ec4-ebebbab9383a&sid=9d74d21c9647264b531a14202832976bb39agxrqa&type=client)


### Your understanding of `Array.prototype.sort`? - 2021/4/3
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.sort](https://ithelp.ithome.com.tw/articles/10226679)

Something about Timsort
- [Wiki](https://en.wikipedia.org/wiki/Timsort#:~:text=Timsort%20is%20a%20hybrid%20stable,in%20the%20Python%20programming%20language.)


Something weird about `Array.prototype.sort`
- In `leetcode` Array.sort() of \[-1,0,1,2,-1,-4\] returns \[-1,-1,-4,0,1,2\] which is actually not sorted, WTH did that happen
  - You have to pass a callback to it
    - But why do you need to pass a callback?
- https://dmitripavlutin.com/javascript-array-sort-numbers/ 

## Browser
### Your understandings of Event Queue? - 2021/3/29
- I was asked about this during `BD` interview, the key is not only to give the right answer, but also to explain logically why it is so.
- What it includes
  - Microtask
  - Macrotask
  - How browsers handles them
  - How Node.js environment handles them
- [js执行机制（promise,setTimeout执行顺序）](https://www.jianshu.com/p/b8234b3314c8)

```javascript
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})


// 1,7,6,8,2,4,3,5,9,11,10,12
```

# Toolings and frameworks
## Vue
### Vite deployment
#### `[vite] Internal server error: URI malformed` when loading - 2021/3/15
### Architecture
#### Understanding of Vue Lifecycle and its integration with complex website projects - 2021/4/23
#### How do you manage SHIT LOADS OF API calls in Vue lifecycle? - 2021/4/25
- [vue 定时 (自定义时间) 调用接口【详解】](https://blog.csdn.net/weixin_43970743/article/details/103731289)
#### Could you explain to me how to use `v-model`  in big vue projects?
#### Something that I had observed about `scoped`
Sometimes, during hot reload debugging process, when I changed the style to `scoped`, the page loses its corresponding style, but soon after I reload, everything seems normal.
For a newbie like me, it could be misleading that I might start to think `scoped` doesn't work as I think it should be

- [从vue-loader源码分析CSS Scoped的实现](https://juejin.cn/post/6844903949900742670)
### Component Design --- Suggest putting them on codepen.io
#### Timeline
Recommend that you put it on codepen.io, the markdown note only serves to show whot it is structured
#### Drawer
#### Autocomplete
#### Lazy load
#### Pagination
### Troubleshoot
#### Property or method xxx is not defined on the instance but ... - 2021/4/22
Fxxk, just a typo
#### Why does `Could not read property *** of undefined` keep occuring? - 2021/4/24
I have met with this problem more than ten times just ten days after I joined my new company, can you do sth about that?

#### Why shouldn't you use inline style in big Vue projects? - 2021/4/24

### Performance

#### How to increase `XHR content download time`? - 2021/3/15

**Background**: In Unity 3D WebGL applications, no matter it is about loading `Assetbundle` to the already-rendered scene, or loading the initial scene when user taps on the desk waiting for the loading bar to fill or playing, browsing pre-rendered content, it takes time for Unity 3D `xhr` request to download content

**Goal**:

**Reference materials**:

- [Chapter 15. XMLHttpRequest](https://www.oreilly.com/library/view/high-performance-browser/9781449344757/ch15.html)
- [Resource Timing](https://www.w3.org/TR/resource-timing/)