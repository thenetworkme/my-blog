import style from "./Content.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Alert } from "@mui/material";

export default function Content() {
  return (
    <div className={style.content}>
      <h4>{`> Conoce un poco más sobre mí `}</h4>
      <p className={style.p}>
        Hola, soy Ray Dev. No colocaré mi nombre completo en esta página por
        motivos de privacidad. He creado esta página web como parte del
        portafolio necesario para aplicar al equipo{" "}
        <span style={{ color: "rgb(194, 75, 75)", fontWeight: "600" }}>
          Apolo27
        </span>{" "}
        del{" "}
        <span
          style={{
            textTransform: "uppercase",
          }}
        >
          Instituto Tecnológico de Santo Domingo.
        </span>
      </p>
      <span className={style.span}>
        <Typewriter
          words={[`Tech enthusiastic!! (●'◡'●)`, "APOLOO27!!!"]}
          cursor
          loop={1}
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </span>
      <section></section>
      <Alert variant="filled" severity="error">
        Todos los proyectos fueron creados durante el periodo de aplicación al
        equipo de Apolo 27.
      </Alert>
    </div>
  );
}
