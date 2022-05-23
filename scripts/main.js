let forTitle = document.querySelector('.section__title.for__title');
let forCards = document.querySelector('.for__cards');

adaptiveTitle();
addEventListener('resize', adaptiveTitle);

function adaptiveTitle() {
    let isAdaptive = innerWidth > forTitle.getAttribute('data-adptive');
    isAdaptive ? forCards.before(forTitle) : forCards.append(forTitle);
}

// Partners Slider
let partnersSlider = new Swiper('.partners__list', {
    slidesPerView: "auto",
    spaceBetween: 30,
});

// Revies Video Slider
let reviewsVideo = new Swiper('.reviews__video-slider', {
    slidesPerView: "auto",
    spaceBetween: 30,
});

let reviewsComennt = new Swiper(".reviews__comennt-slider", {
    cssMode: true,
    navigation: {
        nextEl: ".reviews__comennt-slider-next",
        prevEl: ".reviews__comennt-slider-prev",
    },
    mousewheel: true,
    keyboard: true,
});


// Functions - Section
let functionTitle = document.querySelector('.section__title.functions__title');
let functionTxt = document.querySelector('.functions__txt');
adaptiveFunctionsSection();
addEventListener('resize', adaptiveFunctionsSection);

function adaptiveFunctionsSection() {
    let isAdaptive = innerWidth > functionTitle.getAttribute('data-adptive');
    isAdaptive ? functionTxt.append(functionTitle) : functionTxt.before(functionTitle);
}