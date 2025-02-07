import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import MastHead from './components/mastHead';
import Projets from './components/Projets';
import About from './components/About';
import Competences from './components/Competences';
import Contacts from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [activeSection, setActiveSection] = useState('section_head');

  const [headRef, headInView] = useInView({ threshold: 0.6 });
  const [projetsRef, projetsInView] = useInView({ threshold: 0.6 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.6 });
  const [contactRef, contactInView] = useInView({ threshold: 0.6 });
  const { ref: topRef, inView: isAtTop } = useInView({ threshold: 0 });

  // Utilisez useEffect pour gérer les mises à jour d'état
  useEffect(() => {
    if (headInView) setActiveSection('section_head');
    if (projetsInView) setActiveSection('section_projets');
    if (aboutInView) setActiveSection('section_about');
    if (contactInView) setActiveSection('section_contacts');
  }, [headInView, projetsInView,aboutInView, contactInView]); // Déclenche useEffect uniquement lorsque ces valeurs changent

  return (
    <div>
      <div ref={topRef}></div> {/* Détection du haut de la page */}
      <Header activeSection={activeSection} isAtTop={isAtTop}/>
      <section id="section_head" ref={headRef}>
        <MastHead />
      </section>
      <section id="section_about" ref={aboutRef}>
        <About />
      </section>
      <section id="section_projets" ref={projetsRef}>
        <Projets />
      </section>
      <section>
        <Competences />
      </section>
      <section id="section_contacts" ref={contactRef}>
        <Contacts />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;