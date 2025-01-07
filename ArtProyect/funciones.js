// script.js

// Función para el smooth scroll
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// Asignar el evento a los enlaces de navegación
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", scrollToSection);
});
// Inicializamos las imágenes
const images = document.querySelectorAll('.image-slide');
let currentIndex = 0;

// Función para cambiar la imagen activa
function changeImage() {
  // Remover la clase active de la imagen actual
  images[currentIndex].classList.remove('active');

  // Incrementamos el índice y volvemos al principio si llega al final
  currentIndex = (currentIndex + 1) % images.length;

  // Añadimos la clase active a la nueva imagen
  images[currentIndex].classList.add('active');
}

// Cambiar imagen cada 2 segundos
setInterval(changeImage, 2000);

// Iniciar con la primera imagen visible
images[currentIndex].classList.add('active');
