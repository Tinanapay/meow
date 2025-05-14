console.log('hehe helllo');

window.addEventListener('scroll', () => {
  const triggerPoint = 100;
  if (window.scrollY > triggerPoint) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

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
