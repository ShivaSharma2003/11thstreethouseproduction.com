import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesContainer = styled.section`
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
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 4/3;
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

const ServiceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const ServiceTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const services = [
  {
    id: 1,
    title: "Film Production",
    description:
      "Full-service film production from feature films to documentaries with cinematic excellence.",
    video: "/assets/TVC/video1.MP4",
  },
  {
    id: 2,
    title: "Creative Direction",
    description:
      "Art direction, set design, and creative coordination for stunning visuals.",
    video: "/assets/TVC/video2.mov",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Core Services</SectionTitle>
          <MainTitle>
            Comprehensive Production Solutions for Every Vision
          </MainTitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={service.video}
                  className="object-cover h-full w-full"
                  muted
                  autoPlay
                />
                <ServiceOverlay className="overlay">
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceOverlay>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesContainer>
  );
};
