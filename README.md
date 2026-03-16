# 🎬 Eleventh Street Production House

A modern, responsive film production company website built with React, TypeScript, and cutting-edge web technologies. This professional website showcases our film production services with elegant animations and a cinematic user experience.

![Eleventh Street Production House]

## ✨ Features

### 🎨 **Modern Design & User Experience**
- **Cinematic Visual Design** - Dark theme with elegant typography using Playfair Display and Inter fonts
- **Responsive Layout** - Fully responsive design that works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Professional animations powered by Framer Motion for enhanced user engagement
- **Interactive Elements** - Hover effects, transitions, and micro-interactions throughout the site

### 🏠 **Core Pages**
- **Home Page** - Hero section with 4-image animated carousel showcasing our work
- **About Page** - Company story, team information, statistics, and core values with image cards
- **Services Page** - Comprehensive overview of all production services with award badges
- **Portfolio Page** - Filterable portfolio showcase with detailed project modals

### 🎯 **Specialized Service Pages**
- **Film Production** (`/services/film-production`) - Complete film production services from pre to post-production
- **Creative Direction** (`/services/creative-direction`) - Strategic creative leadership and visual storytelling
- **Content Creation** (`/services/content-creation`) - Digital content for social media and marketing campaigns
- **Post Production** (`/services/post-production`) - Professional editing, color grading, and VFX services
- **Consulting** (`/services/consulting`) - Strategic media consulting and production optimization

### 🔧 **Advanced Functionality**
- **Get Quote Modal** - Comprehensive quote request form with project details and budget options
- **Contact Sidebar** - Full-width contact information panel with business hours and social links
- **Newsletter Subscription** - Email subscription with form validation
- **Interactive Portfolio** - Project filtering by category with detailed view modals

### 📱 **State Management & Performance**
- **Redux Toolkit** - Professional state management for UI interactions
- **TypeScript** - Type-safe development with full TypeScript implementation
- **Styled Components** - CSS-in-JS styling with theme support and responsive breakpoints
- **React Router** - Client-side routing with nested routes for service pages

### 🎪 **Visual Elements**
- **Hero Carousel** - Animated 4-image carousel on homepage
- **Award Badges** - Interactive award displays with Unsplash images
- **Service Cards** - Hover-activated service showcases with professional imagery
- **Statistics Section** - Animated counters and achievement displays
- **Team Showcase** - Professional team member profiles with bios

### ⚖️ **Legal & Compliance**
- **Privacy Policy** (`/privacy`) - Comprehensive GDPR-compliant privacy policy
- **Terms of Service** (`/terms`) - Complete terms covering all business aspects
- **Cookie Policy** (`/cookies`) - Detailed cookie usage and management information

### 🎭 **Animation & Interactions**
- **Page Transitions** - Smooth page-to-page transitions
- **Scroll Animations** - Elements animate into view as users scroll
- **Hover Effects** - Interactive elements with hover states
- **Modal Animations** - Smooth modal open/close animations
- **Loading States** - Professional loading and transition states

## 🛠️ **Technology Stack**

### **Frontend Framework**
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety and developer experience
- **Vite** - Ultra-fast build tool and development server

### **Styling & Animation**
- **Styled Components** - CSS-in-JS with theme provider
- **Framer Motion** - Professional animation library
- **Google Fonts** - Playfair Display, Inter, Dancing Script, Pacifico

### **State Management**
- **Redux Toolkit** - Modern Redux with simplified boilerplate
- **React Router DOM** - Client-side routing solution

### **Development Tools**
- **ESLint** - Code quality and consistency
- **TypeScript Config** - Strict type checking
- **Vite Config** - Optimized build configuration

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 16+ 
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/11streetproducthouse.com.git

# Navigate to the frontend directory
cd 11streetproducthouse.com/frontend2

# Install dependencies
npm install

# Start the development server
npm run dev
```

### **Available Scripts**

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with logo, menu, and modals
│   ├── Footer.tsx      # Footer with links and newsletter
│   ├── Hero.tsx        # Homepage hero with carousel
│   └── Services.tsx    # Services showcase component
├── pages/              # Page components
│   ├── HomePage.tsx    # Main landing page
│   ├── AboutPage.tsx   # About us page
│   ├── ServicesPage.tsx # Services overview
│   ├── PortfolioPage.tsx # Portfolio showcase
│   ├── FilmProductionPage.tsx
│   ├── CreativeDirectionPage.tsx
│   ├── ContentCreationPage.tsx
│   ├── PostProductionPage.tsx
│   ├── ConsultingPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── CookiePage.tsx
├── store/              # Redux store configuration
│   ├── store.ts        # Store setup
│   ├── hooks.ts        # Typed hooks
│   └── slices/         # Redux slices
└── styles/             # Global styles and themes
    └── GlobalStyle.tsx # Styled-components theme
```

## 🎨 **Design System**

### **Typography**
- **Headings**: Playfair Display (Elegant serif for titles)
- **Body Text**: Inter (Clean sans-serif for readability)
- **Decorative**: Dancing Script, Pacifico (Special elements)

### **Color Palette**
- **Primary Background**: #0a0a0a (Deep black)
- **Text Primary**: #ffffff (Pure white)
- **Text Secondary**: rgba(255, 255, 255, 0.8) (Semi-transparent white)
- **Accents**: rgba(255, 255, 255, 0.1) (Subtle borders and overlays)

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large**: > 1400px

## 📞 **Contact Information**

**Eleventh Street Production House**
- 📧 Email: info@11thstreetproductionhouse.com
- 📱 Phone: +91 73401 31307
- 📍 Address: 11th Street, Jaipur, Rajasthan 302012, India

## 📄 **License**

This project is proprietary software belonging to Eleventh Street Production House. All rights reserved.

---

**Built with ❤️ by the Eleventh Street Production House team**
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
