(() => {
    const refs = {
        openMenuBtn: document.querySelector('.header__btn-open'),
        closeMenuBtn: document.querySelector('.header__btn-close'),
        menu: document.querySelector('.header__menu'),
        formmenu: document.querySelector('[data-form-menu]')
    };
        refs.openMenuBtn.addEventListener('click', toggleMenu);
        refs.closeMenuBtn.addEventListener('click', toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.formmenu.classList.toggle('is-hidden');
    }
})();