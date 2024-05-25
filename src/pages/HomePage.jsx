import Building from "../components/Building";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <main>
      <Header img={"/images/logo2.png"} />

      <Content />

      <Building img={"/images/wait.png"} />
      <Footer />
    </main>
  );
}
