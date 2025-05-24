import style from "./Header.module.css";
import NavBar from "../components/NavBar";
import Warning from "./Warning";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Header({ img }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={style.header}>
      <span className={style.mouseOverText}>mouse over</span>
      <div className={style.nav}>
        <img src={img} className={style.logo} />
        <div>
          <h4 className={style.title}>RayDev</h4>
          <NavBar />
        </div>
      </div>
      <div className={style.modeContainer} onClick={toggleTheme}>
        {theme === 'light' ? (
          <Brightness4Icon className={style.lightMode} />
        ) : (
          <Brightness7Icon className={style.lightMode} />
        )}
      </div>
      <Warning open={open} handleClose={handleClose} />
    </header>
  );
}
//
