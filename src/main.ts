const menuBtn: HTMLElement = document.querySelector('.menu-btn');
const menu: HTMLElement = document.querySelector('.menu');
const menuNav: HTMLElement = document.querySelector('.menu-nav');
const menuBranding: HTMLElement = document.querySelector('.menu-branding');
const navItems: HTMLElement[] = Array.from(document.querySelectorAll('.nav-item'));

// Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.map(item => {
            item.classList.add('show');
        })
        // Set menu state

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.map(item => {
            item.classList.remove('show');
        })
        // Set menu state

        showMenu = false;
    }
}
