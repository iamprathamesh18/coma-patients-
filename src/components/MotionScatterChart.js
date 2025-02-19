import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";

const MotionScatterChart = () => {
  // Example data (motion intensity at different times)
  const data = [
    { time: 0, intensity: 1 },
    { time: 1, intensity: 3 },
    { time: 2, intensity: 2 },
    { time: 3, intensity: 4 },
    { time: 4, intensity: 3 },
    { time: 5, intensity: 5 },
    { time: 6, intensity: 6 },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      <Typography variant="h6" gutterBottom>Motion Intensity Over Time</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="time" name="Time" unit="h" />
          <YAxis type="number" dataKey="intensity" name="Intensity Level" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Motion Intensity" data={data} fill="#d32f2f" />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MotionScatterChart;
