const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
    // Reset trạng thái để kích hoạt animation lại mỗi lần mở
    setTimeout(() => {
        modalImg.classList.remove("opacity-0", "scale-90");
        modalImg.classList.add("opacity-100", "scale-100");
    }, 10);
}

function closeModal() {
    // Hiệu ứng thu nhỏ mượt khi đóng
    modalImg.classList.remove("opacity-100", "scale-100");
    modalImg.classList.add("opacity-0", "scale-90");
    setTimeout(() => modal.classList.add("hidden"), 300);
}

// Đóng modal khi nhấn phím ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
