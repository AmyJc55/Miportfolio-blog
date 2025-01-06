// 1. Rotación automática de imágenes
const images = ['image1.png', 'image2.png', 'image3.png']; // Rutas de las imágenes
let currentImageIndex = 0;

const rotatingImage = document.querySelector('.rotating-image');

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Ciclo entre las imágenes
    rotatingImage.src = images[currentImageIndex];
}, 3000); // Cambia cada 3 segundos

// 2. Scroll suave al hacer clic en los círculos naranjas
const orangeLinks = document.querySelectorAll('.orange-circle');

orangeLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(`#proyecto${index + 1}`).scrollIntoView({ behavior: 'smooth' });
    });
});
