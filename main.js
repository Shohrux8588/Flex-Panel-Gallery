let panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleOpenActive(e) {
    if (e.propertyName === "flex-grow") {
        this.classList.toggle("open-active");
    }
}
panels.forEach(e => {
    e.addEventListener("click", toggleOpen);
    e.addEventListener("transitionend", toggleOpenActive);
})