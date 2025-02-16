import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { time: "10:00", bpm: 72 },
  { time: "10:10", bpm: 74 },
  { time: "10:20", bpm: 76 },
  { time: "10:30", bpm: 78 },
  { time: "10:40", bpm: 75 },
  { time: "10:50", bpm: 80 },
];

const HeartRateChart = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          Heart Rate Trend (BPM)
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[60, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="bpm" stroke="#1976d2" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default HeartRateChart;
