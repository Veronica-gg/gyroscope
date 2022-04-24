import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function FilledTextFields(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            // required
            id={props.id}
            className={props.className}
            label="Write here"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
}
