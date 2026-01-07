import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import background from "./assets/img/bg.png"

export default function App() {
  return (
    <>
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>
      <Navbar />
      <Home />
      <Projects />

    </>
  );
}