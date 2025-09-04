// FILE: static-portfolio/scripts/main.js
// Main application logic
class PortfolioApp {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupSmoothScrolling();
    this.setupKeyboardNavigation();
    this.setupReducedMotion();
  }
  
  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  setupKeyboardNavigation() {
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
  }
  
  setupReducedMotion() {
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (reducedMotionQuery.matches) {
      document.documentElement.classList.add('reduced-motion');
    }
    
    // Listen for changes
    reducedMotionQuery.addEventListener('change', () => {
      if (reducedMotionQuery.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});