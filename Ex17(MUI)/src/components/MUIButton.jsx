import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function MUIButton() {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">Kaydol</Button>
        <Button disabled>Kaydol</Button>
        <Button variant="outlined">Kaydol</Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button
          size="small"
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
        >
          Geri don
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
