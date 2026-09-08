// Прелоадер
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1800);
});

// Попап
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 4000);
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});

document.getElementById('popup').addEventListener('click', (e) => {
  if (e.target.id === 'popup') {
    document.getElementById('popup').classList.remove('show');
  }
});

// Часы
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock-time').textContent = `${h}:${m}:${s}`;

  const options = { day: 'numeric', month: 'long', weekday: 'long' };
  document.getElementById('clock-date').textContent = now.toLocaleDateString('ru-RU', options);
}

updateClock();
setInterval(updateClock, 1000);

// Появление секций
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section-inner, .two-cols, .contact-inner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  observer.observe(el);
});
