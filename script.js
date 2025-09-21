// This is an optional file for future interactivity.
// For now, it's just a placeholder.
// You can add features like a mobile navigation toggle or
// a smooth scroll effect here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a class to the body when the page loads
    // to trigger CSS animations.
    document.body.classList.add('page-loaded');

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
