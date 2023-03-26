const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".menu-col-auto");
const closeIcon = document.querySelector(".close-icon");
const content = document.querySelector(".content");


if (window.innerWidth < 600) {
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("mr0");
        menuIcon.classList.add("none");
        content.classList.add("mask-bg");
    });

    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("mr0");
        menuIcon.classList.remove("none").add("block");
        content.classList.remove("mask-bg");
    });
} else {
  menuIcon.classList.add("none");
  
}
