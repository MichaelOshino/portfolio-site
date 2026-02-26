const introSection = document.getElementById('intro');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Устанавливаем степень размытия в зависимости от прокрутки
    const blurAmount = Math.min(scrollPosition / 50, 10); // Ограничиваем максимальное значение размытия
    introSection.style.filter = `blur(${blurAmount}px)`;
});
