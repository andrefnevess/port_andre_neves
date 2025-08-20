const fileInput = document.getElementById("fileInput");
const track = document.getElementById("track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentPosition = 0;

fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  track.innerHTML = ""; // limpa antes de carregar
  [...files].forEach(file => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement("img");
      img.src = event.target.result;
      track.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

prev.addEventListener("click", () => {
  const trackWidth = track.scrollWidth;
  const carouselWidth = track.parentElement.offsetWidth;
  if (currentPosition < 0) {
    currentPosition += carouselWidth / 2;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});

next.addEventListener("click", () => {
  const trackWidth = track.scrollWidth;
  const carouselWidth = track.parentElement.offsetWidth;
  if (Math.abs(currentPosition) + carouselWidth < trackWidth) {
    currentPosition -= carouselWidth / 2;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});
