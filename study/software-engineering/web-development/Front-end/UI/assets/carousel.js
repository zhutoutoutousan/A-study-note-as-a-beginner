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

const slideSize = slides[0].getBoundingClientRect();

