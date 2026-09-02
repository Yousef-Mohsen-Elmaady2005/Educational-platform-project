 const employmentJobs = [
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
    { title: "اسم الوظيفة يكتب هنا", company: "اسم الشركة الطالبة للتوظيف", city: "الرياض", minutesAgo: 49 },
  ];

  function createEmploymentJobCard(job) {
    return `
      <div class="relative bg-[#FAFAFA] border border-gray-100/60 hover:border-gray-200 hover:bg-white rounded-[24px] p-5 sm:p-6 pt-8 pb-12 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
        <div>
          <!-- Job Title -->
          <h3 class="text-base font-extrabold text-[#1A1A1A] mb-5">${job.title}</h3>

          <!-- Info Rows -->
          <div class="flex flex-col gap-3.5">
            <!-- Row 2: Company & Location -->
            <div class="flex flex-wrap items-center justify-between gap-3 w-full">
              <!-- Company (Right) -->
              <div class="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF] font-medium min-w-0">
                <!-- Building Icon -->
                <i class="fa-solid fa-building text-[#00C7A3] text-base md:text-lg shrink-0"></i>
                <span class="truncate">${job.company}</span>
              </div>

              <!-- Location (Left) -->
              <div class="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF] font-medium shrink-0">
                <!-- Location Pin Icon -->
                <i class="fa-solid fa-location-dot text-[#00C7A3] text-base md:text-lg shrink-0"></i>
                <span>${job.city}</span>
              </div>
            </div>

            <!-- Row 3: Time -->
            <div class="flex items-center gap-2 mb-5 text-xs sm:text-sm text-[#9CA3AF] font-medium">
              <!-- Clock Icon -->
              <i class="fa-regular fa-clock text-[#00C7A3] text-base md:text-lg shrink-0"></i>
              <span>منذ ${job.minutesAgo} دقيقة</span>
            </div>
          </div>
        </div>

        <!-- Row 4: Submit Button (Hanging off the bottom right edge) -->
        <div class="absolute bottom-0 right-0 translate-y-1/2 z-10">
<button 
  class="w-[180px] sm:w-[200px] h-[50px] bg-[#6D6D6D] hover:bg-[#00C7A3] text-white text-sm sm:text-base font-semibold flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0" 
  style="border-radius: 25px 0 25px 25px;"
  onclick="window.location.href='careers2.html'"> تقديم
</button>
        </div>
      </div>
    `;
  }

  function renderEmploymentJobs() {
    const grid = document.getElementById("jobs-grid");
    if (!grid) return;
    grid.innerHTML = employmentJobs.map(createEmploymentJobCard).join("");
  }

  renderEmploymentJobs();
