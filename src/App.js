import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
