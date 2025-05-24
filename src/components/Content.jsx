import style from './Content.module.css';
import { Typewriter } from 'react-simple-typewriter';
import Posts from './Posts';
import { FaReact, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiVercel, SiMaterialui } from 'react-icons/si';

export default function Content() {
  return (
    <div className={style.content}>
      <h4>{`> Hello World!!`}</h4>
      <p className={style.p}>
        Hola, soy Rayner Rodríguez.{' '}
        <b> (Podrán ver toda mi información en el CV)</b>. He creado esta página
        web como parte del portafolio necesario para aplicar al equipo{' '}
        <span style={{ color: 'rgb(194, 75, 75)', fontWeight: '600' }}>
          Apolo27
        </span>{' '}
        del{' '}
        <span
          style={{
            textTransform: 'uppercase',
          }}
        >
          Instituto Tecnológico de Santo Domingo.
        </span>
      </p>
      <span className={style.span}>
        <Typewriter
          words={[`Tech enthusiastic!! (●'◡'●)`, 'APOLOO27!!!']}
          cursor
          loop={1}
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </span>
      <Posts />
      <section className={style.techInfo}>
        <h4>Tecnologías utilizadas en esta página</h4>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="https://react.dev/" className={style.a}>
              <FaReact size={20} />
              React
            </a>
            : Biblioteca JS para construir interfaces de usuario.
          </li>
          <li className={style.li}>
            <a href="https://git-scm.com/" className={style.a}>
              <FaGitAlt size={20} />
              Git
            </a>
            : Software de control de versiones.
          </li>
          <li className={style.li}>
            <a
              href="https://vercel.com/bugnetworks-projects"
              className={style.a}
            >
              <SiVercel size={20} />
              Vercel
            </a>
            : Plataforma en la nube para desplegar sitios web estáticos.
          </li>
          <li className={style.li}>
            <a href="https://www.npmjs.com/" className={style.a}>
              <FaNpm size={20} />
              npm
            </a>
            : Gestor de paquetes oficial del framework de código abierto
            Node.js.
          </li>
          <li className={style.li}>
            <a href="https://mui.com/" className={style.a}>
              <SiMaterialui size={20} />
              Material UI
            </a>
            : Biblioteca de componentes de interfaz de usuario para React.
          </li>
        </ul>
      </section>
    </div>
  );
}
