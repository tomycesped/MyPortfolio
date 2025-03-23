import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useBreakpointValue, List, ListItem, Text, Flex, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const certificates = [
  {
    title: "Advanced React",
    description:
      "Advanced React course on custom hooks, JSX, state management with React Context, API integration, and component testing. Focused on patterns like Higher Order Components and Render Props for building efficient web apps.",
    issuedBy: "Coursera and Meta",
    date: "Mar 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/GKX8S0O79I1X",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    title: "Professional Software Development Fundamentals",
    description:
      "Covers programming basics, language structures, and core concepts, practices, and terminology essential for a career in software development.",
    issuedBy: "Linkedin Learning and Microsoft",
    date: "Jan 2025",
    link: "https://www.linkedin.com/learning/certificates/3eb75344859fb43d362684208097f2884325e40f0630d0dd38a47d7fd3ffbc39",
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/592/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
  },
  {
    title: "C2 English",
    description:
      "C2 Proficient English certification, showcasing advanced skills in fluent communication, complex writing, and deep understanding of formal and informal language.",
    issuedBy: "Frontend Masters",
    date: "May 2024",
    link: "https://cert.efset.org/BA4a6T",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/EF_Education_First_Logo.png",
  },
  {
    title: "Learning Path: JavaScript Developer",
    description:
      "Master JavaScript and modern tools like npm, TailwindCSS, TypeScript, React, and Vite. Learn async programming, build scalable web apps, and develop practical projects.",
    issuedBy: "Platzi",
    date: "Nov 2024 - Today",
    logo: "https://static.platzi.com/static/images/footer/logo.png",
  },
];

const CertificatesSection = () => {
  const headingSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
  });

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <FullScreenSection
      backgroundColor="#5D4037"
      p={8}
      alignItems="flex-start"
      spacing={8}
      style={{ fontFamily: "'Outfit', sans-serif", width: "100%" }}
    >
      <Heading
        as="h1"
        id="certificates-section"
        style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
        fontSize={headingSize}
        fontWeight="600"
        color="#FFFFFF"
      >
        Certificates
      </Heading>
      <List spacing={6} width="100%">
        {certificates.map((certificate, index) => (
          <ListItem key={certificate.title}>
            <Flex
              borderLeft="4px solid #FFFFFF"
              pl={4}
              _hover={{ transform: "translateX(10px)", transition: "transform 0.2s" }}
              alignItems="center"
              justifyContent="space-between"
              backgroundColor="rgba(255, 255, 255, 0.1)"
              borderRadius="12px"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              p={4}
            >
              <Box flex="1">
                <Heading as="h2" fontSize="2xl" mb={2} fontWeight="600" color="#FFFFFF">
                  {certificate.title}
                </Heading>
                <Text
                  fontSize="lg"
                  mb={2}
                  color="#E0E0E0"
                  noOfLines={useBreakpointValue({ base: expanded[index] ? undefined : 2, md: undefined })}
                >
                  {certificate.description}
                </Text>
                {useBreakpointValue({ base: !expanded[index], md: false }) && (
                  <Button
                    variant="link"
                    style={{ color: "#F5F5F5", textDecoration: "underline" }}
                    onClick={() => toggleExpand(index)}
                  >
                    Read More...
                  </Button>
                )}
                <Text fontSize="md" color="#BDBDBD">
                  Issued by: {certificate.issuedBy} | Date: {certificate.date}
                </Text>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#F5F5F5", textDecoration: "underline" }}
                  >
                    View Certificate
                  </a>
                )}
              </Box>
              <Box ml={4}>
                <Image
                  src={certificate.logo}
                  alt={`${certificate.issuedBy} logo`}
                  boxSize="120px"
                  objectFit="contain"
                />
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Heading
        as="h1"
        id="certificates-section"
        style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
        fontSize={headingSize}
        fontWeight="600"
        color="#FFFFFF"
      >
        See more certificates on my{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#005CCA", textDecoration: "underline" }}
          href="https://www.linkedin.com/in/tomcesped"
        >
          Linkedin
        </a>
        &nbsp;
        <FontAwesomeIcon icon={faLinkedin} size="1x" color="#005CCA" />
      </Heading>
    </FullScreenSection>
  );
};

export default CertificatesSection;