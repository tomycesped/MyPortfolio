import { useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Heading, VStack, Image, Text, Button, Flex, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = ({ title, description, imageSrc, link, repoLink, profileLink }) => {
  return (
    <Box
    zIndex={3}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      bg="rgba(0, 0, 0, 0.66)"
      _dark={{ bg: "gray.800" }}
      w="100%"
      h="600px"
      minH="500px"
      display="flex"
      flexDirection="column"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
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
          <Box position="absolute" top={0} left={0} right={0} bottom={0} bgGradient="linear(to-b, transparent 60%, black 100%)" />
        </Box>
        
        <Box 
          flex="1" 
          overflowY="auto" 
          w="100%" 
          css={css`
            &::-webkit-scrollbar {
              width: 6px;
            }
            &::-webkit-scrollbar-track {
              background: transparent;
            }
            &::-webkit-scrollbar-thumb {
              background: #2D3748;
              border-radius: 3px;
            }
            &::-webkit-scrollbar-thumb:hover {
              background: #4A5568;
            }
          `}
        >
          <Heading size="md" color="white" fontFamily="'Outfit', sans-serif" mb={2}>
            {title}
          </Heading>
          <Text zIndex={3} color="gray.300" _dark={{ color: "gray.400" }}>
            {description}
          </Text>
        </Box>

        <Flex zIndex={3} w="100%" direction="column" gap={3} flexShrink={0} pt={2}>
          {repoLink && (
            <Button
              as="a"
              href={repoLink}
              target="_blank"
              bg="rgba(255, 0, 0, 0.28)"
              _dark={{ bg: "gray.700" }}
              color="white"
              rightIcon={<FontAwesomeIcon icon={faCodeBranch} />}
              _hover={{ bg: "red", _dark: { bg: "gray.600" } }}
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
              bg="rgba(255, 0, 0, 0.28)"
              _dark={{ bg: "gray.700" }}
              color="white"
              rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              _hover={{ bg: "red", _dark: { bg: "gray.600" } }}
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
              bg="rgba(255, 0, 0, 0.28)"
              _dark={{ bg: "gray.700" }}
              color="white"
              rightIcon={<FontAwesomeIcon icon={faGithub} />}
              _hover={{ bg: "red", _dark: { bg: "gray.600" } }}
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