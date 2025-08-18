const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function aumentarFonte() {
  document.body.style.fontSize = "larger";
}
function diminuirFonte() {
  document.body.style.fontSize = "smaller";
}
