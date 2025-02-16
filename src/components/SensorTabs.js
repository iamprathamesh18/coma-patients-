import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import LogsAccordion from "./LogsAccordion";
import HeartRateChart from "./HeartRateChart";

const SensorTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 3 }}>
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Heart Rate" />
        <Tab label="Temperature" />
        <Tab label="Motion & Eye Movement" />
        <Tab label="Logs" />
      </Tabs>

      <Box sx={{ mt: 2, p: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography variant="h6">Heart Rate Analysis</Typography>
            <HeartRateChart />
          </Box>
        )}
        {tabIndex === 1 && <Typography variant="h6">Temperature Data Coming Soon...</Typography>}
        {tabIndex === 2 && <Typography variant="h6">Motion & Eye Movement Data Coming Soon...</Typography>}
        {tabIndex === 3 && <LogsAccordion />}
      </Box>
    </Box>
  );
};

export default SensorTabs;
