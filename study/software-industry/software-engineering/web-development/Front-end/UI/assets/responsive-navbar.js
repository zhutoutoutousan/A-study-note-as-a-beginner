const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');


    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Animate Links
    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
    })
}

// const app = () => {
//     navSlide();
// }

navSlide();