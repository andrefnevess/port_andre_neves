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

// Efeito folha mouse

const num_folhas = 5;
const folhas = [];

for (let i = 0; i < num_folhas; i++) {
  const img = document.createElement("img");
  img.src = "folha.png"; 
  img.classList.add("folha");
  document.body.appendChild(img);
  folhas.push({element: img, x: 0, y: 0});
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

  folhas.forEach((folhas, index) => {
    folhas.x += (x - folhas.x) * 0.1; // suaviza o movimento
    folhas.y += (y - folhas.y) * 0.1;

    folhas.element.style.transform = translate(${folhas.x}px, ${folhas.y}px);

    // cada estrela segue um pouco atrás da anterior
    x = folhas.x;
    y = folhas.y;
  });

  requestAnimationFrame(animate);
}

animate();


function animate() {
  let prevX = mouseX;
  let prevY = mouseY;

  stars.forEach((starObj, i) => {
    const speed = 0.15 - i*0.008;
    starObj.x += (prevX - starObj.x) * speed;
    starObj.y += (prevY - starObj.y) * speed;

    starObj.el.style.left = ${starObj.x - parseFloat(starObj.el.style.width)/2}px;
    starObj.el.style.top = ${starObj.y - parseFloat(starObj.el.style.height)/2}px;

    prevX = starObj.x;
    prevY = starObj.y;
  });

  requestAnimationFrame(animate);
}

animate();

