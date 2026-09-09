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

  const options = { day: 'numeric', month: 'long', weekday: 'short' };
  document.getElementById('clock-date').textContent = now.toLocaleDateString('ru-RU', options);
}
updateClock();
setInterval(updateClock, 1000);

// Меню и панели
const menuBtns = document.querySelectorAll('.menu-btn');
const panels = document.querySelectorAll('.panel');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const layer = btn.dataset.layer;

    // Убираем активный класс у всех кнопок
    menuBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Закрываем все панели
    panels.forEach(p => p.classList.remove('active'));

    // Если не главная — открываем нужную панель
    if (layer !== 'home') {
      document.getElementById(`panel-${layer}`).classList.add('active');
    }
  });
});

// Закрытие панелей
document.querySelectorAll('.panel-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.panel').classList.remove('active');
    // Возвращаем активный класс на "Главная"
    menuBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-layer="home"]').classList.add('active');
  });
});
