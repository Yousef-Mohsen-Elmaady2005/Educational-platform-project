// Floating WhatsApp button shared by every page.
const initialiseWhatsAppButton = () => {
  const waBtn = document.querySelector('a[href^="https://wa.me/"]');
  if (!waBtn) return;

  document.body.appendChild(waBtn);
  waBtn.className = 'fixed bottom-6 right-6 z-[9999] flex h-14 w-14 translate-y-20 opacity-0 items-center justify-center rounded-full bg-[#00c73c] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_8px_30px_rgba(0,199,60,0.4)] pointer-events-none';
  waBtn.innerHTML = '<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z"/><path d="M8.8 8.2c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.4.5c.5.9 1.2 1.6 2.1 2.1l.5-.4c.2-.1.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.4c0 .3 0 .5-.5.7-.5.2-1.4.4-2.4-.1-1-.5-2.3-1.6-3.1-3-.8-1.4-1-2.4-.7-3.1Z"/></svg>';

  const handleScroll = () => {
    const isVisible = window.scrollY > 150;
    waBtn.classList.toggle('translate-y-20', !isVisible);
    waBtn.classList.toggle('opacity-0', !isVisible);
    waBtn.classList.toggle('pointer-events-none', !isVisible);
    waBtn.classList.toggle('translate-y-0', isVisible);
    waBtn.classList.toggle('opacity-100', isVisible);
    waBtn.classList.toggle('pointer-events-auto', isVisible);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseWhatsAppButton, { once: true });
} else {
  initialiseWhatsAppButton();
}
// ----------------------- Start Courses Section -----------------------
const courses = [
  { id: 1, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 2, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 3, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 4, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 5, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 6, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 7, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
  { id: 8, title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل', instructor: 'د.خالد بن فوزان الفهد', price: '150 ريال', lessons: '15 درس', students: '30 طالب', duration: '3 week', status: 'متاحة للتسجيل', location: 'zoom', date: '9/9/2021' },
];

function drawCourses() {
  const coursesGrid = document.querySelector('#courses-grid');
  if (!coursesGrid) return;

  coursesGrid.innerHTML = courses.map((course) => `
    <article class="h-[458px] w-full max-w-[344px] overflow-hidden rounded-[18px] bg-white text-right shadow-[0_8px_22px_rgba(31,55,88,0.06)] sm:h-[410px] sm:w-[270px]">
      <div class="relative h-[253px] overflow-hidden sm:h-[205px]">
        <img src="photo/nopath-1.png" alt="${course.title}" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>
        <button type="button" aria-label="إضافة إلى المفضلة" class="absolute left-4 top-4 sm:left-3.5 sm:top-3.5 flex h-8 w-8 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-white text-[#777] shadow-sm transition hover:scale-105">
          <svg class="h-4 w-4 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div class="absolute right-4 top-4 sm:right-3.5 sm:top-3.5 flex items-center gap-2.5 sm:gap-2 text-right text-[11px] sm:text-[12px] font-semibold text-white">
          <img src="photo/nopath-2.png" alt="${course.instructor}" class="h-11 w-11 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover">
          <span>${course.instructor}</span>
        </div>
        <h3 class="absolute top-[82px] sm:top-[68px] right-4 left-4 sm:right-3.5 sm:left-3.5 text-right text-[12.5px] sm:text-[13px] font-bold leading-5 text-white">
          ${course.title.replace('المحاسبية', '<br>المحاسبية')}
        </h3>
        <span class="absolute bottom-[42px] sm:bottom-[36px] right-4 sm:right-3.5 rounded-[8px] bg-white px-3.5 py-1.5 sm:px-3 sm:py-1 text-[12px] sm:text-[12.5px] font-bold text-ink shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          ${course.price.replace(' ', '')}
        </span>
      </div>
      <div class="relative flex h-[205px] flex-col rounded-t-[24px] bg-white px-4 pb-3 pt-12 text-[11px] text-[#777]">
        <div dir="ltr" class="absolute inset-x-3 -top-7 grid h-12 grid-cols-3 items-center gap-1 rounded-full bg-white px-2 text-[10px] text-ink shadow-sm sm:inset-x-4">
          <span class="whitespace-nowrap"><i class="fa-solid fa-layer-group mr-1 text-sm"></i>${course.lessons}</span>
          <span class="whitespace-nowrap"><i class="fa-solid fa-users mr-1 text-sm"></i>${course.students}</span>
          <span class="whitespace-nowrap"><i class="fa-solid fa-calendar-days mr-1 text-sm"></i>${course.duration}</span>
        </div>
        <div class="space-y-3">
          <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-semibold text-brand">${course.status}</span><span class="inline-flex items-center gap-3"><span>حالة الدورة</span><i class="fa-solid fa-eye text-lg text-ink"></i></span></div>
          <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-bold text-ink">${course.location}</span><span class="inline-flex items-center gap-3"><span>المكان</span><i class="fa-solid fa-location-arrow text-lg text-ink"></i></span></div>
          <div dir="ltr" class="flex items-center justify-between"><span class="font-bold text-ink">${course.date}</span><span class="inline-flex items-center gap-3"><span>التاريخ</span><i class="fa-solid fa-calendar-days text-lg text-ink"></i></span></div>
        </div>
      </div>
    </article>
  `).join('');
}

drawCourses();
// ----------------------- END Courses Section -----------------------
// -----------------------START of Partners Section -------------------------------
$(document).ready(function() {
  // ==========================================
  // 1. Partners Section Carousel
  // ==========================================
  const $partnersCarousel = $('.partners-carousel');
  $partnersCarousel.owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false, // Disable native dots
    nav: false,
    responsive: {
      0: { items: 2 },
      640: { items: 3 },
      1024: { items: 6 }
    }
  });

  $partnersCarousel.on('changed.owl.carousel', function(event) {
    const current = event.relatedTarget.relative(event.item.index);
    updatePartnersDots(current);
  });

  $('#partners-custom-dots button').on('click', function() {
    const targetIdx = $(this).data('index');
    $partnersCarousel.trigger('to.owl.carousel', [targetIdx * 2, 400]);
  });

  function updatePartnersDots(activeIndex) {
    const $dots = $('#partners-custom-dots button');
    if (!$dots.length) return;
    const activeDotIdx = Math.min(2, Math.floor(activeIndex / 2));
    $dots.each(function(idx) {
      const $dot = $(this);
      if (idx === activeDotIdx) {
        $dot.removeClass('bg-gray-200')
            .addClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      } else {
        $dot.addClass('bg-gray-200')
            .removeClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      }
    });
  }

  // ==========================================
  // 2. Credits Section Carousel
  // ==========================================
  const $creditsCarousel = $('.credits-carousel');
  $creditsCarousel.owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      640: { items: 3 },
      1024: { items: 6 }
    }
  });

  $creditsCarousel.on('changed.owl.carousel', function(event) {
    const current = event.relatedTarget.relative(event.item.index);
    updateCreditsDots(current);
  });

  $('#credits-custom-dots button').on('click', function() {
    const targetIdx = $(this).data('index');
    $creditsCarousel.trigger('to.owl.carousel', [targetIdx * 2, 400]);
  });

  function updateCreditsDots(activeIndex) {
    const $dots = $('#credits-custom-dots button');
    if (!$dots.length) return;
    const activeDotIdx = Math.min(2, Math.floor(activeIndex / 2));
    $dots.each(function(idx) {
      const $dot = $(this);
      if (idx === activeDotIdx) {
        $dot.removeClass('bg-gray-200')
            .addClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      } else {
        $dot.addClass('bg-gray-200')
            .removeClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      }
    });
  }

  // ==========================================
  // 3. Trainers Section Carousel
  // ==========================================
  const $trainersCarousel = $('.trainers-carousel');
  $trainersCarousel.owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 4 }
    }
  });

  $trainersCarousel.on('changed.owl.carousel', function(event) {
    const current = event.relatedTarget.relative(event.item.index);
    updateTrainersDots(current);
  });

  $('#trainers-custom-dots button').on('click', function() {
    const targetIdx = $(this).data('index');
    const slideIdx = targetIdx === 0 ? 0 : (targetIdx === 1 ? 1 : 3);
    $trainersCarousel.trigger('to.owl.carousel', [slideIdx, 400]);
  });

  function updateTrainersDots(activeIndex) {
    const $dots = $('#trainers-custom-dots button');
    if (!$dots.length) return;
    let activeDotIdx = 0;
    if (activeIndex === 1 || activeIndex === 2) {
      activeDotIdx = 1;
    } else if (activeIndex === 3) {
      activeDotIdx = 2;
    }
    $dots.each(function(idx) {
      const $dot = $(this);
      if (idx === activeDotIdx) {
        $dot.removeClass('bg-gray-200')
            .addClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      } else {
        $dot.addClass('bg-gray-200')
            .removeClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      }
    });
  }

  // ==========================================
  // 3. Blog Section Carousel
  // ==========================================
  const $blogCarousel = $('.blog-carousel');
  $blogCarousel.owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 4 }
    }
  });

  $blogCarousel.on('changed.owl.carousel', function(event) {
    const current = event.relatedTarget.relative(event.item.index);
    updateBlogDots(current);
  });

  $('#blog-custom-dots button').on('click', function() {
    const targetIdx = $(this).data('index');
    const slideIdx = targetIdx === 0 ? 0 : (targetIdx === 1 ? 1 : 3);
    $blogCarousel.trigger('to.owl.carousel', [slideIdx, 400]);
  });

  function updateBlogDots(activeIndex) {
    const $dots = $('#blog-custom-dots button');
    if (!$dots.length) return;
    let activeDotIdx = 0;
    if (activeIndex === 1 || activeIndex === 2) {
      activeDotIdx = 1;
    } else if (activeIndex === 3) {
      activeDotIdx = 2;
    }
    $dots.each(function(idx) {
      const $dot = $(this);
      if (idx === activeDotIdx) {
        $dot.removeClass('bg-white')
            .addClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      } else {
        $dot.addClass('bg-white')
            .removeClass('bg-brand -translate-y-[6px] border border-brand sm:-translate-y-[7px]');
      }
    });
  }

  // ==========================================
  // 4. Hero Section Carousel
  // ==========================================
  const $heroCarousel = $('.hero-carousel');
  $heroCarousel.owlCarousel({
    loop: true,
    items: 1, // Always show 1 slide
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    nav: false
  });

  $heroCarousel.on('changed.owl.carousel', function(event) {
    const current = event.relatedTarget.relative(event.item.index);
    updateHeroDots(current);
  });

  $('#hero-custom-dots button').on('click', function() {
    const targetIdx = $(this).data('index');
    $heroCarousel.trigger('to.owl.carousel', [targetIdx, 400]);
  });

  $('#hero-prev-btn').on('click', function() {
    $heroCarousel.trigger('prev.owl.carousel');
  });

  $('#hero-next-btn').on('click', function() {
    $heroCarousel.trigger('next.owl.carousel');
  });

  function updateHeroDots(activeIndex) {
    const $dots = $('#hero-custom-dots button');
    if (!$dots.length) return;
    $dots.each(function(idx) {
      const $dot = $(this);
      if (idx === activeIndex) {
        $dot.removeClass('bg-white')
            .addClass('bg-brand -translate-y-[7px] border border-white');
      } else {
        $dot.addClass('bg-white')
            .removeClass('bg-brand -translate-y-[7px] border border-white');
      }
    });
  }
});
// -----------------------END of Partners Section -------------------------------

