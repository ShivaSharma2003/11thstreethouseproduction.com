import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const LastUpdated = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  font-style: italic;
`;

const Content = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 3rem 0 1.5rem 0;
    color: rgba(255, 255, 255, 0.9);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 2rem 0 1rem 0;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: rgba(255, 255, 255, 0.9);
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
    
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const PrivacyPage: React.FC = () => {
  return (
    <PrivacyPageContainer>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privacy Policy
        </PageTitle>
        
        <LastUpdated>Last updated: January 1, 2024</LastUpdated>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Eleventh Street Production House ("we," "our," or "us") is committed to protecting 
            your privacy. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Fill out contact forms or request quotes</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email or phone</li>
            <li>Engage with our services</li>
          </ul>

          <p>This information may include:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Email address and phone number</li>
            <li>Project details and requirements</li>
            <li>Business or organization information</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about 
            your device and usage patterns, including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Operating system and device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send you newsletters and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and performance</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third 
            parties except in the following circumstances:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To trusted service providers who assist in operating our website or business</li>
            <li>To comply with legal requirements or protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or 
            destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your 
            browsing experience. You can control cookie settings through your browser preferences.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not 
            knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page with an updated effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Eleventh Street Production House</strong><br />
            Email: info@11thstreetproductionhouse.com<br />
            Phone: +91 73401 31307<br />
            Address: 11th Street, Jaipur, Rajasthan 302012, India
          </p>
        </Content>
      </Container>
    </PrivacyPageContainer>
  );
};
