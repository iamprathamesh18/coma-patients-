import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import Navbar from "./Navbar";
import SensorCard from "./SensorCard";
import SensorTabs from "./SensorTabs";
import AlertNotification from "./AlertNotification";
import EyeBlinkState from "./EyeBlinkState"; // ✅ Import Eye Blink Component
import { Grid } from "@mui/material";
import { database, ref, onValue } from "../firebaseConfig"; // Import Firebase

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([
    { title: "Heart Rate", value: 75, unit: "BPM", status: "Normal" },
    { title: "Temperature", value: 37.2, unit: "°C", status: "Normal" },
    { title: "Motion Detection", value: "No Motion", unit: "", status: "Normal" },
  ]);

  const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

  useEffect(() => {
    const heartRateRef = ref(database, "sensors/heartRate");
    const tempRef = ref(database, "sensors/temperature");

    const updateHeartRate = onValue(heartRateRef, (snapshot) => {
      const newHeartRate = snapshot.val();
      setSensorData((prevData) =>
        prevData.map((sensor) =>
          sensor.title === "Heart Rate"
            ? { ...sensor, value: newHeartRate, status: newHeartRate > 120 ? "Critical" : "Normal" }
            : sensor
        )
      );

      if (newHeartRate > 120) {
        setAlert({ open: true, message: `Critical Heart Rate: ${newHeartRate} BPM!`, severity: "error" });
      }
    });

    const updateTemperature = onValue(tempRef, (snapshot) => {
      const newTemperature = snapshot.val();
      setSensorData((prevData) =>
        prevData.map((sensor) =>
          sensor.title === "Temperature"
            ? { ...sensor, value: newTemperature, status: newTemperature > 39 ? "High" : "Normal" }
            : sensor
        )
      );

      if (newTemperature > 39) {
        setAlert({ open: true, message: `High Temperature: ${newTemperature}°C!`, severity: "warning" });
      }
    });

    return () => {
      updateHeartRate();
      updateTemperature();
    };
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

          {/* ✅ Display Eye Blink State */}
          <Grid item xs={12} sm={6} md={3}>
            <EyeBlinkState />
          </Grid>
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
