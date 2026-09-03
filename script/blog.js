const articlesAPI = [
    {id: 1,image: "photo/jeshoots2-11.png",date: "17/1/2019",comments: 17,views: 30,title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين"},
    { id: 2, image: "photo/jeshoots2-3.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 3, image: "photo/jeshoots2-11.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 4, image: "photo/hero-section.jpg", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 5, image: "photo/jeshoots2-11.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 6, image: "photo/jeshoots2-3.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 7, image: "photo/hero-section.jpg", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 8, image: "photo/jeshoots2-11.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 9, image: "photo/jeshoots2-3.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 10, image: "photo/jeshoots2-11.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 11, image: "photo/jeshoots2-3.png", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" },
    { id: 12, image: "photo/hero-section.jpg", date: "15/7/2019", comments: 17, views: 30, title: "شرح طريقة التسجيل بالموقع وشراء دورة والذهاب للدورة الآن اونلاين" }
  ];

  function fetchArticles() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(articlesAPI), 300);
    });
  }

  function renderCard(article) {
    return `
<div
  class="w-[255px] min-h-[384px] bg-white rounded-[22px] overflow-hidden shadow-[0_3px_16px_rgba(34,33,109,0.06)] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(34,33,109,0.14)]"
  data-id="${article.id}">
<!-- صورة المقال -->
  <div class="px-[11px] pt-[13px] pb-[23px]">
    <img
      class="w-full h-[139px] rounded-[17px] object-cover block"
      src="${article.image}" alt="${article.title}"></div>
  <!-- بيانات المقال -->
  <div
    class="h-[47px] bg-[#F3F9FD] flex items-center justify-center px-[34px]">
    <div
      class="w-full flex items-center justify-between text-[#0055B8] text-[9px] font-bold"
      dir="ltr">
      <!-- التاريخ -->
      <span class="flex items-center gap-1 whitespace-nowrap">
        <i class="fa-regular fa-calendar-days text-[#0055B8] text-[17px]"></i>
        <span>${article.date}</span>
      </span>
      <!-- التعليقات -->
      <span class="flex items-center gap-1 whitespace-nowrap">
        <i class="fa-regular fa-comment text-[#0055B8] text-[17px]"></i>
        <span>${article.comments}</span></span>
      <!-- المشاهدات -->
      <span class="flex items-center gap-1 whitespace-nowrap">
        <i class="fa-regular fa-eye text-[#0055B8] text-[17px]"></i>
        <span>${article.views}</span></span>
    </div>
  </div>
  <!-- محتوى المقال -->
  <div
    class="px-5 pt-[25px] pb-[19px] flex flex-col flex-1"dir="rtl">
<!-- العنوان -->
    <p
      class="text-[#0055B8] text-[14px] font-bold leading-[2.1] mb-5 flex-1 text-center">${article.title}</p>
    <!-- زر التفاصيل -->
   <a
  href="blog2.html"
  class="w-[190px] h-[48px] max-w-full mx-auto bg-[#252274] hover:bg-[#15AC8B] text-white border-none rounded-[25px] text-[15px] font-normal cursor-pointer transition-colors duration-300 flex items-center justify-center">
  التفاصيل
</a></div>
</div>`;}
  async function initBlogMembers() {
    const grid = document.getElementById('cardsGrid');
    const articles = await fetchArticles();
    grid.innerHTML = articles.map(renderCard).join('');
  }
  initBlogMembers();
