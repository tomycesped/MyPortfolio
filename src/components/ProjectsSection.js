import React, { useState, useRef } from "react";
import { keyframes } from "@emotion/react";
import { Box, Heading, Button, Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

const projects = [
  {
    title: "Little Lemon Córdoba",
    description: '"Little Lemon Córdoba" is a fictional restaurant website that features online bookings and an attractive landing page. It is designed to be responsive, combining modern aesthetics with seamless functionality for an excellent dining experience across all devices.',
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

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const buttonBorder = useColorModeValue("black", "white");
  const buttonHoverBg = useColorModeValue("black", "white");
  const buttonHoverColor = useColorModeValue("white", "black");
  const radialBgLight = "radial-gradient(circle at 50% 50%, rgba(225, 9, 9, 0.77) 0%, transparent 40%)";
  const radialBgDark = "radial-gradient(circle at 50% 50%, rgba(225, 9, 9, 0.77) 0%, transparent 40%)";

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
    <Box bg={bgColor} w="100%">
      <Box
        ref={projectsRef}
        bg={bgColor}
        overflow="hidden"
        position="relative"
        p={{ base: 6, md: 12 }}
        alignItems="flex-start"
        spacing={8}
        maxW="1400px"
        mx="auto"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={useColorModeValue(radialBgLight, radialBgDark)}
          pointerEvents="none"
        />

        <Heading
          id="projects-section"
          as="h1"
          fontFamily="'Outfit', sans-serif"
          fontSize={headingSize}
          color={textColor}
          mb={8}
          textAlign={{ base: "center", md: "left" }}
          width="100%"
          textDecoration="underline"
          textDecorationColor="rgba(225, 9, 9, 0.77)"
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
              borderColor={buttonBorder}
              color={textColor}
              borderRadius="full"
              _hover={{ 
                bg: buttonHoverBg,
                color: buttonHoverColor
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
              borderColor={buttonBorder}
              color={textColor}
              borderRadius="full"
              _hover={{ 
                bg: buttonHoverBg,
                color: buttonHoverColor
              }}
              px={8}
              py={6}
              fontWeight="semibold"
            >
              Show Less
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectsSection;