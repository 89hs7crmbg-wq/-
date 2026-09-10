// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1800);
});

// Popup
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('active');
  }, 4000);
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('active');
});

document.getElementById('popup').addEventListener('click', (e) => {
  if (e.target.id === 'popup') {
    document.getElementById('popup').classList.remove('active');
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
const burger = document.getElementById('mobile-burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// To top
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 800);
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
