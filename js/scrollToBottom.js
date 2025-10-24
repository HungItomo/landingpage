document.getElementById("contact-link").addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn chuyển trang
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
});
