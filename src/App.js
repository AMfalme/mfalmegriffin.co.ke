import "./App.css";
import "./index.css";

import Hero from "./components/Hero";
import Work from "./pages/Work";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <h1>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </h1>
    </div>
  );
}

export default App;
