import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig";
import { Card, CardContent, Typography } from "@mui/material";

const EyeBlinkState = () => {
  const [eyeBlink, setEyeBlink] = useState("");
  const [blinkDetected, setBlinkDetected] = useState(false);

  useEffect(() => {
    const eyeBlinkRef = ref(database, "sensors/eyeBlink");
    const blinkEventsRef = ref(database, "sensors/eyeBlinkEvents");

    // Listen for Eye Blink State (Open/Closed)
    onValue(eyeBlinkRef, (snapshot) => {
      setEyeBlink(snapshot.val());
    });

    // Listen for Blink Events
    onValue(blinkEventsRef, (snapshot) => {
      if (snapshot.exists()) {
        setBlinkDetected(true);
        setTimeout(() => setBlinkDetected(false), 2000); // Show "Blink Detected" for 2 seconds
      }
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", margin: "auto", mt: 3 }}>
      <CardContent>
        <Typography variant="h5">Eye Blink Status</Typography>
        <Typography variant="h4" color={eyeBlink === "Eyes Closed" ? "error" : "primary"}>
          {eyeBlink || "Loading..."}
        </Typography>
        {blinkDetected && (
          <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
            ⚡ Blink Detected!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EyeBlinkState;
