const trainers = [
  { id: 1, name: 'أحمد إبراهيم', title: 'استاذ اختبارات الجودة', photo: 'photo/ann.png', coursesCount: 5, rating: '4.8' },
  { id: 2, name: 'أحمد إبراهيم', title: 'مدرب برمجة وتطوير الويب', photo: 'photo/trainers1.png', coursesCount: 8, rating: '4.9' },
  { id: 3, name: 'أحمد إبراهيم', title: 'مدربة تصميم جرافيك', photo: 'photo/trainers2.png', coursesCount: 6, rating: '4.7' },
  { id: 4, name: 'أحمد إبراهيم', title: 'استاذ التدقيق والمراجعة المحاسبية', photo: 'photo/trainers3.png', coursesCount: 12, rating: '5.0' },
  { id: 5, name: 'أحمد إبراهيم', title: 'مدربة إدارة مشاريع', photo: 'photo/trainers4.png', coursesCount: 4, rating: '4.6' },
  { id: 6, name: 'أحمد إبراهيم', title: 'مدرب تسويق رقمي', photo: 'photo/trainerrr.png', coursesCount: 9, rating: '4.8' },
  { id: 7, name: 'أحمد إبراهيم', title: 'مدربة موارد بشرية', photo: 'photo/trainers1.png', coursesCount: 7, rating: '4.9' },
  { id: 8, name: 'أحمد إبراهيم', title: 'مدرب أمن معلومات', photo: 'photo/trainers2.png', coursesCount: 10, rating: '4.7' },
  { id: 9, name: 'أحمد إبراهيم', title: 'مدربة لغة إنجليزية', photo: 'photo/trainers3.png', coursesCount: 6, rating: '4.5' },
  { id: 10, name: 'أحمد إبراهيم', title: 'مدرب محاسبة مالية', photo: 'photo/trainers4.png', coursesCount: 11, rating: '4.9' },
  { id: 11, name: 'أحمد إبراهيم', title: 'مدربة تطوير ذاتي', photo: 'photo/trainerrr.png', coursesCount: 5, rating: '4.6' },
  { id: 12, name: 'أحمد إبراهيم', title: 'مدرب إدارة أعمال', photo: 'photo/trainers1.png', coursesCount: 9, rating: '4.8' },
  { id: 13, name: 'أحمد إبراهيم', title: 'مدربة تسويق إلكتروني', photo: 'photo/trainers2.png', coursesCount: 7, rating: '4.7' },
  { id: 14, name: 'أحمد إبراهيم', title: 'مدرب شبكات ونظم', photo: 'photo/trainers3.png', coursesCount: 8, rating: '4.6' },
  { id: 15, name: 'أحمد إبراهيم', title: 'مدربة تصميم UX/UI', photo: 'photo/trainers4.png', coursesCount: 6, rating: '4.9' },
  { id: 16, name: 'أحمد إبراهيم', title: 'مدرب قانون تجاري', photo: 'photo/trainerrr.png', coursesCount: 10, rating: '4.8' },
  { id: 17, name: 'أحمد إبراهيم', title: 'مدربة صحة نفسية', photo: 'photo/trainers1.png', coursesCount: 5, rating: '4.7' },
  { id: 18, name: 'أحمد إبراهيم', title: 'مدرب تحليل بيانات', photo: 'photo/trainers2.png', coursesCount: 13, rating: '5.0' },
  { id: 19, name: 'أحمد إبراهيم', title: 'مدربة إدارة موارد بشرية', photo: 'photo/trainers3.png', coursesCount: 8, rating: '4.6' },
  { id: 20, name: 'أحمد إبراهيم', title: 'مدرب برمجة تطبيقات موبايل', photo: 'photo/trainers4.png', coursesCount: 9, rating: '4.8' },
];

(function () {
  const container = document.getElementById('trainers-container');
  const pageNumbersContainer = document.getElementById('instructors-page-numbers');
  const prevPageBtn = document.getElementById('instructors-prev-page');
  const nextPageBtn = document.getElementById('instructors-next-page');
  const DISPLAY_TOTAL_PAGES_UI = 11;
  let currentActivePage = 3;

  function renderTrainers() {
   const cardsHTML = trainers.map(trainer => `
  <a href="instructorsdetails.html?id=${trainer.id}" class="w-full bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 p-4 sm:p-5 hover:shadow-md transition-shadow cursor-pointer">
    <div class="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
      <img src="${trainer.photo}" alt="${trainer.name}" class="w-full h-full object-cover">
    </div>
    <div class="text-center w-full">
      <h3 class="text-gray-900 font-bold text-xs sm:text-sm truncate px-1">${trainer.name}</h3>
      <p class="text-gray-400 text-[11px] sm:text-xs mt-1 truncate px-1">${trainer.title}</p>
    </div>
  </a>
`).join('');

    container.innerHTML = cardsHTML;
    document.getElementById('courses-count').textContent = '150';
  }
// ---------------------------------------------------------------------------------------
  function getVisiblePageNumbers() {
    return [1, 2, 3, 4, 5, 6, 7, DISPLAY_TOTAL_PAGES_UI];
  }

  function updateArrowsState() {
    const currentIndex = getVisiblePageNumbers().indexOf(currentActivePage);
    const setState = (button, disabled) => {
      if (!button) return;
      button.disabled = disabled;
      button.classList.toggle('opacity-40', disabled);
      button.classList.toggle('pointer-events-none', disabled);
    };

    setState(prevPageBtn, currentIndex <= 0);
    setState(nextPageBtn, currentIndex >= getVisiblePageNumbers().length - 1);
  }

  function renderPagination() {
    if (!pageNumbersContainer) return;

    const buttons = [1, 2, 3, 4, 5, 6, 7, '...', DISPLAY_TOTAL_PAGES_UI];
    pageNumbersContainer.innerHTML = buttons.map((page, index) => {
      if (page === '...') return '<span class="px-1 text-sm text-gray-400">...</span>';

      const visibilityClass = index >= 4 && index <= 6 ? 'hidden sm:flex' : 'flex';
      const isActive = page === currentActivePage;
      return `<button type="button" data-page="${page}" class="instructors-page-btn relative h-10 w-10 ${visibilityClass} items-center justify-center rounded-full text-sm font-semibold transition ${isActive ? 'text-ink font-extrabold after:absolute after:-bottom-0.5 after:right-1/2 after:h-[2px] after:w-4 after:translate-x-1/2 after:bg-[#15AC8B]' : 'text-gray-500 hover:text-[#00c7a3]'}">${page}</button>`;
    }).join('');

    pageNumbersContainer.querySelectorAll('.instructors-page-btn').forEach((button) => {
      button.addEventListener('click', () => goToPage(Number(button.dataset.page)));
    });

    updateArrowsState();
  }

  function goToPage(page) {
    currentActivePage = page;
    renderPagination();
    container?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  prevPageBtn?.addEventListener('click', () => {
    const pages = getVisiblePageNumbers();
    goToPage(pages[Math.max(0, pages.indexOf(currentActivePage) - 1)]);
  });
  nextPageBtn?.addEventListener('click', () => {
    const pages = getVisiblePageNumbers();
    goToPage(pages[Math.min(pages.length - 1, pages.indexOf(currentActivePage) + 1)]);
  });

  renderTrainers();
  renderPagination();
})();