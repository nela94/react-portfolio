import FirstSection from './components/FirstSection.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import ContactMe from './components/ContactMe.js'
import './App.css';

function App() {
  return (
    <div className="container">
      <section id="section1" className="main">
        <FirstSection></FirstSection>
        </section>
        <section id="section2" className="main">
        <AboutMe></AboutMe>
        </section>
        <section id="section3" className="main">
        <Projects></Projects>
        </section>
        <section id="section5" className="main">
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}

export default App;
