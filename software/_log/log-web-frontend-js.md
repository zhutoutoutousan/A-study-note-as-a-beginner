# 2021/3/29
## Your understandings of Event Queue?
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

## What about the system resource use of using `RegEx`?
- [Some fancy paper on this topic I just spent 2 seconds copying and pasting](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050917X00094/1-s2.0-S187705091731270X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJIMEYCIQClWCo3s7GzIWxfhADWUmy8kGYTNnkYmpCgXpbVfVg8KgIhAPOyAqrxDzfed59EAlOqOqx6ju%2BKzmKipG3PSRhVGn%2BlKrQDCFYQAxoMMDU5MDAzNTQ2ODY1IgzdsfFhRNP%2BXT%2FYooEqkQN7rTD7LuuysDEHaQc1HtTP460nwH1EywgPBNQuV4L5EoZz7SgzEE04DHQu6ZGcM6TutCf%2BIrHo1EqH7oVyKcQKvRcOhrJud7tPmfAEwG%2FNnMc3q5OQokg5Gu7tjuBi63Cub6%2BWzohLens9qTgw%2FgiDTYuNLLWBST9%2F96ZHJN9Os8KhfLgjKjU%2Bj8XV7HkwKm%2F5OpQkTNO5QoEQQOG79u42fkvcU2VtCj1vBAmR1EJnsdelvQE1peq3j8o5IfJi0kDRMlqQwayQQs8y%2F8cPTnJpovSyoH5ix4YHjJOo6UNBKVnDR2RG015gQUJ8QhxgujKtbnXZZOiwRKE%2Fj2Gze2wmc%2FDpx%2F%2BqSVEWVyeB%2FK1KPL9AZrR3pVipIgPGmrUIToQxRbmnuweDKkhAsQcSFfhMsNFcFuJlVsVcbpgcZQ5HBEceSxeGSj3n%2FGU4OIPlF7TxixY4E%2F5TN5rMq%2FvA2QkAFHym58PMX%2BVW1nddTVEGLZuoaNC%2BvcHSYmKDUeCWdL67qcT2r9uPjahOCLIkbKx%2FzDCrtYWDBjrqAU3doIfi7SQyWJhkZ8fIMSHgNweGaAfplTxiuf38CUpjLLxjmxqsVFyEztyoLzSNLHz0TISzoZRdXpvtrPjoHkUdRl1ZPDm1HCatSoFSSTV7alWagIBOD%2FMP1s3CFEefBnkMpeiuaS2c6J2YxbQuSYlsdEbRtYp%2FEcCzFHPNaQwJHJjGIRlJVYfmCNBqibvb4xjPwEU6gzlTn1ZMBdaU6xKfeP43Ms3V8GFNoUuBDG9fSld493j%2Fj94aOpkFzDg533016ZR16FYUb5kI6JkVSR6gM6RH7JAaP%2B98RjtEg4ygVZqf5OIHtlPejg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210329T055340Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAQ3PHCVTYVJD75X7Q%2F20210329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f397c2c05e849951a4b80bbbc9c7d5b6bd7e5fe908194877317683a946d67a08&hash=f7b6780e7b544fa3e8208ab85f4b01036f618f79342bebbb60fa45309b84b71e&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S187705091731270X&tid=spdf-238e4114-5d7f-40ca-8ec4-ebebbab9383a&sid=9d74d21c9647264b531a14202832976bb39agxrqa&type=client)

# 2021/4/3
## Your understanding of `Array.prototype.sort`?
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.sort](https://ithelp.ithome.com.tw/articles/10226679)

Something about Timsort
- [Wiki](https://en.wikipedia.org/wiki/Timsort#:~:text=Timsort%20is%20a%20hybrid%20stable,in%20the%20Python%20programming%20language.)


Something weird about `Array.prototype.sort`
- In `leetcode` Array.sort() of \[-1,0,1,2,-1,-4\] returns \[-1,-1,-4,0,1,2\] which is actually not sorted, WTH did that happen
  - You have to pass a callback to it
    - But why do you need to pass a callback?
- https://dmitripavlutin.com/javascript-array-sort-numbers/ 