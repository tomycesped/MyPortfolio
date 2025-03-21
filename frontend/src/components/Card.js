import { Heading, VStack, Image, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      spacing={4}
      align="start"
      p={4}
      bg="white"
      style={{ fontFamily: "'Outfit', sans-serif"}}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading size="md" color="blackAlpha.900" style={{ fontFamily: "'Outfit', sans-serif"}}>{title}</Heading>
      <Text color="gray.600">{description}</Text>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" color="blackAlpha.900" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
        Check it out
      </Button>
      </a>
    </VStack>
  );
};

export default Card;
