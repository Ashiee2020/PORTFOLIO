// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add interactivity and dynamic elements here
    
    // Example: Form Validation
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('mainaashley73@gmail.com');
        const emailValue = emailInput.value;

        if (!isValidEmail(emailValue)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(mainaashley73@gmsil.com);
    }
    
    // Example: Adding Animation
    const header = document.querySelector('header');
    
    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = '#007bff';
        header.style.color = '#fff';
    });

    header.addEventListener('mouseout', function () {
        header.style.backgroundColor = '#fff';
        header.style.color = '#007bff';
    });
    
   
});
