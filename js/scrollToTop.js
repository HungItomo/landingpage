// scrollToTop.js

document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTopBtn");

    if (!scrollBtn) return;

    // Ẩn nút khi load trang
    scrollBtn.style.display = "none";

    // Ẩn/hiện nút khi cuộn
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Khi click thì cuộn lên đầu trang
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
