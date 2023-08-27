/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// Menu Show
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// menu hidden
// validate if constant exists

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => {
    n.addEventListener("click", linkAction);
});

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else if (sectionsClass) {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// preferred theme(last used theme by user)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// get current theme
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

// validate if user selected a theme
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

// Toggle theme with click
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

////////////////////////////////////////    ALTERNATE WAY   ///////////////////////////////////
// const moonIcon = document.getElementById("moon");
// const sunIcon = document.getElementById("sun");

// let theme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "";

// const darkMode = () => {
//     theme = "dark";
//     localStorage.setItem("theme", JSON.stringify(theme));
//     document.body.classList.add("dark-theme");
//     moonIcon.style.display = "none";
//     sunIcon.style.display = "block";
// };
// const lightMode = () => {
//     theme = "light";
//     localStorage.setItem("theme", JSON.stringify(theme));
//     document.body.classList.remove("dark-theme");
//     moonIcon.style.display = "block";
//     sunIcon.style.display = "none";
// };

// moonIcon.addEventListener("click", darkMode);
// sunIcon.addEventListener("click", lightMode);

// window.addEventListener("load", () => {
//     if (JSON.parse(localStorage.getItem("theme")) === "light") {
//         lightMode();
//     } else if (JSON.parse(localStorage.getItem("theme")) === "dark") {
//         darkMode();
//     } else {
//         lightMode();
//     }
// });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "120px",
    duration: 2000,
    delay: 200,
    reset: true, //animations repeat
});

sr.reveal(`.home__perfil, .about__image`, { origin: "right" });
sr.reveal(`.home__name, .home__info,.about__container .section__title-1,.about__info`, { origin: "left" });
sr.reveal(`.projects__card`, { interval: 200 });
sr.reveal(`.section__title-2`, { origin: "bottom" });
