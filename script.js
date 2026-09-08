// Прелоадер
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2200);
});

// Попап
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 4500);
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

// Активный пункт меню при скролле
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 260) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Лёгкий параллакс героя
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  if (scrolled < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
  }
});

// Появление секций
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-inner, .two-cols, .contact-inner').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
