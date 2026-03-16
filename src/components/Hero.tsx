import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi";

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  min-width: 100vw;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-family: "Playfair Display", "Dancing Script", "Georgia", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  .highlight {
    font-style: oblique;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Dancing Script", "Brush Script MT", cursive;
    font-weight: 700;
    font-size: 1.1em;
    background: linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff, #e0e0e0);
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    animation: gradientShift 3s ease-in-out infinite;
    display: inline-block;
    transform: rotate(-2deg);
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const GetStartedButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-size: 0.9rem;
  font-family: "Playfair Display", "Georgia", serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }
`;

const SocialSidebar = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 4;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateX(-5px);
    }
  }
`;

const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964395/qus5ytfpxg6oq0it6ccm.png",
    "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964412/gochwma9vhfszve5miw7.png",
    "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964435/qlddfcvu0scepj9zfwl8.png",
    "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/jfucqpdvtxcamo5znzhz.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Auto-advance every 6 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <HeroContainer>
      <HeroContent>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            Where Vision
            <br />
            Becomes <span className="highlight">Reality</span>
          </Title>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.85)",
              marginBottom: "2rem",
            }}
          >
            Full-service production house delivering cinematic excellence across films, commercials, and creative projects. From concept to completion, we bring stories to life with precision and artistry.
          </motion.p>

          <GetStartedButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services →
          </GetStartedButton>
        </TextContent>
      </HeroContent>

      <SocialSidebar>
        <motion.a
          href="https://www.instagram.com/11thstreetproductionhouse/"
          target="_blank"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <FiInstagram />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@11thstreetproductionhouse"
          target="_blank"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <FiYoutube />
        </motion.a>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <FiLinkedin />
        </motion.a>
      </SocialSidebar>

      <CarouselContainer>
        <AnimatePresence mode="wait">
          <CarouselSlide
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          />
        </AnimatePresence>
      </CarouselContainer>
    </HeroContainer>
  );
};
