// Mobile navigation behavior shared with the home and about-us hero sections.
document.addEventListener('DOMContentLoaded', () => {
  // صفحات البداية وتسجيل الدخول/الحساب تحتفظ بأزرار المصادقة كما هي.
  const pageName = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const authPages = new Set(['index.html', 'login.html', 'register.html']);

  if (!authPages.has(pageName)) {
    const mobileMenu = document.getElementById('mobile-menu');
    const loginLink = mobileMenu?.querySelector('a[href="login.html"]');
    const registerLink = mobileMenu?.querySelector('a[href="register.html"]');

    if (loginLink && registerLink) {
      const authContainer = loginLink.closest('div');
      const accountName = document.querySelector('.hero-account-nav a')?.textContent.trim() || 'Mohamed ali';

      // الاسم يُؤخذ من عنصر الحساب الموجود بالفعل في الهيدر، حتى يستطيع الباك إند
      // لاحقاً تعبئته في موضع واحد فقط.
      authContainer.outerHTML = `
        <a href="profile.html" class="group flex items-center gap-3 rounded-[28px] border border-white/30 bg-white/5 p-3 text-right transition hover:border-brand hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand">
          <span data-account-initials class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-[#182373]" aria-hidden="true"></span>
          <span class="min-w-0 flex-1">
            <span data-account-name class="block truncate text-base font-bold text-white"></span>
            <span class="mt-0.5 block text-sm font-medium text-brand">عرض الملف الشخصي</span>
          </span>
          <svg class="h-5 w-5 shrink-0 text-white/60 transition group-hover:text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </a>`;

      const accountCard = mobileMenu.querySelector('a[href="profile.html"]');
      const initials = accountName.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
      accountCard.setAttribute('aria-label', `عرض الملف الشخصي لـ ${accountName}`);
      accountCard.querySelector('[data-account-name]').textContent = accountName;
      accountCard.querySelector('[data-account-initials]').textContent = initials;
    }
  }

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
