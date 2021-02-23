const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.checkbox.addEventListener('change', event => {
  if (event.target.checked) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  } else {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
  }
  localStorage.setItem('checked', event.target.checked);
});

const saveTheme = localStorage.getItem('checked');
if (saveTheme) {
  if (JSON.parse(saveTheme) === true) {
    refs.body.classList.add('dark-theme');
    refs.checkbox.checked = true;
  }
}
