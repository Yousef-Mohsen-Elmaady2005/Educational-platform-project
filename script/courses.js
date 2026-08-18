// Generate 456 courses (kept so counts/filters behave the same as before)
const courses = [];
for (let i = 1; i <= 456; i++) {
  courses.push({
    id: i,
    title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل',
    instructor: i % 4 === 0 ? 'أ/ محمد السيد ابراهيم' : (i % 3 === 0 ? 'د/ إبراهيم البسيوني' : 'د.خالد بن فوزان الفهد'),
    price: '150 ريال',
    lessons: '15 درس',
    students: '30 طالب',
    duration: '3 week',
    status: 'متاحة للتسجيل',
    location: 'zoom',
    date: '9/9/2021',
    category: String((i % 10) + 1), // 1 to 10
    priceType: 'paid',
    statusType: 'online',
    priceVal: 150
  });
}

// Configuration
const itemsPerPage = 12;
// Fixed display page for the decorative pagination UI (matches the mockup: page 3 highlighted)
const DISPLAY_TOTAL_PAGES_UI = 38;

let filteredCourses = [...courses];

// The currently highlighted page number in the cosmetic pagination bar
let currentActivePage = 3;

// DOM Elements
const coursesGrid = document.querySelector('#courses-grid');
const coursesCount = document.querySelector('#courses-count');
const pageNumbersContainer = document.querySelector('#page-numbers');
const prevPageBtn = document.querySelector('#prev-page');
const nextPageBtn = document.querySelector('#next-page');

