// light / dark mode

let modeSwitch = document.querySelector(".mode-switch");
let body = document.querySelector("body");

modeSwitch.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        modeSwitch.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        modeSwitch.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
});

// menu

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav a");
const mediaQuery = window.matchMedia("(max-width: 768px)");
let menuOpen = false; // menu預設隱藏

function openMenu() {
    if (!menuOpen) {
        menu.style.display = "flex"; // menu顯示
    } else {
        menu.style.display = "none"; // menu隱藏
    }
    menuOpen = !menuOpen; // 切換menu狀態
}

menuBtn.addEventListener("click", () => {
    if (mediaQuery.matches) {
        openMenu();
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mediaQuery.matches) {
            menu.style.display = "none"; // 隱藏menu
            menuOpen = !menuOpen;
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = "flex"; // menu顯示
        menuOpen = false; // 重置menu狀態
    } else {
        menu.style.display = "none"; // 當寬度小於768px時隱藏menu
    }
});
