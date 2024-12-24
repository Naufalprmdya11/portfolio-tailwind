//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//darkmode toggle
// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkToggle.addEventListener("click", function () {
//   if (darkToggle.checked) {
//     html.classList.add("dark");
//     localStorage.theme = "dark";
//   } else {
//     html.classList.remove("dark");
//     localStorage.theme = "light ";
//   }
// });

// //pindah posisi toggle sesuai mode
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
//   darkToggle.checked = true;
// } else {
//   document.documentElement.classList.remove("dark");
//   darkToggle.checked = false;
// }

// Ambil tombol dark mode dan ikon
const darkModeToggle = document.getElementById("darkModeToggle");
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

// Cek apakah dark mode aktif
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set tema awal
if (isDarkMode) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.add("hidden");
  darkIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
}

// Tambahkan event listener untuk mengubah dark mode
darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkMode", isDark.toString());

  // Ubah ikon
  if (isDark) {
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  } else {
    lightIcon.classList.remove("hidden");
    darkIcon.classList.add("hidden");
  }
});
