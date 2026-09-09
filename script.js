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
  }, 3800);
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
  document.getElementById('clock-time').textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 1000);

// Мобильное меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Параллакс героя
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  if (scrolled < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Кнопка наверх
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 600) {
    toTop.classList.add('visible');
  } else {
    toTop.classList.remove('visible');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
