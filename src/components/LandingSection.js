import React from "react";
import FullScreenSection from "./FullScreenSection";
import tom from "../images/tom.jpeg";
import { Box, Image, Text, VStack, Flex, Button, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faProjectDiagram, faCertificate } from "@fortawesome/free-solid-svg-icons";

const LandingSection = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#F5F5F5" 
      justifyContent="center"
      alignItems="center"
      color="#0D0D0D" 
    >
      <Flex
        direction={{ base: "column", md: "row" }} 
        align="center"
        gap={6} 
      >
        <Image
          h="200px"
          w="200px"
          objectFit="cover"
          borderRadius="full"
          border="3px solid #A1A1A1"
          transition="transform 0.3s ease"
          src={tom}
          alt="me"
          onClick={handleClick}
        />

        <VStack spacing={4} align={{ base: "center", md: "start" }}>
          <Text
            fontSize="18px"
            fontFamily="'Outfit', sans-serif"
            cursor="default"
            onClick={handleClick}
          >
            Hello, I am Thomas!
          </Text>
          <Text
            fontSize="30px"
            textAlign={{ base: "center", md: "left" }}
            cursor="default"
            whiteSpace="pre-line"
            fontFamily="'Outfit', sans-serif"
            margin="0"
            fontWeight="bold"
          >
            A frontend developer{"\n"}specialized in React
          </Text>
          <HStack spacing={3} flexWrap="wrap" justify={{ base: "center", md: "start" }}>
            <Button
              as="a"
              href="/CVENGUPDATED.pdf"
              download="Tomcesped_CV.pdf"
              leftIcon={<FontAwesomeIcon icon={faFileDownload} />}
              bg="#0D0D0D"
              color="white"
              _hover={{ bg: "#1C1C1C" }}
              borderRadius="xl"
            >
              Download CV
            </Button>

            <Button
             onClick={handleClick("projects")} href="/#projects"
              leftIcon={<FontAwesomeIcon icon={faProjectDiagram} />}
              bg="#0D0D0D"
              color="white"
              _hover={{ bg: "#1C1C1C" }}
              borderRadius="xl"
            >
              View Projects
            </Button>

            <Button
              as="a"
              onClick={handleClick("certificates")} 
              href="/#certificates"
              leftIcon={<FontAwesomeIcon icon={faCertificate} />}
              bg="#0D0D0D"
              color="white"
              _hover={{ bg: "#1C1C1C" }}
              borderRadius="xl"
            >
              View Certificates
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </FullScreenSection>
  );
};

export default LandingSection;
