// carousel.js

// Khởi tạo tất cả code trong một hàm và chỉ gọi nó sau khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    // 1. Lấy tất cả các phần tử cần thiết
    const carouselContainer = document.getElementById("carousel-container");
    const dotsContainer = document.getElementById("carousel-pagination");

    // Thêm kiểm tra an toàn: Nếu không tìm thấy các phần tử quan trọng, dừng lại.
    if (!carouselContainer || !dotsContainer) {
        console.error(
            "Carousel elements not found. Stopping script execution."
        );
        return;
    }

    const slides = carouselContainer.querySelectorAll("[data-slide]");
    const dots = dotsContainer.querySelectorAll("button");
    const totalSlides = slides.length;
    let currentSlide = 0;
    const intervalTime = 5000;
    let autoSlideInterval;

    // Thiết lập chiều rộng ban đầu (giữ nguyên, nhưng không cần thiết nếu CSS đã đúng)
    carouselContainer.style.width = `${totalSlides * 100}%`;

    // 2. Hàm cập nhật trạng thái của carousel
    function updateCarousel(newSlideIndex) {
        // Cập nhật chỉ số slide hiện tại
        currentSlide = (newSlideIndex + totalSlides) % totalSlides;

        // Tính toán giá trị trượt
        const translateXValue = -(100 / totalSlides) * currentSlide;
        carouselContainer.style.transform = `translateX(${translateXValue}%)`;

        // Cập nhật trạng thái của dots
        dots.forEach((dot, index) => {
            // Xóa các lớp trạng thái cũ
            dot.classList.remove("bg-white/70");
            dot.classList.add("bg-white/30");

            if (index === currentSlide) {
                dot.classList.remove("bg-white/30");
                dot.classList.add("bg-white/70");
            }
        });
    }

    // 3. Hàm chạy slide tự động
    function startAutoSlide() {
        clearInterval(autoSlideInterval); // Đảm bảo xóa cái cũ trước
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % totalSlides;
            updateCarousel(nextSlide);
        }, intervalTime);
    }

    // 4. Xử lý sự kiện nhấp chuột trên dots
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-index"));
            if (index !== currentSlide) {
                // Dừng tự động chạy, chuyển slide, và khởi động lại
                clearInterval(autoSlideInterval);
                updateCarousel(index);
                startAutoSlide();
            }
        });
    });

    // 5. Khởi tạo chức năng tự động trượt
    startAutoSlide(); // Bắt đầu carousel ngay khi DOMContentLoaded
});
