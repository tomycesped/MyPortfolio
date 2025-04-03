import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleColor = useColorModeValue("black", "white");

  return (
    <Classic
      toggled={colorMode === "dark"}
      onToggle={toggleColorMode}
      duration={750}
      style={{
        fontSize: "1.9rem",
        color: toggleColor,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
      }}
    />
  );
};