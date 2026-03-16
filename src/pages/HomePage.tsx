import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import ClientsMarquee from '../components/ClientsMarquee';
import AwardsMarquee from '../components/AwardsMarquee';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <ClientsMarquee />
      <Portfolio />
      <AwardsMarquee />
    </>
  );
};
