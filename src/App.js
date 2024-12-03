import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import AboutMe from './About_me';
import Main from './Main';
import Skills from './Skills';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main id="mainy" />
      <AboutMe id="aboutMey" />
      <Skills id="skills" />
      <Projects id="project" />
      <Footer />
    </div>
  );
}

export default App;
