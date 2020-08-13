# Table of Contents
- [Table of Contents](#table-of-contents)
- [Mental model](#mental-model)
- [Shape](#shape)
  - [```border```](#border)
  - [```margin```](#margin)
    - [Syntax](#syntax)
  - [```box-sizing```](#box-sizing)
    - [```content-box```](#content-box)
      - [Mental model](#mental-model-1)
      - [Behaviour check](#behaviour-check)
      - [Calculation](#calculation)
    - [```border-box```](#border-box)
      - [Mental model](#mental-model-2)
      - [Behaviour check](#behaviour-check-1)
      - [Calculation](#calculation-1)
    - [```padding-box```](#padding-box)
    - [Resource](#resource)
  - [```height```](#height)
  - [```max-height```](#max-height)
  - [```min-height```](#min-height)
- [Styling](#styling)
  - [Outline](#outline)
    - [Difference between ```outline``` and ```border```](#difference-between-outline-and-border)
  - [```box-shadow```](#box-shadow)
    - [Syntax](#syntax-1)
  - [```background```](#background)
  - [```background: url(<path>) | repeat | location```](#background-urlpath--repeat--location)
    - [```background-size```](#background-size)
- [Position](#position)
  - [Absolute](#absolute)
  - [Relative](#relative)
  - [Sticky](#sticky)
  - [Flex](#flex)
  - [Fixed](#fixed)
  - [Nested situations](#nested-situations)
    - [Absolute in Relative](#absolute-in-relative)
    - [Relative in Absolute](#relative-in-absolute)
- [display](#display)
  - [```justify-content```](#justify-content)
# Mental model
Check out [Mental model](./mental-model.md)

# Shape

## ```border```

## ```margin```
### Syntax
```css
/* Apply to all four sides */
.someclass{
margin: 1em;
margin: -3px;

/* Remember using one sentence: Top down, clock-wise */

/* vertical | horizontal */
margin: 5% auto;

/* top | horizontal | bottom */
margin: 1em auto 2em;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;

/* Global values */
margin: inherit;
margin: initial;
margin: unset;
}
```

## ```box-sizing```
### ```content-box```
#### Mental model
- As a child of a parent, content-box is willful, given the height and width restraints, its border usually overcedes the line drawn by its parent. Every child is born willful and can be tamed by assigning ```rules```.
#### Behaviour check
#### Calculation
### ```border-box```
#### Mental model
- As a child of a parent, border-box is not willful, given the height and width restraints, its shrinks its sides so that its border doesn't excede the line drawn by its parent.
#### Behaviour check
#### Calculation
### ```padding-box```
### Resource
- [MDN - box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [box-sizing: border-box explained](https://www.youtube.com/watch?v=WlGQdgy-M6w) 0:14/5:21
  - [codepenn](https://codepen.io/zhutoutoutousan/pen/yLeoKJZ)
## ```height```
## ```max-height```
- ```max-height``` overrides ```height```, and ```min-height``` overrides ```max-height```.
## ```min-height```

# Styling
## Outline
### Difference between ```outline``` and ```border```
- Outlines do not take up space, because they always placed on top of the box of the element which may cause them to overlap other elements on the page.
- Unlike borders, outlines won't allow us to set each edge to a different width, or set different colors and styles for each edge. An outline is the same on all sides, which means, there's no such like ```outline-left``` or ```outline-right``` compared to ```border-left``` or ```border-right```.
- Outlines don't have any impact on surrounding elements apart from overlapping.
- Unlike borders, outlines don't change the size or position of the element.
- Outlines may be non-rectangular

See [Outlines Vs Borders](https://www.tutorialrepublic.com/css-tutorial/css-outline.php#:~:text=Unlike%20borders%2C%20outlines%20won't,or%20position%20of%20the%20element.) for more.

## ```box-shadow```
### Syntax
```css
.genericClass {
    /* How to memorize */

    /* Keyword values */
    box-shadow: none;

    /* offset-x | offeset-y | color */
    box-shadow: 60px -16px teal;

    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 10px 5px 5px black;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* inset | offset-x | offset-y | color */
    box-shadow: inset 5em 1em gold;

    /* Any number of shadows, separated by commas */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;

    /* Global keywords */
    box-shadow: inherit;
    box-shadow: initial;
    box-shadow: unset;
}
```

## ```background```
## ```background: url(<path>) | repeat | location```
### ```background-size```


# Position
## Absolute
## Relative
## Sticky
## Flex
[CSS layout](./css-layout.md)
## Fixed
## Nested situations
### Absolute in Relative
### Relative in Absolute

# display
## ```justify-content```