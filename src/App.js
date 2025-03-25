import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemeProvider as BaseUIThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  // Set the default theme to "dark" if none is found in localStorage
  const savedTheme = localStorage.getItem("theme");
  const initialTheme =
    savedTheme && (savedTheme === "light" || savedTheme === "dark")
      ? savedTheme
      : "dark";

  const [theme, setTheme] = useState(initialTheme);
  const useCursor = settings.useCustomCursor;

  // Make sure we use the correct theme object
  const currentTheme = themes[theme] || themes.dark;

  // Create a baseui theme with safe defaults
  const baseUITheme = createTheme({
    ...lightThemePrimitives,
    colors: {
      primary: currentTheme.accentColor,
      accent: currentTheme.accentBright,
      background: currentTheme.body,
      backgroundSecondary: currentTheme.projectCard,
      contentPrimary: currentTheme.text,
      contentSecondary: currentTheme.secondaryText,
    },
  });

  // Function to handle theme changes
  const handleThemeChange = (newTheme) => {
    if (newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme);
    }
  };

  return (
    <BaseUIThemeProvider theme={baseUITheme}>
      <StyledThemeProvider theme={currentTheme}>
        <>
          <GlobalStyles />
          <div>
            {useCursor ? (
              <CursorProvider
                color={currentTheme.secondaryText}
                ringSize={25}
                transitionTime={75}
              >
                <Main theme={currentTheme} setTheme={handleThemeChange} />
              </CursorProvider>
            ) : (
              <Main theme={currentTheme} setTheme={handleThemeChange} />
            )}
          </div>
        </>
      </StyledThemeProvider>
    </BaseUIThemeProvider>
  );
}

export default App;
