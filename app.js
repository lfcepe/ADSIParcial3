// Redirigir desde el botón del header
document.getElementById('goSpotify').addEventListener('click', () => {
  window.open('https://www.spotify.com/', '_blank', 'noopener');
});

// Contadores bonitos para los stats
const animateCount = (el, target, duration = 1000) => {
  const start = 0;
  const startTime = performance.now();
  const step = (now) => {
    const p = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const value = Math.round(start + (target - start) * eased);
    el.textContent = value;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

document.querySelectorAll('.stat').forEach(el => {
  const target = parseInt(el.getAttribute('data-target'), 10) || 0;
  animateCount(el, target, 1200);
});

// Datos curiosos (sin depender de APIs)
const facts = [
  "Tu cerebro predice el siguiente beat: por eso un buen drop se siente tan bien.",
  "Las playlists personalizadas funcionan mejor con variedad: mezcla géneros para descubrir joyas.",
  "A 60–80 BPM puedes concentrarte; arriba de 120 BPM activa tu entrenamiento.",
  "La repetición ayuda a que una canción se te pegue: se llama 'earworm'.",
  "Escuchar música nueva activa recompensas similares a probar comida nueva."
];

const factEl = document.getElementById('fact');
document.getElementById('anotherFact').addEventListener('click', () => {
  const next = facts[Math.floor(Math.random() * facts.length)];
  // pequeña animación
  factEl.style.opacity = 0;
  setTimeout(() => {
    factEl.textContent = next;
    factEl.style.opacity = 1;
  }, 150);
});
