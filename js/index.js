const menuBarIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeIcon = document.getElementById('close-icon');

menuBarIcon.addEventListener('click', () => {
    if(sideMenu.style.width === '100%') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '100%';
    }
});

closeIcon.addEventListener('click', () => {
    sideMenu.style.width = '0';
})