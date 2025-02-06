import "../css/masthead.css";
import React, { useEffect, useState } from 'react';

function Masthead() {
  const [text, setText] = useState(["", "", ""]);
  const [cursorVisible, setCursorVisible] = useState(false); // Gérer l'état du curseur
  const messages = [
    "Hello !",
    "Je suis Amdy Mustafa",
    "Développeur Front-End"
  ];

  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      if (currentMessageIndex < messages.length) {
        setText(prev => {
          const updatedText = [...prev];
          // Afficher les caractères un par un
          if (messages[currentMessageIndex]) {
            updatedText[currentMessageIndex] = messages[currentMessageIndex].slice(0, currentCharIndex + 1);
          }
          return updatedText;
        });
        currentCharIndex += 1;

        // Si on atteint la fin d'un message, passer au suivant
        if (currentCharIndex === messages[currentMessageIndex].length) {
          currentMessageIndex += 1;
          currentCharIndex = 0;
        }
      } else {
        // Une fois tous les messages affichés, afficher le curseur uniquement sur le dernier
        setCursorVisible(true);
        clearInterval(interval);
      }
    }, 150); // Ajustez cette valeur pour changer la vitesse d'affichage des lettres

    return () => clearInterval(interval); // Nettoyer l'intervalle à la fin
  }, []);

  return (
    <header className="masthead">
      <div className="presentation">
        {text.map((line, index) => (
          <p
            key={index}
            className={index >= text.length - 2 ? 'grandtext' : ''}
          >
            {line}
            {cursorVisible && index === text.length - 1 && <span className="cursor">|</span>}
          </p>
        ))}
      </div>

      {/* Footer Social Icons */}
      <div className="div_reseau">
        <div className="div_patager">
          <a href="https://www.linkedin.com/in/amdy-mustafa/" className="icone_a" target="_blank" title="Me retrouver sur LinkedIn">
            <i className="icone_i fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/AmdyMustafa" className="icone_a" target="_blank" title="Me retrouver sur github">
            <i className="icone_i fab fa-github"></i>
          </a>
        </div>
        <div className="div_patager">
          <a href="mailto:amoustapha.niang@example.com" className="icone_a" target="_blank" title="Me contacter par mail">
            <i className="icone_i fa fa-envelope"></i>
          </a>
          <a href="" className="icone_a" target="_blank" title="Télécharger mon CV">
            <i className="icone_i fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
