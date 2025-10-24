document.addEventListener("DOMContentLoaded", async () => {
    // Nếu trang nằm trong /products thì phải lùi 1 cấp
    const rootPath = window.location.pathname.includes("/products/")
        ? ".."
        : ".";

    // Hàm tải file HTML
    async function loadHTML(id, file) {
        const element = document.getElementById(id);
        if (element) {
            try {
                const response = await fetch(`${rootPath}/partials/${file}`);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;
                } else {
                    console.error(`Không thể tải ${file}:`, response.status);
                }
            } catch (err) {
                console.error(`Lỗi khi tải ${file}:`, err);
            }
        }
    }

    // Tải header và footer từ partials
    await loadHTML("header", "header.html");
    await loadHTML("footer", "footer.html");

    // Gắn sự kiện sau khi header tải xong
    document.addEventListener("click", (e) => {
        const menuButton = document.getElementById("mobile-menu-button");
        const navContent = document.getElementById("navigation-content");

        ```
if (menuButton && navContent && e.target === menuButton) {
  navContent.classList.toggle("hidden");
}
```;
    });
});
