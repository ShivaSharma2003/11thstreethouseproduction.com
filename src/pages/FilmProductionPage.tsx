import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCamera, FiEdit3, FiUsers, FiAward } from 'react-icons/fi';

const FilmProductionPageContainer = styled.div`
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

const ProcessSection = styled.section`
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: 2rem;

  .step-number {
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const services = [
  {
    icon: FiCamera,
    title: 'Concept to Script',
    description: 'From initial concept development to scriptwriting and storyboarding, we help shape your story with professional guidance and creative input.'
  },
  {
    icon: FiEdit3,
    title: 'Cinematography',
    description: 'Professional cinematography with high-end cameras, lighting setups, and skilled camera operators to capture stunning visuals.'
  },
  {
    icon: FiUsers,
    title: 'Production Management',
    description: 'Complete production management including location coordination, crew scheduling, budget management, and on-set logistics.'
  },
  {
    icon: FiAward,
    title: 'Post-Production',
    description: 'Professional editing, color grading, sound design, VFX, and final delivery in multiple formats for various platforms.'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and objectives to understand your project needs.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Detailed pre-production planning including script, storyboard, and production schedule.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Professional filming with our experienced crew and high-end equipment.'
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Editing, color correction, sound design, and final delivery of your completed film.'
  }
];

export const FilmProductionPage: React.FC = () => {
  return (
    <FilmProductionPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Film Production Services
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            End-to-end film production for feature films, short films, and documentaries with cinematic excellence
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
              <h2>Complete Film Production</h2>
              <p>
                11th Street Production House specializes in comprehensive film production 
                services that transform creative visions into stunning visual narratives. 
                From feature films and documentaries to short films and experimental works, 
                we bring expertise and passion to every project.
              </p>
              <p>
                Our team manages every phase of production—from initial concept and 
                scriptwriting through cinematography, sound recording, editing, and final 
                color grading. We work with state-of-the-art equipment and employ industry-leading 
                techniques to ensure your film achieves professional broadcast quality.
              </p>
              <p>
                Whether you're an independent filmmaker or an established production company, 
                we provide the technical expertise, creative direction, and logistical support 
                needed to bring your film to life on schedule and within budget.
              </p>
            </ContentText>

            <ContentImage
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: 'url(/Images/image8.png)' }}
            />
          </ContentGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Film Production Services
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

      <ProcessSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Production Process
          </SectionTitle>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>
    </FilmProductionPageContainer>
  );
};
