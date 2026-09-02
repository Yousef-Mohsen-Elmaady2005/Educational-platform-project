document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => {
        l.classList.remove('active');
        l.style.color = '#C2C2C2';
        l.style.background = '';
      });
      link.classList.add('active');
      link.style.color = '#15AC8B';
      link.style.background = '#f0fdf9';

      tabContents.forEach(content => (content.style.display = 'none'));

      const target = document.getElementById('content-' + link.dataset.target);
      if (target) {
        target.style.display = link.dataset.display || 'block';
      }
    });
  });
});
// البروفايل الشخصي
  function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  }

  function showSuccess(currentModalId) {
    closeModal(currentModalId);
    openModal('success-modal');
  }

  function saveName() {
    const first = document.getElementById('first-name-input').value;
    const last = document.getElementById('last-name-input').value;
    if (first && last) {
      document.getElementById('display-name').textContent = first + ' ' + last;
    }
    showSuccess('edit-name-modal');
  }

  function saveEmail() {
    const email = document.getElementById('new-email-input').value;
    if (email) {
      document.getElementById('display-email').textContent = email;
    }
    showSuccess('edit-email-modal');
  }

  function savePhone() {
    const phone = document.getElementById('new-phone-input').value;
    if (phone) {
      document.getElementById('display-phone').textContent = phone;
      document.getElementById('old-phone-value').textContent = phone;
    }
    showSuccess('edit-phone-modal');
  }

  function savePassword() {
    document.getElementById('current-password-input').value = '';
    document.getElementById('new-password-input').value = '';
    document.getElementById('confirm-password-input').value = '';
    showSuccess('edit-password-modal');
  }

/////////////////////////////////////////////////////////////////// التنقل بين تابات السايد بار (ريسبونسيف: نفس المنطق يشتغل على الموبايل والديسكتوب)
function setupSidebarNav() {
  const navLinks = document.querySelectorAll('.nav-link[data-target]');
  const panels = document.querySelectorAll('.tab-content');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      const display = link.dataset.display || 'block';

      // تلوين الرابط النشط فقط
      navLinks.forEach((l) => (l.style.color = '#C2C2C2'));
      link.style.color = '#15AC8B';

      // إظهار المحتوى المطلوب فقط
      panels.forEach((panel) => {
        panel.style.display = panel.id === `content-${target}` ? display : 'none';
      });

      // على الموبايل: تمرير التاب النشط لمنتصف الشريط الأفقي القابل للتمرير
      if (window.innerWidth < 768) {
        link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  });
}

/////////////////////////////////////////////////////////////////// بيانات المفضلة
const favorites = [
  { id: 1, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 2, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 3, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 4, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 5, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 6, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 7, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
];

function drawFavorites() {
  const grid = document.querySelector('#content-favorites');
  if (!grid) return;

  if (favorites.length === 0) {
    grid.innerHTML = `<p class="text-gray-400 text-sm">لا يوجد عناصر في المفضلة</p>`;
    return;
  }

  grid.innerHTML = favorites.map((fav) => `
    <div class="bg-white rounded-xl shadow-sm p-4 relative border border-gray-100">
      <button type="button" onclick="removeFavorite(${fav.id})" aria-label="حذف من المفضلة" class="absolute top-3 left-3 w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] bg-[#FF0000]">
        <i class="fa-solid fa-trash"></i>
      </button>
      <div class="flex flex-col min-[361px]:flex-row gap-3 items-start">
        <img src="${fav.courseImg}" alt="${fav.title}" class="w-full min-[361px]:w-16 sm:min-[361px]:w-20 h-auto max-h-[140px] min-[361px]:h-[66px] sm:min-[361px]:h-[83px] rounded-lg object-cover flex-shrink-0">
        <div class="flex-1 min-w-0 text-right">
          <h4 class="text-sm font-semibold text-gray-800 leading-snug">${fav.title}</h4>
          <div class="flex items-center justify-between mt-3 flex-wrap gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <img src="${fav.instructorImg}" alt="${fav.instructor}" class="w-7 h-7 sm:w-[33px] sm:h-[33px] rounded-full object-cover flex-shrink-0">
              <span class="text-xs truncate text-[#6D6D6D]">${fav.instructor}</span>
            </div>
            <div class="flex items-center gap-1 text-xs flex-shrink-0 text-[#6D6D6D]">
              <i class="fa-regular fa-calendar text-[#2F2E96]"></i>
              <span>${fav.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function removeFavorite(id) {
  const index = favorites.findIndex((f) => f.id === id);
  if (index !== -1) {
    favorites.splice(index, 1);
    drawFavorites();
  }
}

/////////////////////////////////////////////////////////////////// بيانات الدورات
const currentCourses = [
  { id: 1, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 2, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 3, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 4, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
  { id: 5, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
];

const previousCourses = [
  { id: 6, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', courseImg: 'photo/profilebage2.png', instructorImg: 'photo/coors.png', date: '9/9/2021' },
];

let activeCoursesTab = 'current';

function drawCourses() {
  const grid = document.querySelector('#courses-grid');
  if (!grid) return;

  const list = activeCoursesTab === 'current' ? currentCourses : previousCourses;

  if (list.length === 0) {
    grid.innerHTML = `<p class="text-gray-400 text-sm">لا يوجد دورات</p>`;
    return;
  }

  grid.innerHTML = list.map((course) => `
    <div class="bg-white rounded-xl shadow-sm p-4 relative border border-gray-100">
      <div class="flex flex-col min-[361px]:flex-row gap-3 items-start">
        <img src="${course.courseImg}" alt="${course.title}" class="w-full min-[361px]:w-16 sm:min-[361px]:w-20 h-auto max-h-[140px] min-[361px]:h-[66px] sm:min-[361px]:h-[83px] rounded-lg object-cover flex-shrink-0">
        <div class="flex-1 min-w-0 text-right">
          <h4 class="text-sm font-semibold text-gray-800 leading-snug">${course.title}</h4>
          <div class="flex items-center justify-between mt-3 flex-wrap gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <img src="${course.instructorImg}" alt="${course.instructor}" class="w-7 h-7 sm:w-[33px] sm:h-[33px] rounded-full object-cover flex-shrink-0">
              <span class="text-xs truncate text-[#6D6D6D]">${course.instructor}</span>
            </div>
            <div class="flex items-center gap-1 text-xs flex-shrink-0 text-[#6D6D6D]">
              <i class="fa-regular fa-calendar text-[#2F2E96]"></i>
              <span>${course.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupCoursesTabs() {
  const tabs = document.querySelectorAll('.course-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeCoursesTab = tab.dataset.tab;

      tabs.forEach((t) => {
        t.style.color = '#C2C2C2';
        t.style.borderBottomColor = 'transparent';
      });

      tab.style.color = '#15AC8B';
      tab.style.borderBottomColor = '#15AC8B';

      drawCourses();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSidebarNav();
  drawFavorites();
  setupCoursesTabs();
  drawCourses();
});