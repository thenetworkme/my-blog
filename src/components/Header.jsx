import style from "./Header.module.css";
import NavBar from "../components/NavBar";
import Warning from "./Warning";
import { useState } from "react";

export default function Header({ img }) {
  const [open, setOpen] = useState(false);

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
      <div className={style.modeContainer}>
        <img
          src="/images/brightness.png"
          className={style.lightMode}
          onClick={() => handleOpen()}
        />
      </div>
      <Warning open={open} handleClose={handleClose} />
    </header>
  );
}
//
