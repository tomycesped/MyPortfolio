import React from "react";
import FullScreenSection from "./FullScreenSection";
import tom from "../images/tom.jpeg";

const LandingSection = () => {
  const handleImageClick = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",   
      });
    }
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#8B5E3C"
    >
      <img
        style={{
          cursor: "pointer",
          height: "200px", 
          width: "200px",    
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid white",
          transition: "transform 0.3s ease, height 0.3s ease, width 0.3s ease",
        }}
        src={tom}
        alt="me"
        onClick={handleImageClick} 
      />
      <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px" }}>
        Hello, I am Thomas!
      </h1>
      <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "30px", textAlign: "center",
    margin: "0"}}>
        A frontend developer specialized in React ⚛️
      </h1>
    </FullScreenSection>
  );
};

export default LandingSection;
