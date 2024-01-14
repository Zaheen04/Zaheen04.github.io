import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import ProjectList from "./components/projects/ProjectList"
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills />
      <ProjectList/>
      <Contact />
    </div>
  );
}

export default App;
