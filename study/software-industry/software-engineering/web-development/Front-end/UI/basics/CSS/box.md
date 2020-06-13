# Table of Contents
# Mental model
Check out [Mental model](./mental-model.md)

# Border

# Margin
## Naming traditions
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

# Outline
## Difference between ```outline``` and ```border```
- Outlines do not take up space, because they always placed on top of the box of the element which may cause them to overlap other elements on the page.
- Unlike borders, outlines won't allow us to set each edge to a different width, or set different colors and styles for each edge. An outline is the same on all sides, which means, there's no such like ```outline-left``` or ```outline-right``` compared to ```border-left``` or ```border-right```.
- Outlines don't have any impact on surrounding elements apart from overlapping.
- Unlike borders, outlines don't change the size or position of the element.
- Outlines may be non-rectangular

See [Outlines Vs Borders](https://www.tutorialrepublic.com/css-tutorial/css-outline.php#:~:text=Unlike%20borders%2C%20outlines%20won't,or%20position%20of%20the%20element.) for more.

# Height
## ```height```
## ```max-height```
- ```max-height``` overrides ```height```, and ```min-height``` overrides ```max-height```.
## ```min-height```