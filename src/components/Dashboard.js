import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import Navbar from "./Navbar";
import SensorCard from "./SensorCard";
import SensorTabs from "./SensorTabs";
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
    const interval = setInterval(() => {
      const newHeartRate = Math.floor(Math.random() * (130 - 60 + 1)) + 60;
      const newTemperature = (36 + Math.random() * 4).toFixed(1);

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

        {/* Tabs Section */}
        <SensorTabs />

        {/* Alert Component */}
        <AlertNotification open={alert.open} message={alert.message} severity={alert.severity} onClose={() => setAlert({ ...alert, open: false })} />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
