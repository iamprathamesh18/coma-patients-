import React from "react";
import { Card, CardContent, CardHeader, Typography, Chip } from "@mui/material";

const SensorCard = ({ title, value, unit, status }) => {
  return (
    <Card sx={{ minWidth: 275, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h4" color="primary">
          {value} {unit}
        </Typography>
        <Chip
          label={status}
          color={status === "Normal" ? "success" : "error"}
          sx={{ marginTop: 1, fontSize: "1rem" }}
        />
      </CardContent>
    </Card>
  );
};

export default SensorCard;
