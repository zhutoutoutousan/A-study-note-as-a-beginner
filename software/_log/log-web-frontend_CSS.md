# Table of Contents
- [Table of Contents](#table-of-contents)
- [2021/3/8](#202138)
  - [How to deal with fonts - Fonts](#how-to-deal-with-fonts---fonts)
  - [Get some generic pattern - CSS React.js Vue.js](#get-some-generic-pattern---css-reactjs-vuejs)
- [2021/6/16](#2021616)
  - [How to Zoom on Hover with CSS](#how-to-zoom-on-hover-with-css)
  - [Everything you need to know about Icon font](#everything-you-need-to-know-about-icon-font)
  - [List pseudo classes](#list-pseudo-classes)
  - [Difference between rgba(...) and opacity](#difference-between-rgba-and-opacity)
  - [Use `@for` to achieve movie-like animation](#use-for-to-achieve-movie-like-animation)

# 2021/3/8
## How to deal with fonts - Fonts
Another day of enduring the stupid BOSS and relatively intermediate colleagues, I was looking for a convenient way to deal with stupid customized fonts in the web, and here's what I found:
- https://parall.ax/blog/view/3072/tutorial-reducing-the-file-size-of-custom-web-fonts

2021/6/16
Consider creating a font section to migrate to the permanent note.


## Get some generic pattern - CSS React.js Vue.js
- [React-admin](https://github.com/marmelab/react-admin)
- [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin)
I am tired of setting all those bullshit CSS architecture, get some prepared template

2021/6/16
Let's say, if you were to describe the structure of the global styling that should be put into a project, what would you say?
- Variable declaration
  - Use `:root` or `$` in sass
  - Coloring
  - Generic transition, radius, shadow, spacing
- Global styles


```css
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(162, 61%, 89%);
  --clr-primary-2: hsl(162, 60%, 78%);
  --clr-primary-3: hsl(162, 61%, 67%);
  --clr-primary-4: hsl(162, 61%, 57%);
  /* primary/main color */
  --clr-primary-5: hsl(162, 73%, 46%);
  /* lighter shades of primary color */
  --clr-primary-6: #1aa179;
  --clr-primary-7: #13795b;
  --clr-primary-8: #0d503c;
  --clr-primary-9: #06281e;
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(212, 33%, 89%);
  --clr-grey-2: hsl(210, 31%, 80%);
  --clr-grey-3: hsl(211, 27%, 70%);
  --clr-grey-4: hsl(209, 23%, 60%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 28%, 39%);
  --clr-grey-7: hsl(209, 34%, 30%);
  --clr-grey-8: hsl(211, 39%, 23%);
  --clr-grey-9: hsl(209, 61%, 16%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  --max-width: 1170px;
  --fixed-width: 450px;
  --clr-pink: #f28ab2;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-pink);
  color: var(--clr-grey-9);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */


```

# 2021/6/16
## How to Zoom on Hover with CSS

## Everything you need to know about Icon font

## List pseudo classes

## Difference between rgba(...) and opacity
- 本体论: `opacity`是一个属性, `rgba`是颜色属性的值中的一个组成部分
## Use `@for` to achieve movie-like animation
- [Loops in CSS Preprocessors](https://css-tricks.com/loops-css-preprocessors/)
  - Let's say if you were the UI, what parameters shall you discuss with the front-end developer to maximize efficiency?