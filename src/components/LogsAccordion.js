import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LogsAccordion = () => {
  const [logs] = useState([
    { timestamp: "2025-02-16 14:00", event: "Heart Rate Normal (72 BPM)" },
    { timestamp: "2025-02-16 14:05", event: "Heart Rate Critical (125 BPM)" },
    { timestamp: "2025-02-16 14:10", event: "Temperature High (39.5°C)" },
    { timestamp: "2025-02-16 14:15", event: "Motion Detected" },
  ]);

  return (
    <Box>
      {logs.map((log, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{log.timestamp}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{log.event}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default LogsAccordion;
