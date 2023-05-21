import "./App.css";
import "./index.css";

import Hero from "./components/Hero";
import Work from "./pages/Work";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


import { useEffect, useState } from "react";

function App() {

  
  return (
      <div className="App dark:bg-slate-800">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
