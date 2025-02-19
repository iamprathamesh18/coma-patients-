import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";

const MotionBarChart = () => {
  // Example data (number of movement detections per hour)
  const data = [
    { time: "00:00", movements: 2 },
    { time: "01:00", movements: 5 },
    { time: "02:00", movements: 3 },
    { time: "03:00", movements: 7 },
    { time: "04:00", movements: 6 },
    { time: "05:00", movements: 8 },
    { time: "06:00", movements: 10 },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      <Typography variant="h6" gutterBottom>Movement Detection Per Hour</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="movements" fill="#1976d2" name="Movements per Hour" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MotionBarChart;
