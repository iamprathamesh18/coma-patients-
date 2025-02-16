import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const SensorCard = ({ title, value, status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ minWidth: 250, textAlign: "center", p: 2, m: 1 }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", my: 1 }}>
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
