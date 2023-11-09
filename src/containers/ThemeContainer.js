import React from "react";

import {
  alpha,
  getContrastRatio,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

export default function ThemeContainer({ dashboard }) {
  const greenBase = "#00ed71";
  const greenMain = alpha(greenBase, 1);

  let darkTheme = createTheme({
    palette: {
      mode: "dark",

      secondary: {
        main: "#00ed71",
      },

      text: {
        primary: "#f0f0f0",
        secondary: "#f700c6",
      },
      green: {
        main: greenMain,
        light: alpha(greenBase, 0.5),
        dark: alpha(greenBase, 0.9),
        contrastText:
          getContrastRatio(greenMain, "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root.Mui-focused": {
              color: "#00ed71",
            },
          },
        },
      },

      MuiTabPanel: {
        styleOverrides: { root: { padding: 0 } },
      },
      MuiTabsIndicatorSpan: {
        styleOverrides: {
          root: {
            backgroundColor: "#f700c6",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: " rgb(31,31,31)",
            background:
              " linear-gradient(135deg, rgba(31,31,31,1) 0%, rgba(18,18,18,1) 72%)",
          },
        },
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  const backgroundStyles = {
    backgroundColor: "#0f0f0f",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={backgroundStyles}>{dashboard}</div>
    </ThemeProvider>
  );
}
