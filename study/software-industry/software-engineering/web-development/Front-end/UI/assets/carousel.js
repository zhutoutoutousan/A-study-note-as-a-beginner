// class carousel {
//     constructor() {

//     }
// }

// When I click Left, move slides to the left
// When I click Right, move slides to the right
// When I click the nav indicators, move to that slide



const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slides next to one another
// Vorsicht: The space in the 'px' matters
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left; 
    // move the slide
    track.style.transform = `translateX(-${amountToMove})`;
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})