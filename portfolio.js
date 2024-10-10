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
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const text = "    My Projects < Click Explore >";
    let index = 0;
    let isErasing = false;

    function typeEffect() {
        // Typing effect
        if (!isErasing && index < text.length) {
            searchBar.setAttribute('placeholder', searchBar.getAttribute('placeholder') + text.charAt(index));
            index++;
            setTimeout(typeEffect, 100); // Speed of typing
        } 
        // Erasing effect
        else if (isErasing && index > 0) {
            searchBar.setAttribute('placeholder', text.substring(0, index - 1));
            index--;
            setTimeout(typeEffect, 100); // Speed of erasing
        } 
        // Once typing is complete, start erasing
        else if (index === text.length) {
            isErasing = true;
            setTimeout(typeEffect, 500); // Pause before erasing
        }
        // Once erasing is complete, start typing again
        else if (index === 0 && isErasing) {
            isErasing = false;
            setTimeout(typeEffect, 500); // Pause before re-typing
        }
    }

    // Start the typing effect after a short delay
    setTimeout(typeEffect, 500);
});


