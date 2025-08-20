// Botão voltar ao topo
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

// Aumentar / Diminuir fonte
function aumentarFonte() {
  document.body.style.fontSize = "larger";
}
function diminuirFonte() {
  document.body.style.fontSize = "smaller";
}

// ----------------------
// Efeito folhas no mouse
// ----------------------
const num_folhas = 5; // quantidade de folhas
const folhas = [];

for (let i = 0; i < num_folhas; i++) {
  const img = document.createElement("img");
  img.src = "folha.png"; // caminho da imagem (ajuste se precisar)
  img.classList.add("folha");
  document.body.appendChild(img);
  folhas.push({ element: img, x: 0, y: 0 });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  let x = mouseX;
  let y = mouseY;

  folhas.forEach((folha) => {
    // movimento suavizado
    folha.x += (x - folha.x) * 0.1;
    folha.y += (y - folha.y) * 0.1;

    folha.element.style.transform = `translate(${folha.x}px, ${folha.y}px)`;

    // cada folha segue a posição da anterior
    x = folha.x;
    y = folha.y;
  });

  requestAnimationFrame(animate);
}

animate();
