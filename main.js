"use strict";
//Make navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Hansdle scrolling when taping on the navbar menu

const nav__menu = document.querySelector(".nav__menu");

nav__menu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  nav__menu.classList.remove("open");
  scrollInToView(link);
  selectNavItem(target);
});
//Nabar toffle button for small screen

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  nav__menu.classList.toggle("open");
});
// handle click on "contact me " button on me
const contact = document.querySelector(".home__contact");

contact.addEventListener("click", (event) => {
  scrollInToView("#contact");
});

const arry = [1, 2.3];
arry.forEach;

// make home slowy fade to transpratarent as the window scrolls down

const home = document.querySelector(".home__container");
const homeheigh = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeheigh;
});
//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheigh / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollInToView("#home");
});

// My work
const workBtn = document.querySelector(".work__categories");
const workProject = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtn.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  //Remove selection form the previous item and select the new
  const active = document.querySelector(".category_btn.selected");
  active.classList.remove("selected");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("selected");

  workProject.classList.add("ainim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisibe");
      } else {
        project.classList.add("invisibe");
      }
    });
    workProject.classList.remove("ainim-out");
  }, 300);

  /* for(let project of projects){
        console.log(project);
    }

    let project
    for(let i = 0;i <projects.length ; i++){
        project = projects[i];
        console.log(project);
    }*/
});

//1. 모든 섹션 요소들을 가지고 온다
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);

//2. IntersecttionObserve를 이용해 모든 섹션을 관찰한다.
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(select) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = select;
  selectedNavItem.classList.add("active");
}
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);

      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});

function scrollInToView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
