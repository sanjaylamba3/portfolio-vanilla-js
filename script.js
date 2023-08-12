const moonIcon = document.getElementById("moon-icon");
const mainDiv = document.getElementById("main");
const sunIcon = document.getElementById("sun-icon");

let theme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "";

const darkMode = () => {
    mainDiv.classList.remove("main");
    mainDiv.classList.add("main-dark");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    theme = "dark";
    localStorage.setItem("theme", JSON.stringify(theme));
};

const lightMode = () => {
    mainDiv.classList.add("main");
    mainDiv.classList.remove("main-dark");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
    theme = "light";
    localStorage.setItem("theme", JSON.stringify(theme));
};

moonIcon.addEventListener("click", darkMode);

sunIcon.addEventListener("click", lightMode);

window.addEventListener("load", () => {
    if (JSON.parse(localStorage.getItem("theme")) === "light") {
        lightMode();
    } else if (JSON.parse(localStorage.getItem("theme")) === "dark") {
        darkMode();
    } else {
        lightMode();
    }
});

console.log(JSON.parse(localStorage.getItem("theme")));
