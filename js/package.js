document.addEventListener('DOMContentLoaded', function() {
    const packageList = document.querySelector('.package-list');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // All available packages data
    const allPackages = [
      {
        title: "Mountain Adventure in Manali",
        description: "Experience thrilling mountain treks and breathtaking views in the heart of the Himalayas.",
        duration: "5D/4N",
        pax: "8",
        location: "Manali",
        reviews: "(32 reviews)",
        rating: 4,
        price: "₹12,500",
        image: "assets/mountain.jpeg"
      },
      {
        title: "Cultural Tour of Rajasthan",
        description: "Immerse yourself in the rich culture and heritage of Rajasthan.",
        duration: "7D/6N",
        pax: "12",
        location: "Rajasthan",
        reviews: "(56 reviews)",
        rating: 5,
        price: "₹8,000",
        image: "assets/raj.jpeg"
      },
      {
        title: "Wildlife Safari in Ranthambore",
        description: "Get up close with majestic tigers and other wildlife in their natural habitat.",
        duration: "4D/3N",
        pax: "6",
        location: "Ranthambore",
        reviews: "(28 reviews)",
        rating: 4,
        price: "₹9,800",
        image: "assets/ran.jpg"
      },
      {
        title: "Backwaters of Kerala",
        description: "Relax in houseboats while cruising through the serene backwaters of Kerala.",
        duration: "3D/2N",
        pax: "4",
        location: "Kerala",
        reviews: "(41 reviews)",
        rating: 5,
        price: "₹11,200",
        image: "assets/ke.jpeg"
      },
      {
        title: "Golden Temple Pilgrimage",
        description: "Experience spiritual peace at the Golden Temple in Amritsar.",
        duration: "2D/1N",
        pax: "15",
        location: "Amritsar",
        reviews: "(39 reviews)",
        rating: 5,
        price: "₹5,500",
        image: "assets/gol.jpg"
      }
    ];
  
    // Track loaded packages
    let loadedPackages = 1; // Starts with 1 (the initial package)
    const packagesPerLoad = 2;
  
    // Create loading spinner
    const loader = document.createElement('div');
    loader.className = 'loader';
    loadMoreBtn.insertAdjacentElement('afterend', loader);
  
    function loadMorePackages() {
      // Show loading spinner
      loader.style.display = 'block';
      loadMoreBtn.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        // Calculate how many packages we can load (max 2)
        const packagesToLoad = Math.min(packagesPerLoad, allPackages.length - loadedPackages);
        
        // Add new packages
        for (let i = 0; i < packagesToLoad; i++) {
          const pkg = allPackages[loadedPackages + i];
          const ratingStars = Array(pkg.rating).fill('<ion-icon name="star"></ion-icon>').join('') + 
                            Array(5 - pkg.rating).fill('<ion-icon name="star" style="color:hsl(0, 0%, 80%)"></ion-icon>').join('');
          
          const packageItem = document.createElement('li');
          packageItem.innerHTML = `
            <div class="package-card" style="animation-delay: ${0.2 * i}s">
              <figure class="card-banner">
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" />
              </figure>
              <div class="card-content">
                <h3 class="card-title">${pkg.title}</h3>
                <p class="card-text">${pkg.description}</p>
                <ul class="card-meta-list">
                  <li class="meta-box">
                    <ion-icon name="time"></ion-icon>
                    <span>${pkg.duration}</span>
                  </li>
                  <li class="meta-box">
                    <ion-icon name="people"></ion-icon>
                    <span>pax: ${pkg.pax}</span>
                  </li>
                  <li class="meta-box">
                    <ion-icon name="location"></ion-icon>
                    <span>${pkg.location}</span>
                  </li>
                </ul>
              </div>
              <div class="card-price">
                <p class="reviews">${pkg.reviews}</p>
                <div class="card-rating">${ratingStars}</div>
                <p class="price">${pkg.price} <span>/ per person</span></p>
                <a href="#" class="btn">Book Now</a>
              </div>
            </div>
          `;
          packageList.appendChild(packageItem);
        }
  
        // Update loaded packages count
        loadedPackages += packagesToLoad;
  
        // Hide loader and enable button
        loader.style.display = 'none';
        loadMoreBtn.disabled = false;
  
        // Disable button if all packages are loaded
        if (loadedPackages >= allPackages.length) {
          loadMoreBtn.textContent = 'All Packages Loaded';
          loadMoreBtn.disabled = true;
          loadMoreBtn.style.opacity = '0.7';
          loadMoreBtn.style.cursor = 'default';
        }
      }, 800); // Simulate loading delay
    }
  
    // Initial load (if you want to load some packages immediately)
    // loadMorePackages();
  
    // Event listener for the button
    loadMoreBtn.addEventListener('click', loadMorePackages);
  });