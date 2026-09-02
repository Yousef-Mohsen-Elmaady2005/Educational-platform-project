$(document).ready(function () {
  const images = [
    'photo/jeshoots2-11.png',
    'photo/jeshoots2-22.png',
    'photo/jeshoots2-3.png'
  ];

  let activeIndex = 1;
  const $left = $('#images-stack img[data-role="left"]');
  const $center = $('#images-stack img[data-role="center"]');
  const $right = $('#images-stack img[data-role="right"]');
  const dots = document.querySelectorAll('#images-custom-dots button');

  function render() {
    const leftIndex = (activeIndex - 1 + images.length) % images.length;
    const rightIndex = (activeIndex + 1) % images.length;

    $left.fadeOut(150, function () {
      $(this).attr('src', images[leftIndex]).fadeIn(150);
    });
    $center.fadeOut(150, function () {
      $(this).attr('src', images[activeIndex]).fadeIn(150);
    });
    $right.fadeOut(150, function () {
      $(this).attr('src', images[rightIndex]).fadeIn(150);
    });

    dots.forEach((dot, i) => {
      const isActive = i === activeIndex;
      dot.classList.toggle('bg-brand', isActive);
      dot.classList.toggle('bg-white', !isActive);
      dot.classList.toggle('border', !isActive);
      dot.classList.toggle('border-gray-300', !isActive);
      dot.classList.toggle('-translate-y-[6px]', isActive);
      dot.classList.toggle('sm:-translate-y-[7px]', isActive);
    });
  }

  function next() {
    activeIndex = (activeIndex + 1) % images.length;
    render();
  }

  render();
  let timer = setInterval(next, 3000);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      activeIndex = parseInt(dot.dataset.index);
      render();
      timer = setInterval(next, 3000);
    });
  });
});