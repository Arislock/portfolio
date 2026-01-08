import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import background from "./assets/img/bg.png"

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  
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

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className="pt-16">
        {activeTab === "home" && <Home />}
        {activeTab === "projects" && <Projects />}
      </main>
 
    </>
  );
}