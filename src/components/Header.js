import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, useBreakpointValue, IconButton, useDisclosure, Collapse } from "@chakra-ui/react";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoblanco from "../images/logoblanco.png";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/tomycesped",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tomcesped",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/tomcesped",
  },
];

const Header = () => {
  const paddingX = useBreakpointValue({ 
    base: 4, 
    sm: 6,  
    md: 8, 
    lg: 12,  
  });

  const iconSize = useBreakpointValue({ 
    base: "lg",
    sm: "lg",   
    md: "lg",  
    lg: "lg",  
  });

  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      if (isMobile) {
        setTimeout(() => {
          onToggle();
        }, 800); 
      }
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={paddingX}
          py={2}
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="#0D0D0D"
          width="100%"
        >
          <img src={logoblanco} alt="Logo" style={{ height: "40px" }} />

          {!isMobile ? (
            <HStack spacing={6}>
              <Box
                as="button"
                onClick={handleClick("contactme")}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={4}
                py={2}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.600"
                color="white"
                bg="whiteAlpha.500"
                transition="all 0.2s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  borderColor: "gray.400",
                }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                _active={{
                  transform: "translateY(0)",
                  bg: "whiteAlpha.200"
                }}
              >
                Contact me
                <Box as="span" ml={2}>
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                </Box>
              </Box>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size={iconSize} />
                </a>
              ))}
            </HStack>
          ) : (
            <IconButton
              icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
              onClick={onToggle}
              color="white"
              _hover={{
                color:"black",
                bg:"white",
                borderColor: "gray.400",
                transform: "translateY(-1px)"
              }}
              variant="ghost"
              aria-label="Toggle menu"
            />
          )}
        </HStack>

        <Collapse in={isMobile && isOpen} animateOpacity>
          <Box
            px={paddingX}
            pb={4}
            backgroundColor="#0D0D0D"
            borderBottomRadius="lg"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          >
            <VStack
              spacing={4}
              alignItems="center"
            >
              <Box
                as="button"
                onClick={handleClick("contactme")}
                href="/#contact-me"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={4}
                py={2}
                borderRadius="md"
                border="1px solid"
                borderColor="gray.600"
                color="white"
                bg="whiteAlpha.500"
                transition="all 0.2s ease"
                _hover={{
                  bg: "whiteAlpha.300",
                  borderColor: "gray.400",
                }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Contact me
                <Box as="span" ml={2}>
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                </Box>
              </Box>
              <HStack spacing={6}>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size="xl" />
                  </a>
                ))}
              </HStack>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;