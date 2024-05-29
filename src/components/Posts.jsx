import { Link } from "react-router-dom";
import AboutMe from "../pages/AboutMe";

export default function Posts() {
  const getMonth = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const date = new Date();
  const day = date.getDate();
  const actualMonth = date.getMonth();
  const month = getMonth[actualMonth];
  const year = date.getFullYear();
  const today = `${day} ${month} ${year}`;
  return (
    <div className="posts">
      <h4>Posts</h4>
      <div className="post">
        <span className="today">
          {" "}
          {today} {"->"}{" "}
        </span>
        <Link to={"/sobre-mi"} className="noLink">
          {" "}
          Sobre mi
        </Link>
      </div>
    </div>
  );
}
