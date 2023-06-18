import { Button } from "@mui/material";
import React from "react";

function ButtonMui(props) {
  return (
    <>
      <Button
        startIcon={props.startIcon}
        variant="contained"
        size="medium"
        sx={{
          bgcolor: "#ffda69",
          color: "#131921",
          ":hover": {
            backgroundColor: "#232f3e",
            color: "#ffda69",
          },
        }}
      >
        {props.text}
      </Button>
    </>
  );
}

export default ButtonMui;
