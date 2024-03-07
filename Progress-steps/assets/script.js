const steps = document.querySelectorAll(".progress-container span");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelector(".progress-bar");

let activeSteps = 0;

nextBtn.addEventListener("click", () => {
    activeSteps++;
    if (activeSteps > steps.length - 1) {
        activeSteps = 3;
        return;
    }

    updateSteps();
});

prevBtn.addEventListener("click", () => {
    activeSteps--;
    if (activeSteps < 0) {
        activeSteps = 0;
        return;
    }

    updateSteps();
});

function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.remove("active");
        if (index <= activeSteps) step.classList.add("active");
    });

    progress.style.width = `${100 / ((steps.length - 1) / activeSteps)}%`;

    if (activeSteps === 0) prevBtn.disabled = true;
    else if (activeSteps === 3) nextBtn.disabled = true;
    else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}
