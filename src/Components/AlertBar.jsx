import { Alert, AlertTitle, Box } from "@mui/material";
import React from "react";

function AlertBar(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 500,
          top: "10vh",
          right: "2vhvw",
          transition: "ease-out 0.5s",
        }}
      >
        <Alert severity="success" sx={{ width: 400, borderRadius: "10px" }}>
          {props.text}
          <strong>{props.work} </strong>
        </Alert>
      </Box>
    </>
  );
}

export default AlertBar;
