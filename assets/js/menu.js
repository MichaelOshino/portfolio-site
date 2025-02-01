document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section'); // Предполагаем, что ваши секции имеют тег <section>

  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetId = this.getAttribute('href'); // Получаем ID целевой секции
      const targetSection = document.querySelector(targetId); // Находим целевую секцию

      // Определяем расстояние для прокрутки
      let scrollToPosition;
      if (targetId === '#intro') {
        scrollToPosition = 0; // Прокручиваем в самый верх для секции intro
      } else {
        scrollToPosition = targetSection.offsetTop - (window.innerHeight / 2); // Прокручиваем на 50vh для остальных секций
      }

      // Прокручиваем страницу к целевой секции
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth' // Плавная прокрутка
      });
    });
  });

  // Функция для обновления активного класса на ссылках
  function updateActiveLink() {
    let scrollPosition = window.scrollY + (window.innerHeight / 1.55); // Получаем текущую позицию прокрутки, смещенную на 50vh

    sections.forEach(section => {
      const sectionTop = section.offsetTop; // Верхняя граница секции
      const sectionHeight = section.offsetHeight; // Высота секции

      // Проверяем, находится ли текущая позиция прокрутки внутри секции
      if (scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight) {
        const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
        
        // Удаляем класс active у всех ссылок
        navLinks.forEach(link => link.classList.remove('active'));

        // Добавляем класс active к текущей ссылке
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }

  // Добавляем событие скролла
  window.addEventListener('scroll', updateActiveLink);

  // Начальная установка активной ссылки при загрузке
  updateActiveLink();
});
