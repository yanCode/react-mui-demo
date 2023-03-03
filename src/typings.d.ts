import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';


declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    shifu: {main: string};
  }

  interface PaletteOptions extends MuiPaletteOptions {
    shifu?: {main: string};
  }
}