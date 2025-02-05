import "../css/Projets.css";
import React, { useState } from 'react';
import Modal from './Modal';

function Projets() {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
    setModalOpen(null);
  };
  // Les descriotion et les images des projets
  const projets = [
    [
      "Développement d'une calculatrice complète, implémentant les fonctionnalités de calcul basiques (addition, soustraction, multiplication, division) avec React et JavaScript. J’ai géré les entrées utilisateur et les résultats avec une logique claire et optimisée. Ce projet a renforcé mes compétences en gestion d’événements, en calculs en temps réel et en architecture d’application avec React et Redux.",
      "src/assets/projets-image/calculatrice.png"
    ],
    [
      "Conception d’une application React pour générer des citations aléatoires, intégrant une API externe pour récupérer les données en temps réel. La gestion de l’état a été réalisée via React Hooks, et l’interface utilisateur est optimisée pour une expérience fluide, avec une fonctionnalité de partage sur les réseaux sociaux via l'API de partage Web. Ce projet a permis de démontrer ma maîtrise des requêtes HTTP, de l’asynchronisme avec fetch, et de la gestion d’état dans React.",
      "src/assets/projets-image/citation.png"
    ],
    [
      "Création d’une machine à tambour interactive en utilisant React et la manipulation d’éléments HTML Audio. L’application réagit aux pressions des touches du clavier et affiche les animations correspondantes en temps réel. La gestion des événements clavier et l'optimisation de l'interface avec des animations CSS ont permis d’offrir une interaction rapide et fluide. Ce projet m’a permis d’explorer les manipulations des API Web Audio et la gestion des états complexes avec React.",
      "src/assets/projets-image/drum-machine.png"
    ],
    [
      "Création d’une application de minuteur avec React, offrant une gestion dynamique des sessions de travail et de pause. L’application utilise setInterval pour la gestion du temps, avec des transitions visuelles entre les sessions. L’interface a été soigneusement conçue pour garantir une ergonomie optimale, et les événements ont été gérés de manière efficace avec les Hooks React. Ce projet m’a permis de perfectionner ma gestion des timers et des interactions utilisateur en temps réel.",
      "src/assets/projets-image/horloge.png"
    ],
    [
      "Développement d'un éditeur Markdown avec React, permettant une conversion en temps réel de syntaxe markdown en HTML. L’utilisation de la librairie marked.js pour le rendu dynamique et l’intégration des événements onChange pour la synchronisation immédiate entre l’éditeur et le previewer a permis de créer une expérience utilisateur réactive. Ce projet a approfondi mes compétences en gestion d’interfaces dynamiques et en manipulation de données utilisateur.",
      "src/assets/projets-image/previsualisation.png"
    ]
  ];
  
  return (
    <section className="section_projet">
      <h2 >PORTFOLIO</h2>
      {/* Icon Divider*/}
      <div className="lines-star">
        <div className="line"></div>
        <div><i className="fas fa-star"></i></div>
        <div className="line"></div>
      </div>
      <div className="project-wrap">

        <Projet_div src={projets[0][1]} background="rgb(186,76,99)" onClick={() => openModal(1)} />

        <Projet_div src={projets[1][1]} background="rgb(31,164,182)" onClick={() => openModal(2)} />

        <Projet_div src={projets[2][1]} background="rgb(19,15,15)" onClick={() => openModal(3)} />

        <Projet_div src={projets[3][1]} background="rgb(29,131,193)" onClick={() => openModal(4)} />

        <Projet_div src={projets[4][1]} background="rgb(16,55,181)" onClick={() => openModal(5)} />

        {/*rgb(204,178,163)*/}

      </div>

      {modalOpen === 1 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Calculatrice"
          src={projets[0][1]}
          desciption={projets[0][0]}
        />
      }
      {modalOpen === 2 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Random Quote Machine"
          src={projets[1][1]}
          desciption={projets[1][0]}
        />
      }
      {modalOpen === 3 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Drum Machine"
          src={projets[2][1]}
          desciption={projets[2][0]}
        />
      }
      {modalOpen === 4 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="25 + 5 Clock"
          src={projets[3][1]}
          desciption={projets[3][0]}
        />
      }
      {modalOpen === 5 &&
        <Modal
          isOpen={true}
          onClose={closeModal}
          titre="Markdown Previewer"
          src={projets[4][1]}
          desciption={projets[4][0]}
        />
      }
    </section>
  );
}
function Projet_div({ src, background, onClick }) {
  return (
    <div className="projet_div" onClick={onClick}>
      <div className="projet_cadre" style={{ backgroundColor: background }}>
        <img className="immage_projet" src={src} alt="" />
      </div>
      <div className="projet_div_pointer">
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
}
export default Projets;

