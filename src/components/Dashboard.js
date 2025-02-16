import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import Navbar from "./Navbar";
import SensorCard from "./SensorCard";
import HeartRateChart from "./HeartRateChart";
import AlertNotification from "./AlertNotification";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([
    { title: "Heart Rate", value: 75, unit: "BPM", status: "Normal" },
    { title: "Temperature", value: 37.2, unit: "°C", status: "Normal" },
    { title: "Motion Detection", value: "No Motion", unit: "", status: "Normal" },
    { title: "Eye Movement", value: "Active", unit: "", status: "Normal" },
  ]);

  const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

  useEffect(() => {
    // Simulating sensor value updates every 5 seconds
    const interval = setInterval(() => {
      const newHeartRate = Math.floor(Math.random() * (130 - 60 + 1)) + 60; // Random BPM between 60-130
      const newTemperature = (36 + Math.random() * 4).toFixed(1); // Between 36°C and 40°C

      let alertMessage = "";
      let alertSeverity = "info";

      if (newHeartRate > 120) {
        alertMessage = `Critical Heart Rate Detected: ${newHeartRate} BPM!`;
        alertSeverity = "error";
      } else if (newTemperature > 39) {
        alertMessage = `High Temperature Alert: ${newTemperature}°C!`;
        alertSeverity = "warning";
      }

      if (alertMessage) {
        setAlert({ open: true, message: alertMessage, severity: alertSeverity });
      }

      setSensorData([
        { title: "Heart Rate", value: newHeartRate, unit: "BPM", status: newHeartRate > 120 ? "Critical" : "Normal" },
        { title: "Temperature", value: newTemperature, unit: "°C", status: newTemperature > 39 ? "High" : "Normal" },
        { title: "Motion Detection", value: "No Motion", unit: "", status: "Normal" },
        { title: "Eye Movement", value: "Active", unit: "", status: "Normal" },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <DashboardLayout>
        <h2>Patient Monitoring Dashboard</h2>
        <Grid container spacing={3}>
          {sensorData.map((sensor, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SensorCard {...sensor} />
            </Grid>
          ))}
        </Grid>

        {/* Graph Section */}
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <HeartRateChart />
          </Grid>
        </Grid>

        {/* Alert Component */}
        <AlertNotification open={alert.open} message={alert.message} severity={alert.severity} onClose={() => setAlert({ ...alert, open: false })} />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
