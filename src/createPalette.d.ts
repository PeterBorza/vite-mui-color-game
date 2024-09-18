import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    amber?: PaletteColorOptions;
    red?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    green?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    lightGreen?: PaletteColorOptions;
    lightBlue?: PaletteColorOptions;
  }
  interface Palette {
    amber: PaletteColor;
    red: PaletteColor;
    blue: PaletteColor;
    green: PaletteColor;
    orange: PaletteColor;
    lightgreen: PaletteColor;
    lightBlue: PaletteColor;
  }
}
