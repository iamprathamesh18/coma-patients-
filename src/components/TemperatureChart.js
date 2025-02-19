import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TemperatureChart = () => {
  const [temperature, setTemperature] = useState(36.5);
  const [tempHistory, setTempHistory] = useState([]);

  // Simulate changing temperature every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = (35 + Math.random() * 7).toFixed(1); // Random temp between 35°C and 42°C
      setTemperature(parseFloat(newTemp));

      // Update history (Keep last 10 readings)
      setTempHistory((prev) => {
        const newHistory = [...prev, { time: new Date().toLocaleTimeString(), temp: parseFloat(newTemp) }];
        return newHistory.slice(-10);
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Gauge Chart Data
  const gaugeData = [{ value: temperature, fill: temperature < 37 ? "#28a745" : temperature < 39 ? "#ffc107" : "#dc3545" }];

  return (
    <div className="p-4">
      {/* Gauge Chart */}
      <h2 className="text-xl font-semibold text-center">Temperature Gauge</h2>
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart innerRadius="50%" outerRadius="100%" barSize={30} data={gaugeData} startAngle={180} endAngle={0}>
          <RadialBar minAngle={15} clockWise dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-center text-lg font-bold">{temperature}°C</p>

      {/* Line Chart */}
      <h2 className="text-xl font-semibold text-center mt-4">Temperature Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={tempHistory}>
          <XAxis dataKey="time" />
          <YAxis domain={[35, 42]} />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
