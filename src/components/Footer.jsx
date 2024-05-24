import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  return (
    <footer>
      @creado por RayDev A.K.A{" "}
      <span className="buggo">
        {" "}
        <Typewriter
          words={["BugNetwork"]}
          cursor
          loop={2}
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </span>
      ** Apolo27
    </footer>
  );
}
