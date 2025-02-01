const eye = document.querySelector('.eye');
const background = document.querySelector('.background');
let timeoutId; // Переменная для хранения таймера

eye.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY, target } = event;
    const { clientWidth, clientHeight } = target;

    // Находим центр глазка
    const centerX = clientWidth / 2;
    const centerY = clientHeight / 2;

    // Рассчитываем относительное положение курсора от центра
    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    // Рассчитываем значение смещения фона
    const moveX = deltaX * 0.17; // Коэффициент, который регулирует скорость движения по оси X
    const moveY = deltaY * 0.17; // Коэффициент, который регулирует скорость движения по оси Y

    // Применяем новое положение фона
    background.style.transform = `translate(${-moveX}px, ${-moveY}px) translate(-50%, -50%)`;

    // Очищаем таймер, чтобы предотвратить лишний сброс
    clearTimeout(timeoutId);

    // Убираем анимацию, чтобы фон не двигался при движении мыши
    background.style.animation = 'none';
});

// Сброс трансформации при выходе курсора из глазка с задержкой
eye.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        // Сброс фона и возобновление анимации
        background.style.transform = 'translate(-50%, -50%)'; // Возвращаем к изначальному положению
        background.style.animation = 'float 3s ease-in-out infinite'; // Включаем анимацию снова
    }, 200); // Задержка в 200 миллисекунд
});