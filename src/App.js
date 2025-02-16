import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid, IconButton, Box, CssBaseline } from "@mui/material";
import { Favorite, Thermostat, Visibility, DirectionsRun } from "@mui/icons-material";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import Navbar from "./components/Navbar";

function App() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const patientsRef = ref(database, "patients");
        onValue(patientsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const patientList = Object.entries(data).map(([id, patient]) => ({
                    id,
                    ...patient,
                }));
                setPatients(patientList);
            }
        });
    }, []);

    return (
        <>
            <CssBaseline />
            <Navbar />
            

            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: "center",
                    padding: "40px",
                    backgroundImage: "url('https://source.unsplash.com/1600x900/?hospital,health')",
                    backgroundSize: "cover",
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                <Typography variant="h3">Real-Time Patient Monitoring</Typography>
                <Typography variant="h6">Monitor vital signs and get real-time alerts for critical conditions.</Typography>
            </Box>

            {/* Patient Data Section */}
            <Container sx={{ marginTop: "20px" }}>
                <Grid container spacing={3}>
                    {patients.length > 0 ? (
                        patients.map((patient) => (
                            <Grid item xs={12} sm={6} md={4} key={patient.id}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Card sx={{ padding: "15px", boxShadow: 3 }}>
                                        <CardContent>
                                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>{patient.name}</Typography>
                                            <Box display="flex" alignItems="center">
                                                <IconButton><Favorite color="error" /></IconButton>
                                                <Typography>Heart Rate: {patient.heartRate} BPM</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <IconButton><Thermostat color="warning" /></IconButton>
                                                <Typography>Temperature: {patient.temperature}°F</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <IconButton><Visibility color="primary" /></IconButton>
                                                <Typography>Eye Movement: {patient.eyeMovement}</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <IconButton><DirectionsRun color="secondary" /></IconButton>
                                                <Typography>Motion Detected: {patient.motionDetected ? "Yes" : "No"}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))
                    ) : (
                        <Typography>No patient data available.</Typography>
                    )}
                </Grid>
            </Container>

            {/* Patient Data Graph */}
            <Container sx={{ marginTop: "40px", textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                    📊 Health Trends
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={patients.slice(0, 5)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="heartRate" stroke="#ff3333" name="Heart Rate" />
                        <Line type="monotone" dataKey="temperature" stroke="#3366ff" name="Temperature" />
                    </LineChart>
                </ResponsiveContainer>
            </Container>

            {/* Footer */}
            <Box sx={{ textAlign: "center", padding: "20px", backgroundColor: "#1E88E5", color: "white", marginTop: "30px" }}>
                <Typography>© 2025 Patient Monitoring System. All Rights Reserved.</Typography>
            </Box>
        </>
    );
}

export default App;
