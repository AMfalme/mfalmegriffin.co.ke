import './App.css';
import "./index.css"

import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <h1>
        <Hero/>
        <About/>
        <Work/>
        <Projects/>
      </h1>
    </div>
  );
}

export default App;
