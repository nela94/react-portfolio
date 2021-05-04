import FirstSection from './components/FirstSection.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import ContactMe from './components/ContactMe.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="section1">
        <FirstSection></FirstSection>
        </section>
        <section id="section2">
        <AboutMe></AboutMe>
        </section>
        <section id="section3">
        <Projects></Projects>
        </section>
        <section id="section5">
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}

export default App;
