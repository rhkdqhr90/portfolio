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
    nav__menu.classList.remove('open');
    scrollInToView(link);

});
//Nabar toffle button for small screen 

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    console.log('dd');
    nav__menu.classList.toggle('open');
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

// My work 
const workBtn = document.querySelector('.work__categories');
const workProject = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtn.addEventListener('click', (event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
        return
    }
    //Remove selection form the previous item and select the new
    const active = document.querySelector('.category_btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : 
    event.target.parentNode;
    target.classList.add('selected');
    
    workProject.classList.add('ainim-out');   
    setTimeout(()=>{
        projects.forEach((project)=>{        
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisibe');
            }else{
                project.classList.add('invisibe');
            }
        });
        workProject.classList.remove('ainim-out');
    },300)

 /* for(let project of projects){
        console.log(project);
    }

    let project
    for(let i = 0;i <projects.length ; i++){
        project = projects[i];
        console.log(project);
    }*/
});


function scrollInToView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

