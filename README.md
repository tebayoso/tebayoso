# Jorge de los Santos | Portfolio

An animated, interactive portfolio showcasing my journey from construction worker to software architect.

**[View Live Site](https://tebayoso.github.io/tebayoso)**

## Features

- **Interactive Particle Background** - Mouse-responsive particle system with connection lines
- **Animated Timeline** - Journey from construction to code (2012-present)
- **Skills Visualization** - Animated skill bars with category organization
- **Project Showcase** - Featured projects with tech stacks and highlights
- **Philosophy Section** - Engineering principles and recognition
- **Scroll Animations** - Intersection Observer-based reveal animations
- **Navigation Dots** - Section tracking with smooth scroll

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Pure CSS with custom properties and animations
- **Animations**: CSS keyframes, Canvas API for particles
- **Deployment**: GitHub Pages via Actions

## Design Principles

- No external image assets - all visuals created with CSS and SVG
- No heavy animation libraries - pure CSS and vanilla Canvas
- Mobile-responsive with reduced motion support
- Accessibility-first with semantic HTML

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
src/
├── components/       # React components
│   ├── Hero.tsx     # Landing section with typed tagline
│   ├── Journey.tsx  # Timeline and about
│   ├── Skills.tsx   # Skill categories with bars
│   ├── Projects.tsx # Project cards
│   ├── Philosophy.tsx # Principles and recognition
│   ├── Contact.tsx  # Social links and scheduling
│   └── ...
├── data/            # Portfolio content
│   └── portfolio.ts # All personal data
├── hooks/           # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useParticles.ts
└── index.css        # All styles and animations
```

## Content

Data is centralized in `src/data/portfolio.ts` for easy updates:
- Timeline events
- Skills and categories
- Projects
- Philosophy statements
- Recognition items
- Social links

---

Made with ❤️ and ☕ by Jorge de los Santos
