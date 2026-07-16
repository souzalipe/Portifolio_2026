const toggleSwitch = document.querySelector('.input');
const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
toggleSwitch.checked = currentTheme === 'dark';

toggleSwitch.addEventListener('change', function () {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});
