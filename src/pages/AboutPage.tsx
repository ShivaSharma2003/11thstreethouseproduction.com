import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";

const AboutPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url("https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964363/btujcjkfdxwzbcwpoqql.png");
  background-size: cover;
  background-position: center;
  min-width: 100vw;
  min-height: 100vh;
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
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const PageSubtitle = styled(motion.p)`
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const StorySection = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryContent = styled(motion.div)`
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 300;
    margin-bottom: 2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const StoryImage = styled(motion.div)`
  aspect-ratio: 4/3;
  background: url("https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964399/flyadsxgtwcfqetklxbw.png");
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatsSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  padding: 2rem 1rem;

  .icon {
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.5rem;
  }

  .number {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  .label {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }
`;

const TeamSection = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;

  .image {
    aspect-ratio: 1/1;
    width: 200px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 auto 1.5rem;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  &:hover .image {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    font-family: "Playfair Display", serif;
  }

  .role {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }

  .bio {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    font-size: 0.95rem;
    text-align: center;
  }
`;

const ValuesSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }

  .value-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    background-size: cover;
    background-position: center;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  &:hover .value-image {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const stats = [
  { icon: FiAward, number: "15+", label: "Awards Won" },
  { icon: FiUsers, number: "200+", label: "Projects Completed" },
  { icon: FiTrendingUp, number: "8+", label: "Years Experience" },
  { icon: FiHeart, number: "50+", label: "Happy Clients" },
];

const teamMembers = [
  {
    name: "Subhash Manatwal",
    role: "Founder • Producer & Financier",
    bio: "A producer, financer, and leading real estate consultant, Subhash Manatwal leads Eleventh Street Production House with a strong focus on strategic growth, financial planning, and high-quality content production.",
    image: "/assets/person/subhash.PNG",
  },
  {
    name: "Akshat Dev Manatwal",
    role: "Co-Founder • Director • Creative Producer",
    bio: "A creative producer and visionary storyteller, Akshat Dev Manatwal leads content development and creative execution at Eleventh Street Production House, ensuring impactful and engaging visual storytelling across all projects.",
    image: "/assets/person/akshat.PNG",
  },
  {
    name: "Yatik Jangid",
    role: "Senior Line Producer & Location Manager",
    bio: "An experienced production professional specializing in logistics, budgeting, and location management, ensuring smooth, efficient, and well-coordinated shoots across all projects.",
    image: "/assets/person/yatik.PNG",
  },
  {
    name: "Jagrit Agarwal",
    role: "Show Curator • Founder, Tribaan Entertainment",
    bio: "Dynamic Show Curator and the Founder of Tribaan Entertainment, bringing strong expertise in live entertainment, concert curation, and audience-driven experiences.",
    image: "/assets/person/jarit.PNG",
  },
  {
    name: "Abhimany Singh Choudhary",
    role: "Director of Photography (DOP) & Visual Content Creator",
    bio: "A passionate cinematographer and visual storyteller, He specializes in films, commercials, music videos, and social media reels. His creative approach and technical expertise help transform ideas into captivating visual experiences",
    image: "/assets/person/Abhinay.png",
  }
];

const values = [
  {
    title: "Creative Excellence",
    description:
      "We strive for the highest standards in every project, pushing creative boundaries to deliver exceptional results.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964424/yncgcqygmw7b30scbs8s.png",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe the best work comes from collaboration, working closely with clients and team members.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964398/mcevrzbunlecaldeklfo.png",
  },
  {
    title: "Technical Innovation",
    description:
      "We stay at the forefront of technology, using the latest tools to bring visions to life.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964412/gochwma9vhfszve5miw7.png",
  },
  {
    title: "Authentic Storytelling",
    description:
      "Every story matters. We focus on authentic narratives that connect with audiences.",
    image:
      "https://res.cloudinary.com/dljd0e6e4/image/upload/v1751964393/anitco1gznatp6crqd8u.png",
  },
];

export const AboutPage: React.FC = () => {
  return (
    <AboutPageContainer>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About 11th Street Production House
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming creative visions into cinematic realities through
            storytelling, technical excellence, and unwavering commitment to
            quality
          </PageSubtitle>
        </Container>
      </HeroSection>

      <StorySection>
        <Container>
          <StoryGrid>
            <StoryContent
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                11th Street Production House is a full-service production
                company dedicated to creating exceptional visual content across
                films, documentaries, commercials, and digital media. We
                specialize in end-to-end production services, from
                pre-production planning to final delivery.
              </p>
              <p>
                With expertise in line production, location management, creative
                direction, and post-production, we've become the trusted partner
                for filmmakers, brands, and content creators across the region.
                Our team of seasoned professionals brings technical excellence
                and creative vision to every project.
              </p>
              <p>
                We believe in the power of storytelling and the magic of cinema.
                Every project is an opportunity to innovate, collaborate, and
                create something truly remarkable. From concept to completion,
                we're committed to exceeding expectations.
              </p>
            </StoryContent>

            <StoryImage
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </StoryGrid>
        </Container>
      </StorySection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="icon">
                  <stat.icon />
                </div>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <TeamSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </SectionTitle>

          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  className="image object-fill"
                  src={member.image}
                />
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p className="bio">{member.bio}</p>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>

      <ValuesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </SectionTitle>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="value-image"
                  style={{ backgroundImage: `url(${value.image})` }}
                />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>
    </AboutPageContainer>
  );
};
