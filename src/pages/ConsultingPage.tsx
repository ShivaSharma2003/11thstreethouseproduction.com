import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiTrendingUp, FiTarget, FiUsers } from 'react-icons/fi';

const ConsultingPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/jfucqpdvtxcamo5znzhz.png');
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

const ExpertiseSection = styled.section`
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

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ExpertiseCard = styled(motion.div)`
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
    icon: FiMessageCircle,
    title: 'Strategic Planning',
    description: 'Comprehensive media strategy development to align your content with business objectives.'
  },
  {
    icon: FiTrendingUp,
    title: 'Production Optimization',
    description: 'Streamlining production processes to maximize efficiency and minimize costs.'
  },
  {
    icon: FiTarget,
    title: 'Brand Development',
    description: 'Creating cohesive brand narratives that resonate with your target audience.'
  },
  {
    icon: FiUsers,
    title: 'Team Training',
    description: 'Professional development and training for your in-house media teams.'
  }
];

const expertiseAreas = [
  {
    title: 'Production Strategy',
    items: [
      'Workflow Optimization',
      'Budget Planning',
      'Resource Allocation',
      'Timeline Management',
      'Quality Assurance'
    ]
  },
  {
    title: 'Creative Development',
    items: [
      'Concept Development',
      'Story Architecture',
      'Visual Strategy',
      'Brand Alignment',
      'Audience Analysis'
    ]
  },
  {
    title: 'Technology Solutions',
    items: [
      'Equipment Selection',
      'Software Implementation',
      'Workflow Design',
      'Platform Strategy',
      'Digital Transformation'
    ]
  },
  {
    title: 'Market Positioning',
    items: [
      'Competitive Analysis',
      'Distribution Strategy',
      'Audience Research',
      'Content Marketing',
      'Performance Metrics'
    ]
  }
];

export const ConsultingPage: React.FC = () => {
  return (
    <ConsultingPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Consulting
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert guidance to elevate your media production and content strategy
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
              <h2>Strategic Media Consulting</h2>
              <p>
                Our consulting services provide strategic guidance to help you navigate 
                the complex world of media production and content creation. We work with 
                businesses, organizations, and individuals to optimize their media strategies 
                and achieve their communication goals.
              </p>
              <p>
                With years of industry experience, our consultants bring deep expertise 
                in production workflows, technology implementation, and creative strategy 
                to help you make informed decisions and maximize your investment.
              </p>
              <p>
                Whether you're launching a new project, scaling your production capabilities, 
                or seeking to improve existing processes, our consulting services provide 
                the insights and strategies you need to succeed.
              </p>
            </ContentText>

            <ContentImage
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: 'url(/Images/image4.png)' }}
            />
          </ContentGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Consulting Services
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

      <ExpertiseSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Areas of Expertise
          </SectionTitle>

          <ExpertiseGrid>
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </ExpertiseCard>
            ))}
          </ExpertiseGrid>
        </Container>
      </ExpertiseSection>
    </ConsultingPageContainer>
  );
};
