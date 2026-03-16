import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url("https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png");
  background-size: cover;
  background-position: center;
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
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: "Playfair Display", "Georgia", serif;
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: "Playfair Display", "Georgia", serif;
  font-weight: 300;
  font-style: italic;
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  width: 100vw;
  background: #0a0a0a;
  padding-top: 8rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    padding-top: 6rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  font-family: "Playfair Display", "Georgia", serif;
  text-align: center;
  margin-bottom: 4rem;
`;

const ServiceRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  /* Odd services: Image on LEFT, Content on RIGHT */
  .service-image {
    order: 1;
  }

  .service-content {
    order: 2;
  }

  /* Even services: Content on LEFT, Image on RIGHT */
  &:nth-child(even) .service-content {
    order: 1;
  }

  &:nth-child(even) .service-image {
    order: 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    .service-content {
      order: 2 !important;
    }

    .service-image {
      order: 1 !important;
    }
  }
`;

const ServiceContent = styled.div`
  h3 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 400;
    margin-bottom: 1.5rem;
    font-family: "Playfair Display", "Georgia", serif;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1.5rem;
  }
`;

const ServiceImage = styled(motion.div)`
  aspect-ratio: 4/3;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  padding-left: 0;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;

    &::before {
      content: "✓";
      color: rgba(255, 255, 255, 0.6);
      font-weight: bold;
      font-size: 1.2rem;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
`;

const CTAButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-size: 0.95rem;
  font-family: "Playfair Display", "Georgia", serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 2rem;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const services = [
  {
    title: "Complete Line Production",
    icon: "📋",
    description:
      "A-to-Z production support from planning to execution. Our line producers oversee every aspect including coordination, scheduling, crew management, budgeting, and seamless execution to keep your production on track and on budget.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png",
    features: [
      "Production planning & scheduling",
      "Comprehensive coordination",
      "Crew management",
      "Daily production reports",
      "Problem-solving support",
      "Quality assurance",
    ],
  },
  {
    title: "Budget Management",
    icon: "💰",
    description:
      "Expert budget optimization ensuring maximum production value within your financial framework. We manage costs, control spending, handle vendor negotiations, and provide transparent reporting throughout production.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964399/flyadsxgtwcfqetklxbw.png",
    features: [
      "Budget planning & estimation",
      "Cost control",
      "Vendor negotiations",
      "Expense tracking",
      "Financial reporting",
      "Cost optimization",
    ],
  },
  {
    title: "Full Crew & Team Support",
    icon: "👥",
    description:
      "Access to experienced production crew, technical experts, and on-ground support teams. We assemble the right talent for your specific production needs, ensuring smooth operations and professional execution throughout the shoot.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964412/gochwma9vhfszve5miw7.png",
    features: [
      "Crew recruitment",
      "Technical expertise",
      "Team assembly",
      "Specialized roles",
      "On-set coordination",
      "Professional execution",
    ],
  },
  {
    title: "Equipment & Picture Vehicles",
    icon: "🚗",
    description:
      "Comprehensive access to industry-standard equipment and vehicles. From high-end cameras and lighting to drones and picture cars, we source everything needed for professional production at competitive rates.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964398/mcevrzbunlecaldeklfo.png",
    features: [
      "Camera equipment rental",
      "Lighting packages",
      "Drone services",
      "Picture vehicle fleet",
      "Support vehicles",
      "Equipment maintenance",
    ],
  },
  {
    title: "Hospitality & Seamless Logistics",
    icon: "🏨",
    description:
      "Complete hospitality management for cast and crew comfort. Professional catering, accommodation arrangements, transportation coordination, and on-ground logistics ensuring seamless production operations.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964362/wjjgwbiwntjjsbamdlwb.png",
    features: [
      "Catering services",
      "Meal planning",
      "Accommodation booking",
      "Transportation logistics",
      "On-ground coordination",
      "Crew welfare management",
    ],
  },
];

export const LineProductionDetailPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Line Production
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete line production with planning, budgeting, crew management,
            equipment sourcing, and seamless logistics
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
            Line Production Services
          </SectionTitle>

          {services.map((service, index) => (
            <ServiceRow
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceImage
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
                whileHover={{ scale: 1.02 }}
              />
              <ServiceContent className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <FeatureList>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </FeatureList>
                <CTAButton whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  Learn More <FiArrowRight />
                </CTAButton>
              </ServiceContent>
            </ServiceRow>
          ))}
        </Container>
      </ServicesSection>
    </PageContainer>
  );
};
