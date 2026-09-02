 const playBtn = document.getElementById('play-instructor-video');
  const video = document.getElementById('instructor-video');
  if (playBtn && video) {
    playBtn.addEventListener('click', () => {
      video.play();
      playBtn.style.display = 'none';
      video.setAttribute('controls', 'true');
    });
  }

//  END of Credentials & Video Section

//  START of certificate 
const certCourses = [];
for (let i = 1; i <= 20; i++) {
  certCourses.push({
    id: i,
    title: 'النسخة الرابعة : دورة التدقيق والمراجعة المحاسبية عبر برنامج الاكسل',
    instructor: i % 4 === 0 ? 'أ/ محمد السيد ابراهيم' : (i % 3 === 0 ? 'د/ إبراهيم البسيوني' : 'د.خالد بن فوزان الفهد'),
    price: '150 ريال',
    lessons: '15 درس',
    students: '30 طالب',
    duration: '3 week',
    status: 'متاحة للتسجيل',
    location: 'zoom',
    date: '9/9/2021'
  });
}

function drawCertCourses() {
  const grid = document.querySelector('#jobs-carousel');
  if (!grid) return;

  grid.innerHTML = certCourses.map((job) => `
<div class="course-card w-[270px] h-[410px] mx-auto overflow-hidden rounded-[18px] bg-white text-right shadow-[0_8px_22px_rgba(31,55,88,0.06)] flex flex-col">
  <div class="relative h-[220px] overflow-hidden shrink-0">
    <img src="photo/NoPath-1.png" alt="${job.title}" class="absolute inset-0 h-full w-full object-cover">
    <div class="absolute inset-0 bg-black opacity-60" aria-hidden="true"></div>
<button type="button" aria-label="إضافة إلى المفضلة" onclick="event.preventDefault(); event.stopPropagation();"
  class="group absolute left-3 top-3 sm:left-3.5 sm:top-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#777] shadow-sm transition hover:scale-105">
  <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
    <div class="relative z-10 flex h-full flex-col px-3 pt-3">
      <div class="flex items-center gap-2 text-right text-[11px] font-semibold text-white">
        <img src="photo/xxx.png" alt="${job.instructor}"
             style="width:33px;height:33px;flex-shrink:0;object-fit:cover;"
             class="rounded-full border-2 border-white">
        <span class="line-clamp-1">${job.instructor}</span>
      </div>
      <h3 class="mt-2 text-right text-[13px] font-bold leading-6 text-white line-clamp-2">
        ${job.title}
      </h3>
      <span style="width:75px;height:26px;" class="mt-6 self-start flex items-center justify-center rounded-[10px] bg-white text-[13px] font-bold text-ink shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        ${job.price.replace(' ', '')}
      </span>
    </div>
  </div>
  <div class="relative flex flex-1 flex-col rounded-t-[24px] bg-white px-4 pb-3 pt-11 text-[11px] text-[#777]">
    <div dir="ltr" class="absolute inset-x-3 -top-6 grid h-11 grid-cols-3 items-center gap-1 rounded-full bg-white px-2 text-[10px] text-ink shadow-sm">
      <span class="whitespace-nowrap truncate"><i class="fa-solid fa-layer-group ml-1 text-sm"></i>${job.lessons}</span>
      <span class="whitespace-nowrap truncate"><i class="fa-solid fa-users ml-1 text-sm"></i>${job.students}</span>
      <span class="whitespace-nowrap truncate"><i class="fa-solid fa-calendar-days ml-1 text-sm"></i>${job.duration}</span>
    </div>
    <div class="space-y-3 mt-1">
      <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-semibold text-brand">${job.status}</span><span class="inline-flex items-center gap-3"><span>حالة الدورة</span><i class="fa-solid fa-eye text-lg text-ink"></i></span></div>
      <div dir="ltr" class="flex items-center justify-between border-b border-gray-200 pb-3"><span class="font-bold text-ink">${job.location}</span><span class="inline-flex items-center gap-3"><span>المكان</span><i class="fa-solid fa-location-arrow text-lg text-ink"></i></span></div>
      <div dir="ltr" class="flex items-center justify-between"><span class="font-bold text-ink">${job.date}</span><span class="inline-flex items-center gap-3"><span>التاريخ</span><i class="fa-solid fa-calendar-days text-lg text-ink"></i></span></div>
    </div>
  </div>
</div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  drawCertCourses();

  if ($('#jobs-carousel').hasClass('owl-loaded')) {
    $('#jobs-carousel').trigger('destroy.owl.carousel');
  }

  $('#jobs-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0:    { items: 1 },
      640:  { items: 2 },
      1024: { items: 3 },
      1280: { items: 4 }
    }
  });

  document.querySelector('#jobs-prev').addEventListener('click', () => {
    $('#jobs-carousel').trigger('next.owl.carousel');
  });
  document.querySelector('#jobs-next').addEventListener('click', () => {
    $('#jobs-carousel').trigger('prev.owl.carousel');
  });
});
//  END of certificate 
