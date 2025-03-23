function showTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const grids = document.querySelectorAll('.grid-container');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        grids[i].classList.toggle('active', i === index);
    });
}

// window.addEventListener('scroll', function() {
//     const header__up = document.getElementById('header__up');

//     if (window.scrollY > 30) {
//         header__up.classList.add('fixed'); // Добавляем класс, когда прокручено более 20 пикселей
//     } else {
//         header__up.classList.remove('fixed'); // Убираем класс, если прокрутка меньше 20 пикселей
//     }
// });
