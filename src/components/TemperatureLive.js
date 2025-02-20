import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig"; // Import Firebase functions
import { Card, CardContent, Typography } from "@mui/material";

const TemperatureLive = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // Reference to the temperature data in Firebase
    const tempRef = ref(database, "sensors/temperature"); // Change this path based on your Firebase structure

    // Fetch data in real-time
    onValue(tempRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data); // Update state with live data
    });

    // Cleanup listener when the component unmounts
    return () => {};
  }, []);

  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", margin: "auto", mt: 3 }}>
      <CardContent>
        <Typography variant="h5">🌡️ Temperature</Typography>
        <Typography variant="h4" color="primary">
          {temperature !== null ? `${temperature}°C` : "Loading..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TemperatureLive;
