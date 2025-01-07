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
