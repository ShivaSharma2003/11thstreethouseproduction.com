import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiVideo, FiImage, FiMic, FiShare2 } from 'react-icons/fi';

const ContentCreationPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964395/qus5ytfpxg6oq0it6ccm.png');
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

const TypesSection = styled.section`
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

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const TypeCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }

  .content-icon {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const services = [
  {
    icon: FiVideo,
    title: 'Video Content',
    description: 'Creating engaging video content for social media, marketing campaigns, and digital platforms.'
  },
  {
    icon: FiImage,
    title: 'Visual Assets',
    description: 'Designing stunning graphics, photography, and visual elements for your brand.'
  },
  {
    icon: FiMic,
    title: 'Audio Content',
    description: 'Producing high-quality audio content including podcasts, voiceovers, and sound design.'
  },
  {
    icon: FiShare2,
    title: 'Social Media',
    description: 'Developing content strategies and creating assets optimized for various social platforms.'
  }
];

const contentTypes = [
  {
    title: 'Corporate Videos',
    description: 'Professional corporate content that communicates your brand values and engages your audience.',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964393/anitco1gznatp6crqd8u.png'
  },
  {
    title: 'Social Media Content',
    description: 'Eye-catching content designed to drive engagement and build your online presence.',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964369/ndzougld851n4tqo9hqf.png'
  },
  {
    title: 'Educational Content',
    description: 'Informative and engaging educational materials that provide value to your audience.',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964363/btujcjkfdxwzbcwpoqql.png'
  },
  {
    title: 'Marketing Campaigns',
    description: 'Comprehensive content strategies that drive conversions and build brand awareness.',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964414/tbmbqzfjpygdbzyyua2h.png'
  }
];

export const ContentCreationPage: React.FC = () => {
  return (
    <ContentCreationPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Content Creation
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting compelling content that engages audiences and drives results
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
              <h2>Strategic Content Development</h2>
              <p>
                In today's digital landscape, compelling content is the cornerstone of 
                successful brand communication. Our content creation services are designed 
                to capture attention, engage audiences, and drive meaningful interactions 
                with your brand.
              </p>
              <p>
                We create content that not only looks great but serves a strategic purpose, 
                whether it's building brand awareness, driving sales, or educating your 
                audience. Every piece of content is crafted with your specific goals in mind.
              </p>
              <p>
                From concept to delivery, our team ensures that your content stands out 
                in the crowded digital space while maintaining consistency with your 
                brand voice and values.
              </p>
            </ContentText>

            <ContentImage
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964435/qlddfcvu0scepj9zfwl8.png)' }}
            />
          </ContentGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Content Services
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

      <TypesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Content Types We Create
          </SectionTitle>

          <TypesGrid>
            {contentTypes.map((type, index) => (
              <TypeCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className="content-icon"
                  style={{ backgroundImage: `url(${type.image})` }}
                />
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </TypeCard>
            ))}
          </TypesGrid>
        </Container>
      </TypesSection>
    </ContentCreationPageContainer>
  );
};
