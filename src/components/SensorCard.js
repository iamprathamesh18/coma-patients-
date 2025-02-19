import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const SensorCard = ({ title, value, status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card sx={{ minWidth: 250, textAlign: "center", p: 2, m: 1 }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h4" color="primary">
            {value}
          </Typography>
          <Chip
            label={status}
            color={status === "Critical" ? "error" : "success"}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SensorCard;
