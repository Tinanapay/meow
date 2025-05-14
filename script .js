const cat = document.querySelector('.cat');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const zoom = Math.min(3, 1 + scrollY / 300);
  const opacity = Math.max(0, 1 - scrollY / 500);
  cat.style.transform = `scale(${zoom})`;
  cat.style.opacity = opacity;
});
const about = document.querySelector('.cat');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const zoom = Math.min(3, 1 + scrollY / 300);
  const opacity = Math.max(0, 1 - scrollY / 500);
  cat.style.transform = `scale(${zoom})`;
  cat.style.opacity = opacity;
});
