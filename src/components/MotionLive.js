import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig"; // Import Firebase functions
import { Card, CardContent, Typography } from "@mui/material";

const MotionLive = () => {
  const [motionData, setMotionData] = useState([]);

  useEffect(() => {
    const motionRef = ref(database, "sensors/movementEvents");

    onValue(motionRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Convert object values to an array
        const motionArray = Object.values(data);
        setMotionData(motionArray);
      } else {
        setMotionData([]);
      }
    });

    return () => {};
  }, []);

  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", margin: "auto", mt: 3 }}>
      <CardContent>
        <Typography variant="h5">🕵️‍♂️ Motion Detected</Typography>
        {motionData.length > 0 ? (
          motionData.map((motion, index) => (
            <Typography key={index} variant="h6" color="primary">
              {motion} {/* Assuming motion contains readable text */}
            </Typography>
          ))
        ) : (
          <Typography variant="h6">No Movement</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MotionLive;
