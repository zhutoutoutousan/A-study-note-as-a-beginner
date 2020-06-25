const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');


    
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navlinks.forEach((link, index) => {
            link.style.animation = link.style.animation ? '' :  `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        })

        // Burger animation
        burger.classList.toggle('toggle');
    });


}

// const app = () => {
//     navSlide();
// }

navSlide();