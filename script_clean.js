document.addEventListener('DOMContentLoaded', function() {
  const html = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  const LIGHT_ICON = 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-light.png';
  const DARK_ICON  = 'https://raw.githubusercontent.com/kameno22/nexus/refs/heads/main/resources/theme-dark.png';

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('ng-theme', theme);
    icon.src = (theme === 'dark') ? DARK_ICON : LIGHT_ICON;
  }

  const savedTheme = localStorage.getItem('ng-theme') || 'light';
  setTheme(savedTheme);

  btn.addEventListener('click', function() {
    const current = html.getAttribute('data-theme') || 'light';
    const newTheme = current === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

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
const shotsCarousel = document.getElementById('shots-carousel');
document.querySelectorAll('.carousel-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.classList.contains('left') ? -1 : 1;
    shotsCarousel.scrollBy({ left: dir * 350, behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('shot-modal');
  const modalImg = document.getElementById('shot-modal-img');
  const modalClose = document.getElementById('shot-modal-close');
  
  document.querySelectorAll('.screenshots-carousel img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      modal.classList.add('open');
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
      modal.focus();
      document.body.style.overflow = 'hidden';
    });
  });
  
  function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if(e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if(modal.classList.contains('open') && (e.key === 'Escape' || e.key === ' ')) closeModal();
  });
});
