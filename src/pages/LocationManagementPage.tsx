import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSearch, FiX, FiMap } from 'react-icons/fi';

const LocationPageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
              url('https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964361/beibo99qeahzngzbmlnl.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    background-attachment: scroll;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent);
  filter: blur(40px);
  z-index: 0;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -100px;
    left: -100px;
  }

  &:nth-child(2) {
    width: 250px;
    height: 250px;
    bottom: -50px;
    right: -50px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 400;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.8));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SearchFilterSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.3s ease;

  &:focus-within {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    color: white;
    padding: 0.75rem 0;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const LocationsSection = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LocationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const LocationImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
              url('https://via.placeholder.com/400x250?text=Location');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 2;
  }
`;

const LocationBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #0a0a0a;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 3;
  letter-spacing: 0.5px;
`;

const LocationContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LocationName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: white;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
`;

const LocationAddress = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    flex-shrink: 0;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);

    svg {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const HoursInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    flex-shrink: 0;
  }
`;

const LocationDescription = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: auto;
  margin-bottom: 1.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled(motion.button)`
  flex: 1;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const MapButton = styled(Button)`
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  text-align: center;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  font-size: 1.05rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const MapModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const MapModalContent = styled(motion.div)`
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-height: 95vh;
    border-radius: 8px;
  }
`;

const MapModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    font-family: 'Playfair Display', serif;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const NoResultsContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
  }
`;

const LocationManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = useMemo(
    () => [
      {
        id: 1,
        name: 'Downtown Studio',
        address: '123 Main Street, Downtown District',
        category: 'studio',
        phone: '+1 (555) 123-4567',
        email: 'downtown@11thstreet.com',
        hours: '9:00 AM - 6:00 PM',
        description: 'Our flagship studio featuring state-of-the-art equipment and production facilities for all your creative needs.',
        available: true,
      },
      {
        id: 2,
        name: 'Waterfront Production House',
        address: '456 Riverside Avenue, Waterfront Zone',
        category: 'production',
        phone: '+1 (555) 234-5678',
        email: 'waterfront@11thstreet.com',
        hours: '10:00 AM - 8:00 PM',
        description: 'Scenic waterfront location perfect for outdoor shoots and location-based productions.',
        available: true,
      },
      {
        id: 3,
        name: 'Tech Hub Office',
        address: '789 Innovation Way, Tech District',
        category: 'office',
        phone: '+1 (555) 345-6789',
        email: 'techhub@11thstreet.com',
        hours: '8:00 AM - 9:00 PM',
        description: 'Modern office space with cutting-edge technology and collaboration areas for creative teams.',
        available: true,
      },
      {
        id: 4,
        name: 'Creative Loft',
        address: '321 Artist Boulevard, Arts Quarter',
        category: 'studio',
        phone: '+1 (555) 456-7890',
        email: 'loft@11thstreet.com',
        hours: '9:00 AM - 10:00 PM',
        description: 'Industrial loft space with high ceilings and natural lighting, ideal for videography and design work.',
        available: true,
      },
      {
        id: 5,
        name: 'Green Screen Studio',
        address: '654 Virtual Street, Production Complex',
        category: 'production',
        phone: '+1 (555) 567-8901',
        email: 'greenscreen@11thstreet.com',
        hours: '24 Hours',
        description: 'Specialized studio with professional green screen setup, perfect for digital content creation.',
        available: false,
      },
      {
        id: 6,
        name: 'Post-Production Suite',
        address: '987 Digital Lane, Media Quarter',
        category: 'office',
        phone: '+1 (555) 678-9012',
        email: 'postprod@11thstreet.com',
        hours: '9:00 AM - 11:00 PM',
        description: 'Equipped with professional editing suites, color grading stations, and mixing facilities.',
        available: true,
      },
    ],
    []
  );

  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      const matchesSearch =
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, locations]);

  const categories = [
    { id: 'all', label: 'All Locations' },
    { id: 'studio', label: 'Studios' },
    { id: 'production', label: 'Production' },
    { id: 'office', label: 'Offices' },
  ];

  const handleViewMap = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const handleCloseMap = () => {
    setSelectedLocation(null);
  };

  return (
    <LocationPageContainer>
      {/* Hero Section */}
      <HeroSection>
        <FloatingElement
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingElement
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Locations
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our network of premium studios and production facilities designed for excellence
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Search & Filter Section */}
      <SearchFilterSection>
        <Container>
          <SearchBar>
            <InputWrapper>
              <FiSearch />
              <input
                type="text"
                placeholder="Search locations by name, address, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputWrapper>
          </SearchBar>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <FilterButton
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: selectedCategory === cat.id ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: selectedCategory === cat.id ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)',
                }}
              >
                {cat.label}
              </FilterButton>
            ))}
          </div>
        </Container>
      </SearchFilterSection>

      {/* Locations Grid Section */}
      <LocationsSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Premium Locations
          </SectionTitle>
          <SectionSubtitle>
            Browse our curated collection of studios and facilities ready to bring your vision to life
          </SectionSubtitle>

          {filteredLocations.length > 0 ? (
            <LocationsGrid>
              <AnimatePresence>
                {filteredLocations.map((location, index) => (
                  <LocationCard
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <LocationImageWrapper>
                      {location.available ? (
                        <LocationBadge>Available</LocationBadge>
                      ) : (
                        <LocationBadge style={{ background: 'rgba(255, 100, 100, 0.9)' }}>Booked</LocationBadge>
                      )}
                    </LocationImageWrapper>

                    <LocationContent>
                      <LocationName>{location.name}</LocationName>
                      <LocationAddress>
                        <FiMapPin />
                        {location.address}
                      </LocationAddress>

                      <ContactInfo>
                        <ContactItem href={`tel:${location.phone}`}>
                          <FiPhone />
                          {location.phone}
                        </ContactItem>
                        <ContactItem href={`mailto:${location.email}`}>
                          <FiMail />
                          {location.email}
                        </ContactItem>
                        <HoursInfo>
                          <FiClock />
                          {location.hours}
                        </HoursInfo>
                      </ContactInfo>

                      <LocationDescription>{location.description}</LocationDescription>

                      <ActionButtons>
                        <MapButton
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleViewMap(String(location.id))}
                        >
                          <FiMap style={{ marginRight: '0.3rem' }} />
                          View Map
                        </MapButton>
                        <Button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                        </Button>
                      </ActionButtons>
                    </LocationContent>
                  </LocationCard>
                ))}
              </AnimatePresence>
            </LocationsGrid>
          ) : (
            <NoResultsContainer>
              <FiMapPin />
              <p>No locations found matching your search criteria.</p>
            </NoResultsContainer>
          )}
        </Container>
      </LocationsSection>

      {/* Map Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <MapModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMap}
          >
            <MapModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MapModalHeader>
                <h3>{locations.find((l) => String(l.id) === selectedLocation)?.name}</h3>
                <CloseButton onClick={handleCloseMap}>
                  <FiX />
                </CloseButton>
              </MapModalHeader>
              <MapContainer>
                <div style={{ textAlign: 'center' }}>
                  <p>Map integration coming soon</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {locations.find((l) => String(l.id) === selectedLocation)?.address}
                  </p>
                </div>
              </MapContainer>
            </MapModalContent>
          </MapModalOverlay>
        )}
      </AnimatePresence>
    </LocationPageContainer>
  );
};

export default LocationManagementPage;