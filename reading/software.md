# Table of Contents
- [Table of Contents](#table-of-contents)
- [Computer system](#computer-system)
- [Computer graphics](#computer-graphics)
- [Programming language proficiency](#programming-language-proficiency)
  - [C](#c)
  - [C++](#c-1)
  - [JavaScript](#javascript)
  - [Java](#java)
- [Data structure and algorithms](#data-structure-and-algorithms)
- [Programming language principle & paradigm](#programming-language-principle--paradigm)
- [Computer security](#computer-security)
- [Full-stack development](#full-stack-development)
- [Computer networking](#computer-networking)
- [Compiler working principle and design](#compiler-working-principle-and-design)
- [Operating system working principle](#operating-system-working-principle)
- [Software Engineering](#software-engineering)
- [Site-reliability Engineering](#site-reliability-engineering)
- [Game development](#game-development)
- [Source code study](#source-code-study)


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
- [Learning Three.js: Thee JavaScript 3D Library for WebGL](https://www.doc-developpement-durable.org/file/Projets-informatiques/cours-&-manuels-informatiques/java/Learning%20Three.js-%20The%20JavaScript%203D%20Library%20for%20WebGL.pdf)
# Programming language proficiency
Dude, is it really a good idea to learn a programming language through piles of books? 
## C
- Motivation
  - I coded in C before and got a taste first-hand
  - I want to be a better programmer
- Learn C the HARD WAY
  - [link1](https://users.elis.ugent.be/~jrvdnbro/learn_c_the_hard_way.pdf)
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
  - Process 0 
    - Random reading for general neural pathway construction
    - Fast read,
    - Punkt: p57

  - [Link1](http://www.r-5.org/files/books/computers/algo-list/common/Cormen_Lin_Lee-Introduction_to_Algorithms_(Solutions)-EN.pdf)
# Programming language principle & paradigm
- Functional programming in JavaScript 24/274

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
# Full-stack development
- Getting MEAN with Mongo, Express, Angular, and Node 0/?
  - [Link1](https://www.programmer-books.com/wp-content/uploads/2018/08/Getting%20MEAN%20with%20Mongo,%20Express,%20Angular,%20and%20Node.pdf)
- Principles of Programming Languages
  - [Link1](https://www.cs.bgu.ac.il/~mira/ppl-book-full.pdf)
- [Advanced SQL Database Programmers Handbook](http://0d1.cn/dbs/books/SQL%20Server/Rampant.TechPress.Advanced.SQL.Database.Programmer.Handbook.eBook-DDU.pdf)
  - Progress: 15/113
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
- Compilers Principle, Techniques, & Tools --- A.V.Aho
  - [Link1](http://ce.sharif.edu/courses/94-95/1/ce414-2/resources/root/Text%20Books/Compiler%20Design/Alfred%20V.%20Aho,%20Monica%20S.%20Lam,%20Ravi%20Sethi,%20Jeffrey%20D.%20Ullman-Compilers%20-%20Principles,%20Techniques,%20and%20Tools-Pearson_Addison%20Wesley%20(2006).pdf)

# Operating system working principle


# Software Engineering
- Design Patterns Elements of Reusable Object-Oriented Software
  - [link](http://www.uml.org.cn/c++/pdf/designpatterns.pdf)

# Site-reliability Engineering
- [Site Reliability Engineering - How google runs production systems](https://iamfaith.github.io/leetcode/index/Site.Reliability.Engineering.2016.3.pdf)
# Game development
- C# all books
  - [github](https://github.com/Sheisback/Free-CSharp-Books/tree/master/book)
- The C# Player’s Guide
  - [github](https://github.com/Sheisback/Free-CSharp-Books/tree/master/book)
  - Process 1(Follow along)
    - Goal: To quickly get familiar with VR game design
    - Progress: 149/409
# Source code study
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