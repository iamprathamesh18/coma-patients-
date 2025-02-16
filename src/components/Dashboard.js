import React from "react";
import DashboardLayout from "./DashboardLayout";
import Navbar from "./Navbar";
import SensorCard from "./SensorCard";
import HeartRateChart from "./HeartRateChart";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const sensorData = [
    { title: "Heart Rate", value: 75, unit: "BPM", status: "Normal" },
    { title: "Temperature", value: 37.2, unit: "°C", status: "Normal" },
    { title: "Motion Detection", value: "No Motion", unit: "", status: "Normal" },
    { title: "Eye Movement", value: "Active", unit: "", status: "Normal" },
  ];

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

        {/* Add Graph Below */}
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <HeartRateChart />
          </Grid>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
