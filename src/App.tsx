import React from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Background particle animation */}
      <ParticleCanvas />

      {/* Navigation dots */}
      <Navigation />

      {/* Main sections */}
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
