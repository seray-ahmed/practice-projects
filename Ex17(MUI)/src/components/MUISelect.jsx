import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function MUISelect() {
  const [currency, setCurrency] = useState("");

  return (
    <div>
      <FormControl sx={{ width: "150px" }}>
        <InputLabel>Para birimi</InputLabel>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <MenuItem value="TRY">Turk lirasi</MenuItem>
          <MenuItem value="USD">Dolar</MenuItem>
          <MenuItem value="EUR">Euro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default MUISelect;
