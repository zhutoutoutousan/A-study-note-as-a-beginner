# 2021/3/8
## How to deal with fonts - Fonts
Another day of enduring the stupid BOSS and relatively intermediate colleagues, I was looking for a convenient way to deal with stupid customized fonts in the web, and here's what I found:
- https://parall.ax/blog/view/3072/tutorial-reducing-the-file-size-of-custom-web-fonts

## Get some generic pattern - CSS React.js Vue.js
- [React-admin](https://github.com/marmelab/react-admin)
- [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin)
I am tired of setting all those bullshit CSS architecture, get some prepared template

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