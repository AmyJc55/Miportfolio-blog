// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Simular un tiempo de carga (por ejemplo, 2 segundos)
  setTimeout(() => {
      // Ocultar la pantalla de carga
      document.getElementById("loading-screen").style.display = "none";
      // Mostrar el contenido principal
      document.getElementById("main-content").style.display = "block";
  }, 2000); // Cambia el tiempo según lo necesario
});




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

/*cursor*/ 




const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle');
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    navbar.style.top = '-60px'; // Oculta la navbar
  } else {
    navbar.style.top = '0'; // Muestra la navbar
  }
  lastScroll = currentScroll;
});