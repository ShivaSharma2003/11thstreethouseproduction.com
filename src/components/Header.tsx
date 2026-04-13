import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiChevronDown,
} from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleMobileMenu, closeMobileMenu } from "../store/slices/uiSlice";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const GetQuoteButton = styled(motion.button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.7rem 1.5rem;
  font-family: inherit;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    opacity: 0.7;
  }
`;

// Contact Sidebar Styles
const ContactSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2000;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1999;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  h2 {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

const InfoSection = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const BusinessHours = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  h4 {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .hours {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    span:first-child {
      color: rgba(255, 255, 255, 0.8);
    }

    span:last-child {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ServicesList = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  h4 {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.3rem 0;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;

      &::before {
        content: "•";
        color: rgba(255, 255, 255, 0.5);
        margin-right: 0.5rem;
      }
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  flex: 1;

  h4 {
    font-family: inherit;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
    transition: transform 0.3s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  position: relative;
  padding: 0.5rem 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  ${(props) =>
    props.isActive &&
    `
    color: #ffffff;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #ffffff;
    }
  `}
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  outline: 0;
`;

const DropdownToggle = styled.button<{ isActive: boolean }>`
  position: relative;
  padding: 0.5rem 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  ${(props) =>
    props.isActive &&
    `
    color: #ffffff;
  `}

  svg {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    transform: rotate(${(props) => (props.isActive ? "180deg" : "0deg")});
  }
`;

const DropdownMenu = styled(motion.div)<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  border-radius: 0 0 8px 8px;
  min-width: 250px;
  margin-top: 0.5rem;
  z-index: 100;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-radius: 8px;
    margin-top: 0.5rem;
    min-width: auto;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: capitalize;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    padding-left: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileOverlay = styled(motion.div)<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

