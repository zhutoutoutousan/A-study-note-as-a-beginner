# Table of Contents
- [Table of Contents](#table-of-contents)
- [Vanilla JavaScript](#vanilla-javascript)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [Todo](#todo)
  - [Resource](#resource)
- [Vue](#vue)
  - [vue-router](#vue-router)
  - [Vuex](#vuex)
  - [element-ui](#element-ui)
- [React](#react)
- [Resource](#resource-1)
# Vanilla JavaScript
## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="carousel.css">
    <title>Vanilla JS Carousel</title>
</head>
<body>
    <div class="carousel">
        <button class="carousel__button carousel__button--left is-hidden" >
            <img src="img/back.svg" alt="">
        </button>
        <div class="carousel__track-container">
            <ul class="carousel__track">
                <li class="carousel__slide current-slide">
                    <img class="carousel__image" src="./img/1.jpeg" alt="">
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="./img/2.jpeg" alt="">
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="./img/3.jpeg" alt="">
                </li>
            </ul>
        </div>
        <button class="carousel__button carousel__button--right">
            <img src="img/next.svg" alt="">
        </button>

        <div class="carousel__nav">
            <button class="carousel__indicator current-slide"></button>
            <button class="carousel__indicator"></button>
            <button class="carousel__indicator"></button>
        </div>
    </div>
</body>
<div class="reference">
Icons made by <a href="https://www.flaticon.com/authors/lyolya" title="Lyolya">Lyolya</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</div>
<script src="carousel.js"></script>
</html>
```
## CSS
```css
.carousel {
    position: relative;
    height: 600px;
    width: 80%;
    margin: 0 auto;
}

.carousel__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel__track-container {
    background: lightgreen;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.carousel__track {
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    transition: transform 250ms ease-in;
}

.reference {
    display: block;
    position: relative;
    transform: translateY(+200%);
}

.carousel__slide {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    cursor: pointer;
}

.carousel__button--left {
    left: -40px;
}

.carousel__button--right {
    right: -40px;
}

.carousel__button img {
    width: 10px;
}

.carousel__nav {
    /* background: pink; */
    display: flex;
    justify-content: center;
}

.carousel__indicator {
    border: 0;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    margin: 12px;
    background: black;
    cursor: pointer;
}

.carousel__indicator.current-slide {
    background: rgba(71, 59, 82, 0.55);
    color: rgba(71, 59, 82, 0.55);
}

.is-hidden { display: none;}
```
## JavaScript
```javascript
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const UpdateButtonVisibility = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');        
    }
}

const UpdateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNavs.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    UpdateDots(currentDot, nextDot);
    UpdateButtonVisibility(slides, prevButton, nextButton, nextIndex);
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot =  dotsNavs.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    UpdateDots(currentDot, prevDot)
    UpdateButtonVisibility(slides, prevButton, nextButton, prevIndex);
})

dotsNavs.addEventListener('click', e => {
    // What indicator was clicked on
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNavs.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    UpdateDots(currentDot, targetDot);
    UpdateButtonVisibility(slides, prevButton, nextButton, targetIndex);
})
```

## Todo
- Code quality
  - Better comment
  - Functional programming
  - Objected-oriented programming
- Function
  - Timed transition
  - With the options
  - Build a site to contain the carousel
  - Manual mode/Timed transition mode
- Dexterity
  - Review and build a mental model for fast development
  - Find a fastest way to get a carousel up and running(Introduce frameworks and libraries)
## Resource
[How to code a carousel with HTML, CSS and JavaScript - from scratch (part 1)](https://www.youtube.com/watch?v=VYsVOamdB0g)   -- OK  
[How to code a carousel with HTML, CSS and JavaScript - from scratch (part 2)](https://www.youtube.com/watch?v=gBzsE0oieio&t=15s) -- OK
[Advance image slider in header with animation effect, JavaScript tutorial](https://www.youtube.com/watch?v=gBAgeONzRN8) 0:00/15:24
[How To Make an Infinite AutoPlay Image Slider Using JavaScript](https://www.youtube.com/watch?v=DqkH_PV5cto&t=24s)

# Vue
## vue-router
## Vuex
## element-ui


# React

# Resource

[原生js实现轮播图](https://www.cnblogs.com/zhuzhenwei918/p/6416880.html)    
[原生js实现轮播图 - github](https://github.com/zzw918/swiper)