# FoodieFanatix - Claire's Food Blog

A responsive Bootstrap-based website for Claire's food blog featuring restaurant reviews from around the world.

## Features

- **Responsive Design** - Mobile-first Bootstrap 5 layout
- **Restaurant Reviews** - Visual cards with ratings and detailed reviews
- **Filter System** - Filter by Fine Dining, Street Food, Desserts
- **Modal Popups** - Full review details in responsive modals
- **Cities Explored** - Showcase of Claire's global food adventures
- **Smooth Animations** - Hover effects and scroll animations

## Technologies Used

- HTML5
- CSS3 (Custom + Bootstrap 5)
- JavaScript (ES6)
- Bootstrap 5.3.0
- Font Awesome 6.0.0
- Google Fonts (Playfair Display, Inter)

## File Structure

```
Foodie-Fanatix/
├── index.html      # Main HTML file
├── style.css       # Custom CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Setup

1. Open `index.html` in any modern web browser
2. No server setup required - runs locally
3. All dependencies loaded via CDN

## Features Overview

### Navigation
- Fixed responsive navbar with smooth scrolling
- Mobile hamburger menu for small screens

### Reviews Section
- 6 sample restaurant reviews with images
- Star ratings and location badges
- Category filtering (All, Fine Dining, Street Food, Desserts)
- Click any review card to view full details

### Cities Section
- Visual showcase of cities Claire has visited
- Restaurant count per city
- Latest reviewed restaurant highlights

### About Section
- Claire's bio and social media links
- Professional food blogger profile

## Customization

### Adding New Reviews
Edit the `reviews` array in `script.js`:

```javascript
{
    id: 7,
    name: "Restaurant Name",
    location: "City, Country",
    category: "fine-dining", // or "street-food", "desserts"
    rating: 5, // 1-5 stars
    image: "image-url",
    excerpt: "Short description...",
    fullReview: "Full review text..."
}
```

### Changing Colors
Update CSS variables in `style.css`:

```css
:root {
    --primary-color: #6c757d;
    --secondary-color: #4ecdc4;
    --accent-color: #ffe66d;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 FoodieFanatix by Claire. All rights reserved.