// script.js

function scrollToPosition(top, left = 0, duration = 1000) {
  const startY = window.scrollY;
  const startX = window.scrollX;
  const distanceY = top - startY;
  const distanceX = left - startX;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Controlar la duración

    window.scrollTo(
      startX + distanceX * progress,
      startY + distanceY * progress
    );

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continuar el desplazamiento
    }
  }

  requestAnimationFrame(scrollStep); // Iniciar el desplazamiento suave
}

// Llamada a la función con desplazamiento a 500px desde la parte superior
scrollToPosition(200, 0, 1500); // Duración de 1500ms (1.5 segundos)

