import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import LogsAccordion from "./LogsAccordion";
import HeartRateChart from "./HeartRateChart";
import TemperatureChart from "./TemperatureChart"; 
import EyeMotionChart from "./EyeMotionChart"; 

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
        <Tab label="Eye Motion" />
        <Tab label="Logs" />
      </Tabs>

      <Box sx={{ mt: 2, p: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography variant="h6">Heart Rate Analysis</Typography>
            <HeartRateChart />
          </Box>
        )}
         {tabIndex === 1 && (
          <Box>
            <Typography variant="h6">Temperature Readings</Typography>
            <TemperatureChart />  {/* Added TemperatureChart here */}
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6">Eye motion Readings</Typography>
            <EyeMotionChart />  {/* Added TemperatureChart here */}
          </Box>
        )}
        {tabIndex === 3 && <LogsAccordion />}
      </Box>
    </Box>
  );
};

export default SensorTabs;
