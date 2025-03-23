import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleTextClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <Box backgroundColor="#18181b">
      <footer style={{
              fontFamily: "'Outfit', sans-serif"}}>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        ><p>made by</p>&nbsp;
          <p
            style={{
              transform: isClicked ? "scale(1.1) translateY(-5px)" : "scale(1) translateY(0)",
              transition: "transform 0.3s ease", 
              cursor: "pointer",
            }}
            onClick={handleTextClick}
          >
            tomcesped
          </p>&nbsp;<p>• © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
