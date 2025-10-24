document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("mobile-menu-button");
    const navigationContent = document.getElementById("navigation-content");

    menuButton.addEventListener("click", () => {
        navigationContent.classList.toggle("hidden");
    });
});
