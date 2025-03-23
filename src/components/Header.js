import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";

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
  const [transform, setTransform] = useState("translateY(0)");
  const prevScrollY = useRef(0);

  const paddingX = useBreakpointValue({ 
    base: 4, 
    sm: 8,  
    md: 12, 
    lg: 16,  
  });

  const iconSize = useBreakpointValue({ 
    base: "2x",
    sm: "2x",   
    md: "2x",  
    lg: "2x",  
  });

  const linkSpacing = useBreakpointValue({ 
    base: 4, 
    sm: 6,  
    md: 8,
    lg: 8,
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setTransform("translateY(-200px)");
      } else {
        setTransform("translateY(0)");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={transform}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#2A1B14"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={paddingX}
          py={4}
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
                style={{ marginRight: index < socials.length - 1 ? "16px" : "0" }} 
              >
                <FontAwesomeIcon icon={social.icon} size={iconSize} />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={linkSpacing} style={{ fontFamily: "'Outfit', sans-serif" }}>
              <a onClick={handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a onClick={handleClick("contactme")} href="/#contact-me">
                Contact me
              </a>
              
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;