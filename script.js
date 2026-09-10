// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 1700);
});

// Popup
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 3800);
});

document.getElementById('close-popup').addEventListener('click', () => {
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
  document.getElementById('time').textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 1000);

// Mobile menu
const burger = document.getElementById('burger');
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
  toTop.classList.toggle('visible', window.scrollY > 700);
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Three.js (лёгкая абстрактная сцена) =====
(function() {
  const canvas = document.getElementById('webgl');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Абстрактный объект (тонкое кольцо + внутренние элементы)
  const group = new THREE.Group();

  // Внешнее кольцо
  const ringGeo = new THREE.TorusGeometry(1.4, 0.015, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xc4b08a,
    transparent: true,
    opacity: 0.35
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  group.add(ring);

  // Внутреннее кольцо
  const ring2Geo = new THREE.TorusGeometry(0.95, 0.01, 16, 80);
  const ring2 = new THREE.Mesh(ring2Geo, ringMat.clone());
  ring2.material.opacity = 0.25;
  group.add(ring2);

  // Несколько тонких линий (как оси)
  const lineMat = new THREE.LineBasicMaterial({
    color: 0xc4b08a,
    transparent: true,
    opacity: 0.2
  });

  for (let i = 0; i < 3; i++) {
    const points = [];
    points.push(new THREE.Vector3(-1.6, 0, 0));
    points.push(new THREE.Vector3(1.6, 0, 0));
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geo, lineMat);
    line.rotation.z = (i * Math.PI) / 3;
    group.add(line);
  }

  scene.add(group);

  // Лёгкий свет (на всякий случай)
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  // Анимация
  function animate() {
    requestAnimationFrame(animate);

    group.rotation.z += 0.0015;
    group.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
    group.rotation.y = Math.cos(Date.now() * 0.0002) * 0.06;

    renderer.render(scene, camera);
  }
  animate();

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
