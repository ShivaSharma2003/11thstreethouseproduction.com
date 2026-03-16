import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiEdit, FiMusic, FiEye, FiLayers } from 'react-icons/fi';

const PostProductionPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964399/flyadsxgtwcfqetklxbw.png');
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

const ContentSection = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContentText = styled(motion.div)`
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const ContentImage = styled(motion.div)`
  aspect-ratio: 4/3;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled(motion.div)`
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }

  .icon {
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const TechnicalSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 1px;
`;

const TechnicalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const TechnicalCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: rgba(255, 255, 255, 0.7);
      padding: 0.3rem 0;
      
      &::before {
        content: '•';
        color: rgba(255, 255, 255, 0.5);
        margin-right: 0.5rem;
      }
    }
  }
`;

const services = [
  {
    icon: FiEdit,
    title: 'Video Editing',
    description: 'Professional video editing services including cutting, sequencing, and narrative structure development.'
  },
  {
    icon: FiEye,
    title: 'Color Grading',
    description: 'Advanced color correction and grading to enhance mood, atmosphere, and visual consistency.'
  },
  {
    icon: FiMusic,
    title: 'Sound Design',
    description: 'Comprehensive audio post-production including mixing, sound effects, and music integration.'
  },
  {
    icon: FiLayers,
    title: 'Visual Effects',
    description: 'Professional VFX services including compositing, motion graphics, and digital enhancement.'
  }
];

const technicalCapabilities = [
  {
    title: 'Software Expertise',
    items: [
      'Adobe Premiere Pro',
      'DaVinci Resolve',
      'After Effects',
      'Avid Media Composer',
      'Final Cut Pro'
    ]
  },
  {
    title: 'Color Grading',
    items: [
      'Professional Color Correction',
      'Creative Grading',
      'HDR Workflow',
      'Broadcast Standards',
      'Cinema Quality Output'
    ]
  },
  {
    title: 'Audio Services',
    items: [
      'Multi-track Mixing',
      'Sound Design',
      'Foley Recording',
      'Music Composition',
      'Dialogue Enhancement'
    ]
  },
  {
    title: 'Delivery Formats',
    items: [
      'Broadcast Quality',
      'Digital Platforms',
      'Cinema Projection',
      'Streaming Optimization',
      'Social Media Formats'
    ]
  }
];

export const PostProductionPage: React.FC = () => {
  return (
    <PostProductionPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Post Production
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Polishing your content to perfection with professional post-production services
          </PageSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContentGrid>
            <ContentText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Professional Post Production</h2>
              <p>
                Post-production is where the magic happens. Our comprehensive post-production 
                services transform raw footage into polished, professional content that 
                captivates audiences and achieves your creative vision.
              </p>
              <p>
                Using industry-standard software and techniques, we handle every aspect of 
                post-production from initial editing through final delivery, ensuring your 
                content meets the highest professional standards.
              </p>
              <p>
                Our experienced editors, colorists, and sound designers work collaboratively 
                to enhance every element of your production, creating content that stands 
                out in today's competitive media landscape.
              </p>
            </ContentText>

            <ContentImage
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964393/anitco1gznatp6crqd8u.png)' }}
            />
          </ContentGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Post Production Services
          </SectionTitle>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="icon">
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ContentSection>

      <TechnicalSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Capabilities
          </SectionTitle>

          <TechnicalGrid>
            {technicalCapabilities.map((capability, index) => (
              <TechnicalCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </TechnicalCard>
            ))}
          </TechnicalGrid>
        </Container>
      </TechnicalSection>
    </PostProductionPageContainer>
  );
};
