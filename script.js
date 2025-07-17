document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Update these if your files are elsewhere or have other names
  const LIGHT_ICON = 'theme-light.png';
  const DARK_ICON  = 'theme-dark.png';

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('ng-theme', theme);
    icon.src = (theme === 'dark') ? DARK_ICON : LIGHT_ICON;
  }

  // On load: use localStorage value or default to light
  const savedTheme = localStorage.getItem('ng-theme') || 'light';
  setTheme(savedTheme);

  // On button click: toggle theme
  btn.addEventListener('click', function() {
    const current = html.getAttribute('data-theme') || 'light';
    const newTheme = current === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
});
