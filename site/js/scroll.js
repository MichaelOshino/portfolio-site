document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.accordion-content');
    const titles = document.querySelectorAll('.accordion-title');
  
    function handleScroll(event, accordionContent) {
      const atTop = accordionContent.scrollTop === 0;
      const atBottom = accordionContent.scrollTop + accordionContent.clientHeight === accordionContent.scrollHeight;
  
      if (atTop && event.deltaY < 0) {
        event.preventDefault();
      } else if (atBottom && event.deltaY > 0) {
        event.preventDefault();
      }
    }
  
    // Изначально привязываем обработчики ко всем блокам
    contents.forEach(content => {
      content.addEventListener("wheel", function(event) {
        handleScroll(event, content);
      });
    });
  
    function toggleContent(contentId) {
      let isOpen = false;
      contents.forEach(content => {
        if (content.id !== contentId) {
          content.style.display = 'none'; // Закрываем все другие спойлеры
          content.removeEventListener("wheel", function(event) {
            handleScroll(event, content); // Убираем обработчик прокрутки
          });
        }
      });
  
      titles.forEach(title => {
        title.classList.remove('active'); // Удаляем класс активности у всех заголовков
      });
  
      const contentToToggle = document.getElementById(contentId);
  
      if (contentToToggle.style.display === 'none' || contentToToggle.style.display === '') {
        contentToToggle.style.display = 'block'; // Показываем текущее содержимое
        contentToToggle.addEventListener("wheel", function(event) {
          handleScroll(event, contentToToggle); // Добавляем обработчик прокрутки
        });
  
        const activeTitle = Array.from(titles).find(title => title.onclick.toString().includes(contentId));
        if (activeTitle) {
          activeTitle.classList.add('active'); // Добавляем класс активности к заголовку
        }
        isOpen = true;
      }
  
      if (!isOpen) {
        contentToToggle.style.display = 'none';
      }
    }
  
    // Пример использования toggleContent
    // toggleContent("contentId"); // Вызовите эту функцию для переключения контента
  });
  