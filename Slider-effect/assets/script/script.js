const next = document.getElementById("next");
const prev = document.getElementById("prev");
const sectionList = document.querySelector(".header__section");
const sliderList = document.querySelector(".slider");
const progressBar = document.querySelector(".progress-bar");
let set1, set2;

next.addEventListener("click", () => {
    nextAction();
});

prev.addEventListener("click", () => {
    prevAction();
})

function nextAction() {
    const sectionItem = document.querySelectorAll(".header__section-list");
    const sliderItem = document.querySelectorAll(".slider__item");

    sectionList.appendChild(sectionItem[0]);
    sliderList.appendChild(sliderItem[0]);
    sectionList.classList.add("next-sec");
    sliderList.classList.add("next-img");
    progressBar.classList.add("time-out");
    next.disabled = true;

    clearTimeout(set1);
    set1 = setInterval(() => {
        next.disabled = false;
        sectionList.classList.remove("next-sec");
        sliderList.classList.remove("next-img");
        progressBar.classList.remove("time-out");
    }, 1500);
}

function prevAction() {
    const sectionItem = document.querySelectorAll(".header__section-list");
    const sliderItem = document.querySelectorAll(".slider__item");
    const length = sliderItem.length - 1;

    sectionList.prepend(sectionItem[length]);
    sliderList.prepend(sliderItem[length]);
    sectionList.classList.add("prev-sec");
    sliderList.classList.add("prev-img");
    progressBar.classList.add("time-out");
    prev.disabled = true;

    clearTimeout(set1);
    set1 = setInterval(() => {
        prev.disabled = false;
        sectionList.classList.remove("prev-sec");
        sliderList.classList.remove("prev-img");
        progressBar.classList.remove("time-out");
    }, 1500);
}
