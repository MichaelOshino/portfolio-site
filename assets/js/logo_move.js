const eye = document.querySelector('.eye');
const background = document.querySelector('.background');
let isAnimating = false; // Флаг, указывающий на анимацию

eye.addEventListener('mousemove', (event) => {
    if (isAnimating) return; // Блокируем взаимодействие, если идет анимация

    // Получаем размеры элемента и его позицию на странице
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Получаем координаты мыши
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Расстояние мыши от центра элемента
    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    // Определяем угол наклона в зависимости от положения мыши
    const maxTilt = 135; // Максимальный угол наклона
    const tiltX = (deltaY / eyeRect.height) * maxTilt;
    const tiltY = (deltaX / eyeRect.width) * maxTilt;

    // Применяем трансформацию с плавным переходом
    background.style.transition = 'transform 0.1s ease-out'; // Плавный переход
    background.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

// Сбрасываем трансформацию с плавным переходом, когда мышь покидает элемент
eye.addEventListener('mouseleave', () => {
    if (isAnimating) return; // Блокируем взаимодействие, если идет анимация

    isAnimating = true; // Включаем флаг анимации

    background.style.transition = 'transform 0.3s ease-in-out'; // Плавное возвращение
    background.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';

    // После завершения анимации разрешаем взаимодействие
    setTimeout(() => {
        isAnimating = false; // Сбрасываем флаг анимации через 100ms
    }, 300); // 300ms — это длительность анимации
});