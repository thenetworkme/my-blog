import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      {" "}
      <nav>
        <ul className={style.ul}>
          <li className={style.li}>
            <NavLink to="/" className={style.a}>
              Home
            </NavLink>
            <NavLink to="/sobre-mi" className={style.a}>
              Sobre mi
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
