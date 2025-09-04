document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        const itemPage = item.getAttribute('href');
        if (itemPage === currentPage) {
            item.classList.add('active');
        }
    });
});