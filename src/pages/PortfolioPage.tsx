import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiEye, FiCalendar, FiTag } from 'react-icons/fi';

const PortfolioPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964393/anitco1gznatp6crqd8u.png');
  background-size: cover;
  background-position: center;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const PageSubtitle = styled(motion.p)`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const FilterSection = styled.section`
  padding: 3rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const PortfolioSection = styled.section`
  padding: 3rem 2rem 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 4rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .image {
    transform: scale(1.05);
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

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  transition: all 0.3s ease;
  margin: auto;

  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }
`;

const PortfolioContent = styled.div`
  margin-top: auto;
`;

const PortfolioTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const PortfolioMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const PortfolioDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  max-width: 900px;
  width: 100%;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
`;

const ModalImage = styled.div`
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalInfo = styled.div`
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.3rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const categories = ['All', 'Film', 'Commercial', 'Documentary', 'Music Video', 'Digital Content'];

const portfolioItems = [
  {
    id: 1,
    title: '68 Days',
    category: 'Film',
    year: '2023',
    client: 'Independent',
    description: 'A compelling drama about love, loss, and redemption set against the backdrop of a changing city.',
    tags: ['Drama', 'Indie', 'Award Winner'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964363/ksi1evkwgsazgr6ecudg.png',
    duration: '95 min'
  },
  {
    id: 2,
    title: 'Only True Love',
    category: 'Film',
    year: '2022',
    client: 'Studio Films',
    description: 'A romantic tale that explores the depths of human connection in the modern world.',
    tags: ['Romance', 'Drama', 'Feature'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/jfucqpdvtxcamo5znzhz.png',
    duration: '120 min'
  },
  {
    id: 3,
    title: 'Tech Innovation',
    category: 'Commercial',
    year: '2023',
    client: 'TechCorp',
    description: 'A sleek commercial showcasing cutting-edge technology solutions for modern businesses.',
    tags: ['Commercial', 'Tech', 'Corporate'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964362/wjjgwbiwntjjsbamdlwb.png',
    duration: '60 sec'
  },
  {
    id: 4,
    title: 'Urban Stories',
    category: 'Documentary',
    year: '2023',
    client: 'Documentary Channel',
    description: 'An intimate look at urban life through the eyes of diverse city dwellers.',
    tags: ['Documentary', 'Social', 'Urban'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png',
    duration: '45 min'
  },
  {
    id: 5,
    title: 'Electric Dreams',
    category: 'Music Video',
    year: '2022',
    client: 'Indie Artist',
    description: 'A visually stunning music video that blends surreal imagery with powerful storytelling.',
    tags: ['Music Video', 'Experimental', 'Visual'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964397/d09boifrp56u1jwy6mw4.png',
    duration: '4 min'
  },
  {
    id: 6,
    title: 'Brand Story Series',
    category: 'Digital Content',
    year: '2023',
    client: 'Fashion Brand',
    description: 'A series of digital content pieces telling the story behind a sustainable fashion brand.',
    tags: ['Digital', 'Fashion', 'Sustainability'],
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964398/mcevrzbunlecaldeklfo.png',
    duration: '5 episodes'
  }
];

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <PortfolioPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A showcase of our most compelling film and video projects
          </PageSubtitle>
        </Container>
      </HeroSection>

      <FilterSection>
        <Container>
          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </Container>
      </FilterSection>

      <PortfolioSection>
        <Container>
          <PortfolioGrid>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ y: -5 }}
                >
                  <PortfolioImage
                    className="image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <PortfolioOverlay className="overlay">
                    <PlayButton>
                      <FiPlay size={20} style={{ marginLeft: '3px' }} />
                    </PlayButton>
                    <PortfolioContent>
                      <PortfolioTitle>{item.title}</PortfolioTitle>
                      <PortfolioMeta>
                        <span>
                          <FiCalendar />
                          {item.year}
                        </span>
                        <span>
                          <FiTag />
                          {item.category}
                        </span>
                        <span>
                          <FiEye />
                          {item.duration}
                        </span>
                      </PortfolioMeta>
                      <PortfolioDescription>
                        {item.description}
                      </PortfolioDescription>
                    </PortfolioContent>
                  </PortfolioOverlay>
                </PortfolioItem>
              ))}
            </AnimatePresence>
          </PortfolioGrid>
        </Container>
      </PortfolioSection>

      <AnimatePresence>
        {selectedItem && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedItem(null)}>
                ×
              </CloseButton>
              <ModalImage style={{ backgroundImage: `url(${selectedItem.image})` }} />
              <ModalInfo>
                <h2>{selectedItem.title}</h2>
                <div className="meta">
                  <span><strong>Year:</strong> {selectedItem.year}</span>
                  <span><strong>Client:</strong> {selectedItem.client}</span>
                  <span><strong>Duration:</strong> {selectedItem.duration}</span>
                </div>
                <p className="description">{selectedItem.description}</p>
                <div className="tags">
                  {selectedItem.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </ModalInfo>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </PortfolioPageContainer>
  );
};
