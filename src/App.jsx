import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import MastHead from './components/mastHead';
import Projets from './components/Projets';
import Contacts from './components/Contact';

function App() {
  const isAtTop = useScrollDetection();
  
  const [activeSection, setActiveSection] = useState('section_head');

  const [headRef, headInView] = useInView({ threshold: 0.6 });
  const [projetsRef, projetsInView] = useInView({ threshold: 0.6 });
  const [contactRef, contactInView] = useInView({ threshold: 0.6 });

  // Utilisez useEffect pour gérer les mises à jour d'état
  useEffect(() => {
    if (headInView) setActiveSection('section_head');
    if (projetsInView) setActiveSection('section_projets');
    if (contactInView) setActiveSection('section_contacts');
  }, [headInView, projetsInView, contactInView]); // Déclenche useEffect uniquement lorsque ces valeurs changent

  return (
    <div>
      <Header activeSection={activeSection} isAtTop={isAtTop}/>
      <section id="section_head" ref={headRef}>
        <MastHead />
      </section>
      <section id="section_projets" ref={projetsRef}>
        <Projets />
      </section>
      <section id="section_contacts" ref={contactRef}>
        <Contacts />
      </section>
    </div>
  );
}
function useScrollDetection() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // Vérifie si l'utilisateur est en haut de la page
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtTop;
}

export default App;