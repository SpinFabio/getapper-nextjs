import { createTheme, responsiveFontSizes } from "@mui/material";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#B94343",
      },
      secondary: {
        main: "#6291A8",
      },
      text: {
        primary: "#373f49",
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      body1: {
        color: "#373f49",
      },
      h1: {
        color: "#373f49",
        fontSize: 48,
        textTransform: "uppercase",
      },
      h3: {
        color: "#373f49",
        fontSize: 48,
        textTransform: "uppercase",
      },
      h6: {
        color: "#373f49",
        fontSize: 48,
        weight: 400,
        lineHeight: 1.4,
      },
    },
  }),
);
