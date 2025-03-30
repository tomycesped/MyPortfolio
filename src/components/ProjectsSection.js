import React, { useState, useRef } from "react";
import FullScreenSection from "./FullScreenSection";
import { css, keyframes } from "@emotion/react";
import { Box, Heading, Button, Flex, useBreakpointValue} from "@chakra-ui/react";
import Card from "./Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

const projects = [
  {
    title: "Little Lemon Córdoba",
    description: '"Little Lemon Córdoba" is a fictional restaurant website featuring a responsive landing page with online booking system, interactive menu display, photo gallery, and customer testimonials. The project showcases modern UI design with mobile-first approach and seamless dining experience across all devices.',
    getImageSrc: () => require("../images/lemon.png"),
    link: "littlelemoncordoba.vercel.app",
    repoLink: "https://github.com/tomycesped/Little-Lemon-Cordoba",
  },
  {
    title: "Shopi",
    description: '"Shopi" is a virtual store app where I explored the potential of frontend development and implemented various features using TailWindCSS. This project reflects my journey in creating a functional and visually appealing online experience.',
    getImageSrc: () => require("../images/shopibien.png"),
    link: "https://tomycesped.github.io/Shopi/",
    repoLink: "https://github.com/tomycesped/Shopi",
  },
  {
    title: "Lazy Foxes!",
    description: '"Lazy Foxes!" is an app where you can add fox photos that load progressively with Lazy Loading, providing a fast and smooth experience.',
    getImageSrc: () => require("../images/foxesbien.png"),
    link: "https://lazyfoxes.vercel.app/",
    repoLink: "https://github.com/tomycesped/Foxes",
  },
  {
    title: "TO-DO List",
    description: '"TO-DO List" is an app that stores your tasks using local storage. It features custom hooks for a smooth, efficient user experience, allowing you to manage and track your tasks effortlessly.',
    getImageSrc: () => require("../images/todobien.png"),
    link: "https://tomycesped.github.io/TodoList/",
    repoLink: "https://github.com/tomycesped/TodoList",
  },
  {
    title: "Async Landing Page",
    description: '"Async Landing Page" is a fan-driven site showcasing the latest videos of Ethel Cain using the YouTube API. With asynchronous loading, the page dynamically fetches and displays her newest content for an engaging, real-time experience.',
    getImageSrc: () => require("../images/ethelbien.png"),
    link: "https://tomycesped.github.io/Async-landing/",
    repoLink: "https://github.com/tomycesped/Async-landing",
  },
  {
    title: "More coming soon...",
    description: "Be the first to know! Follow me on Github",
    getImageSrc: () => require("../images/moresoon.png"),
    profileLink: "https://github.com/tomycesped/"
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const projectsRef = useRef(null);
  const projectsPerLoad = useBreakpointValue({ base: 1, sm: 2 });

  const gridColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)",
  });

  const headingSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
  });

  const gridGap = useBreakpointValue({
    base: 6,
    md: 8,
    lg: 10,
  });

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + projectsPerLoad, projects.length));
  };

  const resetProjects = () => {
    setVisibleProjects(2);
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const hasMoreProjects = visibleProjects < projects.length;
  const showAllProjects = visibleProjects === projects.length;

  return (
    <Box
      ref={projectsRef}
       bg="gray.50" 
       _dark={{ bg: "gray.900" }}
       overflow="hidden"
       position="relative"
       >
        <Box
  position="absolute"
  top={0}
  left={0}
  right={0}
  bottom={0}
  bgImage="radial-gradient(circle at 50% 50%, rgba(225, 9, 9, 0.77) 0%, transparent 40%), 
          radial-gradient(circle at 90% 70%, rgba(150, 150, 150, 0.1) 0%, transparent 50%)"
  _dark={{
    bgImage: "radial-gradient(circle at 80% 30%, rgba(100, 100, 100, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(75, 75, 75, 0.1) 0%, transparent 50%)"
  }}
  pointerEvents="none"
/>
      <FullScreenSection
        p={{ base: 6, md: 12 }}
        alignItems="flex-start"
        spacing={8}
        maxW="1400px"
        mx="auto"
      >
        <Heading
          id="projects-section"
          as="h1"
          fontFamily="'Outfit', sans-serif"
          fontSize={headingSize}
          color="black"
          _dark={{ color: "white" }}
          mb={8}
          textAlign={{ base: "center", md: "left" }}
          width="100%"
          textDecoration="underline"
  textDecorationColor="red"
  textDecorationThickness="2px" 
  textUnderlineOffset="4px"
        >
          Featured Projects
        </Heading>
        
        <Box 
          display="grid" 
          gridTemplateColumns={gridColumns} 
          gap={gridGap} 
          width="100%"
          css={{
            "& > *": {
              animation: `${fadeIn} 0.5s ease-out forwards`,
            }
          }}
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
                  profileLink={project.profileLink}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Box>

        <Flex justifyContent="center" width="100%" mt={8} gap={4}>
          {hasMoreProjects && (
            <Button
              onClick={loadMoreProjects}
              size="lg"
              boxShadow="lg"
              variant="outline"
              borderWidth="2px"
              borderColor="black"
              _dark={{ borderColor: "white", color: "white" }}
              borderRadius="full"
              _hover={{ 
                bg: "black",
                color: "white",
                _dark: { bg: "white", color: "black" }
              }}
              px={8}
              py={6}
              fontWeight="semibold"
            >
              Show More
            </Button>
          )}
          {showAllProjects && (
            <Button
              onClick={resetProjects}
              size="lg"
              boxShadow="lg"
              variant="outline"
              borderWidth="2px"
              borderColor="black"
              _dark={{ borderColor: "white", color: "white" }}
              borderRadius="full"
              _hover={{ 
                bg: "black",
                color: "white",
                _dark: { bg: "white", color: "black" }
              }}
              px={8}
              py={6}
              fontWeight="semibold"
            >
              Show Less
            </Button>
          )}
        </Flex>
      </FullScreenSection>
    </Box>
  );
};

export default ProjectsSection;