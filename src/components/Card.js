import { useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Heading, VStack, Image, Text, Button, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = ({ title, description, imageSrc, link, repoLink, profileLink }) => {
  
  const cardBg = useColorModeValue("rgba(0, 0, 0, 0.66)", "gray.800");
  const textColor = useColorModeValue("gray.300", "gray.400");
  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonHoverBg = useColorModeValue("whiteAlpha.800", "gray.600");
  const buttonColor = useColorModeValue("gray.800", "white");
  const titleColor = useColorModeValue("white", "whiteAlpha.900");
  const overlayGradient = useColorModeValue(
    "linear(to-b, transparent 60%, black 100%)",
    "linear(to-b, transparent 60%, gray.900 100%)"
  );

  return (
    <Box
      zIndex={3} 
      borderLeft="4px solid"
      borderTop="3px solid"
      borderColor="rgba(212, 9, 9, 0.63)"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      bg={cardBg}
      w="100%"
      h="600px"
      minH="500px"
      display="flex"
      flexDirection="column"
      transition="all 0.3s ease"
      _hover={{ 
        transform: "translateY(-5px)", 
        boxShadow: "xl",
        borderColor: "rgba(212, 9, 9, 0.63)"
      }}
      css={{ animation: `${fadeIn} 0.5s ease-out forwards` }}
    >
      <VStack
        spacing={4}
        align="start"
        p={6}
        h="100%"
        overflow="hidden"
      >
        <Box position="relative" w="100%" borderRadius="md" overflow="hidden" flexShrink={0}>
          <Image 
            src={imageSrc} 
            alt={title}
            w="100%"
            objectFit="cover"
          />
          <Box position="absolute" top={0} left={0} right={0} bottom={0} bgGradient={overlayGradient} />
        </Box>
        
        <Box 
          flex="1" 
          overflowY="auto" 
          w="100%"
        >
          <Heading 
            size="md" 
            color={titleColor} 
            fontFamily="'Outfit', sans-serif" 
            textDecoration="underline"
            textDecorationColor="rgba(212, 9, 9, 0.63)"
            textDecorationThickness="2px" 
            textUnderlineOffset="3px" 
            mb={2}
          >
            {title}
          </Heading>
          <Text zIndex={3} color={textColor}>
            {description}
          </Text>
        </Box>

        <Flex zIndex={3} w="100%" direction="column" gap={3} flexShrink={0} pt={2}>
          {repoLink && (
            <Button
              as="a"
              href={repoLink}
              target="_blank"
              bg={buttonBg}
              color={buttonColor}
              rightIcon={<FontAwesomeIcon icon={faCodeBranch} />}
              _hover={{ bg: buttonHoverBg }}
              size="sm"
            >
              Check Repository
            </Button>
          )}

          {link && (
            <Button
              as="a"
              href={link}
              target="_blank"
              bg={buttonBg}
              color={buttonColor}
              rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              _hover={{ bg: buttonHoverBg }}
              size="sm"
            >
              Visit Website
            </Button>
          )}

          {profileLink && (
            <Button
              as="a"
              href={profileLink}
              target="_blank"
              bg={buttonBg}
              color={buttonColor}
              rightIcon={<FontAwesomeIcon icon={faGithub} />}
              _hover={{ bg: buttonHoverBg }}
              size="sm"
            >
              Follow on Github
            </Button>
          )}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;