const introSection = document.getElementById('intro');

// 1. Сохраняем оригинальный фон
const originalBackground = window.getComputedStyle(introSection).background;

// 2. Отключаем фон у контейнера и создаём отдельный слой
introSection.style.background = 'none';
introSection.style.position = 'sticky';

const bgLayer = document.createElement('div');
bgLayer.style.position = 'absolute';
bgLayer.style.inset = '0';
bgLayer.style.zIndex = '0';
bgLayer.style.background = originalBackground;
bgLayer.style.pointerEvents = 'none';
introSection.appendChild(bgLayer);

// 3. Находим контент (все прямые дети, кроме созданного слоя)
const contentElements = Array.from(introSection.children).filter(el => el !== bgLayer);
const contentWrapper = document.createElement('div');
contentWrapper.className = 'intro-content';
contentWrapper.style.zIndex = '1';
contentWrapper.style.position = 'relative';
contentWrapper.style.height = '100%';

// Перемещаем контент внутрь wrapper'а
contentElements.forEach(el => contentWrapper.appendChild(el));
introSection.appendChild(contentWrapper);

// 4. Анимация — только wrapper
contentWrapper.style.willChange = 'opacity, transform';
contentWrapper.style.transform = 'translateZ(0)';

window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const progress = Math.min(scrollPosition / 500, 0.8);
        
        contentWrapper.style.opacity = 1 - progress;
        contentWrapper.style.transform = `translateZ(0) scale(${1 - progress * 0.025})`;
    });
}, { passive: true });