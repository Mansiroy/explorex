// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navbar = document.querySelector('.navbar');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
    
    // Insert the toggle button before the nav links container
    const container = document.querySelector('.navbar .container');
    container.insertBefore(navToggle, container.querySelector('nav'));
  
    // Initially hide additional destination cards (4-6)
    const destinationCards = document.querySelectorAll('.destination-card');
    for (let i = 3; i < destinationCards.length; i++) {
      destinationCards[i].style.display = 'none';
    }
  
    // "More Destinations" Button Functionality
    const moreBtn = document.querySelector('.btn-more');
    if (moreBtn) {
      moreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show all hidden destination cards
        const hiddenCards = document.querySelectorAll('.destination-card:nth-child(n+4)');
        hiddenCards.forEach(card => {
          card.style.display = 'block';
          // Add animation for smooth appearance
          card.style.animation = 'fadeIn 0.5s ease-in-out';
        });
  
        // Change button text and behavior
        this.textContent = 'VIEW ALL DESTINATIONS';
        this.removeEventListener('click', arguments.callee);
        this.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      });
    }
  
    // Card Click Event - For potential expansion
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        // You could add modal functionality here
        console.log('Card clicked:', this.querySelector('.card-place').textContent);
      });
    });
  
    // Add animation styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .destination-card {
        animation: fadeIn 0.5s ease-in-out;
      }
      
      .nav-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #3a86ff;
      }
      
      @media (max-width: 768px) {
        .nav-toggle {
          display: block;
        }
      }
    `;
    document.head.appendChild(style);
  });