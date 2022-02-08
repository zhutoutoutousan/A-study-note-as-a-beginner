# Table of Contents
- [Table of Contents](#table-of-contents)
- [B](#b)
- [E](#e)
- [F](#f)
- [L](#l)
- [S](#s)
- [T](#t)
- [X](#x)

# B
- 悲观锁
# E
- Entity

# F
- Finite-state machine
  - [link](https://en.wikipedia.org/wiki/Finite-state_machine)
# L
- 逻辑删除
  - [逻辑删除还是物理删除](https://zq99299.github.io/mysql-tutorial/ali-new-retail/05/04.html)
    - B树
      - [『数据结构与算法』B树图文详解（含完整代码）](https://segmentfault.com/a/1190000038749020)
        - Internalization process: 10%
- 乐观锁
    - [乐观锁、悲观锁，这一篇就够了！](https://segmentfault.com/a/1190000016611415)
      - [IRRELEVANT? - CAS Algorithm in action](https://www.youtube.com/watch?v=5y7lKIM1BHE)
      - [Atomics, CAS, and Nonblocking Algorithms (Alexey Fyodorov, Russia)](https://www.youtube.com/watch?v=htbPckvO2zQ)
    - [悲观锁与乐观锁的实现(详情图解)](https://www.modb.pro/db/50596)
    - [不得不说的乐观锁和悲观锁](https://juejin.cn/post/7024337692091482126)

# S
- SSM架构
  - [手把手教你整合最优雅SSM框架：SpringMVC + Spring + MyBatis](https://blog.csdn.net/qq598535550/article/details/51703190)
# T
- Turing completeness: 图灵完备
  - Wiki
- Turing machine: 图灵机
  - [Turing Machines Explained - Computerphile](https://www.youtube.com/watch?v=dNRDvLACg5Q)
# X
- 线程池
  - [Java线程池实现原理及其在美团业务中的实践](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)
  - [如何优雅的使用和理解线程池](https://crossoverjie.top/2018/07/29/java-senior/ThreadPool/)
- 线上业务故障/事故级别
  - [服务故障级别&处理方案](https://www.jianshu.com/p/14f7fd052f49) 
    1.  P0 核心业务重要功能不可用且大面积影响用户； 响应时间：立即
    2.  P1 核心业务重要功能不可用，但影响用户有限，如仅影响内部用户； 响应时间：小于15分钟
    3.  P2 核心业务周边功能不可用，持续故障将大面积影响用户体验； 响应时间：小于15分钟
    4.  P3 周边业务功能不可用，轻微影响用户体验； 响应时间：小于4小时
    5.  P4 周边业务功能不可用，但基本不影响用户正常使用。 响应时间：小于6小时
    - REF
      - 作者：Lonely_Acmen
      - 链接：https://www.jianshu.com/p/14f7fd052f49
      - 来源：简书
      - 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
