 # Table of Contents
- [Table of Contents](#table-of-contents)
- [Text](#text)
  - [Start a new line](#start-a-new-line)
  - [Empty space](#empty-space)
- [Style](#style)
- [Header](#header)
- [This is an \<h1> tag](#this-is-an-h1-tag)
  - [This is an \<h2> tag](#this-is-an-h2-tag)
          - [This is an \<h6> tag](#this-is-an-h6-tag)
- [Code blocks](#code-blocks)
  - [With symbol highlighting](#with-symbol-highlighting)
  - [Without symbol highlighting](#without-symbol-highlighting)
- [List](#list)
  - [Task List](#task-list)
  - [Nested list](#nested-list)
    - [Unordered list](#unordered-list)
    - [Ordered list](#ordered-list)
    - [List in list](#list-in-list)
- [Navigation](#navigation)
  - [How do I refer to an on-page link?](#how-do-i-refer-to-an-on-page-link)
    - [Router](#router)
  - [How do I automatically generate a table of contents?](#how-do-i-automatically-generate-a-table-of-contents)
    - [Lorem 1](#lorem-1)
      - [Lorem 1.1](#lorem-11)
    - [Lorem 2](#lorem-2)
      - [Lorem 2.1](#lorem-21)
      - [Lorem 2.2](#lorem-22)
    - [Lorem 3](#lorem-3)
- [Figures](#figures)
    - [How to insert centered caption in a page?](#how-to-insert-centered-caption-in-a-page)
- [Table](#table)
- [Applications of vanilla HTML and CSS in markdown notes](#applications-of-vanilla-html-and-css-in-markdown-notes)
  - [Accordian](#accordian)
    - [Troubleshoot](#troubleshoot)
  - [Animation](#animation)
    - [Embedded gif animation](#embedded-gif-animation)
- [Hyperlink](#hyperlink)
- [Reference](#reference)

# Text
## Start a new line
To start a new line, add two more empty space to the upper text.
```markdown
I want to start a new line(two empty spaces)

This is a new line
```
Will compile to:  
I want to start a new line  
This is a new line.
## Empty space
```markdown
&nbsp;
```


# Style
bold: double asteroids: **bold** double underscores: __bold__

italic: asteroid: *italic*  underscore: _italic_
link: [http://google.com]


# Header

# This is an \<h1> tag
## This is an \<h2> tag
###### This is an \<h6> tag

# Code blocks
## With symbol highlighting
```javascript
// with symbol highlighting
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## Without symbol highlighting
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }


# List

## Task List

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

~~I produce shit for fun~~

## Nested list
### Unordered list

* Item 1
* Item 2
* Item 3
    * Item 3a
    * Item 3b
    * Item 3c

### Ordered list

1. Step 1
2. Step 2
3. Step 3
    1. Step 3.1
    2. Step 3.2
    3. Step 3.3

### List in list

1. Step 1
2. Step 2
3. Step 3
    * Item 3a
    * Item 3b
    * Item 3c



# Navigation
## How do I refer to an on-page link?
### Router
[Lorem 1](#lorem-1) --> \[Lorem 1\]\(#lorem-1\)

[Lorem 1.1](#lorem-1.1) --> \[Lorem 1.1\]\(#lorem-1.1\)

Just like that

## How do I automatically generate a table of contents?
1. Use VScode
2. Install **markdown all in one**
3. Ctrl+Shift+P, autocomplete create a table of contents

### Lorem 1
#### Lorem 1.1
Occaecat ea consectetur qui velit enim occaecat tempor velit laboris anim eiusmod ea. Enim in tempor ex ullamco do sit amet ea aliqua exercitation. Ut do velit labore id nisi officia. Elit non quis aute non. Eiusmod sunt minim tempor laboris laborum sint occaecat tempor veniam cupidatat nisi. Elit commodo do magna sunt aliquip et ullamco sunt ad esse irure irure.

Dolore aute laborum nostrud laboris cupidatat ad nisi est deserunt enim deserunt officia. Irure labore veniam velit deserunt amet pariatur nostrud adipisicing do cupidatat duis. Aliquip ex pariatur qui consectetur occaecat velit exercitation ipsum. Enim nisi consequat culpa est nostrud officia adipisicing sunt. Labore ut nostrud ex ullamco incididunt aute adipisicing laborum. Reprehenderit dolore ad elit consequat voluptate elit ullamco est et ex nostrud dolor fugiat amet.
### Lorem 2
#### Lorem 2.1
Magna consectetur non Lorem ea pariatur aute. Excepteur adipisicing irure nostrud ipsum occaecat incididunt nisi qui anim deserunt. Consequat incididunt enim do dolor non ut magna ea sint. Eu Lorem sit dolore ut consequat ut. Enim nostrud irure ea non in.

Sit dolore deserunt ut culpa qui cupidatat. Labore exercitation minim id qui laborum enim irure aliquip magna ea. Nisi ad eu laboris consectetur laborum proident qui. Ut nulla culpa exercitation aliquip consectetur anim.

Commodo ex adipisicing ad eu sint sit laborum officia do. Consectetur ad labore adipisicing sit cillum consectetur et consectetur occaecat irure cillum fugiat. Excepteur mollit dolore duis magna tempor in nisi. Deserunt aute nisi elit non. Est quis ut culpa labore et elit elit incididunt incididunt labore voluptate. Sit fugiat magna magna excepteur in aliquip aliqua in mollit enim sint aliqua veniam. Esse est proident tempor do excepteur labore nulla anim fugiat nulla occaecat laboris.
#### Lorem 2.2
Officia Lorem magna et incididunt veniam excepteur non exercitation ut. Id occaecat Lorem ea enim laboris aute. Nostrud amet ad ad ullamco ex excepteur veniam anim. Culpa irure cillum ut nostrud dolor excepteur. Dolor irure labore eiusmod pariatur.
### Lorem 3
Commodo consectetur aute Lorem adipisicing nostrud consectetur excepteur. Fugiat amet do qui culpa nulla. Cupidatat cupidatat non non aute ex adipisicing voluptate ipsum cillum tempor ea do. Id id cupidatat ea laboris ea commodo nulla ad esse.

Dolore laboris consectetur quis culpa laborum non ex ut labore minim nulla esse mollit aute. Fugiat cillum aute pariatur minim labore velit id duis esse veniam velit. Laborum nulla pariatur veniam occaecat et elit ex ipsum in. Et exercitation aliquip aliquip officia qui cupidatat voluptate. Consequat pariatur ullamco laboris culpa aliquip nisi dolor duis amet. Officia nostrud elit sint ad officia.

Proident deserunt incididunt excepteur amet cupidatat sint est fugiat adipisicing. Minim non Lorem qui fugiat sint. Lorem labore occaecat amet voluptate enim magna consequat aliqua.

Veniam cupidatat exercitation laboris ipsum veniam laborum occaecat aute. Duis eu esse qui nulla aliqua tempor aliquip. Tempor do incididunt duis officia amet dolore in velit pariatur enim. Laboris veniam cupidatat esse deserunt in anim deserunt cillum nisi et quis occaecat consequat.

# Figures

### How to insert centered caption in a page?
```markdown
| ![picture name](path) |
|:--:|
| *caption* |
```

For more checkout [Using an image caption in Markdown Jekyll](https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll)

# Table
| INSERTION-SORT(A) | cost | times |
| ----------------- |:----:| -----:|
| 1 ```for j = 2 to A.length``` | $c_1$ | n |
| 2 &nbsp; &nbsp; ```key = A[j]``` | $c_2$ | n - 1 |
| 3 &nbsp; &nbsp; ```//Insert A[j] into the sorted sequence $A[1..j-1]$.``` | 0 | n - 1 | 
| 4 &nbsp; &nbsp; ```i = j - 1``` | $c_4$ | n - 1 |
| 5 &nbsp; &nbsp; ```while i > 0 and A[i] > key```| $c_5$ | $\sum_{j=2}^n t_j$ | 
| 6 &nbsp; &nbsp; &nbsp; ```A[i+1] = A[i]``` | $c_6$ | $\sum_{j=2}^n (t_j-1)$ |
| 7 &nbsp; &nbsp; &nbsp;  ``` i = i - 1``` | $c_7$ | $\sum_{j=2}^n (t_j - 1)$ |
| 8 &nbsp; &nbsp; ```A[i+1] = key``` | $c_8$ | n -1 |
[Tables](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)

# Applications of vanilla HTML and CSS in markdown notes
## Accordian
```markdown
<details>
  <summary>
  Click me to expand
  </summary>
</details>
```
Example:
<details>
  <summary>
  Click me to expand
  </summary>
  <p>This is the hidden text</p>
  - asd
  - asd
</details>

The user plug-in of Vscode might not parse the ```markdown``` code in the HTML. But the github might work.  

### Troubleshoot
- [Accordion collapses when saving(Ctrl+S) and doesn't keep up with mouse scrolling #788](https://github.com/yzhang-gh/vscode-markdown/issues/788)
  - Add ```open``` atttribute and delete it when done editing
## Animation
### Embedded gif animation

# Hyperlink

[Doesn't work?](https://aso-resources.une.edu.au/academic-writing/grammar/using-articles/#:~:text=The%20indefinite%20article%20(a%2C%20an,nouns%20or%20with%20plural%20nouns.&text=Use%20a%2C%20an%20when%20you,noun%20or%20an%20uncountable%20noun.)

# Reference