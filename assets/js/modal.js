const navBar = document.querySelector('.nav-bar');

// Функция для показа модального окна
function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
    navBar.style.display = 'none'; // Скрываем навигацию
    document.documentElement.classList.add('no-scroll'); // Отключаем прокрутку у html

    // Обработчик события Escape для закрытия модального окна
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideModal(id); // Закрытие модального окна при нажатии Escape
        }
    });

    // Обработчик клика вне модального окна для его закрытия
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal(id); // Закрытие модального окна при клике вне содержимого
        }
    });
}

// Функция для скрытия модального окна
function hideModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    navBar.style.display = 'flex'; // Возвращаем навигацию
    document.documentElement.classList.remove('no-scroll'); // Включаем прокрутку
}

