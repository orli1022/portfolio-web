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
