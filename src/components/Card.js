import { Heading, VStack, Image, Text, Button, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link, repoLink, isPartial }) => {
  return (
    <VStack
      borderRadius="lg"
      borderBottomRadius={isPartial ? "0" : "lg"}
      boxShadow="md"
      overflow="hidden"
      spacing={4}
      align="start"
      p={4}
      bg="black"
      style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
      w="100%"
      minHeight={isPartial ? "80px" : "350px"} // Altura mínima diferente
      display="flex"
      flexDirection="column"
      position="relative"
      className={isPartial ? "partial-card" : ""}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" w="100%" position="absolute" left="0" px="8px"/>
      
      {!isPartial && (
        <>
        <Heading size="md" color="white" style={{ fontFamily: "'Outfit', sans-serif", paddingTop:"55%" }}>
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
          </Flex>
        </>
      )}
      {isPartial && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="100%"
          background="linear-gradient(to top, #E4E4E4,rgba(228, 228, 228, 0.28))"
        />
      )}
    </VStack>
  );
};

export default Card;