import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Ejemplo de array de proyectos (reemplazá con tus proyectos reales)
const projects = [
  {
    title: "Little Lemon Córdoba 👨🏻‍🍳",
    description:
      '"Little Lemon Córdoba is a fictional restaurant website featuring a responsive landing page with online booking system, interactive menu display, photo gallery, and customer testimonials. The project showcases modern UI design with mobile-first approach and seamless dining experience across all devices."',
    getImageSrc: () => require("../images/lemon.png"),
    link: "littlelemoncordoba.vercel.app",
    repoLink: "https://github.com/tomycesped/Little-Lemon-Cordoba",
  },
  {
    title: "Shopi 🛍",
    description:
      "Shopi is a virtual store app where I explored the potential of frontend development and implemented various features using TailWindCSS. This project reflects my journey in creating a functional and visually appealing online experience.",
    getImageSrc: () => require("../images/shopibien.png"),
    link: "https://tomycesped.github.io/Shopi/",
    repoLink: "https://github.com/tomycesped/Shopi",
  },
  {
    title: "Lazy Foxes! 🦊",
    description:
      "Lazy Foxes is an app where you can add fox photos that load progressively with Lazy Loading, providing a fast and smooth experience.",
    getImageSrc: () => require("../images/foxesbien.png"),
    link: "https://lazyfoxes.vercel.app/",
    repoLink: "https://github.com/tomycesped/Foxes",
  },
  {
    title: "TO-DO List 📝",
    description:
      "TO-DO List is an app that stores your tasks using local storage. It features custom hooks for a smooth, efficient user experience, allowing you to manage and track your tasks effortlessly.",
    getImageSrc: () => require("../images/todobien.png"),
    link: "https://tomycesped.github.io/TodoList/",
    repoLink: "https://github.com/tomycesped/TodoList",
  },
  {
    title: "Async Landing Page ⭐️",
    description:
      "Async Landing Page is a fan-driven site showcasing the latest videos of Ethel Cain using the YouTube API. With asynchronous loading, the page dynamically fetches and displays her newest content for an engaging, real-time experience.",
    getImageSrc: () => require("../images/ethelbien.png"),
    link: "https://tomycesped.github.io/Async-landing/",
    repoLink: "https://github.com/tomycesped/Async-landing",
  },
  {
    title: "More coming soon... ⏳",
    description:
      "Be the first to know! Follow me on Github.",
    getImageSrc: () => require("../images/moresoon.png"),
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const isMobileView = window.innerWidth <= 480;
  const peekProjects = isMobileView ? 1 : 2;

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

  const gridGap = useBreakpointValue({
    base: 4,
    sm: 6,
    md: 8,
    lg: 8,
  });

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + peekProjects, projects.length));
  };

  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <FullScreenSection
      backgroundColor="#E4E4E4"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        id="projects-section"
        as="h1"
        style={{ fontFamily: "'Outfit', sans-serif", cursor: "default" }}
        fontSize={headingSize}
        color="black"
      >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={gridColumns}
        gridGap={gridGap}
        width="100%"
      >
        <TransitionGroup component={null}>
          {projects.slice(0, visibleProjects).map((project) => (
            <CSSTransition
              key={project.title}
              timeout={500}
              classNames="project"
            >
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                link={project.link}
                repoLink={project.repoLink}
                isPartial={false} // Tarjeta completa
              />
            </CSSTransition>
          ))}
          {hasMoreProjects &&
            projects
              .slice(visibleProjects, visibleProjects + peekProjects)
              .map((project) => (
                <CSSTransition
                  key={project.title}
                  timeout={500}
                  classNames="project"
                >
                  <Card
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    link={project.link}
                    repoLink={project.repoLink}
                    isPartial={true} // Tarjeta parcial
                  />
                </CSSTransition>
              ))}
        </TransitionGroup>
      </Box>

      {hasMoreProjects && (
        <Button
          onClick={loadMoreProjects}
          color="black"
          bg="#F5F5F5"
          variant="outline"
          size="lg"
          alignSelf="center"
          borderWidth="2px"
          borderColor="black"
          borderRadius="full"
          _hover={{ bg: "black", color: "white" }}
        >
          Show More
        </Button>
      )}
    </FullScreenSection>
  );
};

export default ProjectsSection;