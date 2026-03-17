import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

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
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png');
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
  position: relative;
  z-index: 2;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', 'Georgia', serif;
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'Playfair Display', 'Georgia', serif;
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
  font-family: 'Playfair Display', 'Georgia', serif;
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
    font-family: 'Playfair Display', 'Georgia', serif;
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
      content: '✓';
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
  font-family: 'Playfair Display', 'Georgia', serif;
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
    title: 'Location Scouting & Recce',
    icon: '🔍',
    description: 'Finding the perfect location that fits your script, mood, and visual style—with detailed recce and location planning. Our comprehensive location database ensures we find the ideal backdrop for your production.',
    image: '/assets/LM/LM2.svg',
    features: [
      'Comprehensive location database',
      'Detailed recce reports',
      'Visual mood boards',
      'Script-to-location matching',
      'Budget-friendly options',
      'Location scouting expertise'
    ]
  },
  {
    title: 'Location Management',
    icon: '🏢',
    description: 'End-to-end supervision of locations, including scheduling, coordination, maintenance, and on-ground handling. We ensure smooth operations at every location throughout your production.',
    image: '/assets/LM/LM1.svg',
    features: [
      'Location scheduling',
      'Coordination & management',
      'Maintenance supervision',
      'On-ground handling',
      'Location logistics',
      'Professional liaison'
    ]
  },
  {
    title: 'Permissions & Approvals',
    icon: '✅',
    description: 'Complete assistance with government, private, and local permissions required for a hassle-free shoot. We navigate regulatory requirements with expertise and efficiency.',
    image: '/assets/LM/LM4.svg',
    features: [
      'Government permit applications',
      'Local authority approvals',
      'Private property permissions',
      'Legal compliance',
      'Permit documentation',
      'Regulatory liaison services'
    ]
  },
  {
    title: 'Casting Management',
    icon: '🎭',
    description: 'Selection and coordination of artists, models, supporting actors, and extras based on project requirements. We have access to a wide network of talented professionals.',
    image: '/assets/LM/LM5.svg',
    features: [
      'Artist selection',
      'Model coordination',
      'Supporting actor sourcing',
      'Background artist services',
      'Talent contracts',
      'On-set coordination'
    ]
  },
  {
    title: 'Talent & Crew Excellence',
    icon: '👥',
    description: 'Providing skilled technical teams, actors, background artists, and specialized crew for professional execution. Our curated network ensures the right talent for your project.',
    image: '/assets/LM/LM7.svg',
    features: [
      'Technical crew assembly',
      'Specialist coordination',
      'Professional team building',
      'Crew qualifications',
      'Team management',
      'Performance excellence'
    ]
  },
  {
    title: 'Art Direction',
    icon: '🎨',
    description: 'Creating visually stunning sets, props, and environments that bring your vision to life. Our art directors craft immersive worlds that enhance your storytelling.',
    image: '/assets/LM/LM6.svg',
    features: [
      'Set design',
      'Props coordination',
      'Visual aesthetics',
      'Environment creation',
      'Design consultation',
      'Creative implementation'
    ]
  },
  {
    title: 'Wall Art, Set Painting & Textures',
    icon: '🖌️',
    description: 'Custom wall designs, murals, textures, and set painting to elevate the visual appeal of your production. Every detail matters in creating an authentic environment.',
    image: '/assets/LM/LM8.svg',
    features: [
      'Custom wall designs',
      'Mural creation',
      'Texture application',
      'Set painting',
      'Visual enhancement',
      'Artistic execution'
    ]
  },
  {
    title: 'Stunt Team Coordination',
    icon: '⚡',
    description: 'Professional stunt artists, action choreography, and safety-backed stunt execution for film and commercial projects. Safety is our priority while delivering thrilling action.',
    image: '/assets/LM/LM9.svg',
    features: [
      'Professional stunt artists',
      'Action choreography',
      'Safety coordination',
      'Risk assessment',
      'Insurance compliance',
      'Stunt execution'
    ]
  },
  {
    title: 'Accommodation Arrangements',
    icon: '🛏️',
    description: 'Comfortable and well-planned stay arrangements for cast, crew, and technical teams. We ensure everyone is well-rested and ready for optimal production performance.',
    image: '/assets/LM/LM10.svg',
    features: [
      'Hotel bookings',
      'Accommodation selection',
      'Comfort management',
      'Check-in coordination',
      'Special requirements',
      'Budget optimization'
    ]
  },
  {
    title: 'Transportation Coordination',
    icon: '🚌',
    description: 'Organized travel, vehicle arrangements, and on-ground vehicle logistics for smooth movement during production. We manage all transportation needs seamlessly.',
    image: '/assets/LM/LM11.svg',
    features: [
      'Vehicle arrangement',
      'Travel logistics',
      'Driver services',
      'Schedule coordination',
      'Fleet management',
      'On-ground mobility'
    ]
  },
  {
    title: 'Catering Services',
    icon: '🍽️',
    description: 'High-quality meals, refreshments, and on-set food services tailored for long shooting schedules. Good food keeps everyone happy and energized during production.',
    image: '/assets/LM/LM12.svg',
    features: [
      'Menu planning',
      'Quality meals',
      'Refreshment services',
      'Dietary accommodations',
      'On-set food services',
      'Culinary excellence'
    ]
  },
  {
    title: 'Security & Safety Management',
    icon: '🛡️',
    description: 'Professional security teams, on-set safety arrangements, and risk management for safe shooting environments. Your safety and security are paramount to us.',
    image: '/assets/LM/LM13.svg',
    features: [
      'Security team provision',
      'On-set safety protocols',
      'Risk management',
      'Emergency procedures',
      'Safety briefings',
      'Incident management'
    ]
  }
];

export const LocationManagementDetailPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Location Management
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete location services including scouting, permits, casting, talent management, art direction, accommodation, catering, transportation, security, and more
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
            Location Managment Services
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
                <CTAButton
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
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
