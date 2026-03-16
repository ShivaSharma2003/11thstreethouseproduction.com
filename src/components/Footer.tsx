import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiInstagram, FiYoutube, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled(motion.div)``;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
    }
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterLinks = styled.ul`
  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const ContactInfo = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);

    svg {
      font-size: 1.1rem;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div``;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  a {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Newsletter = styled.div`
  margin-top: 1.5rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.9rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const SubscribeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <FooterContainer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterContent>
            <FooterSection variants={itemVariants}>
              <Logo>eleventh street production house</Logo>
              <Description>
                We are a creative production company specializing in films, 
                drama, and digital content that tells compelling stories.
              </Description>
              <SocialLinks>
                <a href="https://www.instagram.com/11thstreetproductionhouse/" aria-label="Instagram" target="_blank">
                  <FiInstagram />
                </a>
                <a href="https://www.youtube.com/@11thstreetproductionhouse" aria-label="YouTube" target="_blank">
                  <FiYoutube />
                </a>
                <a href="#" aria-label="LinkedIn" target="_blank">
                  <FiLinkedin />
                </a>
              </SocialLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Quick Links</SectionTitle>
              <FooterLinks>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </FooterLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Services</SectionTitle>
              <FooterLinks>
                <li><Link to="/services/film-production">Film Production</Link></li>
                <li><Link to="/services/creative-direction">Creative Direction</Link></li>
                <li><Link to="/services/content-creation">Content Creation</Link></li>
                <li><Link to="/services/post-production">Post Production</Link></li>
                <li><Link to="/services/consulting">Consulting</Link></li>
              </FooterLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <SectionTitle>Contact Info</SectionTitle>
              <ContactInfo>
                <div>
                  <FiMapPin />
                  <span>11th Street, Jaipur, Rajasthan 302012</span>
                </div>
                <div>
                  <FiPhone />
                  <span>+91 73401 31307</span>
                </div>
                <div>
                  <FiMail />
                  <span>info@11thstreetproductionhouse.com</span>
                </div>
              </ContactInfo>
              
              <Newsletter>
                <SectionTitle>Newsletter</SectionTitle>
                <NewsletterForm onSubmit={handleNewsletterSubmit}>
                  <NewsletterInput
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                  <SubscribeButton type="submit">
                    Subscribe
                  </SubscribeButton>
                </NewsletterForm>
              </Newsletter>
            </FooterSection>
          </FooterContent>
        </motion.div>

        <FooterBottom>
          <Copyright>
            © {currentYear} Eleventh Street House Production. All rights reserved.
          </Copyright>
          <LegalLinks>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};
