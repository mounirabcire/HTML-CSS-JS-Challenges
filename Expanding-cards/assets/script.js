const body = document.querySelector("body");
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        // removeActiveClass();

        panel.classList.add("active");
    });
});

body.addEventListener("click", () => {
    removeActiveClass();
}, true);

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
