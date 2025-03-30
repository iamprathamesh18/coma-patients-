import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firebaseConfig"; // Ensure this file contains your Firebase configuration
import { Card, CardContent } from "@/components/ui/card";

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const heartRateRef = ref(db, "heartRate");

    const unsubscribe = onValue(heartRateRef, (snapshot) => {
      if (snapshot.exists()) {
        setHeartRate(snapshot.val());
      } else {
        setHeartRate("No data");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="p-6 text-center shadow-lg w-64">
        <CardContent>
          <h2 className="text-xl font-bold">Heart Rate</h2>
          <p className="text-2xl mt-2 font-semibold">{heartRate} BPM</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeartRateMonitor;
