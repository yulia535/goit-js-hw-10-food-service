import menuTemplate from '../templates/menu.hbs';
import dishes from '../menu.json';

const markup = menuTemplate(dishes);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