// Form Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: inherit;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Select = styled.select`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }

  option {
    background: #1a1a1a;
    color: white;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-family: inherit;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);
  const location = useLocation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    howDidYouFindUs: "",
    message: "",
  });

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services/location-management", label: "Location Management" },
    { path: "/services/line-production", label: "Line Production" },
  ];

  const serviceItems = [
    { path: "/services/live-events", label: "Live Events & Artist Management" },
    { path: "/services/film-production", label: "Film Production" },
    { path: "/services/post-production", label: "Post Production" },
    { path: "/services/content-creation", label: "Content Creation" },
    { path: "/services/creative-direction", label: "Creative Direction" },
    { path: "/services/consulting", label: "Consulting" },
    
  ];

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleCloseMenu = () => {
    dispatch(closeMobileMenu());
  };

  const handleLogoClick = () => {
    setIsContactSidebarOpen(true);
  };

  const handleQuoteModalOpen = () => {
    setIsQuoteModalOpen(true);
  };

  const handleQuoteModalClose = () => {
    setIsQuoteModalOpen(false);
  };

  const handleContactSidebarClose = () => {
    setIsContactSidebarOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      howDidYouFindUs: "",
      message: "",
    });
    setIsSubmitting(false);
    setIsQuoteModalOpen(false);
    alert(
      "Thank you for your quote request! We'll get back to you within 24 hours.",
    );
  };

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Nav>
          <img
            src={"/assets/logos/logo.svg"}
            alt="11th Street Production House"
            className="h-40 w-40 object-contain aspect-video hover:cursor-pointer"
            onClick={handleLogoClick}
          />

          <NavLinks isOpen={isMobileMenuOpen}>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink
                  to={item.path}
                  isActive={location.pathname === item.path}
                  onClick={handleCloseMenu}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}

            {/* Services Dropdown */}
            <NavItem
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <DropdownToggle
                isActive={
                  isServicesDropdownOpen ||
                  location.pathname.includes("/services")
                }
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                Services
                <FiChevronDown />
              </DropdownToggle>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <DropdownMenu
                    isOpen={isServicesDropdownOpen}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {serviceItems.map((service) => (
                      <DropdownItem
                        key={service.path}
                        to={service.path}
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          handleCloseMenu();
                        }}
                      >
                        {service.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </NavItem>

            <NavItem>
              <GetQuoteButton
                onClick={handleQuoteModalOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </GetQuoteButton>
            </NavItem>
          </NavLinks>

          <MenuButton onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </Nav>
      </HeaderContainer>

      <MobileOverlay
        isOpen={isMobileMenuOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        onClick={handleCloseMenu}
      />

      {/* Get Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleQuoteModalClose}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <h2>Get Your Quote</h2>
                <CloseButton onClick={handleQuoteModalClose}>
                  <FiX />
                </CloseButton>
              </ModalHeader>

              <Form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="film-production">Film Production</option>
                      <option value="commercial">Commercial</option>
                      <option value="music-video">Music Video</option>
                      <option value="documentary">Documentary</option>
                      <option value="corporate-video">Corporate Video</option>
                      <option value="event">Event Coverage</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="howDidYouFindUs">
                      How did you find us?
                    </Label>
                    <Select
                      id="howDidYouFindUs"
                      name="howDidYouFindUs"
                      value={formData.howDidYouFindUs}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="website">Website</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup className="full-width">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, vision, and any specific requirements..."
                      required
                    />
                  </FormGroup>
                </FormGrid>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Get My Quote"}
                </SubmitButton>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* Contact Sidebar */}
      <AnimatePresence>
        {isContactSidebarOpen && (
          <>
            <SidebarOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleContactSidebarClose}
            />
            <ContactSidebar
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <SidebarHeader>
                <h2>Contact Us</h2>
                <CloseButton onClick={handleContactSidebarClose}>
                  <FiX />
                </CloseButton>
              </SidebarHeader>

              <ContactInfo>
                <ContactItem>
                  <ContactIcon>
                    <FiPhone />
                  </ContactIcon>
                  <ContactContent>
                    <h4>Phone</h4>
                    <p>+91 73401 31307</p>
                    <p>Available for calls & WhatsApp</p>
                  </ContactContent>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FiMail />
                  </ContactIcon>
                  <ContactContent>
                    <h4>Enquiry</h4>
                    <p>info@11thstreetproductionhouse.com</p>
                    <p>Response within 24 hours</p>
                  </ContactContent>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FiMapPin />
                  </ContactIcon>
                  <ContactContent>
                    <h4>Studio Address</h4>
                    <p>11th Street Production House</p>
                    <p>Vaishali Nagar</p>
                    <p>Jaipur, Rajasthan 302012</p>
                    <p>India</p>
                  </ContactContent>
                </ContactItem>
              </ContactInfo>

              <BusinessHours>
                <h4>Business Hours</h4>
                <div className="hours">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
                <div className="hours">
                  <span>Emergency</span>
                  <span>24/7 Available</span>
                </div>
              </BusinessHours>

              <ServicesList>
                <h4>Our Services</h4>
                <ul>
                  <li>Film Production</li>
                  <li>Commercial Videos</li>
                  <li>Music Videos</li>
                  <li>Documentary Films</li>
                  <li>Corporate Videos</li>
                  <li>Wedding Films</li>
                  <li>Event Coverage</li>
                  <li>Post Production</li>
                  <li>Live Streaming</li>
                </ul>
              </ServicesList>

              <InfoSection>
                <h3>About Us</h3>
                <p>
                  11th Street Production House is a premier film production
                  company based in Mumbai, specializing in creating compelling
                  visual stories that captivate audiences.
                </p>
                <p>
                  With over a decade of experience, we've worked with top
                  brands, artists, and filmmakers to bring their visions to
                  life.
                </p>
                <p>
                  Our team of creative professionals uses cutting-edge
                  technology and artistic expertise to deliver exceptional
                  results.
                </p>
              </InfoSection>

              <SocialLinks>
                <SocialLink href="#" target="_blank">
                  <FiInstagram />
                </SocialLink>
                <SocialLink href="#" target="_blank">
                  <FiFacebook />
                </SocialLink>
                <SocialLink href="#" target="_blank">
                  <FiYoutube />
                </SocialLink>
                <SocialLink href="#" target="_blank">
                  <FiLinkedin />
                </SocialLink>
              </SocialLinks>
            </ContactSidebar>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
