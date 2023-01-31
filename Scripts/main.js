// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};


/*==================== Show Menu ====================*/
const navMenu = selectElement('#nav-menu');
const navToggle = selectElement('#nav-toggle');
const navClose = selectElement('#nav-close');

// Open Menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

// Close Menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== Remove Menu Mobile ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = selectElement('#nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== Change Header Background ====================*/
function scrollHeader(){
    const header = selectElement('#header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


/*==================== Show Scroll Up ====================*/ 
function scrollUp(){
    const scrollUp = selectElement('#scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== Scroll Reveal Animation ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})


/*==================== Swiper ====================*/
let homeSwiper = new Swiper(".home-swiper", {
    // How much space between slides
    spaceBetween: 30,
    loop: 'true',
    
    // Make the pagination indicators work
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

/*==================== New Swiper ====================*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});