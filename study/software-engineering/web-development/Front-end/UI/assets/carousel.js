// class carousel {
//     constructor() {

//     }
// }

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button');
const prevButton = document.querySelector('.crousel__button--left');


// When I click Left, move slides to the left
// When I click Right, move slides to the right
// When I click the nav indicators, move to that slide