document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Update these if your files are elsewhere or have other names
  const LIGHT_ICON = 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-light.png';
  const DARK_ICON  = 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-dark.png';

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
  // --- Hamburger/Sidebar code ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (hamburgerBtn && sidebar && overlay) {
    hamburgerBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});
// Mobile theme toggle button handler
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');
if(themeToggleMobile && themeIconMobile) {
  themeToggleMobile.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ng-theme', newTheme);
    themeIconMobile.src = newTheme === 'dark'
      ? 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-dark.png'
      : 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-light.png';
  });
}

