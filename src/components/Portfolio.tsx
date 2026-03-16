import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolioContainer = styled.section`
  padding: 6rem 2rem;
  background: #0a0a0a;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const MainTitle = styled.h3`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  height: 80vh;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
    height: auto;
  }
`;

const PortfolioItem = styled(motion.div)<{ featured?: boolean }>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  ${props => props.featured && `
    grid-row: 1 / 3;
  `}

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .image {
    transform: scale(1.05);
  }

  &:hover .play-button {
    transform: scale(1.1);
  }
`;

const PortfolioImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const PortfolioContent = styled.div`
  margin-top: auto;
`;

const PortfolioTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PortfolioCategory = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const portfolioItems = [
  {
    id: 1,
    title: 'Indian 2',
    category: 'Drama',
    image: '/assets/Movies/Indian/indian2.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Paapi Kun?',
    category: 'Drama',
    image: '/assets/Movies/paapiKun/poster.jpeg'
  },
  {
    id: 3,
    title: 'Zora',
    category: 'Short Film',
    image: '/assets/Movies/Zora/poster.jpg'
  },
  {
    id: 4,
    title: 'Knock Knock',
    category: 'Music Video',
    image: '/assets/Music/Knock/poster.jpg'
  },
  {
    id: 5,
    title: 'Crime Master',
    category: 'Music Video',
    image: '/assets/Music/crime/poster.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>works.</SectionTitle>
          <MainTitle>Featured Productions</MainTitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PortfolioGrid>
            {portfolioItems.map((item) => (
              <PortfolioItem
                key={item.id}
                featured={item.featured}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioImage
                  className="image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <PortfolioOverlay className="overlay">
                  <PortfolioContent>
                    <PortfolioTitle>{item.title}</PortfolioTitle>
                    <PortfolioCategory>{item.category}</PortfolioCategory>
                  </PortfolioContent>
                </PortfolioOverlay>
              </PortfolioItem>
            ))}
          </PortfolioGrid>
        </motion.div>
      </Container>
    </PortfolioContainer>
  );
};
