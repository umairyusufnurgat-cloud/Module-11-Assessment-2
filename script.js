// Sample restaurant reviews data
const reviews = [
    {
        id: 1,
        name: "Le Bernardin",
        location: "New York, USA",
        category: "fine-dining",
        rating: 5,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        excerpt: "An exceptional seafood experience that redefines fine dining. Chef Eric Ripert's mastery shines through every dish.",
        fullReview: "Le Bernardin continues to set the gold standard for seafood cuisine in New York. The tasting menu was a journey through perfectly executed dishes, each highlighting the natural flavors of the ocean's finest offerings. The service was impeccable, and the wine pairings elevated each course to new heights."
    },
    {
        id: 2,
        name: "Sukiyabashi Jiro",
        location: "Tokyo, Japan",
        category: "fine-dining",
        rating: 5,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        excerpt: "The legendary sushi master delivers an unforgettable omakase experience that justifies every bit of its reputation.",
        fullReview: "Dining at Sukiyabashi Jiro is more than a meal—it's a masterclass in sushi craftsmanship. Each piece of nigiri was perfectly seasoned and served at the ideal temperature. Jiro's attention to detail and decades of experience are evident in every bite."
    },
    {
        id: 3,
        name: "Street Tacos El Primo",
        location: "Mexico City, Mexico",
        category: "street-food",
        rating: 4,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
        excerpt: "Authentic street tacos that capture the soul of Mexican cuisine. Simple ingredients, extraordinary flavors.",
        fullReview: "Hidden in a bustling market, El Primo serves some of the best tacos I've ever tasted. The al pastor is perfectly spiced, the tortillas are made fresh throughout the day, and the salsas pack just the right amount of heat. This is street food at its finest."
    },
    {
        id: 4,
        name: "Pierre Hermé",
        location: "Paris, France",
        category: "desserts",
        rating: 5,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        excerpt: "Macarons that are pure art. Each bite is a perfect balance of texture, flavor, and visual beauty.",
        fullReview: "Pierre Hermé's macarons are in a league of their own. The Ispahan (rose, raspberry, and lychee) is a revelation—delicate shells give way to an explosion of complementary flavors. The attention to detail in both taste and presentation is extraordinary."
    },
    {
        id: 5,
        name: "Hawker Chan",
        location: "Singapore",
        category: "street-food",
        rating: 4,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
        excerpt: "Michelin-starred street food that proves great cuisine doesn't need a fancy setting. The soy sauce chicken is legendary.",
        fullReview: "This humble hawker stall proves that exceptional food can come from the most unexpected places. The soy sauce chicken rice is perfectly executed—tender meat with complex flavors developed through traditional techniques passed down through generations."
    },
    {
        id: 6,
        name: "Osteria Francescana",
        location: "Modena, Italy",
        category: "fine-dining",
        rating: 5,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
        excerpt: "Massimo Bottura's innovative take on traditional Italian cuisine creates magic on every plate.",
        fullReview: "Chef Bottura's passion for Italian culinary traditions, combined with his innovative approach, creates dishes that are both nostalgic and revolutionary. The tortellini in Parmigiano Reggiano cream is a perfect example of elevating simple ingredients to extraordinary heights."
    }
];

// DOM elements
const reviewsGrid = document.getElementById('reviewsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const reviewModal = new bootstrap.Modal(document.getElementById('reviewModal'));

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderReviews(reviews);
    setupFilterButtons();
    setupSmoothScrolling();
    setupAnimations();
});

// Render reviews
function renderReviews(reviewsToShow) {
    reviewsGrid.innerHTML = '';
    
    reviewsToShow.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsGrid.appendChild(reviewCard);
    });
}

// Create review card
function createReviewCard(review) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    col.innerHTML = `
        <div class="card review-card h-100" onclick="showReviewModal(${review.id})">
            <img src="${review.image}" class="card-img-top" alt="${review.name}">
            <div class="card-body d-flex flex-column">
                <div class="rating">${stars}</div>
                <h5 class="restaurant-name">${review.name}</h5>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${review.location}</p>
                <p class="review-excerpt flex-grow-1">${review.excerpt}</p>
                <div class="mt-auto">
                    <span class="badge bg-primary">${getCategoryName(review.category)}</span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'fine-dining': 'Fine Dining',
        'street-food': 'Street Food',
        'desserts': 'Desserts'
    };
    return categories[category] || category;
}

// Setup filter buttons
function setupFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => review.category === filter);
            
            renderReviews(filteredReviews);
        });
    });
}

// Show review modal
function showReviewModal(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (!review) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalContent = document.getElementById('modalContent');
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    modalTitle.textContent = review.name;
    modalImage.src = review.image;
    modalImage.alt = review.name;
    
    modalContent.innerHTML = `
        <div class="mb-3">
            <div class="rating fs-5">${stars}</div>
            <p class="location fs-6 text-muted"><i class="fas fa-map-marker-alt"></i> ${review.location}</p>
            <span class="badge bg-primary">${getCategoryName(review.category)}</span>
        </div>
        <div class="review-text">
            <h6>Claire's Review:</h6>
            <p>${review.fullReview}</p>
        </div>
    `;
    
    reviewModal.show();
}

// Setup smooth scrolling
function setupSmoothScrolling() {
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

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});