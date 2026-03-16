import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #0a0a0a;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(20, 20, 40, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(10, 10, 30, 0.3) 0%, transparent 50%);
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.3px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  button:hover {
    opacity: 0.8;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Selection Styles */
  ::selection {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #1a1a2e, #0f3460);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #4a4a6a, #2a2a4a);
    border-radius: 5px;
    border: 2px solid #0a0a0a;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #6a6a8a, #4a4a6a);
  }

  /* Smooth transitions */
  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#e0e0e0',
    accent: '#f0f0f0',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    border: 'rgba(255, 255, 255, 0.1)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Playfair Display', 'Georgia', serif",
    accent: "'Dancing Script', 'Pacifico', cursive",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
    xxl: '6rem',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.4)',
    large: '0 8px 32px rgba(0, 0, 0, 0.5)',
    neon: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  transitions: {
    fast: '0.2s ease-in-out',
    normal: '0.3s ease-in-out',
    smooth: '0.6s ease-in-out',
  },
};
