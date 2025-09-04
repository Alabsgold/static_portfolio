// FILE: static-portfolio/scripts/animations.js
class TextAnimator {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.init();
  }
  
  init() {
    this.observeElements();
    this.setupLetterAnimations();
  }
  
  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    this.animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  animateElement(element) {
    const animationType = element.getAttribute('data-animate');
    
    switch(animationType) {
      case 'fadeIn':
        element.classList.add('animate-fadeIn');
        break;
      case 'goldGlow':
        element.classList.add('animate-goldGlow');
        break;
      case 'stagger':
        element.classList.add('stagger-children');
        break;
      case 'letterHop':
        this.animateLetters(element);
        break;
    }
  }
  
  animateLetters(element) {
    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      span.classList.add('animate-letterHop');
      element.appendChild(span);
    });
  }
  
  setupLetterAnimations() {
    const letterElements = document.querySelectorAll('[data-animate="letterHop"]');
    letterElements.forEach(el => {
      this.animateLetters(el);
    });
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TextAnimator();
});