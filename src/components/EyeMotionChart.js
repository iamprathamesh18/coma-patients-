import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

const EyeMotionChart = () => {
  // Example data (percentage of time spent in each state)
  const data = [
    { name: "Open", value: 60, color: "#4caf50" },  // Green
    { name: "Closed", value: 25, color: "#f44336" }, // Red
    { name: "Blinking", value: 15, color: "#ff9800" }, // Orange
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      <Typography variant="h6" gutterBottom>Eye Motion Detection</Typography>
      
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  );
};

export default EyeMotionChart;
