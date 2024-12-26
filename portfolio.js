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
const gridContainer = document.querySelector('.grid-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Start with the first set of projects
const totalSlides = 2; // Two sets of 3 projects (adjust if needed)

// Handle right arrow click
rightArrow.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        gridContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

// Handle left arrow click
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        gridContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

//Contact me validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let formValid = true;
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    // Check for empty fields
    inputs.forEach(input => {
      if (!input.value) {
        formValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '';
      }
    });
  
    if (!formValid) {
      event.preventDefault();
      alert("Please fill in all fields.");
    }
  });
  


