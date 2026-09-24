import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import GitHub from './components/GitHub';
import LinkedIn from './components/LinkedIn';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        {/*Projects section */}
        <Projects />
        <Certificates />
        <Achievements />
        <GitHub />
        <LinkedIn />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
