# AI Nexus Website

A modern, performant marketing website for AI Nexus built with Next.js, TypeScript, and Tailwind CSS.

## Overview

AI Nexus is a 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London and San Francisco. This website serves as the primary digital presence for the community, featuring event listings, community information, and membership signup.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Optimised for Vercel

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Accessible (WCAG compliant, keyboard navigation, ARIA labels)
- ✅ Dark mode support (via CSS class strategy)
- ✅ SEO optimised with metadata and Open Graph tags
- ✅ Luma event integration (API and embed options)
- ✅ Fast page loads with Next.js App Router
- ✅ Type-safe with TypeScript
- ✅ British English throughout

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nexus-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Configure environment variables (see [Luma Integration](#luma-integration))

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Luma Integration

The website supports two methods for displaying events from Luma:

### Option 1: Luma Embed (Recommended for Quick Setup)

No API key required. Simply embed your Luma calendar.

1. Get your Luma calendar URL from your Luma dashboard
2. Add to `.env.local`:
   ```env
   LUMA_CALENDAR_URL=https://lu.ma/your-calendar-url
   ```

**Pros**: Simple setup, no API key needed  
**Cons**: Less customisation, external iframe

### Option 2: Luma API (Recommended for Production)

Fetch events via the Luma API for full customisation and better performance.

1. Get your API key from [Luma Dashboard](https://lu.ma/dashboard/settings/api)
2. Add to `.env.local`:
   ```env
   LUMA_API_KEY=your_luma_api_key_here
   ```

**Pros**: Full control, better performance, customisable styling  
**Cons**: Requires API key

> **Note**: If `LUMA_API_KEY` is set, it will be used instead of the embed. If neither is configured, the site will display an empty state.

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Luma Integration (choose one)
LUMA_CALENDAR_URL=https://lu.ma/your-calendar
LUMA_API_KEY=your_api_key

# Production base URL (for API calls)
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Project Structure

```
nexus-website/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── events/        # Luma events API endpoint
│   │   └── og/            # Open Graph image generator
│   ├── events/            # Events page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── EventCard.tsx     # Event card component
│   ├── EventList.tsx     # Event list grid
│   ├── EventEmbed.tsx    # Luma embed wrapper
│   └── ...               # Other sections
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper
└── public/               # Static assets
    └── logos/            # Partner logos (add here)
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site is optimised for Vercel with:
- Edge runtime for OG image generation
- ISR (Incremental Static Regeneration) for events
- Automatic caching and CDN distribution

### Build Command

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding Partner Logos

1. Add SVG logos to `/public/logos/`
2. Update the `companies` array in `components/LogoCloud.tsx`
3. Ensure logos are optimised and include proper alt text

Example:
```typescript
const companies = [
  { name: "Company Name", logo: "/logos/company.svg" },
];
```

### Customising Styles

The site uses Tailwind CSS with CSS variables for theming:

1. Edit `app/globals.css` to modify colour variables
2. Light/dark mode colours defined in `:root` and `.dark`
3. Use the `cn()` utility for conditional classes

### Adding New Sections

1. Create component in `components/YourSection.tsx`
2. Import and add to `app/page.tsx`
3. Wrap in `<Section>` component for consistent spacing

## Accessibility

The site follows WCAG 2.1 AA standards:

- ✅ Semantic HTML landmarks (`<nav>`, `<main>`, `<footer>`)
- ✅ ARIA labels for icon buttons and interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient colour contrast (4.5:1 minimum)
- ✅ Focus indicators on interactive elements
- ✅ Alt text for all images

Test with:
- Lighthouse (Chrome DevTools)
- Screen readers (VoiceOver, NVDA)
- Keyboard-only navigation

## Performance

Target metrics:
- Lighthouse Performance: ≥95
- Lighthouse Accessibility: ≥95
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s

Optimisations:
- Next.js Image component for optimised images
- Font subsetting with next/font
- Edge caching for API routes (10-minute revalidation)
- Minimal JavaScript bundle

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

1. Follow the existing code style (Prettier + ESLint)
2. Ensure TypeScript types are correct
3. Test on mobile and desktop
4. Check accessibility with keyboard navigation
5. Keep British English spelling

## Support

For questions or issues:
- Email: hello@ainexus.org
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

## License

[Add your license here]

---

Built with ❤️ for the AI community
# NexusWebsite
