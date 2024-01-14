import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import ProjectList from "./components/projects/ProjectList"
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <ProjectList/>
    </div>
  );
}

export default App;
