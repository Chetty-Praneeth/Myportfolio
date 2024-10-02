document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('open');
        });
    });
});
