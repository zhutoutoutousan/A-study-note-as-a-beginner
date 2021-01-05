# Table of Contents
- [Table of Contents](#table-of-contents)
- [Mental model](#mental-model)
- [Prerequisites](#prerequisites)
  - [Screen](#screen)
  - [Window](#window)
- [```<length>```](#length)
  - [Absolute length units](#absolute-length-units)
    - [pixel](#pixel)
  - [Relative length units](#relative-length-units)
    - [Viewport-percentage lengths](#viewport-percentage-lengths)
      - [vw](#vw)
      - [vh](#vh)
      - [vm](#vm)
    - [Root-weight lengths](#root-weight-lengths)
      - [em](#em)
      - [rem](#rem)
      - [Comparison between ```em``` and ```rem```](#comparison-between-em-and-rem)
    - [Uncategorized](#uncategorized)
      - [fr](#fr)
  - [Reference](#reference)
- [```<length-percentage>```](#length-percentage)
- [```<number>```](#number)
- [```<color>```](#color)
- [```<image>```](#image)
  - [```url(<path>)```](#urlpath)
  - [```<color>```](#color-1)
- [```<position>```](#position)
  - [```left/right/top/bottom```](#leftrighttopbottom)
  - [```float```](#float)
  - [```position```](#position-1)
  - [```z-index```](#z-index)
  - [```clear```](#clear)
- [```<function>```](#function)
- [```<angle>```](#angle)
  - [```deg```](#deg)
- [```<percentage>```](#percentage)
- [```<transform-function>```](#transform-function)
  - [```scale()```](#scale)
# Mental model
One of the goals is to instantly translate all the length units to how much space does it take on the screen.
# Prerequisites
## Screen
## Window
# ```<length>```
## Absolute length units
### pixel

## Relative length units
### Viewport-percentage lengths
#### vw
- 1% of the viewport's width.
#### vh
- Equal to 1% of the height of the viewport's initial containing block
#### vm
### Root-weight lengths
#### em
- Font size of the parent, in the case of typographical properties like ```font-size```, and font size of the element itself, in the case of other properties like ```width```.
#### rem
#### Comparison between ```em``` and ```rem```
```html
<div class="col col--em">
    <h1>em</h1>
    <p>All the font sizes in this column are set using ems.</p>
</div>
```

For more see 
- [CSS em and rem explained](https://www.youtube.com/watch?v=_-aDOAMmDHI)
### Uncategorized
#### fr
- [CSS-trick: Introduction fr css unit](https://css-tricks.com/introduction-fr-css-unit/)
## Reference
[Css values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

# ```<length-percentage>```

# ```<number>```

# ```<color>```

# ```<image>```
## ```url(<path>)```
## ```<color>```
# ```<position>```
## ```left/right/top/bottom```
## ```float```
## ```position```
## ```z-index```
## ```clear```
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
# ```<function>```

# ```<angle>```
## ```deg```
- Rotate **anti-clockwise**
# ```<percentage>```

# ```<transform-function>```
## ```scale()```