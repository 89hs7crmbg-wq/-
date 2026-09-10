// Preloader
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hide'), 1700);
});

// Popup
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('popup').classList.add('show'), 3600);
});
document.getElementById('close-popup').onclick = () => {
  document.getElementById('popup').classList.remove('show');
};
document.getElementById('popup').onclick = e => {
  if (e.target.id === 'popup') document.getElementById('popup').classList.remove('show');
};

// Clock
function updateTime() {
  const n = new Date();
  document.getElementById('time').textContent = 
    String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
}
updateTime();
setInterval(updateTime, 1000);

// Mobile menu
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobile-menu');
burger.onclick = () => mobile.classList.toggle('open');
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.onclick = () => mobile.classList.remove('open');
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('active');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.anim, .anim-img').forEach(el => observer.observe(el));

// To top
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 700);
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
