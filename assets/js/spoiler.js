function toggleContent(contentId) {
    const contents = document.querySelectorAll('.accordion-content');
    const titles = document.querySelectorAll('.accordion-title');

    // Закрываем все содержимое
    contents.forEach(content => {
        if (content.id !== contentId) {
            content.classList.remove('active');
        }
    });

    // Удаляем активные классы у всех заголовков
    titles.forEach(title => title.classList.remove('active'));

    // Переключаем текущее содержимое
    const contentToToggle = document.getElementById(contentId);
    const isActive = contentToToggle.classList.contains('active');

    if (!isActive) {
        contentToToggle.classList.add('active');
        const activeTitle = Array.from(titles).find(title => title.onclick.toString().includes(contentId));
        if (activeTitle) activeTitle.classList.add('active');
    } else {
        contentToToggle.classList.remove('active');
    }
}
