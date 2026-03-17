import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiTrendingUp, FiStar } from 'react-icons/fi';

const CreativeDirectionPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964412/gochwma9vhfszve5miw7.png');
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

const ApproachSection = styled.section`
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

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ApproachCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
  }

  .number {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.3rem;
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
    icon: FiEye,
    title: 'Visual Storytelling',
    description: 'Crafting compelling visual narratives that resonate with your audience and convey your message effectively.'
  },
  {
    icon: FiTarget,
    title: 'Brand Strategy',
    description: 'Developing comprehensive creative strategies that align with your brand identity and business objectives.'
  },
  {
    icon: FiTrendingUp,
    title: 'Campaign Development',
    description: 'Creating integrated creative campaigns that drive engagement and deliver measurable results.'
  },
  {
    icon: FiStar,
    title: 'Art Direction',
    description: 'Providing artistic vision and direction to ensure every visual element serves the overall creative concept.'
  }
];

const approachSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your brand, audience, and objectives to inform our creative strategy.'
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Developing unique creative concepts that differentiate your brand and capture audience attention.'
  },
  {
    number: '03',
    title: 'Visual Design',
    description: 'Creating compelling visual assets and establishing a cohesive artistic direction for your project.'
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Executing the creative vision across all touchpoints while maintaining consistency and quality.'
  }
];

export const CreativeDirectionPage: React.FC = () => {
  return (
    <CreativeDirectionPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creative Direction
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming ideas into powerful visual experiences that captivate and inspire
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
              <h2>Strategic Creative Leadership</h2>
              <p>
                Our creative direction services go beyond aesthetics to deliver strategic 
                visual solutions that drive results. We combine artistic vision with 
                strategic thinking to create compelling narratives that resonate with 
                your target audience.
              </p>
              <p>
                From concept development to final execution, we guide every aspect of 
                the creative process to ensure your brand story is told in the most 
                impactful way possible.
              </p>
              <p>
                Our team brings years of experience across various industries, allowing 
                us to provide fresh perspectives and innovative solutions for every project.
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
            Our Creative Services
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

      <ApproachSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Creative Approach
          </SectionTitle>

          <ApproachGrid>
            {approachSteps.map((step, index) => (
              <ApproachCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ApproachCard>
            ))}
          </ApproachGrid>
        </Container>
      </ApproachSection>
    </CreativeDirectionPageContainer>
  );
};
