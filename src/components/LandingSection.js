import React from "react";
import { css, keyframes } from "@emotion/react";
import { 
  Image, 
  Text, 
  VStack, 
  Flex, 
  Button, 
  HStack, 
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import tom from "../images/tomi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faProjectDiagram, faAward } from "@fortawesome/free-solid-svg-icons";

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInAnimation = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LandingSection = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const profileBorderColor = useColorModeValue("gray.300", "gray.600");
  const profileShadow = useColorModeValue(
    "0 4px 20px rgba(0, 0, 0, 0.1)",
    "0 4px 20px rgba(0, 0, 0, 0.3)"
  );
  const secondaryBorderColor = useColorModeValue("gray.400", "gray.500");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleColor = useColorModeValue("gray.800", "white");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");
  const buttonBg = useColorModeValue("gray.800", "gray.700");
  const buttonHoverBg = useColorModeValue("gray.700", "gray.600");
  const outlineButtonBorder = useColorModeValue("gray.800", "gray.400");
  const outlineButtonColor = useColorModeValue("gray.800", "gray.200");
  
  const bgGradientLight = "linear(to-r, #3B82F6, #10B981, rgb(243, 235, 24))";
  const bgGradientDark = "linear(to-r, #A78BFA, #F472B6)";
  
  const radialBgLight = "radial-gradient(circle at 20% 30%, rgba(10, 25, 156, 0.36) 0%, transparent 30%), radial-gradient(circle at 80% 60%, rgba(17, 35, 199, 0.27) 0%, transparent 20%)";
  const radialBgDark = "radial-gradient(circle at 20% 30%, rgba(49, 90, 214, 0.53) 0%, transparent 30%), radial-gradient(circle at 80% 60%, rgba(43, 89, 227, 0.35) 0%, transparent 20%)";

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const pulse = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  return (
    <FullScreenSection
      width="100%"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        id="home-section"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={useColorModeValue(radialBgLight, radialBgDark)}
        pointerEvents="none"
      />

      <Flex
        width="100%"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 8, md: 16 }}
        position="relative"
        px={6}
        py="80px"
      >
        <Box
          position="relative"
          css={css`
            animation: ${floatAnimation} 5s ease-in-out infinite;
            @media (prefers-reduced-motion: reduce) {
              animation: none;
            }
          `}
          _hover={{ transform: "scale(1.03)" }}
          transition="transform 0.3s ease"
        >
          <Image
            boxSize={{ base: "180px", md: "240px" }}
            objectFit="cover"
            borderRadius="full"
            border="4px solid"
            borderColor={profileBorderColor}
            boxShadow={profileShadow}
            src={tom}
            alt="Profile"
          />
          <Box
            position="absolute"
            inset={0}
            borderRadius="full"
            border="2px"
            borderColor={secondaryBorderColor}
            opacity={0.6}
          />
        </Box>
        <VStack 
          spacing={6}
          align={{ base: "center", md: "start" }}
          textAlign={{ base: "center", md: "left" }}
          css={css`
            & > * {
              animation: ${fadeInAnimation} 0.8s ease-out forwards;
              opacity: 0;
            }
            & > *:nth-child(1) { animation-delay: 0.1s; }
            & > *:nth-child(2) { animation-delay: 0.3s; }
            & > *:nth-child(3) { animation-delay: 0.5s; }
            & > *:nth-child(4) { animation-delay: 0.7s; }
          `}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color={textColor}
            fontWeight="semibold"
            letterSpacing="1px"
          >
            Hola, I'm Thomas!
          </Text>

          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            lineHeight="1.1"
            color={titleColor}
          >
            A{' '}
            <Box 
              as="span"
              display="inline-block"
              bgGradient={useColorModeValue(bgGradientLight, bgGradientDark)}
              bgClip="text"
              css={{
                animation: `${pulse} 5s ease infinite`,
                backgroundSize: '200% 200%'
              }}
            >
              frontend developer&nbsp;
            </Box>
            <Box as="br" display={{ base: "none", md: "block" }} />
            specialized in React
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={subtitleColor}
            maxW={{ md: "90%" }}
          >
            I create modern web experiences with intuitive interfaces and efficient code.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", md: "start" }}>
            <Button
              as="a"
              href="/TOM_CVENG.pdf"
              download
              leftIcon={<FontAwesomeIcon icon={faFileDownload} />}
              size="lg"
              bg={buttonBg}
              borderRadius="full"
              color="white"
              _hover={{ 
                bg: buttonHoverBg,
                transform: "translateY(-2px)" 
              }}
              transition="all 0.2s"
            >
              Download CV
            </Button>

            <Button
              onClick={handleClick("projects")}
              leftIcon={<FontAwesomeIcon icon={faProjectDiagram} />}
              size="lg"
              variant="outline"
              bg={useColorModeValue("white", "gray.900")}
              borderColor={outlineButtonBorder}
              borderRadius="full"
              color={outlineButtonColor}
              _hover={{ 
                bg: useColorModeValue("gray.800", "gray.800"),
                color: "white",
                transform: "translateY(-2px)" 
              }}
              transition="all 0.2s"
            >
              View Projects
            </Button>

            <Button
              onClick={handleClick("certificates")}
              leftIcon={<FontAwesomeIcon icon={faAward} />}
              size="lg"
              variant="outline"
              borderColor={outlineButtonBorder}
              color={outlineButtonColor}
              bg={useColorModeValue("white", "gray.900")}
              borderRadius="full"
              _hover={{ 
                bg: useColorModeValue("gray.800", "gray.800"),
                color: "white",
                transform: "translateY(-2px)" 
              }}
              transition="all 0.2s"
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