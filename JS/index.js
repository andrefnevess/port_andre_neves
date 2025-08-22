const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".lista-navegacao a");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Alterna ícone (☰ -> ✖)
  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.replace("bx-menu", "bx-x");
  } else {
    menuIcon.classList.replace("bx-x", "bx-menu");
  }
});

// Fecha menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuIcon.classList.replace("bx-x", "bx-menu");
  });
});
