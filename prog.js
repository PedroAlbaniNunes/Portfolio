document.addEventListener("DOMContentLoaded", function() {
    let fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(function(element) {
        element.classList.add('active');
    });
});
