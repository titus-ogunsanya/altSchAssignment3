const navList = document.querySelector(".navlist");
const toggler = document.querySelector(".nav-toggler");

toggler.addEventListener("click", () => {
  navList.classList.toggle("show");
});
