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

// 滾動漸入效果

const sections = document.querySelectorAll("section");

// 使用Intersection Observer來監視元素
const appearOnScroll = new IntersectionObserver(
    entries => {
        // 對每個進入視野的元素進行處理
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        // 當元素有20%進入視野時觸發
        threshold: 0.2
    }
);

// 對每個區塊進行觀察
sections.forEach(section => {
    appearOnScroll.observe(section);
});
