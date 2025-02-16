import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const AlertNotification = ({ message, severity, open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
