import { Heading, VStack, Image, Text, Button, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link, repoLink }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      spacing={4}
      align="start"
      p={4}
      bg="black"
      style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
      w="100%"
      minHeight="350px"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Image 
        src={imageSrc} 
        alt={title} 
        borderRadius="md" 
        w="100%" 
        position="absolute" 
        left="0" 
        px="18px"
      />
      
      <Heading 
        size="md" 
        color="white" 
        style={{ fontFamily: "'Outfit', sans-serif", paddingTop: "50%" }}
      >
        {title}
      </Heading>
      
      <Text color="gray.300">{description}</Text>
      
      <Flex
        w="100%"
        justifyContent="center"
        direction="column"
        gap={2}
        flexGrow={1}
      >
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
            <Button
              bg="gray.900"
              color="white"
              rightIcon={<FontAwesomeIcon icon={faCodeBranch} />}
              w="100%"
              _hover={{ bg: "gray.700" }}
            >
              Check Repository
            </Button>
          </a>
        )}

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
            <Button
              bg="gray.900"
              color="white"
              rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              w="100%"
              _hover={{ bg: "gray.700" }}
            >
              Visit Website
            </Button>
          </a>
        )}
      </Flex>
    </VStack>
  );
};

export default Card;