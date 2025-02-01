function toggleContent(contentId) {
    const contents = document.querySelectorAll('.accordion-content');
    const titles = document.querySelectorAll('.accordion-title');

    // Закрываем все содержимое и удаляем класс активного заголовка
    let isOpen = false;

    contents.forEach(content => {
        if (content.id !== contentId) {
            content.style.display = 'none'; // Закрываем все другие спойлеры
        }
    });

    titles.forEach(title => {
        title.classList.remove('active'); // Удаляем класс активности у всех заголовков
    });

    // Получаем текущее содержимое для переключения
    const contentToToggle = document.getElementById(contentId);

    // Переключаем текущее содержимое
    if (contentToToggle.style.display === 'none' || contentToToggle.style.display === '') {
        contentToToggle.style.display = 'block'; // Показываем текущее содержимое
        contentToToggle.style.opacity = '1'; // Показываем текущее содержимое
        const activeTitle = Array.from(titles).find(title => title.onclick.toString().includes(contentId));
        if (activeTitle) {
            activeTitle.classList.add('active'); // Добавляем класс активности к заголовку
        }
        isOpen = true;
    }

    // Если ничего не открылось, закрываем
    if (!isOpen) {
        contentToToggle.style.display = 'none';
    }
}

