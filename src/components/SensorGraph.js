import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Paper, Typography } from "@mui/material";

const SensorGraph = ({ title, data, dataKey }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke="#1976d2" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </motion.div>
  );
};

export default SensorGraph;
