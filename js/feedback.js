const carousel = document.getElementById("carousel");
const slides = carousel.children.length;
let index = 0;
let autoSlide;

function getVisibleCount() {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 3;
}

function updateCarousel() {
    const visible = getVisibleCount();
    carousel.style.transform = `translateX(-${index * (100 / visible)}%)`;
}

function nextSlide() {
    const visible = getVisibleCount();
    if (index < slides - visible) index++;
    else index = 0;
    updateCarousel();
}

function prevSlide() {
    const visible = getVisibleCount();
    if (index > 0) index--;
    else index = slides - visible;
    updateCarousel();
}

document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Tự chạy
startAutoSlide();

// Dừng khi hover
const wrapper = document.querySelector(".group");
wrapper.addEventListener("mouseenter", stopAutoSlide);
wrapper.addEventListener("mouseleave", startAutoSlide);

window.addEventListener("resize", updateCarousel);
