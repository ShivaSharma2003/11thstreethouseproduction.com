import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TermsPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 70%;
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

export const TermsPage: React.FC = () => {
  return (
    <TermsPageContainer>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Terms of Service
        </PageTitle>
        
        <LastUpdated>Last updated: March 1, 2026</LastUpdated>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Welcome to Eleventh Street Production House. These Terms of Service ("Terms") 
            govern your use of our website and services. By accessing or using our services, 
            you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our website or services, you accept and agree to be bound 
            by the terms and provision of this agreement. If you do not agree to abide by 
            the above, please do not use this service.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Eleventh Street Production House provides film production, creative direction, 
            content creation, post-production, and consulting services. We reserve the right 
            to modify or discontinue any service at any time without notice.
          </p>

          <h2>3. Client Responsibilities</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Cooperate in good faith during the production process</li>
            <li>Make timely payments as agreed</li>
            <li>Respect intellectual property rights</li>
            <li>Provide necessary permits and clearances</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          
          <h3>4.1 Client Content</h3>
          <p>
            You retain ownership of any content, materials, or intellectual property you 
            provide to us. You grant us a limited license to use such materials solely 
            for the purpose of providing our services.
          </p>

          <h3>4.2 Our Work Product</h3>
          <p>
            Upon full payment, you will receive the agreed-upon deliverables and usage rights. 
            We retain ownership of our creative processes, techniques, and methodologies. 
            Portfolio usage rights are reserved unless otherwise agreed.
          </p>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payment schedules will be outlined in individual project agreements</li>
            <li>Late payments may incur additional fees</li>
            <li>All prices are exclusive of applicable taxes</li>
            <li>Refunds are subject to the terms of individual project agreements</li>
          </ul>

          <h2>6. Project Timeline and Delivery</h2>
          <p>
            Project timelines are estimates and may be subject to change due to factors 
            including but not limited to client feedback, scope changes, or unforeseen 
            circumstances. We will communicate any significant delays promptly.
          </p>

          <h2>7. Cancellation and Termination</h2>
          <p>
            Either party may terminate a project with written notice. Cancellation terms 
            and fees will be outlined in individual project agreements. Completed work 
            up to the point of cancellation must be paid for.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Our liability is limited to the amount paid for our services. We are not liable 
            for indirect, incidental, or consequential damages. We recommend clients maintain 
            appropriate insurance coverage.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            We respect the confidentiality of client information and projects. We will not 
            disclose confidential information without prior written consent, except as 
            required by law.
          </p>

          <h2>10. Force Majeure</h2>
          <p>
            We are not liable for delays or failures due to circumstances beyond our control, 
            including but not limited to natural disasters, government actions, or pandemics.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be resolved 
            through binding arbitration in Jaipur, Rajasthan.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective 
            immediately upon posting on our website. Your continued use of our services 
            constitutes acceptance of the modified Terms.
          </p>

          <h2>13. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining 
            provisions will continue to be valid and enforceable.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Eleventh Street Production House</strong><br />
            Email: info@11thstreetproductionhouse.com<br />
            Phone: +91 73401 31307<br />
            Address: 11th Street, Jaipur, Rajasthan 302012, India
          </p>

          <p>
            By using our services, you acknowledge that you have read, understood, and 
            agree to be bound by these Terms of Service.
          </p>
        </Content>
      </Container>
    </TermsPageContainer>
  );
};
