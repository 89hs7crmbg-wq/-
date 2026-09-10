// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1800);
});

// Popup
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 3800);
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});

document.getElementById('popup').addEventListener('click', e => {
  if (e.target.id === 'popup') {
    document.getElementById('popup').classList.remove('show');
  }
});

// Clock
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 1000);

// Mobile menu
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

// Parallax
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  if (scrolled < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
  }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// To top
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 700);
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
