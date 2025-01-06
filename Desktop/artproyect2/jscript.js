console.clear();

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
    div.classList.add('cursor-circle') ;
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
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();

const links = [
    { src: "imagen1.jpg", url: "proyecto1.html" },
    { src: "imagen2.jpg", url: "proyecto2.html" },
    { src: "imagen3.jpg", url: "proyecto3.html" },
    { src: "imagen4.jpg", url: "proyecto4.html" },
    { src: "imagen5.jpg", url: "proyecto5.html" },
];

const gallery = document.querySelector('.gallery');

links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'image-link';
    a.innerHTML = `<img src="${link.src}" alt="Proyecto">`;
    gallery.appendChild(a);
});
