import style from "./Content.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Alert, Card } from "@mui/material";
import Cards from "./Cards";

export default function Content() {
  return (
    <div className={style.content}>
      <h4>{`> Conoce un poco más sobre mí `}</h4>
      <p className="pContent2">
        <p>
          <span>#</span> Me presento nuevamente, soy Rayner Rodríguez,
          estudiante de Ingeniería de Software. En esta página hablare un poco
          más sobre mi intentando no abordar los aspectos que ya he mencionado
          en el CV y en la carta. Comencé a introducirme de manera correcta en
          la ingeniería de software hace unos 2 o 3 años, a partir de ese
          momento he adquirido diversos conocimientos, desde Ciberseguridad y
          programación hasta conocimientos teóricos e históricos.
        </p>
        <p>
          <span>#</span> Aprendí diversos lenguajes de programación, empecé
          aprendiendo Java y adquirí conocimientos generales que podría aplicar,
          diría, en casi todos los demás lenguajes de programación.
        </p>{" "}
        <p>
          <span>#</span> A partir de allí, empecé con HTML, CSS, JS, luego un
          poco de diferentes cosas Bootstrap, NodeJS, etc. Entonces decidí
          aprender NodeJS junto con MongoDB, luego React. Estoy intentando
          seguir un orden cronológico, pero sería difícil ser exacto porque mis
          intereses varían mucho.
        </p>{" "}
        <p>
          <span>#</span> Luego de NodeJS, me gustó mucho el Backend, que de
          hecho siempre ha sido la parte del software en la que mas me gusta
          participar, entonces decidí aprender Python y luego FastAPI, y realicé
          algunos proyectos simples. Aunque debo aclarar que no es en lo que
          mejor nivel tengo.
        </p>{" "}
        <p>
          <span>#</span> En el colegio también me enseñaron algunas cosas de
          manera superficial, pero fue entretenido. Aprendí un poco de C# y
          realicé algunos proyectos básicos como un ahorcado, puzzle,
          calculadora, etc, aprendí base de datos MySQL utilizando MariaDB,
          entre unas pocas cosas más.
        </p>{" "}
        <p>
          <span>#</span> En resumen, diría que estoy interesando en
          absolutamente todo el campo de la tecnología: ciberseguridad y redes.
          programación, robótica, entre otras y que planeo aprenderlas cada una
          tarde o temprano, pues nunca se termina de aprender en esta área.
          Además, poseo conocimientos generales acerca de muchas cosas que estoy
          seguro serán útiles para el equipo y el puesto al que estoy aspirando.
          (●’◡’●)
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
      <section className="cardWrapper">
        <Cards
          title={"Quiz científico"}
          text={
            "App React creada para entretener a las personas interesadas por la ciencia. Debes probarte a ti mismo adivinando la frase dicha por tu científico preferido."
          }
          textButton={"Ver más"}
          link={""}
        />
        <Cards
          title={"Ciencias frases"}
          text={
            "Simple API para obtener frases de ciencias dichas por los grandes científicos de la historia de la humanidad. (Utilizada para el Quiz científico). API Desplegada en Render."
          }
          textButton={"Ver más"}
          link={"https://cienciafrases.onrender.com/"}
        />
      </section>
      <section className="infoContent2">
        <Alert variant="filled" severity="error">
          La API fue desplegada con el plan gratuito de Render, por lo que
          podría presentar una latencia muy alta y tomar más tiempo para cargar.
        </Alert>

        <Alert variant="filled" severity="warning">
          Todos los proyectos fueron creados durante el periodo de aplicación al
          equipo de Apolo 27, incluyendo esta página.
        </Alert>
      </section>
    </div>
  );
}
