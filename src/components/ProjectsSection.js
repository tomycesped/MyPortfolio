import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "Lazy Foxes! 🦊",
    description:
      "Lazy Foxes is an app where you can add fox photos that load progressively with Lazy Loading, providing a fast and smooth experience.",
    getImageSrc: () => require("../images/foxes.png"),
    link: "https://lazyfoxes.vercel.app/",
    repoLink:"https://github.com/tomycesped/Foxes"
  },
  {
    title: "TO-DO List 📝",
    description:
      "TO-DO List is an app that stores your tasks using local storage. It features custom hooks for a smooth, efficient user experience, allowing you to manage and track your tasks effortlessly.",
    getImageSrc: () => require("../images/todo.png"),
    link: "https://tomycesped.github.io/TodoList/",
    repoLink:"https://github.com/tomycesped/TodoList"
  },
  {
    title: "Async Landing Page ⭐️",
    description:
      "Async Landing Page is a fan-driven site showcasing the latest videos of Ethel Cain using the YouTube API. With asynchronous loading, the page dynamically fetches and displays her newest content for an engaging, real-time experience.",
    getImageSrc: () => require("../images/ethel.png"),
    link: "https://tomycesped.github.io/async-landing/",
    repoLink:"https://github.com/tomycesped/async-landing"
  },
  {
    title: "Shopi (desktop only) 🛒",
    description:
      "Shopi is a virtual store app where I explored the potential of frontend development and implemented various features using TailWindCSS. This project reflects my journey in creating a functional and visually appealing online experience.",
    getImageSrc: () => require("../images/shopi.png"),
    link: "https://tomycesped.github.io/Shopi/",
    repoLink: "https://github.com/tomycesped/Shopi"
  },
];

const ProjectsSection = () => {
  // Responsive grid columns
  const gridColumns = useBreakpointValue({ 
    base: "1fr", 
    sm: "repeat(2, 1fr)", 
    md: "repeat(2, 1fr)", 
    lg: "repeat(2, 1fr)", 
  });

  
  const headingSize = useBreakpointValue({ 
    base: "xl", 
    sm: "2xl", 
    md: "3xl", 
    lg: "4xl", 
  });

  // Responsive grid gap
  const gridGap = useBreakpointValue({ 
    base: 4,
    sm: 6,
    md: 8, 
    lg: 8, 
  });

  return (
    <FullScreenSection
      backgroundColor="#A57C5B"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading 
        as="h1" 
        id="projects-section" 
        style={{ fontFamily: "'Outfit', sans-serif", cursor:"default" }}
        fontSize={headingSize} 
      >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={gridColumns}
        gridGap={gridGap}
        width="100%"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
            repoLink={project.repoLink}
          />
        ))}
      </Box>
      <Heading 
        as="h1" 
        id="projects-section" 
        style={{ fontFamily: "'Outfit', sans-serif", cursor:"default"}}
        fontSize={headingSize} 
      >
        See more projects on my{" "}
        <a target="_blank" rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "underline"}} 
          href="https://www.github.com/tomycesped"
        >
          GitHub
        </a>
        &nbsp;
        <FontAwesomeIcon icon={faGithub} size="1x" color="black" />
      </Heading>
    </FullScreenSection>
  );
};

export default ProjectsSection;