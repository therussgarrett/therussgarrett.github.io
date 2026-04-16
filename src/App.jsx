import { useState } from 'react';
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import About from '../src/components/About'
import Projects from '../src/components/Projects'
import Services from '../src/components/Services'
import Contact from '../src/components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <Header />
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="bg-slate-950" style={{paddingBottom: '1rem',}}>

        {activeSection === 'about' && (
          <About setActiveSection={setActiveSection} />
        )}
        {activeSection === 'projects' && (
          <Projects setActiveSection={setActiveSection} />
        )}

        {activeSection === 'services' && (
          <Services setActiveSection={setActiveSection} />
        )}

        {activeSection === 'contact' && (
          <Contact setActiveSection={setActiveSection} />
        )}

      </main>
      <Footer />
    </>

)}

export default App;
