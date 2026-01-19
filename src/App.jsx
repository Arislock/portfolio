import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Goodreads } from "./components/sections/Goodreads/Goodreads";
import { Misc } from "./components/sections/Misc/Misc";
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



    <BrowserRouter basename="/portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="case-study" element={<Goodreads />} />
        <Route path="misc" element={<Misc />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}