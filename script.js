const themeToggle = document.querySelector('#theme-toggle');
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('#site-nav');
const randomColorButton = document.querySelector('#random-color');
const savedTheme = localStorage.getItem('portfolio-theme');
const backgroundColors = ['#f6f3ed', '#f5d6c6', '#d9e8d5', '#d6e4ef', '#f3cf58', '#e8d8ed'];

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

function updateThemeLabel() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.textContent = isDark ? '○' : '◐';
}

updateThemeLabel();

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
  updateThemeLabel();
});

randomColorButton.addEventListener('click', () => {
  const currentColor = document.body.style.backgroundColor;
  const availableColors = backgroundColors.filter((color) => color !== currentColor);
  const nextColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  document.body.style.backgroundColor = nextColor;
});

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
