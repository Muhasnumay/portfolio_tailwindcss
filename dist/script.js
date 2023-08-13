// Hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
const Top = document.querySelector("#to-top");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    Top.classList.remove("hidden");
    Top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    Top.classList.remove("flex");
    Top.classList.add("hidden");
  }
};

//KLIK D LUAR HAMBURGER
window.addEventListener("click", function (e) {
  if (e.targer != navmenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});

//DARK MODE
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
