import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1B5E20", // Dark green
      light: "#4C8C4A",
      dark: "#003D00",
    },
    secondary: {
      main: "#2E7D32",
      light: "#60AD5E",
      dark: "#005005",
    },
    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B5E20",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#424242", // Gray
      light: "#6D6D6D",
      dark: "#1B1B1B",
    },
    secondary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
  },
});
