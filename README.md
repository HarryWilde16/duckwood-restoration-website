# Duckwood Restoration Corp. Website

A professional, responsive website for log home restoration and refinishing services in Whistler, BC and the Sea to Sky Corridor.

## Features

- **Responsive Design**: Mobile-first approach optimized for all devices.
- **Multiple Pages**: Home, Services, About, Contact, and Blog sections.
- **Hero Sections**: Eye-catching hero images with semi-transparent content boxes on every page.
- **Service Cards**: Six core services displayed with descriptions and images.
- **Contact Form**: Ready for form submissions (requires Formspree endpoint setup).
- **SEO Optimized**: Meta descriptions on all pages for search engine visibility.
- **Auto-Updating Footer**: Year automatically updates each year.

## Project Structure

```
duckwood-restoration-website/
├── index.html              # Home page
├── services.html           # Services page
├── about.html              # About us page
├── contact.html            # Contact & quote form
├── blog.html               # Blog listing
├── blog1.html              # Sample blog post
├── css/
│   └── styles.css          # Main stylesheet (mobile-first, responsive)
├── js/
│   └── scripts.js          # Navigation and utility scripts
├── assets/
│   ├── branding/           # Logo and brand assets
│   └── images/             # Hero, carousel, and service images
└── README.md               # This file
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/duckwood-restoration-website.git
   cd duckwood-restoration-website
   ```

2. Open in your browser:
   - Double-click any `.html` file, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # Open http://localhost:8000 in your browser
     ```

### Deployment (Netlify)

1. Push this repository to GitHub.
2. Sign in to [Netlify](https://app.netlify.com/).
3. Click **"New site from Git"** → Connect GitHub → Select this repo.
4. Netlify will auto-detect and deploy (no build command needed).
5. Once live, add **password protection** (optional):
   - Go to **Site Settings** → **General** → **Password protect this site**
   - Enable and set a password to keep the site private until launch.

6. Point your domain `duckwoodrestoration.ca` to Netlify:
   - In your domain registrar, update the nameservers to Netlify's (they'll provide them).
   - Or use a CNAME record to point to your Netlify subdomain.

## Image Guidelines

The site uses placeholder images. Replace them with your own:

- **Hero images** (background): 1600–2000px wide, landscape aspect ratio (16:9 or 3:1).
- **Service card images**: 800–1000px wide, 4:3 aspect ratio.
- **Carousel images**: 1400–1800px wide, landscape (3:2 or 4:3).
- **Logo**: SVG preferred, or transparent PNG (400–600px wide).

## Contact Form Setup

The contact form on `contact.html` is ready to receive submissions:

1. Go to [Formspree](https://formspree.io/).
2. Create a free account and new form for `duckwoodrestoration.ca`.
3. Copy the form ID.
4. In `contact.html`, replace `yourformid` in the form's `action` attribute with your Formspree ID.

Example:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Responsive, mobile-first design
- **Bootstrap 5.3.3** — Grid and utility classes
- **JavaScript (Vanilla)** — Navigation collapse, auto-year, lazy loading

## License

© 2025 Duckwood Restoration Corp. All rights reserved.

---

For questions or support, contact: info@duckwoodrestoration.ca
