import React, { useState } from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import logoblanco from "../images/logoblanco.png";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const logoFilter = useColorModeValue("invert(1)","none");

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

  const handleTextClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <Box 
      backgroundColor={bgColor}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <footer style={{ fontFamily: "'Outfit', sans-serif" }}>
        <Flex
          margin="0"
          px="10px"
          color={textColor}
          justifyContent="center"
          alignItems="center"
          width="100%"
          height={16}
        >
          <img 
            src={logoblanco} 
            onClick={handleClick("home")}
            alt="Logo" 
            style={{ 
              cursor:"pointer",
              height: "35px", 
              marginTop: "3px",
              filter: logoFilter 
            }} 
          />
          <p style={{ cursor: "default" }}>&nbsp;was made by&nbsp;</p>
          <p
            style={{
              transform: isClicked ? "scale(1.1) translateY(-5px)" : "scale(1) translateY(0)",
              transition: "transform 0.3s ease", 
              cursor: "pointer",
              color: useColorModeValue("black", "white")
            }}
            onClick={handleTextClick}
          >
            @tomcesped
          </p>
          <p style={{ cursor: "default" }}>&nbsp;• © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;