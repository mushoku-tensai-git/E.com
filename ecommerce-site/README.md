# Astro E-Commerce Website

A complete, feature-rich e-commerce website built with [Astro](https://astro.build/) - a modern static site builder optimized for content-heavy websites.

## 🚀 Features

### Pages
- **Home/Landing Page** - Hero section, featured products, hot deals, categories showcase, new arrivals, newsletter signup
- **Products Page** - Complete product catalog with filtering and sorting
- **Categories Page** - Browse products by category
- **About Page** - Company information and team section
- **Contact Page** - Contact form and business information
- **Cart Page** - Shopping cart with order summary

### Functionality
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Working shopping cart with localStorage persistence
- ✅ Product filtering by category, price, and rating
- ✅ Product sorting (price, name, rating)
- ✅ Search functionality
- ✅ Toast notifications for user actions
- ✅ Smooth scroll animations
- ✅ Newsletter subscription form
- ✅ Contact form
- ✅ Add to cart functionality
- ✅ Cart item management (update quantity, remove items)

### Products
- 25+ products across 5 categories:
  - Electronics
  - Clothing
  - Accessories
  - Home & Garden
  - Sports & Outdoors

## 📁 Project Structure

```
ecommerce-site/
├── public/
│   ├── scripts/
│   │   ├── main.js          # Mobile menu, search, animations
│   │   ├── cart.js          # Cart management (localStorage)
│   │   └── search.js        # Product search functionality
│   └── styles/
│       ├── global.css       # Global styles, variables, components
│       ├── header.css       # Navigation and header styles
│       └── footer.css       # Footer styles
├── src/
│   ├── components/          # Reusable Astro components
│   ├── data/
│   │   └── products.js      # Product data (25+ products)
│   ├── layouts/
│   │   └── Layout.astro     # Main layout component
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── products.astro   # Products listing page
│   │   ├── categories.astro # Categories page
│   │   ├── about.astro      # About page
│   │   ├── contact.astro    # Contact page
│   │   └── cart.astro       # Shopping cart page
│   ├── scripts/             # Client-side JavaScript
│   └── styles/              # Additional styles
├── astro.config.mjs         # Astro configuration
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Pure CSS (no framework dependencies)
- **JavaScript**: Vanilla JS (no framework dependencies)
- **Build Tool**: Vite (bundled with Astro)
- **Deployment**: Static site (works with any static host)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd ecommerce-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📦 Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production-ready site to `dist/` folder |
| `npm run preview` | Preview production build locally |

## 🌐 Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository
- **Netlify**: Drag and drop the `dist` folder or connect Git
- **GitHub Pages**: Push to gh-pages branch
- **Cloudflare Pages**: Connect your Git repository
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🎨 Customization

### Adding Products

Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 1,
  name: "Product Name",
  category: "electronics",
  price: 99.99,
  oldPrice: 129.99,
  image: "/images/product.jpg",
  rating: 4.5,
  reviews: 128,
  badge: "sale" // optional: sale, new, hot
}
```

### Styling

- Modify `public/styles/global.css` for global styles
- Edit `public/styles/header.css` for navigation styles
- Update `public/styles/footer.css` for footer styles

### Adding Pages

Create new `.astro` files in `src/pages/` directory:

```astro
---
// src/pages/new-page.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="New Page">
  <h1>New Page Content</h1>
</Layout>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please create an issue in the repository.

---

Built with ❤️ using [Astro](https://astro.build/)
