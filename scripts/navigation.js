// FILE: static-portfolio/scripts/navigation.js
class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('.section');
    this.currentSection = 'home';
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.setActiveSection('home');
  }
  
  setupEventListeners() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        this.setActiveSection(section);
      });
    });
  }
  
  setActiveSection(sectionId) {
    // Update navigation
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      }
    });
    
    // Update sections
    this.sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === sectionId) {
        section.classList.add('active');
      }
    });
    
    this.currentSection = sectionId;
    
    // Update URL hash
    window.location.hash = sectionId;
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});