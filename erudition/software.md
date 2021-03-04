# Table of Contents
- [Table of Contents](#table-of-contents)
- [AI](#ai)
- [IT architecture](#it-architecture)
- [Computer system](#computer-system)
- [Computer graphics](#computer-graphics)
- [Programming language proficiency](#programming-language-proficiency)
  - [C](#c)
  - [C++](#c-1)
  - [JavaScript](#javascript)
  - [Java](#java)
- [Data structure and algorithms](#data-structure-and-algorithms)
- [Programming language principle & paradigm](#programming-language-principle--paradigm)
- [Web testing and automation](#web-testing-and-automation)
- [Computer security](#computer-security)
- [Full-stack development](#full-stack-development)
- [Computer networking](#computer-networking)
- [Compiler working principle and design](#compiler-working-principle-and-design)
- [Operating system working principle](#operating-system-working-principle)
- [Software Engineering](#software-engineering)
- [Site-reliability Engineering](#site-reliability-engineering)
  - [General](#general)
  - [System administration](#system-administration)
- [Game development](#game-development)
- [Source code study](#source-code-study)
- [Front-end development](#front-end-development)

# AI
- Learn Python The Hard Way
  - [link1](https://drive.google.com/file/d/1VZm6qXP4KBwQD0wbkjfhduAWBvXBXu0v/view?usp=sharing)

# IT architecture
- 企业IT架构转型之道:阿里巴巴中台战略思想与架构实战
  - [link1](https://github.com/edagarli/Collection-books/blob/master/%E4%BC%81%E4%B8%9AIT%E6%9E%B6%E6%9E%84%E8%BD%AC%E5%9E%8B%E4%B9%8B%E9%81%93:%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E4%B8%AD%E5%8F%B0%E6%88%98%E7%95%A5%E6%80%9D%E6%83%B3%E4%B8%8E%E6%9E%B6%E6%9E%84%E5%AE%9E%E6%88%98.pdf)

# Computer system
- Computer Systems: A Programmer's Perspective: 40/1078
  -  [Link1](http://guanzhou.pub/files/Computer%20System_EN.pdf)
  -  [Link2](https://github.com/smellslikekeenspirit/an-askreddit-list-of-compsci-books/blob/master/Randal%20E.%20Bryant%2C%20David%20R.%20O%E2%80%99Hallaron%20-%20Computer%20Systems.%20A%20Programmer%E2%80%99s%20Perspective%20%5B3rd%20ed.%5D%20(2016%2C%20Pearson).pdf)
  -  Process 1:(Read when not in intense working period)
     -  Progress: 65/1078
     -  Short-term store
        -  Visualization(Append to terminology recommended)
           -  Compilation phase: P40
           -  Hardware organization of a typical system: P43
           -  Loading the executable from disk into main memory P46
           -  Writing the output string from memory to the display P47
           -  An example of a memory hierarchy P49
           -  Computer system visulization
              -  Layered view of a computer system P49
              -  Abstractions provided by an operating system P50
              -  Process context switching P51
     - Read style change: Reading by doing --> Code-playground
     -  I.O.I
        - GNU：P41
  -  Process 2:(Build your own computer system)
     - Budget FPGA project
       - [The best FPGA boards for beginners](https://augustafreepress.com/the-best-fpga-boards-for-beginners/)
         - [ALINX XILINX 黑金FPGA开发板SPARTAN6 XC6SLX9 FPGA学习板AX309](https://detail.tmall.com/item.htm?spm=a230r.1.14.20.694f3b0ece4dTE&id=595378320744&ns=1&abbucket=13&skuId=4133553384338)
       - [Resource](https://cseweb.ucsd.edu/classes/sp08/cse141/slides/CSE141-MBT-L1.pdf)
     - Find more viable resource for your hands-on computer system project
     - [Helix microsystems](https://www.helixmicrosystems.com/products)
  -  Prerequisites
     - [x] familiarity with C or C++
     - [x] Linux or [Cygwin tools](www.cygwin.com)
     - [x] No hardware, machine language or assembly-language programming
  - Reading methods
    - Solution to the problems are at the end of each chapter
    - The blue diamond markings indicates the effort.(See 21/1078)
    - Source code available from [CS:APP](csapp.cs.cmu.edu)
  - Why bother reading this book
    - Like duh
  - [Configuring C/C++ debugging - Vscode](https://code.visualstudio.com/docs/cpp/launch-json-reference)
   

# Computer graphics
- Mathematics for 3D Game Programming and Computer Graphics 
  - [link](http://canvas.projekti.info/ebooks/Mathematics%20for%203D%20Game%20Programming%20and%20Computer%20Graphics,%20Third%20Edition.pdf)
  - AFTER READING
    - You would probably more ready for developing a professional-quality 3D graphics engine
  - Progress 1
    - Goal
      - Lay a solid mathematic background for game developing
    - Progress: Just started
- [WebGL - Up and Running](http://www.dominictran.com/pdf/WebGL.Up.and.Running.Aug.2012.Oreilly.pdf)
  - Progress: 21/231
- [Learning Three.js: Thee JavaScript 3D Library for WebGL](https://www.doc-developpement-durable.org/file/Projets-informatiques/cours-&-manuels-informatiques/java/Learning%20Three.js-%20The%20JavaScript%203D%20Library%20for%20WebGL.pdf)
# Programming language proficiency
Dude, is it really a good idea to learn a programming language through piles of books? 
## C
- Motivation
  - I coded in C before and got a taste first-hand
  - I want to be a better programmer
- Learn C the HARD WAY
  - [link1](https://github.com/XWHQSJ/ebooks/blob/master/Cpp/C/Learn%20C%20the%20Hard%20Way.pdf)
  - [link2](https://drive.google.com/file/d/1JlZRbvdh32LHEWbmw5kVBINPgJkAGb0j/view?usp=sharing)
  - Goals
    - Learn about *rigorous defensive programming*
  - Interesting points:
    - *C is broken, It is full of design choices that made sense in the 1970s but make zero sense now. ... it's the most difficult language to write securely.*
      - unrestricted, wild use of pointers 
      - severely broken NUL terminated strings
  - Process 1:(Learn when you have some spare time and interest)
    - Progress: 19/660
- C book
  - [link1](https://publications.gbdirect.co.uk/c_book/)
## C++
- Motivation:
  - Chromium V8 is written in C++, how come you don't have any familiarity with it?
  - [chromium - JavaScript deep dive](https://source.chromium.org/chromium/chromium/src/)
- C++ Primer
  - [link1 - legit](http://index-of.es/C++/Addison.Wesley.C++%20Primer.By.Stanley%20B.%20Lippman.pdf)
    - Process 1:
      - Goal: C++ is sexy, I want to fuck her
      - Progress: 25/1069
        - research `iostream`
        - Setup envinronment for vscode
          - [How to Set up Visual Studio Code for C and C++ Programming](https://www.youtube.com/watch?v=77v-Poud_io)
        - Video tutorial aids
          - [C++ Programming All-in-One Tutorial Series (10 HOURS!)](https://www.youtube.com/watch?v=_bYFu9mBnr4)
            - Progress: 10:21/10:28:14
            - Tools: Visual Studio
    - Process 2:
      - Goal: Learn to work with U3D or UE4 developer as a Front-end developer
      - Progress: 25/1069
  - [link2](http://www.charleshouserjr.com/Cplus2.pdf)
  - [link3](http://ptgmedia.pearsoncmg.com/images/9780321714114/samplepages/0321714113.pdf)
## JavaScript
- Motivations
  - Currently no need for motivations 
  - [The Best Programming Language To Learn In 2020](https://www.youtube.com/watch?v=K7-YFU5GpX4&t=25s)
## Java
- Motivations:
  - Practice data structrure on Hackerrank videos
- Learning Java by Niemeyer Patrick and Leuck Danial: 66/1010
  - [Link1](http://ikucukkoc.baun.edu.tr/lectures/EMM3115/Learning_Java.pdf)
    - Pretty slow to load
  - Process 1:
    - Goals
      - Getting to know the basic syntax
      - Follow along the programming environment setting
    - SKIMMED: 43-54
      - The features of Java, recommended start reading after having worked with Java for some time
    - Follow along 64- 
      - This phase should be pleasant and fast

# Data structure and algorithms
- Introduction to Algorithms 3rd Edition: 0-55/1313
  - [Link1](https://edutechlearners.com/download/Introduction_to_algorithms-3rd%20Edition.pdf)
  - [Link2](https://web.ist.utl.pt/~fabio.ferreira/material/asa/clrs.pdf)
  - [Link3](https://github.com/CodeClub-JU/Introduction-to-Algorithms-CLRS/blob/master/Introduction%20to%20Algorithms%20-%203rd%20Edition.pdf)
  - [Link1](http://www.r-5.org/files/books/computers/algo-list/common/Cormen_Lin_Lee-Introduction_to_Algorithms_(Solutions)-EN.pdf)
  - Process 1
    - Goal: Have a genearl 
    - Process 1.1: 1164-
      - Goal: Have a quick recap of mathematical background
      - Progress: 1170 Tackling math questions
        - 1170: A.1-2: To resume, search `series.md`
  - Process 2
    - Goal: Quick Grasp of B-tree
    - Progress: 481-
- LeetCode Cookbook Analysis in Go
  - [link1](https://books.halfrost.com/leetcode/)
# Programming language principle & paradigm
- Functional programming in JavaScript 24/274

# Web testing and automation
- [Selenium 2 Testing Tools - Learn to use Selenium testing tools from scratch](http://download.51testing.com/ddimg/uploadsoft/20140715/Selenium_2_Testing_Tools.pdf)
  - Progress
# Computer security
- FUNDAMENTALS OF CRYPTOLOGY A Professional Reference and Interactive Tutorial: 
  -  [Link1](https://www.hyperelliptic.org/tanja/teaching/cryptoI13/cryptodict.pdf)
  -  Require use of ```mathematica```
  - Process 1(Mathematical background):
    - Progress 1: 343/343-471
  - Process 2(Reading for pleasure) 14/503
    - Require at least finishing one book of elementary number theory to proceed or study the appendix
- CompTIA Network+ Certification Study Guide
  - [Link1](http://index-of.es/Varios-2/Comptia%20Network+.pdf)
- CompTIA Security+
  - [Github - study notes](https://github.com/PacktPublishing/CompTIA-Security-SY0-501-Complete-Course-and-Practice-Exam/blob/master/CompTIA%20Security%2B%20(Study%20Notes).pdf)
  - CompTIA Security+ Exam Guide
    - [link1](https://keyhannet.com/wp-content/uploads/2018/11/Wm.-Arthur-Conklin_-Gregory-White-CompTIA-Security-All-in-One-Exam-Guide-Exam-SY0-501-2017-McGraw-Hill.pdf)
- Aircrack-ng book
  - [link1](http://www2.aircrack-ng.org/hiexpo/aircrack-ng_book_v1.pdf)
  - Process 1 
    - Goal: Osmosis
    - Progress: 178/178-359
# Full-stack development
- System design
  - System Analysis, Design, and Development - CONCEPTS, PRINCIPLES, AND PRACTICES
    - [link](https://www.zu.edu.jo/UploadFile/Library/E_Books/Files/LibraryFile_12159_26.pdf)
    - Process 1
      - Style: Osmosis
      - PROGRESS: 36/834
      - Training
        - P27
          - Sample system for application to General Exercises
  - [System Design Course for Beginners](https://www.youtube.com/watch?v=MbjObHmDbZo)
    - Progress: 33:56/1:40:24
    - Points of software system
      - Availability
      - Reliability
      - Managability
    - `Back-Of-The-Envelope Calculation` is very important, being able to do quick math the smart way is required
      - [Back of the Envelope Calculation for System Design Interviews](https://www.codementor.io/@robinpalotai/back-of-the-envelope-calculation-for-system-design-interviews-z4ljbsp5l)

- Front-end
  - Getting MEAN with Mongo, Express, Angular, and Node 0/?
    - [Link1](https://www.programmer-books.com/wp-content/uploads/2018/08/Getting%20MEAN%20with%20Mongo,%20Express,%20Angular,%20and%20Node.pdf)

- Middleware
  - Golang bundle
    - [GoLangBooks](https://github.com/diptomondal007/GoLangBooks)
  - Programming in Go: Creating Application for the 21st Century
    - [link1](https://github.com/diptomondal007/GoLangBooks/blob/master/Programming%20in%20Go/Programming%20in%20Go.pdf)
    - [link2](https://drive.google.com/file/d/12Aq0dHcd0ZS7ZXCVuFNdyDekP7D3JjMC/view?usp=sharing)
    - Progress: 39/493
    - Skipped for `Practice 1.5` for it is too confusing
  - [Learn Go Programming - Golang Tutorial for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1181s)
    - Progress: 19:50/6:39:57
  - Go for JavaScript Developers
    - [link](https://frontendmasters.com/courses/go-for-js-devs/)
  - Golang projects
    - Go Todolist
      - [Go Todo list](https://github.com/shiniao/gtodo)
    - [gin+vue的前后端分离开源项目](https://studygolang.com/topics/9908)
- Database
  - Application
    - [制药生产自控设计与CSV验证](http://www.doc88.com/p-3455610720856.html)
- Principles of Programming Languages
  - [Link1](https://www.cs.bgu.ac.il/~mira/ppl-book-full.pdf)
- [Advanced SQL Database Programmers Handbook](http://0d1.cn/dbs/books/SQL%20Server/Rampant.TechPress.Advanced.SQL.Database.Programmer.Handbook.eBook-DDU.pdf)
  - Progress: 15/113
- Postgres: The First Experience
  - [link](https://edu.postgrespro.ru/introbook_v6_en.pdf)
  - Progress
    - Mobile Termux
      - Progress: 38
      - LOCKED: Require your ability to `root` an Android device
    - PuTTY - 174/174
      - P69: You can challenge yourself by using a larger database
      - P76-174 Problem solving skills
        - You can learn any time, for your condition in 2021/2/23, it's good enough.
      - [Database Indexing Explained (with PostgreSQL)](https://www.youtube.com/watch?v=-qNSXK7s7_w)
        - Progress: 2:14/18:18
    - Windows
- Database Design - 2nd Edition
  - [link1](https://resources.saylor.org/wwwresources/archived/site/wp-content/uploads/2014/12/CS403-1.10-Database-Design-2nd-Edition-CCBY.pdf)
  - Progress: 82/136
  - Recommended review all of those concepts every time you read it again before embarking where you left last time
  - Key points
    - Basic concepts and terminologies
    - P54: ER graph is very important, make sure you make no misunderstandings
  - P.O.I
    - [Edgar F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd)
      - The pioneer of relational database
  - Reading style
    - Print the `ER diagram` if you want to review those practice 
  - Reading stamps
    - Not reading thoroughly for P69-P73 as `funcitonal dependencies`
      - Require more `osmosis`
    - Same for `Normalization` 
    - P90-\$ skipped for overlap with `Postgresql`
  - More skills
    - Performance tunning
      - [PostgreSQL Performance Tuning Tutorial](https://stackify.com/postgresql-performance-tutorial/)
# Computer networking
- [10 Best Computer Networking Books for Beginners & Experts](https://www.networkstraining.com/best-computer-networks-textbooks/)
- Computer networking: A Top-Down Approach 29/856
  - [6-th edition](https://eclass.teicrete.gr/modules/document/file.php/TP326/%CE%98%CE%B5%CF%89%CF%81%CE%AF%CE%B1%20(Lectures)/Computer_Networking_A_Top-Down_Approach.pdf)
  - [7-th edition](https://leonawang.com/books/Computer%20Networking%20A%20Top-Down%20Approach%207th%20edition.pdf)
  - Process 1:
    - Progress: 69/856
    - Get familiar with the ideas
    - No taking notes for lack of time
  - Resource provided in the book
    - [Pearson - CS resource](https://media.pearsoncmg.com/bc/abp/cs-resources/)
    - [Fuck](http://gaia.cs.umass.edu/kurose_ross/interactive,)
  - Prerequisites
    - Some C, C++ or Python
  - Process 1: Just skimming the introduction and gain a structural renognition of the subject 
  - [A set of books hosting on a server]()
- CompTIA Network+ Example guide Fourth Edition
  - [Link1](http://eflnet.ir/Admin/Upload/Document/CompTIA_Network-plus-2009.pdf)

- Computer Networking Principles Bona Venture(Maybe obsolete)
  - [Link1](https://resources.saylor.org/wwwresources/archived/site/wp-content/uploads/2012/02/Computer-Networking-Principles-Bonaventure-1-30-31-OTC1.pdf)

# Compiler working principle and design
- GNU - GCC
  - [Show me the code](https://github.com/gcc-mirror/gcc)
- Compilers Working Principle, Techniques, & Tools --- A.V.Aho
  - Progress: 41/1035
  - Talk is cheap, work with GNU - GCC and try to build one
  - [Link1](http://ce.sharif.edu/courses/94-95/1/ce414-2/resources/root/Text%20Books/Compiler%20Design/Alfred%20V.%20Aho,%20Monica%20S.%20Lam,%20Ravi%20Sethi,%20Jeffrey%20D.%20Ullman-Compilers%20-%20Principles,%20Techniques,%20and%20Tools-Pearson_Addison%20Wesley%20(2006).pdf)
  - Prerequisites:
    - The reader should possess some \computer-science sophistication," including
at least a second course on programming, and courses in data structures and
discrete mathematics. Knowledge of several different programming languages
is useful.


# Operating system working principle
- [Operating system concepts](http://www.uobabylon.edu.iq/download/M.S%202013-2014/Operating_System_Concepts,_8th_Edition%5BA4%5D.pdf)
  - Progress: 24/982
- CentOS 
  - [Foundations of CentOS Linux](https://doc.lagout.org/operating%20system%20/linux/Foundations%20of%20CentOS%20Linux.pdf)
    - Progress: 530/530
    - `grep` is very important, learn those patterns from time to time
    - Concerning the booting process, I'd better not tamper with it like it's nothin'  2021/1/11
    - Hard drive configuration is currently too risky for your current level of knowledge, try some later  2021/1/12
    - Learn how to manage `yum`
    - For remote desktop control configuration, configuring `XDMCP`, `X` is a must
    - The Basic security part is sort of deprecated
    - Skipped for `SELinux` for its interference with `httpd`
    - Kind of sloppy when skimming through `postgresql`, skipped for `mysql`
    - `Directory Service` and `NIS` is kind of important, but skipped at 2021/2/1 for lack of needs
    - Skimmed `Kernel` section for lack of dire needs


# Software Engineering
- Design Patterns Elements of Reusable Object-Oriented Software
  - [link](http://www.uml.org.cn/c++/pdf/designpatterns.pdf)
- Basics of Software Engineering Experimentation
  - [link](http://www.grise.upm.es/docs/Basics_of_Software_Engineering_Experimentation.pdf)



# Site-reliability Engineering
## General
- [Site Reliability Engineering - How google runs production systems](https://iamfaith.github.io/leetcode/index/Site.Reliability.Engineering.2016.3.pdf)
## System administration
- [Windows server administration fundamentals](https://docentinrete.files.wordpress.com/2012/05/manuale-2008-98-365-windowsserver.pdf)
  - This is too basic, read it only if you really have a ton of time :)
- [Configuring Advanced Windowes server 2012 guide](https://ptgmedia.pearsoncmg.com/images/9780735674257/samplepages/9780735674257.pdf)
  - [link1](http://docshare04.docshare.tips/files/27083/270837810.pdf)
  - Very good for getting hands dirty and solve problems quick!
  - Progress:


# Game development
- C# all books
  - [github](https://github.com/Sheisback/Free-CSharp-Books/tree/master/book)
- The C# Player’s Guide
  - [github](https://github.com/Sheisback/Free-CSharp-Books/tree/master/book)
  - Process 1(Follow along)
    - Goal: To quickly get familiar with VR game design
    - Progress: 157/409


# Source code study
- DevOps
  - How does `sh` work?
    - [Simplified Bourne Shell](https://github.com/DarkZeratul/Bourne-Shell)
- Design and presentation
  - [THREE.JS](https://github.com/mrdoob/three.js/)
    - Status: This tool is related with my aspiration and work
    - Progress: Fast progress
      - Process 1: PerspectiveCamera
        - [PerspectiveCamera](https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js)
      - Process 2: Front page
        - [FRONTPAGE](https://github.com/mrdoob/three.js/)
- Operating system
  - Linux
    - [Linux - github](https://github.com/eiiches/linux) 
    - Status: Looking around, get familiar with it first
      - Is there any close resource for reference?
- Front-end
  - Bootstrap
    - Status: On
      - Process 1: Study dependencies(package.json)
        - Meteor
          - [Build A Meteor.js App In 45 Minutes - Traversy Media](https://www.youtube.com/watch?v=9494-2E4riQ)
            - Progress
              - Code-playground follow along
      - Process 2: Study project architecture
  - Vue 
    - [vue-next - github](https://github.com/vuejs/vue-next)
    - Status: Motivated, look around first
  - React
    - [react - github](https://github.com/facebook/react)
    - Status: Not yet
- Knowledge base
  - Raneto
    - [Portal](https://github.com/gilbitron/Raneto)
    - Status: Studying as shown in those processes
    - Process 1: Study dependencies for more project management proficiencies
    - Process 2: Get the hang of the project architecture
      - [ ] Study task: Study Dan Abramov's mental model of JavaScript Modules
    - Process 3: Study to give an idea how to solve the nested directories problem
- Browser working principle
  - Chromium
- Game development

# Front-end development
- 微信公众平台应用开发实战
  - [link1](https://drive.google.com/file/d/1zqFLY7wHVA0-l4wxM6dN1oEFfQwPNb1V/view?usp=sharing)
- HTML 5 Mobile Development Cookbook
  - [link1](https://drive.google.com/file/d/1JUUBZvCNI0_rVQb1j8Xkdzoa-LfeemXU/view?usp=sharing)
  - Progress: 25
- HTML5移动Web+Vue.js应用开发实战
  - Process 1
    - Goal: Have a general grasp of knowledge in Chinese
    - Style: Hit and run, till feeling very comfortable
- You don't know JS
  - [link1](https://drive.google.com/file/d/1j4duc5npkyXlgEZigos3iuxFxKtFJf8H/view?usp=sharing)
  - Process 1
    - Approach: Osmosis
    - Progress:  22/87