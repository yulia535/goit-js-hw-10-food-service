// const refs = {
//   checkbox: document.querySelector('#theme-switch-toggle'),
//   body: document.querySelector('body'),
// };
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// refs.checkbox.addEventListener('change', event => {
//   if (event.target.checked) {
//     refs.body.classList.add('dark-theme');
//     refs.body.classList.remove('light-theme');
//   } else {
//     refs.body.classList.add('light-theme');
//     refs.body.classList.remove('dark-theme');
//   }
//   localStorage.setItem('checked', event.target.checked);
// });

// const saveTheme = localStorage.getItem('checked');
// if (saveTheme) {
//   if (JSON.parse(saveTheme) === true) {
//     refs.body.classList.add('dark-theme');
//     refs.checkbox.checked = true;
//   }
// }

const themeRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector(`body`);
const Theme = {
  LIGHT: `light-theme`,
  DARK: `dark-theme`,
};
const currentTheme = localStorage.getItem('Theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}
if (currentTheme === Theme.dark) {
  checkBox.checked = true;
}
themeRef.addEventListener(`change`, e => {
  if (e.target.checked) {
    body.classList.remove(`light-theme`);
    localStorage.setItem(`Theme`, Theme.DARK);
    body.classList.add(localStorage.getItem('Theme'));
  } else if (e.target.checked === false) {
    body.classList.remove(`dark-theme`);
    localStorage.setItem(`Theme`, Theme.LIGHT);
    body.classList.add(localStorage.getItem('Theme'));
  }
});
