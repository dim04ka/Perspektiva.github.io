//-------open/show top-menu
var btn = document.getElementById('btn');
var menu = document.querySelector('.header__menu-ul');
btn.addEventListener('click', showHide);
function showHide() {
  menu.classList.toggle('header_menu-ul_active');
}


