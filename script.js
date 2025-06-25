// Lazy loading and grid population logic
function populateMasonryBrickwall(images) {
    const grid = document.getElementById('masonryBrickwall');
    if (!grid) return;
    const imgElements = grid.querySelectorAll('.masonry-tile img');
    
    // Shuffle images for better mix
    let shuffledImages = images.slice();
    for(let i=shuffledImages.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
    }
}

function populateMasonryBrickwall(images) {
    const grid = document.getElementById('masonryBrickwall');
    if (!grid) return;
    const imgElements = grid.querySelectorAll('.masonry-tile img');

    // Shuffle images for better mix
    let shuffledImages = images.slice();
    for(let i=shuffledImages.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [shuffledImages[i],shuffledImages[j]]=[shuffledImages[j],shuffledImages[i]];
    }

    // Assign images to data-src for lazy loading
    imgElements.forEach((img,i)=>{
        const url = shuffledImages[i%shuffledImages.length];
        img.setAttribute('data-src', url);
        img.alt = 'Галерея';

        // Load first 6 images immediately for mobile, all for desktop
        if (window.innerWidth > 600 || i < 6) {
            img.src = url;
            img.classList.remove('lazy');
        }
    });

    // Randomly update visible tiles at random intervals
    function randomUpdate() {
        const visibleTiles = Array.from(imgElements).filter(img => 
            img.closest('.masonry-tile').style.display !== 'none' && 
            !img.closest('.masonry-tile:nth-child(n+7)') || window.innerWidth > 600
        );

        if (visibleTiles.length > 0) {
            const idx = Math.floor(Math.random() * visibleTiles.length);
            const url = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
            const img = visibleTiles[idx];
            img.style.transition = 'opacity 0.4s';
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = url;
                img.setAttribute('data-src', url);
                img.style.opacity = '1';
            }, 400);
        }
        setTimeout(randomUpdate, 800 + Math.random()*2200);
    }
    setTimeout(randomUpdate, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // new HeaderScroll(); // Removed because HeaderScroll is not defined
    // setupFAQAccordion(); // Removed because setupFAQAccordion is not defined
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Smooth scroll for all internal links
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
    
    // Add ripple effect to buttons
    document.querySelectorAll('button, .cta-btn, .hero-btn, .load-more-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Use the same image list as PhotoMasonry
    const images = [
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(1).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(2).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(3).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(4).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(5).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(6).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(7).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(8).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(9).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(10).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(11).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(12).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(13).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(14).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(15).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(16).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(17).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(18).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(19).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(20).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(21).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(22).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(23).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(24).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(25).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(26).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(27).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(28).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(29).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(30).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(31).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(32).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(33).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(34).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(35).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(36).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(37).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(38).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(39).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(40).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(41).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(42).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(43).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(44).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(45).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(46).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(47).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(48).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(49).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(50).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(51).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(52).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(53).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(54).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(55).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(56).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(57).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(58).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(59).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(60).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(61).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(62).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(63).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(64).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(65).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(66).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(67).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(68).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(69).jpg',
        'https://raw.githubusercontent.com/maxxx168/cargo-empire/main/assets/images/pic/(70).jpg'
    ];
    populateMasonryBrickwall(images);
    
    // Load more button functionality with lazy loading
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const hiddenTiles = document.querySelectorAll('.masonry-tile:nth-child(n+7)');
            hiddenTiles.forEach(tile => {
                tile.style.display = 'flex';
                // Reset aspect ratio for loaded tiles on mobile
                if (window.innerWidth <= 600) {
                    tile.style.aspectRatio = '1/1';
                }
                
                // Lazy load images in revealed tiles
                const img = tile.querySelector('img.lazy');
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            loadMoreBtn.style.display = 'none';
        });
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
