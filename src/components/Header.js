import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, IconButton, useDisclosure, Collapse, useColorModeValue } from "@chakra-ui/react";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoblanco from "../images/logoblanco.png";
import { ThemeToggle } from "./ThemeToggle.js";

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
  const { isOpen, onToggle, onClose } = useDisclosure();
  const headerRef = useRef();

  const headerBg = useColorModeValue("white", "gray.900");
  const headerBorderColor = useColorModeValue("gray.200", "gray.700");
  const logoFilter = useColorModeValue("invert(1)","none");
  const buttonBg = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("white", "black");
  const buttonHoverBg = useColorModeValue("gray.800", "gray.200");
  const mobileButtonBorder = useColorModeValue("black", "white");

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
      setTimeout(() => {
        onClose();
      }, 800);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      ref={headerRef}
      bg={headerBg}
      borderBottomWidth="1px"
      borderBottomRadius="lg"
      borderBottomColor={headerBorderColor}
      boxShadow={isOpen ? "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)" : "md"}
    >
      <Box margin="0 auto" >
        <HStack
          px={6}
          py={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <img 
            src={logoblanco} 
            alt="Logo" 
            style={{ 
              height: "40px",
              filter: logoFilter 
            }} 
          />

          <HStack spacing={4}>
            <ThemeToggle />
            <IconButton
              icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
              onClick={onToggle}
              border="1px"
              borderColor={mobileButtonBorder}
              color={useColorModeValue("black", "white")}
              _hover={{
                color: useColorModeValue("white", "black"),
                bg: useColorModeValue("black", "white"),
                borderColor: "gray.400",
                transform: "translateY(-1px)"
              }}
              variant="ghost"
              aria-label="Toggle menu"
            />
          </HStack>
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <Box
            px={6}
            pb={4}
            bg={headerBg}
            borderBottomRadius="lg"
            boxShadow="md"
            borderBottomWidth="1px"
            borderBottomColor={headerBorderColor}
          >
            <VStack spacing={4} alignItems="center">
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
                borderColor="currentColor"
                color={buttonColor}
                bg={buttonBg}
                transition="all 0.2s ease"
                _hover={{
                  bg: buttonHoverBg,
                  transform: "translateY(-1px)"
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
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      size="xl" 
                      color={useColorModeValue("black", "white")}
                    />
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