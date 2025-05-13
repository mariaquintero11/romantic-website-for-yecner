// 🎥 Mostrar video al presionar botón
document.getElementById("video-button").addEventListener("click", function () {
  const videoSection = document.getElementById("video-section");
  const video = document.getElementById("romantic-video");

  videoSection.style.display = "block";
  if (video) video.play();
});

// Opción para cerrar el video (si es necesario)
document.getElementById("close-video-button").addEventListener("click", function () {
  const videoSection = document.getElementById("video-section");
  const video = document.getElementById("romantic-video");

  videoSection.style.display = "none";
  video.pause();
});

// 🎁 Sorpresa oculta
document.getElementById("reveal-btn").addEventListener("click", function () {
  const content = document.getElementById("reveal-content");
  content.style.display = "block";
  content.classList.add("reveal-animation");
  // Mantén el contenido original con la animación aplicada
  content.innerHTML = `
    <h2>¡Te amo más de lo que las palabras pueden expresar! ❤️</h2>
    <p>Hoy celebramos tu vida, pero cada día celebro tenerte en la mía.</p>
  `;
});

// (Opcional extra): deslizar horizontalmente la galería en móviles
const gallery = document.getElementById("story-gallery");
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // velocidad de deslizamiento
  gallery.scrollLeft = scrollLeft - walk;
});

// Deslizar horizontalmente la galería con el toque en dispositivos táctiles
gallery.addEventListener('touchstart', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.touches[0].pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // velocidad de deslizamiento
  gallery.scrollLeft = scrollLeft - walk;
});

gallery.addEventListener('touchend', () => {
  isDown = false;
  gallery.classList.remove('active');
});

// Navegación con botones para "historias"
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Inicializa
showSlide(currentSlide);


function updateSlider() {
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * width}px)`;
  const slider = document.getElementById('story-gallery');

}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentSlide > 0) currentSlide--;
  updateSlider();
});

// Swipe táctil (para móviles)
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
slider.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (endX - startX > 50 && currentSlide > 0) {
    currentSlide--;
  }
  updateSlider();
});

function lanzarCorazones() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.innerText = "❤️";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(lanzarCorazones, 800);

