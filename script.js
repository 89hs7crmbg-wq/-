// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1600);
});

// Popup
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 3600);
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});

document.getElementById('popup').addEventListener('click', (e) => {
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
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// Back to top
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 700);
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
