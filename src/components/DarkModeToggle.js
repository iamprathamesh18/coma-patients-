import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Patient Monitoring Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mr: 1 }}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default DarkModeToggle;
