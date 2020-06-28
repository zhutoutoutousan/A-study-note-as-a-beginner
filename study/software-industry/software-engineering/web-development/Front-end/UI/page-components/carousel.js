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