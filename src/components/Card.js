import { Heading, VStack, Image, Text, Button, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link, repoLink }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      spacing={4}
      align="start"
      p={4}
      bg="white"
      style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
      w="100%"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading size="md" color="blackAlpha.900" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
      
      <Flex w="100%" justifyContent="center" justify="space-between" wrap="wrap" gap={2}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ width: "100%", maxWidth: "calc(50% - 4px)", minWidth: "150px" }}>
          <Button variant="ghost" color="blackAlpha.900" rightIcon={<FontAwesomeIcon icon={faArrowRight} />} w="100%">
            Visit Website
          </Button>
        </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" style={{ width: "100%", maxWidth: "calc(50% - 4px)", minWidth: "150px" }}>
            <Button variant="ghost" color="blackAlpha.900" rightIcon={<FontAwesomeIcon icon={faCodeBranch} />} w="100%">
              Check Repository
            </Button>
          </a>
      </Flex>
    </VStack>
  );
};

export default Card;
