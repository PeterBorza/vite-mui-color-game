import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: "#ffc800f8",
    },
    error: {
      main: red.A400,
    },
  },
});
