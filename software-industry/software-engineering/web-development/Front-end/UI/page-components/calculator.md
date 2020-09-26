# Notes

## Positioning --> CSS code
- Centering: body --> margin: 0 auto 
- Vertical positioning: padding
- To let the normal flow position the buttons automatically, just set the ```calculator``` div to ```width: var(--container--width)```, and the buttons to ```width: var(--button-width)```.
    - Just let the button fill out its space
- What does this example tell us about the normal flow of ```CSS```?
- ```float: left```? Shall I have a quick recap of ```float``` layout?

## Styling
Font
Fontweight

## HTML
- What's the difference between using the ```innerHTML``` attribute and the ```data``` attribute?
  - More flexibility, the use of  ```innerHTML``` is not considered flexible


# TODO:
- [x] ```broken``` animation not working
  - [x] For $1920px \times 975px$ screen,` the ```broken``` animation is not going all the way down. 
  - [x] For $1280px \times 616px$ screen, it works`
- [ ] Positioning problem for $1280px \times 616px$ screen
- [ ] The zoom effect for operations still has positioning issues
- [ ] Functionalities
  - [ ] When you click ```=``` multiple times, it doesn't show the right answer
  - [ ] Disallow . from being entered multiple times
  - [ ] Limit number input
- [ ] Code quality
# Resource
- [JavaScript Calculator](https://codepen.io/giana/pen/GJMBEv)