// Draw the (always first-page) list of filtered courses
function drawCourses() {
  if (!coursesGrid) return;

  if (filteredCourses.length === 0) {
    coursesGrid.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-400">
        <svg class="mx-auto h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span class="text-sm font-semibold">عذرًا، لا توجد دورات تطابق خيارات التصفية الحالية.</span>
      </div>
    `;
    if (coursesCount) coursesCount.textContent = 0;
    return;
  }

  // Always show the first page of results
  const pageItems = filteredCourses.slice(0, itemsPerPage);

  coursesGrid.innerHTML = pageItems.map((course) => `
    <article class="w-full max-w-[380px] sm:max-w-none mx-auto overflow-hidden rounded-[18px] bg-white text-right shadow-[0_8px_22px_rgba(31,55,88,0.06)] flex flex-col">
      <div class="relative aspect-[4/3] sm:aspect-[27/20] overflow-hidden shrink-0">
        <img src="photo/nopath-1.png" alt="${course.title}" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>
        <button type="button" aria-label="إضافة إلى المفضلة" class="absolute left-3 top-3 sm:left-3.5 sm:top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#777] shadow-sm transition hover:scale-105">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div class="absolute right-3 top-3 sm:right-3.5 sm:top-3.5 flex items-center gap-2 text-right text-[11px] sm:text-[12px] font-semibold text-white">
          <img src="photo/nopath-2.png" alt="${course.instructor}" class="h-9 w-9 rounded-full border-2 border-white object-cover">
          <span>${course.instructor}</span>
        </div>
        <h3 class="absolute top-[64px] sm:top-[68px] right-3 left-3 sm:right-3.5 sm:left-3.5 text-right text-[12.5px] sm:text-[13px] font-bold leading-5 text-white line-clamp-2">
          ${course.title.replace('المحاسبية', '<br class="hidden sm:block">المحاسبية')}
        </h3>
        <span class="absolute bottom-3 right-3 sm:bottom-[36px] sm:right-3.5 rounded-[8px] bg-white px-3 py-1 text-[12px] sm:text-[12.5px] font-bold text-ink shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          ${course.price.replace(' ', '')}
        </span>
      </div>
      <div class="relative flex flex-1 flex-col rounded-t-[24px] bg-white px-4 pb-3 pt-11 text-[11px] text-[#777]">
        <div dir="ltr" class="absolute inset-x-3 -top-6 grid h-11 grid-cols-3 items-center gap-1 rounded-full bg-white px-2 text-[10px] text-ink shadow-sm">
          <span class="whitespace-nowrap truncate"><i class="fa-solid fa-layer-group ml-1 text-sm"></i>${course.lessons}</span>
          <span class="whitespace-nowrap truncate"><i class="fa-solid fa-users ml-1 text-sm"></i>${course.students}</span>
          <span class="whitespace-nowrap truncate"><i class="fa-solid fa-calendar-days ml-1 text-sm"></i>${course.duration}</span>
        </div>
        <div class="space-y-3 mt-1">
          <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-semibold text-brand">${course.status}</span><span class="inline-flex items-center gap-3"><span>حالة الدورة</span><i class="fa-solid fa-eye text-lg text-ink"></i></span></div>
          <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-bold text-ink">${course.location}</span><span class="inline-flex items-center gap-3"><span>المكان</span><i class="fa-solid fa-location-arrow text-lg text-ink"></i></span></div>
          <div dir="ltr" class="flex items-center justify-between"><span class="font-bold text-ink">${course.date}</span><span class="inline-flex items-center gap-3"><span>التاريخ</span><i class="fa-solid fa-calendar-days text-lg text-ink"></i></span></div>
        </div>
      </div>
    </article>
  `).join('');

  // Show 160 دورة on load if no filters are active, otherwise show filtered count
  if (filteredCourses.length === courses.length) {
    if (coursesCount) coursesCount.textContent = '160';
  } else {
    if (coursesCount) coursesCount.textContent = filteredCourses.length;
  }
}

// Returns the actual page numbers currently rendered as buttons (excludes '...')
function getVisiblePageNumbers() {
  let nums = [];
  for (let i = 1; i <= 7; i++) nums.push(i);
  nums.push(DISPLAY_TOTAL_PAGES_UI);
  return nums;
}


function renderStaticPagination() {
  if (!pageNumbersContainer) return;

  let buttons = [];
  for (let i = 1; i <= 7; i++) buttons.push(i);
  buttons.push('...');
  buttons.push(DISPLAY_TOTAL_PAGES_UI);

  pageNumbersContainer.innerHTML = buttons.map((b, idx) => {
    if (b === '...') {
      return `<span class="px-1 text-gray-400 text-sm">...</span>`;
    }

    const visibilityClass = (idx >= 4 && idx <= 6) ? 'hidden sm:flex' : 'flex';
    const isActive = b === currentActivePage;

    return `<button type="button" data-page="${b}" class="page-btn relative h-10 w-10 ${visibilityClass} items-center justify-center rounded-full text-sm font-semibold transition ${isActive ? 'text-ink font-extrabold after:absolute after:-bottom-0.5 after:right-1/2 after:h-[2px] after:w-4 after:translate-x-1/2 after:bg-[#15AC8B]' : 'text-gray-500 hover:text-[#00c7a3]'}">${b}</button>`;
  }).join('');

  // Clicking a number switches the visual active state only — no real pagination
  pageNumbersContainer.querySelectorAll('.page-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentActivePage = Number(btn.dataset.page);
      renderStaticPagination();
      coursesGrid?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  updateArrowsState();
}

// Move the visual active page forward/back among the currently visible page numbers.
// Purely cosmetic — never touches filteredCourses or the grid content.
function goToAdjacentPage(direction) {
  const visible = getVisiblePageNumbers(); // e.g. [1,2,3,4,5,6,7,38]
  const currentIndex = visible.indexOf(currentActivePage);

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = 0;
  if (nextIndex >= visible.length) nextIndex = visible.length - 1;

  currentActivePage = visible[nextIndex];
  renderStaticPagination();
  coursesGrid?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Dims an arrow when it can't move further in that direction (cosmetic only)
function updateArrowsState() {
  const visible = getVisiblePageNumbers();
  const currentIndex = visible.indexOf(currentActivePage);

  if (prevPageBtn) {
    const disabled = currentIndex <= 0;
    prevPageBtn.classList.toggle('opacity-40', disabled);
    prevPageBtn.classList.toggle('pointer-events-none', disabled);
  }
  if (nextPageBtn) {
    const disabled = currentIndex >= visible.length - 1;
    nextPageBtn.classList.toggle('opacity-40', disabled);
    nextPageBtn.classList.toggle('pointer-events-none', disabled);
  }
}

// Initial draw
document.addEventListener('DOMContentLoaded', () => {
  drawCourses();

  // Arrows move the cosmetic active page highlight — no real pagination
  if (prevPageBtn) prevPageBtn.addEventListener('click', () => goToAdjacentPage(-1));
  if (nextPageBtn) nextPageBtn.addEventListener('click', () => goToAdjacentPage(1));

  renderStaticPagination();
});
// ---------------------------------------------------------------
