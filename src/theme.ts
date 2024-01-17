"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#23A6F0",
    },
    secondary: {
      main: "#23856D",
    },
    success: {
      main: "#2DC071",
    },
    grey: {
      50: "#E6E6E6",
      100: "#FAFAFA",
      200: "#ECECEC",
    },
    background: {
      default: "f9f9f9",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      disabled: "#BDBDBD",
    },
    common: {
      white: "#FFFFFF",
      black: "#252B42",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h2: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "50px",
      letterSpacing: "0.2px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "0.1px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: "0.2px",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    h6: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    caption: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.2px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "0.2px",
    },
    button: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
