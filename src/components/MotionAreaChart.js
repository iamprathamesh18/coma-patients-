import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";

const MotionAreaChart = () => {
  // Example data (Hand, Leg, and Body Movements over time)
  const data = [
    { time: "00:00", hand: 2, leg: 1, body: 3 },
    { time: "01:00", hand: 3, leg: 2, body: 4 },
    { time: "02:00", hand: 4, leg: 3, body: 5 },
    { time: "03:00", hand: 6, leg: 4, body: 7 },
    { time: "04:00", hand: 5, leg: 3, body: 6 },
    { time: "05:00", hand: 8, leg: 5, body: 9 },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      <Typography variant="h6" gutterBottom>Movement Trends (Hand, Leg, Body)</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="hand" stackId="1" stroke="#1976d2" fill="#1976d2" name="Hand Movements" />
          <Area type="monotone" dataKey="leg" stackId="1" stroke="#ff9800" fill="#ff9800" name="Leg Movements" />
          <Area type="monotone" dataKey="body" stackId="1" stroke="#4caf50" fill="#4caf50" name="Body Movements" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MotionAreaChart;
