'use strict';
//Make navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');

    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// Hansdle scrolling when taping on the navbar menu

const nav__menu = document.querySelector('.nav__menu');

nav__menu.addEventListener('click',(event)=>{    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    scrollInToView(link);

    
});
// handle click on "contact me " button on me
const contact = document.querySelector('.home__contact');

contact.addEventListener('click',(event)=>{
    scrollInToView('#contact')
});



// make home slowy fade to transpratarent as the window scrolls down

const home = document.querySelector(".home__container");
const homeheigh = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1-window.scrollY/homeheigh;
   
});
//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener("scroll", () => {
    
    if (window.scrollY > homeheigh / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener("click", ()=>{
    scrollInToView('#home');
});

function scrollInToView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

