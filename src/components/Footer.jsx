import "../css/Footer.css";
import ReseauSociaux from "./composants/ReseauSociaux";
import React, { useState, useEffect } from 'react';

function Footer() {
    // State pour gérer le mode clair/sombre
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effet pour appliquer la classe 'dark-mode' au body
  useEffect(() => {
    const iconElement = document.getElementById("icone_mode");

    if (isDarkMode) {
    document.body.classList.add('dark-mode');
    iconElement.classList.remove("fa-moon");
    iconElement.classList.add("fa-sun");
  } else {
    document.body.classList.remove('dark-mode');
    iconElement.classList.add("fa-moon");
    iconElement.classList.remove("fa-sun");
  }
  }, [isDarkMode]); // Le useEffect se déclenche à chaque changement du state


    return (
        <section className="section_footer">

            <img src="./assets/img/logo.png" alt="" />
            <div className="menu">
                <a href="#section_accueil">Accueil</a>
                <a href="#section_about">A propos</a>
                <a href="#section_competences">Compétences</a>
                <a href="#section_projets" >Projects</a>
                <a href="#section_contacts">Contacts</a>
            </div>
            <div className="div_footer">
                <div className="div_mode">
                    <a onClick={() => setIsDarkMode(prevMode => !prevMode)}>
                        <i id="icone_mode" className=" fa-solid"></i>
                    </a>
                </div>
                <ReseauSociaux />
                <div className="petit_text">
                    © 2025 Amdy Mustafa
                </div>
            </div>
        </section>
    );
}

export default Footer;
