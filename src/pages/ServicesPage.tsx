import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCamera, FiEdit3, FiMonitor, FiFilm, FiMic, FiVideo } from 'react-icons/fi';

const ServicesPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    background-attachment: scroll;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', 'Dancing Script', 'Georgia', serif;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.7), #ffffff);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  animation: gradientShift 4s ease-in-out infinite;

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 300;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
`;

const FloatingElement1 = styled(FloatingElement)`
  top: 10%;
  left: 10%;
`;

const FloatingElement2 = styled(FloatingElement)`
  top: 20%;
  right: 15%;
  width: 60px;
  height: 60px;
`;

const FloatingElement3 = styled(FloatingElement)`
  bottom: 15%;
  left: 20%;
  width: 80px;
  height: 80px;
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
    z-index: 1;
    transition: all 0.3s ease;
  }

  ${ServiceCard}:hover & {
    transform: scale(1.05);
    
    &::before {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    }
  }
`;

const ServiceContent = styled.div`
  padding: 3rem 2rem;
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px auto 2rem;
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  ${ServiceCard}:hover & {
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', 'Georgia', serif;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-style: italic;
`;

const ServiceFeatures = styled.ul`
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Playfair Display', 'Georgia', serif;

  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    line-height: 1.4;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Dancing Script', 'Pacifico', cursive;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 500;
`;

const StepDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-style: italic;
  line-height: 1.5;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  font-family: 'Playfair Display', 'Dancing Script', 'Georgia', serif;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const services = [
  {
    icon: FiCamera,
    title: 'Film Production',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964399/flyadsxgtwcfqetklxbw.png',
    description: 'Complete film production services from concept to final cut, including pre-production planning, shooting, and post-production.',
    features: [
      'Concept Development',
      'Script Writing',
      'Cinematography',
      'Director Services',
      'Location Management'
    ]
  },
  {
    icon: FiEdit3,
    title: 'Creative Direction',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964412/gochwma9vhfszve5miw7.png',
    description: 'Strategic creative direction for your visual content, ensuring your brand message is communicated effectively.',
    features: [
      'Creative Strategy',
      'Art Direction',
      'Brand Consulting',
      'Visual Identity',
      'Campaign Development'
    ]
  },
  {
    icon: FiMonitor,
    title: 'Digital Content',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964363/ksi1evkwgsazgr6ecudg.png',
    description: 'Modern digital content creation for web, social media, and streaming platforms.',
    features: [
      'Social Media Content',
      'Web Series',
      'Commercial Videos',
      'Documentary Films',
      'Corporate Content'
    ]
  },
  {
    icon: FiFilm,
    title: 'Post Production',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964362/wjjgwbiwntjjsbamdlwb.png',
    description: 'Professional post-production services including editing, color grading, sound design, and visual effects.',
    features: [
      'Video Editing',
      'Color Grading',
      'Sound Design',
      'Visual Effects',
      'Motion Graphics'
    ]
  },
  {
    icon: FiMic,
    title: 'Audio Production',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964424/yncgcqygmw7b30scbs8s.png',
    description: 'Complete audio production services for films, podcasts, and commercial content.',
    features: [
      'Sound Recording',
      'Audio Mixing',
      'Foley Design',
      'Music Composition',
      'Voice Over'
    ]
  },
  {
    icon: FiVideo,
    title: 'Live Streaming',
    image: 'https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964363/ksi1evkwgsazgr6ecudg.png',
    description: 'Professional live streaming services for events, concerts, and digital experiences.',
    features: [
      'Multi-Camera Setup',
      'Live Switching',
      'Stream Management',
      'Interactive Features',
      'Technical Support'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your vision, goals, and requirements for the project.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Detailed planning phase including scripting, storyboarding, and production scheduling.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Professional filming with our experienced crew and state-of-the-art equipment.'
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Editing, color grading, sound design, and final delivery of your content.'
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <ServicesPageContainer>
      <HeroSection>
        <FloatingElement1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.1], 
            scale: [0, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0.4, 0.1], 
            scale: [0, 1, 0.8, 1],
            x: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <FloatingElement3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.2], 
            scale: [0, 0.8, 1.1, 0.9],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <Container>
          
          <PageTitle
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            Our Services
          </PageTitle>
          
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Comprehensive film production and creative services to bring your vision to life with cutting-edge technology and artistic excellence
          </PageSubtitle>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What We Offer
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional services tailored to meet your creative needs
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceImage backgroundImage={service.image} />
                <ServiceContent>
                  <ServiceIcon>
                    <service.icon />
                  </ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceFeatures>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <ProcessSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Process
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A streamlined approach to deliver exceptional results
          </SectionSubtitle>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>
    </ServicesPageContainer>
  );
};
