import { Typewriter } from "react-simple-typewriter";
import NavBar from "../components/NavBar";
export default function Footer() {
  return (
    <footer>
      <div>
        @creado por RayDev A.K.A{" "}
        <span className="buggo">
          {" "}
          <Typewriter
            words={["BugNetwork"]}
            cursor
            loop={1}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
        ** Apolo27
      </div>
      <NavBar />
    </footer>
  );
}
