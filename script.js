const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav_ul');

burgerMenu.addEventListener('click', function () {
    navList.classList.toggle('show');
});
function toggleMenu() {
    var menuLinks = document.getElementById("navUul");
    menuLinks.style.display = (menuLinks.style.display === "flex") ? "none" : "flex";
  }