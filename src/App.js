import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font bg-black">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;

