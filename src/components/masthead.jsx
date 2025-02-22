import "../css/masthead.css";
import React, { useEffect, useState } from 'react';
import ReseauSociaux from "./composants/ReseauSociaux";

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
    }, 50); // Ajustez cette valeur pour changer la vitesse d'affichage des lettres

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
      <ReseauSociaux/>
    </header>
  );
}

export default Masthead;
