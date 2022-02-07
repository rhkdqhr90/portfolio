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
   
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});

    
});