# Keith Groves - Portfolio

A modern, interactive portfolio website showcasing professional experience, skills, and projects with a sleek dark theme and engaging animations.

🔗 **Live Site:** [https://keithagroves.github.io/portfolio/](https://keithagroves.github.io/portfolio/)

## ✨ Features

### Design & Theme
- **Dark Teal/Cyan Palette**: Modern color scheme with bright sky blue and neon green accents
- **Glassmorphism Effects**: Frosted glass card designs with subtle transparency
- **Animated Backgrounds**: Layered radial gradients with grid overlay
- **Custom Scrollbar**: Themed scrollbar with gradient and glow effects
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes

### Interactive Animations
- **Scroll-Based Animations**: Sections fade in and slide up as they enter the viewport
- **Card Hover Effects**:
  - Elastic bounce animations with cubic-bezier easing
  - Multi-layered glowing shadows
  - Scale transformations and lifts
- **Skill Tags**:
  - Ripple effects expanding from center
  - Dynamic scale (108%) with elastic bounce
  - Radial gradient backgrounds
- **Button Animations**:
  - Shimmer sweep effects
  - Magnetic lift and scale
  - Multi-colored glowing shadows
- **Smooth Scroll**: Buttery-smooth navigation between sections

### Accessibility
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Screen Reader**: Comprehensive ARIA labels
- **Semantic HTML**: Proper heading hierarchy and structure

## 🎨 Design System

The design system uses CSS custom properties for consistency and easy theming:

```css
:root {
  /* Colors */
  --bg: #020718;           /* page background */
  --bg-2: #050d21;         /* alternate background */
  --surface: #050b19;      /* card backgrounds */
  --text: #e6f1ff;         /* primary text */
  --muted: #9aa4b2;        /* secondary text */
  --border: #1b2743;       /* borders */
  --primary: #0ea5e9;      /* bright sky blue */
  --accent: #22c55e;       /* neon green accent */

  /* Spacing Scale */
  --space-xs: 0.25rem;     /* 4px */
  --space-sm: 0.5rem;      /* 8px */
  --space-md: 1rem;        /* 16px */
  --space-lg: 1.5rem;      /* 24px */
  --space-xl: 2rem;        /* 32px */
  --space-2xl: 3rem;       /* 48px */
  --space-3xl: 4rem;       /* 64px */

  /* Border Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-full: 999px;

  /* Shadows & Glows */
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.45);
  --shadow-strong: 0 25px 80px rgba(0, 0, 0, 0.75);
  --glow-primary: 0 0 26px rgba(14, 165, 233, 0.38);
  --glow-accent: 0 0 26px rgba(34, 197, 94, 0.38);
}
```

## 🛠️ Tech Stack

- **Framework**: React 19.1 with TypeScript
- **Build Tool**: Vite (rolldown-vite)
- **Styling**: Pure CSS with CSS Custom Properties
- **Animations**: CSS transitions and keyframes
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/keithagroves/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Hero section with name and contact
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills grid with categories
│   │   ├── Experience.tsx   # Timeline of work experience
│   │   ├── Projects.tsx     # Personal projects
│   │   ├── Education.tsx    # Educational background
│   │   └── Footer.tsx       # Footer with links
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Custom hook for scroll animations
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles and design tokens
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
└── index.html               # HTML template
```

## 🎯 Key Components

### Scroll Animation Hook
Custom `useScrollAnimation` hook using Intersection Observer API for performant scroll-based animations.

### Design Utilities
- `.fade-in-up` - Fade in with upward slide
- `.fade-in` - Simple fade in
- `.stagger-1` through `.stagger-4` - Staggered animation delays
- `.animated-border` - Rotating gradient border on hover
- `.text-shimmer` - Animated gradient text effect

## 📦 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow
1. Checks out code
2. Installs dependencies
3. Builds with `npm run build`
4. Deploys to GitHub Pages

### Manual Deployment

```bash
# Build the site
npm run build

# The dist/ folder contains the production build
```

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --primary: #0ea5e9;    /* Change primary color */
  --accent: #22c55e;     /* Change accent color */
}
```

### Adding Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Style with a corresponding CSS file
4. Optionally add scroll animations

### Modifying Animations
Animation settings are in individual component CSS files. Adjust:
- `transition` timing and easing
- `transform` values
- `box-shadow` and glow effects
- Animation keyframes

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

Keith Groves
- Email: keithalgroves@gmail.com
- LinkedIn: [linkedin.com/in/keithalgroves](https://linkedin.com/in/keithalgroves)
- GitHub: [github.com/keithagroves](https://github.com/keithagroves)

---

Built with React + TypeScript + Vite
