import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import MastHead from './components/mastHead';
import Projets from './components/Projets';

function App() {
  const [activeSection, setActiveSection] = useState('section_head');

  const [headRef, headInView] = useInView({ threshold: 0.6 });
  const [projetsRef, projetsInView] = useInView({ threshold: 0.6 });
  const [contactRef, contactInView] = useInView({ threshold: 0.6 });

  // Utilisez useEffect pour gérer les mises à jour d'état
  useEffect(() => {
    if (headInView) setActiveSection('section_head');
    if (projetsInView) setActiveSection('section_projets');
    if (contactInView) setActiveSection('contact');
  }, [headInView, projetsInView, contactInView]); // Déclenche useEffect uniquement lorsque ces valeurs changent

  return (
    <div>
      <Header activeSection={activeSection} />
      <section id="section_head" ref={headRef}>
        <MastHead />
      </section>
      <section id="section_projets" ref={projetsRef}>
        <Projets />
      </section>
      <section id="contact" ref={contactRef}>
        {/* Ajoutez votre composant Contact ici */}
      </section>
    </div>
  );
}

export default App;