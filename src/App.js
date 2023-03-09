import "./App.css";
import About from "./components/About";
//import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Contact />*/}
      <p className="text-center text-gray-500 mx-auto">
        &copy; JULIE MCBRIDE 2023
      </p>
    </div>
  );
}

export default App;
