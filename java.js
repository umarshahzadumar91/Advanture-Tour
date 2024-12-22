const btn = document.querySelector('.menu_btn');
const navlist = document.querySelector('.navlist');

btn.addEventListener('click', () => {
    navlist.classList.toggle('mobile_menu'); 
});
