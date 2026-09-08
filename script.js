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

// Открытие слоёв
document.querySelectorAll('.gear').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.layer;
    document.getElementById(`layer-${id}`).classList.add('active');
  });
});

// Закрытие слоёв
document.querySelectorAll('.layer-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.layer').classList.remove('active');
  });
});

// Закрытие по клику на фон слоя
document.querySelectorAll('.layer').forEach(layer => {
  layer.addEventListener('click', e => {
    if (e.target === layer) layer.classList.remove('active');
  });
});
