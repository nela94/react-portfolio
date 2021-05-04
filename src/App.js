import FirstSection from './components/FirstSection.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import ContactMe from './components/ContactMe.js'
import NavBar from './components/NavBar.js'
import './App.css';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <section id="section1" className="main">
        <FirstSection/>
        </section>
        <section id="section2" className="main">
        <AboutMe/>
        </section>
        <section id="section3" className="main">
        <Projects/>
        </section>
        <section id="section4" className="main">
        <ContactMe/>
      </section>
    </div>
  );
}

export default App;
