import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Dashboard from "./components/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  // Retrieve the theme preference from localStorage
  const savedTheme = localStorage.getItem("theme") === "dark";
  const [darkMode, setDarkMode] = useState(savedTheme);

  // Toggle Dark Mode and Save in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Define MUI Theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#90caf9" : "#1976d2" },
          secondary: { main: darkMode ? "#f48fb1" : "#d81b60" },
          background: { default: darkMode ? "#121212" : "#f4f4f4" },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
