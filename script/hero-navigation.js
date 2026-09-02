// Mobile navigation behavior shared with the home and about-us hero sections.
document.addEventListener('DOMContentLoaded', () => {
  const profileIcons = document.querySelectorAll(
    '.hero-account-nav .hidden.items-center > span, .order-3 > .hidden.items-center > span'
  );

  profileIcons.forEach((icon) => {
    const currentPath = window.location.pathname.toLowerCase();
    const destination = currentPath === '/' || currentPath.endsWith('/index.html')
      || currentPath === 'index.html'
      ? 'login.html'
      : 'profile.html';

    icon.setAttribute('role', 'link');
    icon.setAttribute('tabindex', '0');
    icon.setAttribute(
      'aria-label',
      destination === 'login.html' ? 'الانتقال إلى تسجيل الدخول' : 'الانتقال إلى الملف الشخصي'
    );
    icon.classList.add('cursor-pointer');

    const goToProfile = () => {
      window.location.href = destination;
    };

    icon.addEventListener('click', goToProfile);
    icon.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToProfile();
      }
    });
  });

  const burgerBtn = document.querySelector('[aria-label="فتح القائمة"]');
  const closeBtn = document.getElementById('close-menu');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  if (burgerBtn && closeBtn && menu && overlay) {
    document.body.append(overlay, menu);

    const openMenu = () => {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100', 'pointer-events-auto');
      document.body.classList.add('overflow-y-hidden');
    };

    const closeMenu = () => {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
      overlay.classList.remove('opacity-100', 'pointer-events-auto');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-y-hidden');
    };

    burgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
});
