import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import { faEnvelope, faHandshake, faIdBadge, faInbox } from "@fortawesome/free-solid-svg-icons";

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
    base: "2x",
    sm: "2x",   
    md: "2x",  
    lg: "2x",  
  });

  const linkSpacing = useBreakpointValue({ 
    base: 3, 
    sm: 4,  
    md: 6,
    lg: 6,
  });

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
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#0D0D0D"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={paddingX}
          py={2}
          spacing={linkSpacing} 
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: index < socials.length - 1 ? "10px" : "0" }} 
              >
                <FontAwesomeIcon icon={social.icon} size={iconSize} />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={linkSpacing} style={{ fontFamily: "'Outfit', sans-serif" }}>
              <a onClick={handleClick("contactme")} href="/#contact-me" alignItems="center">
                Contact me
                <FontAwesomeIcon icon={faEnvelope} size="md" style={{ marginLeft: "7px" }} />
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;