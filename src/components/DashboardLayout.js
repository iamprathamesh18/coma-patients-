import React from "react";
import { Container, Grid, Paper } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardLayout;
