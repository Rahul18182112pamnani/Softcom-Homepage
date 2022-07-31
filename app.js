const menu = document.querySelector('.menu')
const menuItems = document.querySelector('.menu-items')
const showMenu = document.querySelector('.show-menu')

menu.addEventListener('click', () => {
  menuItems.classList.toggle('show-menu')
})