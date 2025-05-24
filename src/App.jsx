import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AboutMe from "./pages/AboutMe";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
