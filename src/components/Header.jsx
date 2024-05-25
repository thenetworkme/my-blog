import style from "./Header.module.css";
import NavBar from "../components/NavBar";

export default function Header({ img }) {
  return (
    <header className={style.header}>
      <div className={style.nav}>
        <img src={img} className={style.logo} />
        <div>
          <h4 className={style.title}>RayDev</h4>
          <NavBar />
        </div>
      </div>
      <div className={style.modeContainer}>
        <img src="/images/brightness.png" className={style.lightMode} />
      </div>
    </header>
  );
}
