# Type
- duh
# Class
- duh
# Id
- duh
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
- [CSS tricks - ::before / ::after](https://css-tricks.com/almanac/selectors/a/after-and-before/)
## ```::after```
- [CSS tricks - ::before / ::after](https://css-tricks.com/almanac/selectors/a/after-and-before/)
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
## ```>```: Child
- The **child combinator**(```>```) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Descendent elements further down the hierarchy don't match.
```html
<!-- 
    Maddy --|
            |--Kiddo - Maddy I
            |--Kiddo - Maddy II
            |--Kiddo - Maddy III
            |--Kiddo - Maddy IV

    Maddy > Kiddo ==>  Maddy I
 -->
```
## ```+```: Next sibling
```html
<!-- 
+ : Select the next sibling

JERKS - Maddy --|
                |--Kiddo - Maddy I
                |--Kiddo - Maddy II
                |--Kiddo - Maddy III
                |--Kiddo - Maddy IV

JERKS - Dummy --|
                |--Kiddo - Dummy I
                |--Kiddo - Dummy II
                |--Kiddo - Dummy III
                |--Kiddo - Dummy IV

JERKS - Fluffy --|
                 |--Kiddo - Fluffy I
                 |--Kiddo - Fluffy II
                 |--Kiddo - Fluffy III
                 |--Kiddo - Fluffy IV

Kiddo - Jerky


    Dummy + JERKS ==> Fluffy
    Maddy II + Kiddo ==> Maddy III
    Fluffy IV + Kiddo ==> 
    Fluffy + Kiddo ==> Jerky
 -->
```
## ```~```: All siblings
- Select all siblings
## ```[attribute="value"]```


# Good practices

# Resource
[MDN - Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
[Before and After pseudo elements explained - part one: how they work](https://www.youtube.com/watch?v=zGiirUiWslI)