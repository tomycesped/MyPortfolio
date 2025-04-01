import React, { useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Box, Heading, useBreakpointValue, List, ListItem, Text, Flex, Image, Button, useColorModeValue } from "@chakra-ui/react";
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
    issuedBy: "EF Standard English Test",
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CertificatesSection = () => {
  const headingSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
  });

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const cardBg = useColorModeValue("rgba(0, 0, 0, 0.68)", "gray.800");
  const descriptionColor = useColorModeValue("gray.200", "gray.300");
  const issuerColor = useColorModeValue("gray.400", "gray.500");
  const radialBg = "radial-gradient(circle at 50% 50%, rgba(31, 210, 189, 0.82) 0%, transparent 40%)";
  const underlineColor = useColorModeValue("rgba(31, 210, 189, 0.82)", "teal.300");

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box bg={bgColor} w="100%">
      <Box 
        position="relative"
        bg={bgColor}
        p={{ base: 6, md: 12 }}
        alignItems="flex-start"
        spacing={8}
        maxW="1400px"
        mx="auto"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={radialBg}
          pointerEvents="none"
        />
        
        <Heading
          as="h1"
          id="certificates-section"
          fontFamily="'Outfit', sans-serif"
          fontSize={headingSize}
          fontWeight="600"
          color={textColor}
          textAlign={{ base: "center", md: "left" }}
          mb={8}
          width="100%"
          textDecoration="underline"
          textDecorationColor={underlineColor}
          textDecorationThickness="2px" 
          textUnderlineOffset="4px"
        >
          Certificates
        </Heading>

        <List spacing={6} width="100%">
          {certificates.map((certificate, index) => (
            <ListItem 
              key={certificate.title}
              css={{
                animation: `${fadeIn} 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Flex
                borderLeft="4px solid"
                borderColor="teal.300"
                pl={4}
                _hover={{ 
                  transform: "translateX(10px)", 
                  transition: "transform 0.2s",
                  boxShadow: "lg"
                }}
                alignItems="center"
                justifyContent="space-between"
                bg={cardBg}
                borderRadius="12px"
                boxShadow="md"
                p={6}
                transition="all 0.3s ease"
              >
                <Box flex="1">
                  <Heading 
                    as="h2" 
                    fontSize="2xl" 
                    mb={2} 
                    fontWeight="600" 
                    color="white"
                  >
                    {certificate.title}
                  </Heading>
                  <Text
                    fontSize="lg"
                    mb={2}
                    color={descriptionColor}
                    noOfLines={useBreakpointValue({ base: expanded[index] ? undefined : 2, md: undefined })}
                  >
                    {certificate.description}
                  </Text>
                  {useBreakpointValue({ base: !expanded[index], md: false }) && (
                    <Button
                      variant="link"
                      color={descriptionColor}
                      textDecoration="underline"
                      onClick={() => toggleExpand(index)}
                      _hover={{ color: "white" }}
                    >
                      Read More...
                    </Button>
                  )}
                  <Text fontSize="md" color={issuerColor} mt={2}>
                    Issued by: {certificate.issuedBy} | Date: {certificate.date}
                  </Text>
                  {certificate.link && (
                    <Button
                      as="a"
                      href={certificate.link}
                      target="_blank"
                      variant="link"
                      color={underlineColor}
                      _hover={{ textDecoration: "underline" }}
                      mt={2}
                      display="inline-block"
                      textDecoration="underline"
                      textDecorationColor={underlineColor}
                      textDecorationThickness="2px" 
                      textUnderlineOffset="3px"
                    >
                      View Certificate
                    </Button>
                  )}
                </Box>
                <Box ml={6}>
                  <Image
                    src={certificate.logo}
                    alt={`${certificate.issuedBy} logo`}
                    boxSize="120px"
                    objectFit="contain"
                    filter="brightness(0) invert(1)"
                  />
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>

        <Heading
          as="h3"
          fontFamily="'Outfit', sans-serif"
          fontSize="2xl"
          fontWeight="600"
          color={textColor}
          mt={8}
          justifySelf="center"
        >
          See more certificates on my{" "}
          <Button
            as="a"
            href="https://www.linkedin.com/in/tomcesped"
            target="_blank"
            fontSize="2xl"
            variant="link"
            color={useColorModeValue("linkedin.500", "linkedin.300")}
            _hover={{ textDecoration: "underline" }}
            rightIcon={<FontAwesomeIcon icon={faLinkedin} />}
          >
            Linkedin
          </Button>
        </Heading>
      </Box>
    </Box>
  );
};

export default CertificatesSection;