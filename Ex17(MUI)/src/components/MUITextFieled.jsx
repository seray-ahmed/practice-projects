import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function MUITextFieled() {
  return (
    <div>
      <div>
        <TextField label="isim" variant="outlined" />{" "}
      </div>
      <div>
        <TextField
          InputProps={{ readOnly: true }}
          value="Seyava"
          disabled
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="BlaBla"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export default MUITextFieled;
