import style from "./Content.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Alert } from "@mui/material";

export default function Content() {
  return (
    <div className={style.content}>
      <h4>{`> Conoce un poco más sobre mí `}</h4>
      <p className="pContent2">
        <p>
          Me presento nuevamente, soy Rayner Rodríguez, estudiante de Ingeniería
          de Software. En esta página hablare un poco más sobre mi intentando no
          abordar los aspectos que ya he mencionado en el CV y en la carta.
          Comencé a introducirme de manera correcta en la ingeniería de software
          hace unos 2 o 3 años, a partir de ese momento he adquirido diversos
          conocimientos, desde Ciberseguridad y programación hasta conocimientos
          teóricos e históricos.
        </p>
        <p>
          Aprendí diversos lenguajes de programación, empecé aprendiendo Java y
          adquirí conocimientos generales que podría aplicar, diría, en casi
          todos los demás lenguajes de programación.
        </p>{" "}
        <p>
          {" "}
          A partir de allí, empecé con HTML, CSS, JS, luego un poco de
          diferentes cosas Bootstrap, NodeJS, etc. Entonces decidí aprender
          NodeJS junto con MongoDB, luego React. Estoy intentando seguir un
          orden cronológico, pero sería difícil ser exacto porque mis intereses
          varían mucho.
        </p>{" "}
        <p>
          {" "}
          Luego de NodeJS, me gustó mucho el Backend, que de hecho siempre ha
          sido la parte del software en la que mas me gusta participar, entonces
          decidí aprender Python y luego FastAPI, y realicé algunos proyectos
          simples. Aunque debo aclarar que no es en lo que mejor nivel tengo.
        </p>{" "}
        <p>
          {" "}
          En el colegio también me enseñaron algunas cosas de manera
          superficial, pero fue entretenido. Aprendí un poco de C# y realicé
          algunos proyectos básicos como un ahorcado, puzzle, calculadora, etc,
          aprendí base de datos MySQL utilizando MariaDB, entre unas pocas cosas
          más.
        </p>{" "}
        <p>
          {" "}
          En resumen, diría que estoy interesando en absolutamente todo el campo
          de la tecnología: ciberseguridad y redes. programación, robótica,
          entre otras y que planeo aprenderlas cada una tarde o temprano, pues
          nunca se termina de aprender en esta área. Además, poseo conocimientos
          generales acerca de muchas cosas que estoy seguro serán útiles para el
          equipo y el puesto al que estoy aspirando. (●’◡’●)
        </p>
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
      <section className="infoContent2">
        {" "}
        <Alert variant="filled" severity="error">
          Todos los proyectos fueron creados durante el periodo de aplicación al
          equipo de Apolo 27.
        </Alert>
      </section>
    </div>
  );
}
