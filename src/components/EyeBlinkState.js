import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig";
import { Card, CardContent, Typography } from "@mui/material";

const EyeBlinkState = () => {
  const [eyeBlink, setEyeBlink] = useState("");

  useEffect(() => {
    const eyeBlinkRef = ref(database, "sensors/eyeBlink");
    onValue(eyeBlinkRef, (snapshot) => {
      setEyeBlink(snapshot.val());
    });
  }, []);

  return (
    <div className={`sensor-card ${eyeBlink === "Eyes Closed" ? "closed" : "open"}`}>
      <h2>👀 Eye Blink State</h2>
      <p>{eyeBlink || "Loading..."}</p>
    </div>
  );
};

export default EyeBlinkState;
