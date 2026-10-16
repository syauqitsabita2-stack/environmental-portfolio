import React from 'react';
import StarfieldBackground from './components/StarfieldBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-[#2c67ed]/40 selection:text-blue-200">
      {/* Interactive Space Starfield & Cosmic Nebula Background */}
      <StarfieldBackground />

      {/* Floating Center Navbar with Blue Glow Effect */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section with Education, Experience, & Project Stats */}
        <About />

        {/* Portfolio Section with Projects, Certificates, & Tech Stack Tabs */}
        <Portfolio />

        {/* Contact Section with Form & Social Media */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
