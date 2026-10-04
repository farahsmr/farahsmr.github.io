const slider = document.querySelector(".slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () => {
    slider.scrollBy({ left: 340, behavior: "smooth" });
});

prev.addEventListener("click", () => {
    slider.scrollBy({ left: -340, behavior: "smooth" });
});