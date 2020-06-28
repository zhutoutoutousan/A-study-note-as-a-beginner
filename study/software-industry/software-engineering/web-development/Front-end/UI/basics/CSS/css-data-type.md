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
      - [vh](#vh)
      - [vm](#vm)
  - [em](#em)
  - [rem](#rem)
    - [Comparison between ```em``` and ```rem```](#comparison-between-em-and-rem)
  - [Reference](#reference)
- [```<number>```](#number)
- [```<color>```](#color)
- [```<image>```](#image)
  - [```url(<path>)```](#urlpath)
- [```<position>```](#position)
- [```<function>```](#function)
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
#### vh
Equal to 1% of the height of the viewport's initial containing block
#### vm
## em
Font size of the parent, in the case of typographical properties like ```font-size```, and font size of the element itself, in the case of other properties like ```width```.
## rem
### Comparison between ```em``` and ```rem```
```html
<div class="col col--em">
    <h1>em</h1>
    <p>All the font sizes in this column ar eset using ems.</p>
</div>
```




For more see 
- [CSS em and rem explained](https://www.youtube.com/watch?v=_-aDOAMmDHI)

## Reference
[Css values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

# ```<number>```

# ```<color>```

# ```<image>```
## ```url(<path>)```
# ```<position>```

# ```<function>```

