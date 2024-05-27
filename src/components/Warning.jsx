import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import dialogTheme from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

export default function Warning({ open, handleClose }) {
  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"⚠️ Modo oscuro en construcción…"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            🚀 ¡El modo oscuro aún no ha sido desplegado!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
