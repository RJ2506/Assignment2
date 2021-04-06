const head = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const footer = document.querySelector('.footer')
const buttons = document.querySelector('.buttons')
const switch_bar = document.querySelector('.dark')
const side_button = document.querySelector('.side_button')
const log = console.log;

function theme() {
    head.classList.toggle('toggle-dark');
    sidebar.classList.toggle('toggle-dark');
    content.classList.toggle('toggle-dark');
    footer.classList.toggle('toggle-dark');
    buttons.classList.toggle('toggle-dark');
    side_button.classList.toggle('toggle-dark');
    switch_bar.classList.toggle('toggle_dark_button')

}

switch_bar.addEventListener('click', theme, false)