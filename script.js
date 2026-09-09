// Прелоадер
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2000);
});

// Попап
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 4200);
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});
document.getElementById('popup').addEventListener('click', e => {
  if (e.target.id === 'popup') document.getElementById('popup').classList.remove('show');
});

// Часы
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock-time').textContent = `${h}:${m}`;
  const options = { day: 'numeric', month: 'long', weekday: 'short' };
  document.getElementById('clock-date').textContent = now.toLocaleDateString('ru-RU', options);
}
updateClock();
setInterval(updateClock, 1000);

// Мобильное меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-menu-close');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Общая логика меню (десктоп + мобилка)
function openLayer(layer) {
  document.querySelectorAll('.menu-btn, .mobile-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layer === layer);
  });

  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  if (layer !== 'home') {
    document.getElementById(`panel-${layer}`).classList.add('active');
  }

  mobileMenu.classList.remove('open');
}

document.querySelectorAll('.menu-btn, .mobile-link').forEach(btn => {
  btn.addEventListener('click', () => {
    openLayer(btn.dataset.layer);
  });
});

// Закрытие панелей
document.querySelectorAll('.panel-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.panel').classList.remove('active');
    openLayer('home');
  });
});
