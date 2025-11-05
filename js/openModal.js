let currentIndex = 0; // Chỉ mục của ảnh đang được hiển thị

// 1. Khởi tạo và Thu thập ảnh tự động khi trang tải
document.addEventListener("DOMContentLoaded", () => {
    // Lấy thẻ ảnh lớn (có ID) và 4 thẻ ảnh nhỏ (có class)
    const mainImage = document.getElementById("main-image");
    const thumbs = Array.from(document.querySelectorAll(".thumb"));

    // Xóa sạch mảng trước khi thu thập (đảm bảo không có rác)
    galleryImages = [];

    // Bắt đầu mảng với ảnh lớn (nếu có)
    if (mainImage) {
        galleryImages.push(mainImage.src);
    }

    // Thêm các ảnh nhỏ, chỉ thêm nếu chưa tồn tại trong mảng (tránh trùng lặp)
    thumbs.forEach((img) => {
        if (!galleryImages.includes(img.src)) {
            galleryImages.push(img.src);
        }
    });

    console.log("Gallery Loaded with:", galleryImages.length, "images.");
    console.log("Images:", galleryImages);
});

// 2. Mở Modal
function openModal(clickedElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Tìm chỉ mục của ảnh được click trong mảng
    currentIndex = galleryImages.indexOf(clickedElement.src);

    // Cập nhật ảnh và hiển thị Modal
    modalImg.src = clickedElement.src;
    modal.classList.remove("hidden");
}

// 3. Đóng Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
}

// 4. Chuyển đổi ảnh (Next/Prev)
function changeImage(step) {
    const modalImg = document.getElementById("modalImage");

    // Tính toán chỉ mục mới
    let newIndex = currentIndex + step;

    // Xử lý vòng lặp (looping)
    if (newIndex < 0) {
        newIndex = galleryImages.length - 1; // Về cuối
    } else if (newIndex >= galleryImages.length) {
        newIndex = 0; // Quay lại đầu
    }

    currentIndex = newIndex;

    // Cập nhật nguồn ảnh
    modalImg.src = galleryImages[currentIndex];
}

// 5. Đóng Modal và chuyển ảnh bằng phím tắt
document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("imageModal");

    // Chỉ xử lý nếu Modal đang hiển thị
    if (!modal.classList.contains("hidden")) {
        if (e.key === "Escape") {
            closeModal(); // Đóng bằng ESC
        } else if (e.key === "ArrowRight") {
            changeImage(1); // Next bằng Mũi tên Phải
        } else if (e.key === "ArrowLeft") {
            changeImage(-1); // Prev bằng Mũi tên Trái
        }
    }
});
