# Personal Website (Story-Mode)

A personal portfolio website built with Angular 17, featuring Server-Side Rendering (SSR) for optimal SEO performance. This project showcases professional experience, projects, and writings in a timeline-based "story-mode" format.

## Features

- ✅ **Server-Side Rendering (SSR)** with Angular Universal
- ✅ **SEO Optimized** with meta tags, Open Graph, and Twitter Cards
- ✅ **Structured Data** (JSON-LD) for rich search results
- ✅ **Dark Mode** support with theme persistence
- ✅ **Responsive Design** with TailwindCSS
- ✅ **Pre-rendering** for static content
- ✅ **Performance Optimized** with caching headers
- ✅ **Sitemap & Robots.txt** for search engines

## Tech Stack

- **Framework:** Angular 17.1.0 (Standalone Components)
- **Styling:** TailwindCSS 3.4.3
- **SSR:** Angular Universal (@angular/ssr)
- **Animations:** ngx-lottie
- **Deployment:** Firebase Hosting

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
npm start
```

### Build

#### Client-Side Build
```bash
npm run build
```

#### SSR Build (Recommended for Production)
```bash
npm run build:ssr
```

This creates a production build with:
- Pre-rendered static HTML pages
- Server-side rendering capabilities
- Optimized bundles

### Test SSR Locally
```bash
npm run build:ssr
npm run serve:ssr
```

Navigate to `http://localhost:4000/` to test the SSR version.

## Deployment

### Firebase Hosting
```bash
npm run deploy
```

This command will:
1. Install dependencies
2. Build the project with SSR
3. Deploy to Firebase Hosting

## SEO Features

### Meta Tags
The application includes comprehensive meta tags:
- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Author and keywords
- Theme color for mobile browsers

### Structured Data
JSON-LD structured data is automatically injected for:
- **Person schema** - Professional profile information
- **WebSite schema** - Website metadata
- Social media links
- Skills and expertise

### Sitemap & Robots.txt
- `sitemap.xml` - Helps search engines discover pages
- `robots.txt` - Controls search engine crawling

### Performance Headers
Firebase hosting is configured with optimal caching:
- Images: 1 year cache
- JS/CSS: 1 year cache with immutable flag
- JSON/XML: 1 hour cache

## Customization

### Update Content
All content is hardcoded in `src/app/app.component.ts`. Update the following data structures:

- `name` - Your name
- `profileDescription` - Your bio
- `experiences[]` - Work experience timeline
- `socialLinks[]` - Social media links
- `featuredProducts[]` - Featured projects
- `petProjectsSets[]` - Side projects by year
- `blogs[]` - Blog posts
- `talks[]` - Speaking engagements

### Update SEO Metadata
Modify SEO settings in `src/app/services/seo.service.ts`:
- Default title and description
- Social media handles
- Structured data
- Keywords

### Update URLs
Replace `https://sajeerzeji-98ac5.web.app` with your domain in:
- `src/app/services/seo.service.ts`
- `src/index.html` (canonical URL)
- `src/sitemap.xml`

## Project Structure

```
src/
├── app/
│   ├── services/
│   │   └── seo.service.ts          # SEO meta tags & structured data
│   ├── app.component.ts            # Main component with all content
│   ├── app.component.html          # Template
│   ├── app.config.ts               # App configuration
│   └── app.config.server.ts        # Server configuration
├── assets/                         # Images and static files
├── index.html                      # Base HTML with meta tags
├── main.ts                         # Client entry point
├── main.server.ts                  # Server entry point
├── robots.txt                      # Search engine directives
└── sitemap.xml                     # Sitemap for search engines
```

## Testing SEO

### Check Meta Tags
View page source or use browser dev tools to verify meta tags are rendered.

### Test Structured Data
Use [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate structured data.

### Test Social Sharing
- **Facebook:** [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter:** [Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn:** [Post Inspector](https://www.linkedin.com/post-inspector/)

### Lighthouse SEO Score
Run Lighthouse audit in Chrome DevTools to check SEO score.

## License

This is a personal portfolio project.
