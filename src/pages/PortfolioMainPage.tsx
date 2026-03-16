import React from 'react';
import { PortfolioPage as PortfolioPageComponent } from './PortfolioPage';

// Re-export the existing PortfolioPage component
export const PortfolioMainPage: React.FC = () => {
  return <PortfolioPageComponent />;
};
