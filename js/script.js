const button = document.getElementById('showMagic');

function createFlyingElement(type, src) {
  const elem = document.createElement('img');
  elem.classList.add(type === 'butterfly' ? 'flying-butterfly' : 'flying-flower');
  elem.src = src;
  elem.style.top = `${window.innerHeight / 2}px`;
  elem.style.left = `${window.innerWidth / 2}px`;

  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 500 + 100;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  elem.animate([
    { transform: `translate(-50%, -50%) scale(0.8)`, opacity: 1 },
    { transform: `translate(${x}px, ${y}px) scale(1.2)`, opacity: 0 }
  ], {
    duration: 4000 + Math.random() * 2000,
    easing: 'ease-out',
    fill: 'forwards'
  });

  document.body.appendChild(elem);

  setTimeout(() => {
    elem.remove();
  }, 6000);
}

button.addEventListener('click', () => {
  const butterflySources = ['images/butterfly1.png', 'images/butterfly2.png'];
  const flowerSources = ['images/flower1.png', 'images/flower2.png'];

  for (let i = 0; i < 20; i++) {
    createFlyingElement('butterfly', butterflySources[Math.floor(Math.random() * butterflySources.length)]);
    createFlyingElement('flower', flowerSources[Math.floor(Math.random() * flowerSources.length)]);
  }
});
