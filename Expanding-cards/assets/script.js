const body = document.querySelector("body");
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    // 1- event click will trigger first the body then the panel.
    panel.addEventListener("click", () => {
        panel.classList.add("active");
    });
});

// I set the third parameter(useCapture) to true, because whenever I'm gonna click on a pennel element I wanted to handle the click event first on the body which is the parent then on the panel which is the child. (capturing)   
body.addEventListener("click", () => {
    removeActiveClass();
}, true);

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
