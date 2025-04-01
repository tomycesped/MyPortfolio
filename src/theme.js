import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true
};

const colors = {
  brand: {
    500: "#3a86ff",
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "gray.800" : "white",
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      transition: "background-color 0.3s ease",
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;