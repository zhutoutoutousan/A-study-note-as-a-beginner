# Table of Contents
- [Table of Contents](#table-of-contents)
- [Priority-project control](#priority-project-control)
  - [In two months](#in-two-months)
  - [In two years](#in-two-years)
  - [In five years](#in-five-years)
- [Personal website](#personal-website)
  - [Front-page](#front-page)
  - [Blog-page](#blog-page)
- [Front-end portfolio](#front-end-portfolio)
- [Chess game](#chess-game)
  - [Reference materials](#reference-materials)
  - [What is learned](#what-is-learned)
- [Pathfinding algorithm visualizer](#pathfinding-algorithm-visualizer)
- [Problem solving proficiency](#problem-solving-proficiency)
- [Interview questions](#interview-questions)
- [Study web crawler design](#study-web-crawler-design)
  - [Design](#design)
    - [Functionality](#functionality)
  - [Tech-stack](#tech-stack)
  - [Reference materials](#reference-materials-1)
- [3D/VR personal knowledge base](#3dvr-personal-knowledge-base)
  - [Progress](#progress)
  - [Application --> Mindmap + Flashcard](#application----mindmap--flashcard)
    - [Functionality](#functionality-1)
  - [Debate space](#debate-space)
    - [Why](#why)
    - [Contexts to investigate](#contexts-to-investigate)
    - [Pro](#pro)
    - [Against](#against)
  - [Reference](#reference)
- [Relaxation box](#relaxation-box)
  - [Basic idea](#basic-idea)
  - [Context](#context)
  - [Debate space](#debate-space-1)
    - [Pro](#pro-1)
    - [Against](#against-1)

# Priority-project control
## In two months
1. Personal front page
   1. Calculator(In a tab)
   2. Navbar
2. Personal blog page 
3. Chess game
4. Algorithm visualizer in Vue
5. Problem solving efficiencies
6. Interview
## In two years
1. DeepSTUDYcity
2. Web crawler for German websites
## In five years
1. DeepSTUDYcity(4d+AR/VR)

# Personal website
## Front-page
- [x] Study the example
  - [x] [Portfolio](https://github.com/realmartinzane/portfolio)
  - [x] Vue
    - [x] Intro course
    - [x] Integration
- [ ] Mobile support
  - [ ] Learn google devTool mobile simulation
  - [ ] Learn CSS media queries with mobile
    - [ ] [Are you writing responsive CSS the wrong way?](https://www.youtube.com/watch?v=0ohtVzCSHqs)
  - [ ] Learn Responsive frameworks
  - [ ] Learn Nuxt.js(Server side rendering)
## Blog-page
- [x] VuePress
  - [x] Not suitable
- [x] [Jr Developer Portfolios - The good and bad #grindreel](https://www.youtube.com/watch?v=q0bca-LnDhY&t=3s)
  - 3:30 [Entry](https://github.com/realmartinzane/portfolio)
- [7 Tips for a Better Design Portfolio - WITH EXAMPLES](https://www.youtube.com/watch?v=lPGM-GgIqmo)
- [x] [How To Build A Markdown Blog Using Node.js, Express, And MongoDB](https://www.youtube.com/watch?v=1NrHkjlWVhM&t=924s)
  - [x] Progress: 31:34/1hrs
  - [x] Got a better tool for the job
  - Local file --> code-playground --> blog-practice
- [Raneto](https://github.com/gilbitron/Raneto)
  - [x] Website hosting
  - [ ] Problems
    - [ ] Limited directory nesting depth
- [wiki.js]
# Front-end portfolio
- [x] Initial design
- [ ] Documents
- [ ] Issues
  - [ ] For mobiles, the media query is not good
# Chess game
- [x] Chessboard
- [ ] Game mechanics
  - [ ] When you win, the game is stuck 
- [ ] Chess Pieces
  - [x] Initial design
  - [x] ? The black bishop sometimes disappear
    - [x] ? ```diagsweep``` add logic 
  - [x] If you click the queen twice, it just disappear
    - [x] In QUEEN: ```canMove``` function, the ```basicCondition``` returns the wrong value
    - [x] Although it **cannot Move**, it still sees it as ```attacking``` and took itself.
    - [x] Source : <span style="color: red;">The execution order of boolean</div>
  - [x] Rook can move through pieces vertically(not horizontally)
    - [x] Source : <span style="color: red;">Still the execution order of boolean</div>
  - [x] Pawn can travel out of bounds
  - [ ] Pawn doesn't promote
  - [ ] Pawn doesn't en passant
    - [x] There is a ```firstTurn``` indicator, but it doesn't work
      - [x] When a pawn has been moved, there is no telling whether it is consecutive or not
    - [x] Develop the ```canEnPassant``` boolean logic
    - [ ] Use pawn class property ```canBeEnPassent```
      - [ ] The property switch back to ```false``` before the next move
        - [ ] It happened in the ```RunAI()``` function
        - [ ] WORKAROUND: maybe you can add store Enpassant and store it back
    - [ ] <span style="color: red">Chrome devTool technique</span>(optional)
      - [ ] Gather as much information as you can
  - [x] Pawn can't march if it can attack
  - [x] Pawn can *march and attack*
- [ ] AI
  - [x] Algorithms
  - [ ] Enemy loves moving pawn
    - [ ] Why
- [ ] Decoration
  - [ ] Start the game
  - [ ] Restart the game
- [ ] Multiplayer
  - [ ] Choose mode
  - [ ] Networking
- [ ] Serving
  - [x] Heroku note
  - [ ] Webpack
    - [x] Webpack course
    - [ ] Webpack packing
  - [x] Deploy
    - [ ] [Bulletproof node.js project architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/)
  - [ ] Class
    - [ ] [Frontend Master course](https://frontendmasters.com/courses/api-design-nodejs-v3/)
## Reference materials
- Code bullet --> Chess AI
  - [I created an AI to Play Chess](https://www.youtube.com/watch?v=DZfv0YgLJ2Q)
- [Online-chess](https://github.com/Aveek-Saha/Online-Chess)
  - With rooms
- [Online-chess](https://github.com/kevinAlbs/Chess)
  - Node.js

## What is learned
- Be careful with multiple logical operators
```
a || b && c 
a || (b && c)
```

# Pathfinding algorithm visualizer
- [ ] Tutorial
  - [ ] [Sorting Visualizer Tutorial (software engineering project)](https://www.youtube.com/watch?v=pFXYym4Wbkc)
  - [ ] [Pathfinding](https://www.youtube.com/watch?v=msttfIHHkak&t=1010s)
- [ ] Graph algorithm
  - [ ] Code along(javascript-algorithm)
    - [ ] [graph](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph)
  - [ ] Understand? Mental model?
- [ ] Study repo
  - [Github Repo](https://github.com/clementmihailescu/Pathfinding-Visualizer)
- [ ] React
  - [ ] React intro course
  - [ ] React tutorial
    - [ ] tic-tac-tok game
      - [ ] [Official walkthrough](https://reactjs.org/tutorial/tutorial.html)
    - [ ] Concepts
      - [ ] [Official guide](https://reactjs.org/docs/hello-world.html)


# Problem solving proficiency
- Leetcode
- Codewar
- javascript-algorithm


# Interview questions
- [ ] Gather some link website and put it here




<!-------------------------------------------------------------------->



# Study web crawler design
## Design
### Functionality
## Tech-stack
- React
## Reference materials
- Projects
  - [TweetScraper - github](https://github.com/jonbakerfish/TweetScraper)
  - [Crawlab](https://github.com/crawlab-team/crawlab)
- P.O.I
  - tikazyq(github)


# 3D/VR personal knowledge base
## Progress
## Application --> Mindmap + Flashcard
### Functionality
- AI
  - Graph algorithm
- Multiplayer
  - Networking
- 3D Game
  - According to the knowledge base you've established, build the 3D world accordingly.
  - CYPHER(environment, can change theme) + Minecraft(Movement)
  - Free-roam-mode: Let the AI push you around and explore your own knowledge bank
  - Customized music playlist
  - Map system based on the mindmap
  - Can explore other people's world if you got the access
- 4D Game with VR/AR technology
  - Where you can swim in the oceans of your knowledge bank
  - With BCI interface directly interacting with the brain

## Debate space
### Why
- Of all YouTube videos, 99 percent of the video got less than 10 views. If you got an idea, 99% of your thought efforts should be geared towards debunking this idea by proving them invalid even with all available deviations or alternative routes.
- Only through hundreds and thousands of debates trying their best effort to tear down the idea can any idea that could survive be anything more than invalid.
- Talk to more people is essential --> 李开复-->3D浏览器，结果没有市场 --> 实用性创新
### Contexts to investigate
- Marketing ecosystem
- Business ecosystem/landscape
### Pro
- If the functionality of the product can be scaled to fit themselves towards different groups/classes of social groups/individuals, we can charge a variety of prices to different groups to maximize the profit
- The tools we use for a study framework is more or less for a certain group of people and is either too complex/inaccessible to other groups of people. 
### Against
- Readiness
  - Your technical skills is not enough
  - You don't have enough reputation and ability to set up a team
  - Even a team is present, there is no telling that what marketing strategy to use
- Demands
  - According to dominance hierarchy and basic neuralscience, the brain wants pleasure rather than pain, an individual wants to challenge the dominance hierarchy rather than better himself/herself, which indicates decreased market demands for a tool like this.
    - If a product is implicative to an individual that he/she could use this to improve his/her social economic status. He/she would have a spur to use it. 
      - But after that, the situation becomes a zero-sum game, I'm not sure if that equilibrium could be profitable if the base line is too low.
        - Requires basic knowledge of **Game theory** to unlock more self-debate sequence --> Build a hashmap to unlock fast **Game theory**-related problems ---> Exact neural pattern connection ---> Read books first
    - We should not omit the power of ideology, sometimes the political 'Zeitgeist' could be the reason why a product is popular, which is worth investigating.
- Competition
  - Maybe there's already a team or a product working on this
    - Notion
      - It's functionality
      - Is it a success
        - Why is it a succcess
      - This product's functionality
      - Not quite the functionality that this product is designed for
        - Summarize your reasons
    - Raneto
    - Marginnote
    - Evernote
    - Xmind
  - If this product for some reasons is public, can it survive?
## Reference
- [xmind-viewer](https://github.com/xmindltd/xmind-viewer)
- [Flashcard](https://github.com/jwasham/computer-science-flash-cards)
- [Node flashcard](https://github.com/ashwanikumar04/flash-cards)

# Relaxation box
## Basic idea
- If there is a 'box' with the size of a telephone booth where you can find a massage chair with noise-free headset and oxygen generator. I wouldn't mind going to that place during lunch break.
  - In every department store, coffee cafeteria where those white-collar people likes to rest.

## Context
## Debate space
### Pro
### Against
- Seems too costly, u sure it could be profitable?
  - Require basic knowledge of **how a business runs and the cash flow works** for further discussion
- Could you figure out a reservation system? 'Cause if this stuff exists, we don't want those people to be fixed. It should be optimized.