import React from "react";
import { Container, Paper } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        {children}
      </Paper>
    </Container>
  );
};

export default DashboardLayout;
