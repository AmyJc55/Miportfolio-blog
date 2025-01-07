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

