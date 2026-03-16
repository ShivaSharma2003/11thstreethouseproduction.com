import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CookiePageContainer = styled.div`
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

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    background-color: rgba(255, 255, 255, 0.05);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const CookiePage: React.FC = () => {
  return (
    <CookiePageContainer>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cookie Policy
        </PageTitle>
        
        <LastUpdated>Last updated: January 1, 2024</LastUpdated>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            This Cookie Policy explains how Eleventh Street Production House ("we," "our," 
            or "us") uses cookies and similar technologies when you visit our website. 
            It explains what these technologies are and why we use them.
          </p>

          <h2>What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a 
            website. They are widely used to make websites work more efficiently and to 
            provide information to website owners about how visitors use their sites.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for several purposes:</p>
          <ul>
            <li>To ensure our website functions properly</li>
            <li>To analyze how our website is used</li>
            <li>To remember your preferences and settings</li>
            <li>To improve your browsing experience</li>
            <li>To provide relevant content and advertisements</li>
          </ul>

          <h2>Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched 
            off in our systems. They are usually only set in response to actions made by 
            you which amount to a request for services.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure 
            and improve the performance of our site. They help us to know which pages are 
            the most and least popular and see how visitors move around the site.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and 
            personalisation. They may be set by us or by third party providers whose 
            services we have added to our pages.
          </p>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies may be set through our site by our advertising partners. They 
            may be used by those companies to build a profile of your interests and show 
            you relevant adverts on other sites.
          </p>

          <h2>Cookie Duration</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Duration</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Session Cookies</td>
                <td>Until browser is closed</td>
                <td>Essential functionality</td>
              </tr>
              <tr>
                <td>Persistent Cookies</td>
                <td>30 days to 2 years</td>
                <td>Analytics and preferences</td>
              </tr>
              <tr>
                <td>Third-party Cookies</td>
                <td>Varies by provider</td>
                <td>Analytics and marketing</td>
              </tr>
            </tbody>
          </table>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies on our site are set by third-party services. We may use services 
            such as Google Analytics to help us understand how our website is being used. 
            These services may also use cookies.
          </p>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to analyze website traffic and usage patterns. Google 
            Analytics uses cookies to collect information about how visitors use our site. 
            You can opt-out of Google Analytics by visiting the 
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Please note that removing 
            or blocking cookies can impact your user experience and parts of our website 
            may no longer be fully accessible.
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. 
            However, if you limit the ability of websites to set cookies, you may worsen 
            your overall user experience.
          </p>

          <h3>Opt-Out Links</h3>
          <p>You can opt-out of certain third-party cookies by visiting:</p>
          <ul>
            <li>
              <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>

          <h2>Local Storage</h2>
          <p>
            In addition to cookies, we may use local storage technologies to store 
            information locally on your device. This helps us provide a better user 
            experience and remember your preferences.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our 
            practices or for other operational, legal, or regulatory reasons. We will notify 
            you of any changes by posting the new Cookie Policy on this page with an updated 
            effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, 
            please contact us at:
          </p>
          <p>
            <strong>Eleventh Street Production House</strong><br />
            Email: info@11thstreetproductionhouse.com<br />
            Phone: +91 73401 31307<br />
            Address: 11th Street, Jaipur, Rajasthan 302012, India
          </p>

          <p>
            By continuing to use our website, you agree to our use of cookies as described 
            in this Cookie Policy.
          </p>
        </Content>
      </Container>
    </CookiePageContainer>
  );
};
