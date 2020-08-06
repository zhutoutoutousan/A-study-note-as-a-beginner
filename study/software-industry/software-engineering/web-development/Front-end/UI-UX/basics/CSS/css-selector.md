# Type
# Class
# Id
# Attribute
- Select this type if the attribute in the square bracket is present.
```css
/* type [attribute1[, attribute2[, attribute 3[,...]]]] {} */
a[title]{}
```
- Select this type if the attribute of the type has a particular value
```css
/* type[attribute="value"] { } */
a[href="https://fuckyouverymuch.com"]{ }
```
# Pseudo-classes and pseudo-elements
## Pseudo-classes
## Pseudo-elements
## ```:hover```
## ```::before```
## ```::after```
In CSS, ```::after``` creates a *pseudo-element*
## ```:root``` and ```var()```
Usage:
```css
:root {
    --clr-primary: #ee6352;
    --clr-body: #333;
    /* etc */
}

body {
    /* etc */
    color: var(--clr-body);
}

```
## ```:focus```
[MDN :focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
### ```:focus-within```
Includes the childs of the node as trigger conditions
[MDN :focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

# Combinators
## ```>```
## ```=```
## ```+```
## ```[attribute="value"]```
# Resource
[MDN - Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
[Before and After pseudo elements explained - part one: how they work](https://www.youtube.com/watch?v=zGiirUiWslI)