import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.nav}>
        <img src="/images/logo2.png" className={style.logo} />
        <div>
          <h4 className={style.title}>RayDev</h4>
          <nav>
            <ul className={style.ul}>
              <li className={style.li}>
                <NavLink to="/" className={style.a}>
                  Home
                </NavLink>
                <NavLink to="/sobre" className={style.a}>
                  Sobre mi
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={style.modeContainer}>
        <img src="/images/brightness.png" className={style.lightMode} />
      </div>
    </header>
  );
}
