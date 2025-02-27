/* в этот файл добавляет скрипты*/


const navMain = document.querySelector('.main-nav'); /*находим навигацию -.main-nav */
const navToggle = document.querySelector('.main-nav__toggle');/* нах. кнопку включения меню*/

navMain.classList.remove('main-nav--nojs');/*удаляем класс при выключенном JS */

/*на кнопку включения меню вешаем обработчик событий при клике на нее */
navToggle.addEventListener('click', () => { // если при клике на кнпку
  if (navMain.classList.contains('main-nav--closed')) { // в навигации есть этот класс
    navMain.classList.remove('main-nav--closed'); // то удаляем этот класс (открываем меню)
    navMain.classList.add('main-nav--opened'); // а в место ненего дабавляем другой класс
  } else { // если нет данного класса
    navMain.classList.add('main-nav--closed'); // добавляем его (закрываем меню)
    navMain.classList.remove('main-nav--opened'); // и удаляем кдасс main-nav--opened
  }
});
