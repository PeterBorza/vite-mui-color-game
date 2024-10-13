import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: grey[600],
    },
    secondary: {
      main: "#ffc800f8",
    },
    error: {
      main: red.A400,
    },
    // amber: {
    //   main: amber.A700,
    // },
    // red: {
    //   main: red.A700,
    // },
    // blue: {
    //   main: blue.A700,
    // },
    // green: {
    //   main: green[700],
    // },
    // lightGreen: {
    //   main: lightGreen.A200,
    // },
    // lightBlue: {
    //   main: lightBlue.A200,
    // },
  },
});
