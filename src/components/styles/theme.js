import { createTheme } from "@mui/material/styles";

const dialogTheme = createTheme({
  palette: {
    background: {
      paper: "#373A40",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Fira Code", sans-serif',
  },
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default dialogTheme;
