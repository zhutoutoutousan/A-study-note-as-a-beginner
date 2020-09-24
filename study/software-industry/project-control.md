# Table of Contents
- [Table of Contents](#table-of-contents)
- [Priority-project control](#priority-project-control)
  - [In two months](#in-two-months)
  - [In two years](#in-two-years)
  - [In five years](#in-five-years)
- [Timeline-project control](#timeline-project-control)
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
- [Web crawler of German Websites](#web-crawler-of-german-websites)
  - [Design](#design)
    - [Functionality](#functionality)
  - [Tech-stack](#tech-stack)
  - [Reference materials](#reference-materials-1)
- [3D/VR personal knowledge base](#3dvr-personal-knowledge-base)
  - [Application --> Mindmap + Flashcard](#application----mindmap--flashcard)
    - [Functionality](#functionality-1)
  - [Reference](#reference)

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
# Timeline-project control
```
April -...--------------------------------------------------------------> October  
xxxxxxx...August-----------------------September--------------------------->|  
                                                                 /|\
                                                                  |  U R here
```
- First stage mark: **FST**



# Personal website

## Front-page
- [ ] Study the example
  - [ ] [Portfolio](https://github.com/realmartinzane/portfolio)
  - [ ] [How To Build A Markdown Blog Using Node.js, Express, And MongoDB](https://www.youtube.com/watch?v=1NrHkjlWVhM&t=924s)
    - [ ] Progress: 13:43/1hrs
    - Local file --> adopt-me
  - [ ] Vue
    - [x] Intro course
    - [ ] Integration

## Blog-page
- [x] VuePress
  - [x] Not suitable
- [ ]  [How To Build A Markdown Blog Using Node.js, Express, And MongoDB](https://www.youtube.com/watch?v=1NrHkjlWVhM&t=924s)
- [ ] [Jr Developer Portfolios - The good and bad #grindreel](https://www.youtube.com/watch?v=q0bca-LnDhY&t=3s)
  - 3:30 [Entry](https://github.com/realmartinzane/portfolio)
- [7 Tips for a Better Design Portfolio - WITH EXAMPLES](https://www.youtube.com/watch?v=lPGM-GgIqmo)

# Front-end portfolio
- [ ] Site link
- Components
  - Source code
    - Lottery game
      - Serving
    - [x] Accordian
    - Autocomplete
    - [x] Vanilla JS calculator
      - [x] HTML layout
      - [x] Layout style
      - [x] CSS animation
      - [x] Logic
      - [ ] Furthur troubleshoot
    - Vue Calculator
      - [x] Project setup
      - [ ] Can proceed Vue.js course without finishing it first
    - [x] Carousel
    - Drop-down-menu
    - Expanding-search-bar
    - Icon bar
    - Pagination
    - [x] Responsive navbar
    - toast-notification
  - Link
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
    - [ ] <span style="color: red">Chrome devTool technique</span>
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
    - [ ] Webpack course
    - [ ] Webpack packing
  - [ ] Deploy
## Reference materials
- Code bullet --> Chess AI
  - [I created an AI to Play Chess](https://www.youtube.com/watch?v=DZfv0YgLJ2Q)
- [Online-chess](https://github.com/Aveek-Saha/Online-Chess)
  - With rooms
- [Online-chess](https://github.com/kevinAlbs/Chess)
  - Node.js

## What is learned
- Becareful with multiple logical operators
```
a || b && c 
a || (b && c)
```

# Pathfinding algorithm visualizer
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



# Web crawler of German Websites
## Design
### Functionality
## Tech-stack
- React
## Reference materials


# 3D/VR personal knowledge base
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
  - With BCI interface directly interacting with the br

## Reference
- [xmind-viewer](https://github.com/xmindltd/xmind-viewer)